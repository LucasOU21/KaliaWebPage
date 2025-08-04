/* global process */

import nodemailer from 'nodemailer';

// Helper function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Calculator handler with professional routing
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
      code: 'METHOD_NOT_ALLOWED'
    });
  }

  try {
    console.log('📧 [CALCULATOR] Received calculator email request with routing');
    
    // Environment variables check
    const emailPassword = process.env.EMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
    
    if (!process.env.EMAIL_USER || !emailPassword) {
      console.error('❌ [CALCULATOR] Missing email credentials!');
      return res.status(500).json({
        success: false,
        error: 'Missing email credentials in environment variables',
        code: 'CONFIG_ERROR'
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: emailPassword
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify connection
    try {
      await transporter.verify();
      console.log('✅ [CALCULATOR] Email server connection verified!');
    } catch (verifyError) {
      console.error('❌ [CALCULATOR] Email server verification failed:', verifyError.message);
      return res.status(401).json({
        success: false,
        error: 'Error de autenticación del email',
        code: 'AUTH_ERROR'
      });
    }

    const { to, subject, html, text, customerData, priority } = req.body;

    // Validate required fields
    if (!to || !subject || !html) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: to, subject, html',
        code: 'MISSING_FIELDS'
      });
    }

    const isConfirmation = customerData?.isConfirmation || false;
    const emailType = customerData?.formType || 'calculator';
    
    // CALCULATOR ROUTING LOGIC: Route company emails to both Lucas and 2mmanitasmadrid
    let actualRecipients;
    if (isConfirmation) {
      // Customer confirmations go only to customer
      actualRecipients = [to];
    } else {
      // Company calculator emails go to both Lucas and 2mmanitasmadrid
      actualRecipients = ['lucasurrutia21@gmail.com', '2mmanitasmadrid@gmail.com'];
    }

    console.log('📧 [CALCULATOR] Email routing:', {
      originalTo: to,
      actualRecipients: actualRecipients,
      isConfirmation: isConfirmation,
      emailType: emailType,
      totalPrice: customerData?.totalPrice,
      instalationType: customerData?.instalationType
    });

    // Prepare email options
    const mailOptions = {
      from: {
        name: isConfirmation ? 'Kalia Reformas y Decoración' : 'Calculadora Kalia Reformas',
        address: 'info@kaliareformas.com'  // Always show professional address
      },
      to: actualRecipients[0],  // Primary recipient
      cc: actualRecipients.length > 1 ? actualRecipients.slice(1) : undefined,  // Additional recipients
      subject: subject,
      html: html,
      text: text || 'Este email requiere un cliente que soporte HTML.',
      
      // Email headers
      headers: {
        'X-Priority': priority === 'high' ? '1' : '3',
        'X-Mailer': 'Kalia Calculator System',
        'X-Customer': customerData?.nombre || 'Unknown',
        'X-Form-Type': emailType,
        'X-Total-Price': customerData?.totalPrice || 0,
        'X-Installation-Type': customerData?.instalationType || 'unknown',
        'X-Original-To': to,
        'X-Routed-To': actualRecipients.join(', ')
      },

      // Reply-to handling
      replyTo: !isConfirmation && customerData?.email 
        ? customerData.email 
        : 'info@kaliareformas.com',

      // Message ID for tracking
      messageId: `calculator-${Date.now()}-${Math.random().toString(36).substr(2, 9)}@kaliareformas.com`
    };

    console.log('📧 [CALCULATOR] Sending calculator email with routing...');
    
    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ [CALCULATOR] Email sent successfully with routing!');
    console.log('📧 [CALCULATOR] Message ID:', info.messageId);

    // Log calculator details
    console.log('💰 [CALCULATOR] Calculator email sent:', {
      customer: customerData?.nombre || 'Unknown',
      totalPrice: customerData?.totalPrice,
      instalationType: customerData?.instalationType,
      productCount: customerData?.productCount,
      isConfirmation,
      routedTo: actualRecipients.join(', '),
      timestamp: new Date().toISOString()
    });

    // Success response (don't reveal internal routing)
    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      message: isConfirmation 
        ? 'Email de confirmación enviado correctamente' 
        : 'Email de calculadora enviado correctamente',
      timestamp: new Date().toISOString(),
      emailType: emailType,
      isConfirmation: isConfirmation
    });

  } catch (error) {
    console.error('❌ [CALCULATOR] Email sending error:', error);

    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor al procesar calculadora',
      code: 'CALCULATOR_ERROR',
      debug: {
        errorMessage: error.message,
        timestamp: new Date().toISOString()
      }
    });
  }
}