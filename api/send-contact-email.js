/* global process */

import nodemailer from 'nodemailer';

// Helper function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Main serverless function for contact emails
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
    console.log('📧 Received contact form email request');
    
    // Try both possible environment variable names
    const emailPassword = process.env.EMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
    
    console.log('🔍 Contact Form Environment Variables:');
    console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
    console.log('EMAIL_USER value:', process.env.EMAIL_USER);
    console.log('Password exists:', !!emailPassword);
    console.log('Password length:', emailPassword ? emailPassword.length : 0);
    
    if (!process.env.EMAIL_USER || !emailPassword) {
      console.error('❌ Missing email credentials for contact forms!');
      return res.status(500).json({
        success: false,
        error: 'Missing email credentials in environment variables',
        code: 'CONFIG_ERROR'
      });
    }

    // TEST EMAIL CONNECTION FIRST
    console.log('🔍 Testing contact form email connection...');
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: emailPassword
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    try {
      console.log('🔍 Attempting to verify contact form email connection...');
      await transporter.verify();
      console.log('✅ Contact form email server connection verified successfully!');
    } catch (verifyError) {
      console.error('❌ Contact form email server verification failed:', verifyError.message);
      
      return res.status(401).json({
        success: false,
        error: 'Error de autenticación del email para formularios de contacto',
        code: 'AUTH_ERROR',
        debug: {
          errorMessage: verifyError.message,
          emailUser: process.env.EMAIL_USER ? 'SET' : 'NOT SET',
          passwordLength: emailPassword ? emailPassword.length : 0
        }
      });
    }

    console.log('🎉 Contact form email authentication successful! Processing request...');
    
    const { to, subject, html, text, customerData, priority } = req.body;

    // Validate required fields
    if (!to || !subject || !html) {
      console.error('❌ Missing required fields in contact form');
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: to, subject, html',
        code: 'MISSING_FIELDS'
      });
    }

    // Validate email format
    if (!isValidEmail(to)) {
      console.error('❌ Invalid email format in contact form:', to);
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
        code: 'INVALID_EMAIL'
      });
    }

    // Determine email type and source
    const formType = customerData?.formType || 'contact';
    const formSource = customerData?.formSource || 'unknown';
    const isConfirmation = customerData?.isConfirmation || false;
    
    console.log('📧 Contact Form Details:');
    console.log('  - Form Type:', formType);
    console.log('  - Form Source:', formSource);
    console.log('  - Is Confirmation:', isConfirmation);
    console.log('  - Sending to:', to);
    console.log('  - Customer:', customerData?.nombre || 'Unknown');

    // Prepare email options
    const mailOptions = {
      from: {
        name: isConfirmation ? 'Kalia Reformas y Decoración' : `Formulario ${formSource.charAt(0).toUpperCase() + formSource.slice(1)} - Kalia`,
        address: process.env.EMAIL_USER
      },
      to: to,
      subject: subject,
      html: html,
      text: text || 'Este email requiere un cliente que soporte HTML.',
      
      // Email headers for better delivery and organization
      headers: {
        'X-Priority': priority === 'high' ? '1' : '3',
        'X-Mailer': isConfirmation ? 'Kalia Contact Confirmation' : 'Kalia Contact Forms',
        'X-Customer': customerData?.nombre || 'Unknown',
        'X-Form-Type': formType,
        'X-Form-Source': formSource,
        'X-Contact-Type': 'contact-form'
      },

      // Reply-to customer email if provided and not a confirmation
      replyTo: !isConfirmation && customerData?.email ? customerData.email : process.env.EMAIL_USER,

      // Message ID for tracking
      messageId: `contact-${formSource}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}@kaliareformas.com`
    };

    console.log('📧 Attempting to send contact form email...');

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Contact form email sent successfully!');
    console.log('📧 Message ID:', info.messageId);

    // Log success with contact form context
    const logContext = {
      formType,
      formSource,
      isConfirmation,
      customer: customerData?.nombre || 'Unknown',
      customerEmail: customerData?.email || 'Not provided',
      customerPhone: customerData?.telefono || 'Not provided',
      timestamp: new Date().toISOString(),
      messageId: info.messageId
    };

    console.log('📝 Contact form email details:', logContext);

    // Return success response
    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      message: isConfirmation 
        ? 'Email de confirmación enviado correctamente al cliente' 
        : 'Formulario de contacto enviado correctamente a Kalia',
      timestamp: new Date().toISOString(),
      formType: formType,
      formSource: formSource,
      isConfirmation: isConfirmation,
      details: {
        accepted: info.accepted,
        rejected: info.rejected,
        customer: customerData?.nombre || 'Unknown'
      }
    });

  } catch (error) {
    console.error('❌ Unexpected error in contact form handler:', error);

    // Log comprehensive error details for debugging
    const errorContext = {
      errorMessage: error.message,
      errorStack: error.stack,
      timestamp: new Date().toISOString(),
      requestDetails: req.body ? {
        hasTo: !!req.body.to,
        hasSubject: !!req.body.subject,
        hasHtml: !!req.body.html,
        customerName: req.body.customerData?.nombre || 'Unknown',
        formType: req.body.customerData?.formType || 'unknown',
        formSource: req.body.customerData?.formSource || 'unknown',
        isConfirmation: req.body.customerData?.isConfirmation || false
      } : 'No request body'
    };

    console.error('📧 Contact form email sending failed:', errorContext);

    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor al procesar formulario de contacto',
      code: 'CONTACT_FORM_ERROR',
      debug: {
        errorMessage: error.message,
        timestamp: new Date().toISOString(),
        endpoint: 'send-contact-email'
      }
    });
  }
}