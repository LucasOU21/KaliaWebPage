/* global process */

import nodemailer from 'nodemailer';

// Helper function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// DEBUG VERSION - Main serverless function for contact emails
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
    console.log('📧 [DEBUG] Received contact form email request');
    console.log('📧 [DEBUG] Request body keys:', Object.keys(req.body || {}));
    
    // DEBUG: Log the request body structure
    const { to, subject, html, text, customerData, priority } = req.body;
    console.log('📧 [DEBUG] Extracted fields:', {
      hasTo: !!to,
      hasSubject: !!subject,
      hasHtml: !!html,
      hasText: !!text,
      hasCustomerData: !!customerData,
      customerDataKeys: customerData ? Object.keys(customerData) : 'none'
    });

    // Validate required fields FIRST
    if (!to || !subject || !html) {
      console.error('❌ [DEBUG] Missing required fields');
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: to, subject, html',
        code: 'MISSING_FIELDS',
        debug: {
          hasTo: !!to,
          hasSubject: !!subject,
          hasHtml: !!html
        }
      });
    }

    // Validate email format
    if (!isValidEmail(to)) {
      console.error('❌ [DEBUG] Invalid email format:', to);
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
        code: 'INVALID_EMAIL'
      });
    }

    console.log('✅ [DEBUG] Basic validation passed');

    // Try both possible environment variable names
    const emailPassword = process.env.EMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
    
    console.log('🔍 [DEBUG] Environment Variables Check:');
    console.log('  - EMAIL_USER exists:', !!process.env.EMAIL_USER);
    console.log('  - EMAIL_USER value:', process.env.EMAIL_USER ? 'SET' : 'NOT SET');
    console.log('  - Password exists:', !!emailPassword);
    console.log('  - Password length:', emailPassword ? emailPassword.length : 0);
    
    if (!process.env.EMAIL_USER || !emailPassword) {
      console.error('❌ [DEBUG] Missing email credentials!');
      return res.status(500).json({
        success: false,
        error: 'Missing email credentials in environment variables',
        code: 'CONFIG_ERROR',
        debug: {
          emailUserExists: !!process.env.EMAIL_USER,
          passwordExists: !!emailPassword
        }
      });
    }

    console.log('✅ [DEBUG] Environment variables found');

    // Create transporter - FIXED: Changed createTransporter to createTransport
    console.log('🔍 [DEBUG] Creating email transporter...');
    const transporter = nodemailer.createTransport({  // ✅ FIXED: Removed 'r'
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: emailPassword
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Test connection
    console.log('🔍 [DEBUG] Testing email connection...');
    try {
      await transporter.verify();
      console.log('✅ [DEBUG] Email server connection verified!');
    } catch (verifyError) {
      console.error('❌ [DEBUG] Email server verification failed:', verifyError.message);
      
      return res.status(401).json({
        success: false,
        error: 'Error de autenticación del email para formularios de contacto',
        code: 'AUTH_ERROR',
        debug: {
          errorMessage: verifyError.message,
          errorCode: verifyError.code,
          errorStack: verifyError.stack?.substring(0, 200)
        }
      });
    }

    // Process email data
    console.log('🔍 [DEBUG] Processing email data...');
    const formType = customerData?.formType || 'contact';
    const formSource = customerData?.formSource || 'unknown';
    const isConfirmation = customerData?.isConfirmation || false;
    
    console.log('📧 [DEBUG] Email details:', {
      formType,
      formSource,
      isConfirmation,
      to,
      subject: subject.substring(0, 50) + '...'
    });

    // Prepare simplified mail options
    const mailOptions = {
      from: {
        name: isConfirmation ? 'Kalia Reformas y Decoración' : `Formulario ${formSource} - Kalia`,
        address: process.env.EMAIL_USER
      },
      to: to,
      subject: subject,
      html: html,
      text: text || 'Este email requiere un cliente que soporte HTML.',
      
      // Simplified headers
      headers: {
        'X-Priority': priority === 'high' ? '1' : '3',
        'X-Mailer': 'Kalia Contact Forms DEBUG',
        'X-Form-Source': formSource
      },

      // Reply-to
      replyTo: !isConfirmation && customerData?.email ? customerData.email : process.env.EMAIL_USER,

      // Simple message ID
      messageId: `contact-debug-${Date.now()}@kaliareformas.com`
    };

    console.log('📧 [DEBUG] Attempting to send email...');
    console.log('📧 [DEBUG] Mail options summary:', {
      from: mailOptions.from.name,
      to: mailOptions.to,
      subject: mailOptions.subject.substring(0, 50) + '...',
      hasHtml: !!mailOptions.html,
      hasText: !!mailOptions.text
    });

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ [DEBUG] Email sent successfully!');
    console.log('📧 [DEBUG] Send result:', {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected
    });

    // Return success response
    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      message: isConfirmation 
        ? 'Email de confirmación enviado correctamente al cliente' 
        : 'Formulario de contacto enviado correctamente a Kalia',
      timestamp: new Date().toISOString(),
      debug: {
        formType,
        formSource,
        isConfirmation,
        emailSent: true
      }
    });

  } catch (error) {
    console.error('❌ [DEBUG] Unexpected error in contact form handler:', error);
    console.error('❌ [DEBUG] Error details:', {
      message: error.message,
      code: error.code,
      stack: error.stack?.substring(0, 500)
    });

    // Return detailed error for debugging  
    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor al procesar formulario de contacto',
      code: 'CONTACT_FORM_ERROR',
      debug: {
        errorMessage: error.message,
        errorCode: error.code,
        timestamp: new Date().toISOString(),
        endpoint: 'send-contact-email-debug',
        requestBody: req.body ? {
          hasTo: !!req.body.to,
          hasSubject: !!req.body.subject,
          hasHtml: !!req.body.html,
          customerName: req.body.customerData?.nombre || 'Unknown'
        } : 'No request body'
      }
    });
  }
}