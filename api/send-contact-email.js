/* global process */

import nodemailer from 'nodemailer';

// Helper function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Contact form handler with professional routing
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
    console.log('📧 [CONTACT] Received contact form email request with routing');
    
    // Environment variables check
    const emailPassword = process.env.EMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
    
    if (!process.env.EMAIL_USER || !emailPassword) {
      console.error('❌ [CONTACT] Missing email credentials!');
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
      console.log('✅ [CONTACT] Email server connection verified!');
    } catch (verifyError) {
      console.error('❌ [CONTACT] Email server verification failed:', verifyError.message);
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
    const emailType = customerData?.formType || 'contact';
    const formSource = customerData?.formSource || 'unknown';
    
    // CONTACT ROUTING LOGIC: Route company emails to both Lucas and 2mmanitasmadrid
    let actualRecipients;
    if (isConfirmation) {
      // Customer confirmations go only to customer
      actualRecipients = [to];
    } else {
      // Company contact emails go to both Lucas and 2mmanitasmadrid
      actualRecipients = ['lucasurrutia21@gmail.com', '2mmanitasmadrid@gmail.com'];
    }

    console.log('📧 [CONTACT] Email routing:', {
      originalTo: to,
      actualRecipients: actualRecipients,
      isConfirmation: isConfirmation,
      emailType: emailType,
      formSource: formSource
    });

    // Prepare email options
    const mailOptions = {
      from: {
        name: isConfirmation ? 'Kalia Reformas y Decoración' : `Formulario ${formSource} - Kalia`,
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
        'X-Mailer': 'Kalia Contact Forms',
        'X-Customer': customerData?.nombre || 'Unknown',
        'X-Form-Type': emailType,
        'X-Form-Source': formSource,
        'X-Original-To': to,
        'X-Routed-To': actualRecipients.join(', ')
      },

      // Reply-to handling
      replyTo: !isConfirmation && customerData?.email 
        ? customerData.email 
        : 'info@kaliareformas.com',

      // Message ID for tracking
      messageId: `contact-${formSource}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}@kaliareformas.com`
    };

    console.log('📧 [CONTACT] Sending contact form email with routing...');
    
    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ [CONTACT] Email sent successfully with routing!');
    console.log('📧 [CONTACT] Message ID:', info.messageId);

    // Log contact form details
    console.log('📝 [CONTACT] Contact form sent:', {
      formSource,
      customer: customerData?.nombre || 'Unknown',
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
        : 'Formulario de contacto enviado correctamente',
      timestamp: new Date().toISOString(),
      emailType: emailType,
      isConfirmation: isConfirmation
    });

  } catch (error) {
    console.error('❌ [CONTACT] Email sending error:', error);

    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor al procesar formulario de contacto',
      code: 'CONTACT_FORM_ERROR',
      debug: {
        errorMessage: error.message,
        timestamp: new Date().toISOString()
      }
    });
  }
}