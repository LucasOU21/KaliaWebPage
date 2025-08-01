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
    console.log('📧 Received contact email request');
    
    // Try both possible environment variable names
    const emailPassword = process.env.EMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
    
    console.log('🔍 Environment Variables:');
    console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
    console.log('EMAIL_USER value:', process.env.EMAIL_USER);
    console.log('Password exists:', !!emailPassword);
    console.log('Password length:', emailPassword ? emailPassword.length : 0);
    
    if (!process.env.EMAIL_USER || !emailPassword) {
      console.error('❌ Missing email credentials!');
      return res.status(500).json({
        success: false,
        error: 'Missing email credentials in environment variables',
        code: 'CONFIG_ERROR'
      });
    }

    // TEST EMAIL CONNECTION FIRST
    console.log('🔍 Testing email connection...');
    
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

    try {
      console.log('🔍 Attempting to verify email connection...');
      await transporter.verify();
      console.log('✅ Email server connection verified successfully!');
    } catch (verifyError) {
      console.error('❌ Email server verification failed:', verifyError.message);
      
      return res.status(401).json({
        success: false,
        error: 'Error de autenticación del email',
        code: 'AUTH_ERROR',
        debug: {
          errorMessage: verifyError.message,
          emailUser: process.env.EMAIL_USER ? 'SET' : 'NOT SET',
          passwordLength: emailPassword ? emailPassword.length : 0
        }
      });
    }

    console.log('🎉 Email authentication successful! Processing request...');
    
    const { to, subject, html, text, customerData, priority } = req.body;

    // Validate required fields
    if (!to || !subject || !html) {
      console.error('❌ Missing required fields');
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: to, subject, html',
        code: 'MISSING_FIELDS'
      });
    }

    // Validate email format
    if (!isValidEmail(to)) {
      console.error('❌ Invalid email format:', to);
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
        code: 'INVALID_EMAIL'
      });
    }

    // Determine email type based on customerData
    const emailType = customerData?.formType || 'contact';
    const isConfirmation = customerData?.isConfirmation || false;
    
    console.log('📧 Email type:', emailType);
    console.log('📧 Is confirmation:', isConfirmation);
    console.log('📧 Sending email to:', to);
    console.log('📧 Customer:', customerData?.nombre || 'Unknown');

    // Prepare email options
    const mailOptions = {
      from: {
        name: isConfirmation ? 'Kalia Reformas y Decoración' : 'Formulario Web Kalia Reformas',
        address: process.env.EMAIL_USER
      },
      to: to,
      subject: subject,
      html: html,
      text: text || 'Este email requiere un cliente que soporte HTML.',
      
      // Email headers for better delivery
      headers: {
        'X-Priority': priority === 'high' ? '1' : '3',
        'X-Mailer': isConfirmation ? 'Kalia Reformas Confirmation' : 'Kalia Reformas Web Forms',
        'X-Customer': customerData?.nombre || 'Unknown',
        'X-Form-Type': emailType,
        'X-Form-Source': customerData?.formSource || 'unknown'
      },

      // Reply-to customer email if provided and not a confirmation
      replyTo: !isConfirmation && customerData?.email ? customerData.email : process.env.EMAIL_USER,

      // Message ID for tracking
      messageId: `${emailType}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}@kaliareformas.com`
    };

    console.log('📧 Attempting to send email...');

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email sent successfully!');
    console.log('📧 Message ID:', info.messageId);

    // Log success with appropriate context
    const logContext = {
      emailType,
      isConfirmation,
      customer: customerData?.nombre || 'Unknown',
      formSource: customerData?.formSource || 'unknown',
      timestamp: new Date().toISOString()
    };

    if (emailType === 'calculator') {
      console.log('💰 Calculator email sent:', {
        ...logContext,
        totalPrice: customerData?.totalPrice,
        instalationType: customerData?.instalationType,
        productCount: customerData?.productCount
      });
    } else {
      console.log('📝 Contact form email sent:', logContext);
    }

    // Return success response
    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      message: isConfirmation ? 'Email de confirmación enviado correctamente' : 'Email enviado correctamente',
      timestamp: new Date().toISOString(),
      emailType: emailType,
      isConfirmation: isConfirmation,
      details: {
        accepted: info.accepted,
        rejected: info.rejected
      }
    });

  } catch (error) {
    console.error('❌ Unexpected error:', error);

    // Log error with context
    const errorContext = {
      errorMessage: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      requestBody: req.body ? {
        hasTo: !!req.body.to,
        hasSubject: !!req.body.subject,
        hasHtml: !!req.body.html,
        customerName: req.body.customerData?.nombre || 'Unknown',
        formType: req.body.customerData?.formType || 'unknown'
      } : 'No body'
    };

    console.error('📧 Email sending failed:', errorContext);

    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      code: 'UNEXPECTED_ERROR',
      debug: {
        errorMessage: error.message,
        timestamp: new Date().toISOString()
      }
    });
  }
}