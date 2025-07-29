/* global process */

import nodemailer from 'nodemailer';

// Helper function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Helper function to create email transporter
const createTransporter = () => {
  // Try both possible environment variable names
  const emailPassword = process.env.EMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
  
  console.log('🔍 Debug email config:');
  console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
  console.log('EMAIL_APP_PASSWORD exists:', !!process.env.EMAIL_APP_PASSWORD);
  console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
  console.log('Using password variable:', emailPassword ? 'Found' : 'Missing');
  
  if (!process.env.EMAIL_USER || !emailPassword) {
    throw new Error('Missing email credentials in environment variables');
  }
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: emailPassword
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Main serverless function
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
    console.log('📧 Received calculator email request');
    console.log('📧 Request body keys:', Object.keys(req.body));
    
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

    console.log('📧 Sending email to:', to);
    console.log('📧 Customer:', customerData?.nombre || 'Unknown');

    // Create email transporter
    const transporter = createTransporter();
    
    // Test the connection first
    try {
      await transporter.verify();
      console.log('✅ Email server connection verified');
    } catch (verifyError) {
      console.error('❌ Email server verification failed:', verifyError);
      throw verifyError;
    }

    // Prepare email options
    const mailOptions = {
      from: {
        name: 'Calculadora Kalia Reformas',
        address: process.env.EMAIL_USER
      },
      to: to,
      subject: subject,
      html: html,
      text: text || 'Este email requiere un cliente que soporte HTML.',
      
      // Email headers for better delivery
      headers: {
        'X-Priority': priority === 'high' ? '1' : '3',
        'X-Mailer': 'Kalia Reformas Calculator API',
        'X-Customer': customerData?.nombre || 'Unknown'
      },

      // Reply-to customer email if provided
      replyTo: customerData?.email || process.env.EMAIL_USER,

      // Message ID for tracking
      messageId: `calculator-${Date.now()}-${Math.random().toString(36).substr(2, 9)}@kaliareformas.com`
    };

    console.log('📧 Attempting to send email...');

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email sent successfully!');
    console.log('📧 Message ID:', info.messageId);
    console.log('📧 Accepted:', info.accepted);

    // Return success response
    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      message: 'Email enviado correctamente',
      timestamp: new Date().toISOString(),
      details: {
        accepted: info.accepted,
        rejected: info.rejected,
        response: info.response
      }
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    console.error('❌ Error stack:', error.stack);

    // Determine error type and appropriate response
    let statusCode = 500;
    let errorCode = 'SEND_ERROR';
    let userMessage = 'Error interno del servidor al enviar el email';

    if (error.code === 'EAUTH' || error.message.includes('authentication') || error.message.includes('credentials')) {
      statusCode = 401;
      errorCode = 'AUTH_ERROR';
      userMessage = 'Error de autenticación del email';
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      statusCode = 503;
      errorCode = 'CONNECTION_ERROR';
      userMessage = 'No se pudo conectar al servidor de email';
    } else if (error.code === 'EMESSAGE') {
      statusCode = 400;
      errorCode = 'MESSAGE_ERROR';
      userMessage = 'Error en el formato del mensaje';
    } else if (error.message.includes('Missing email credentials')) {
      statusCode = 500;
      errorCode = 'CONFIG_ERROR';
      userMessage = 'Error de configuración del servidor';
    }

    // Return error response
    return res.status(statusCode).json({
      success: false,
      error: userMessage,
      code: errorCode,
      timestamp: new Date().toISOString(),
      technical: {
        code: error.code,
        message: error.message
      }
    });
  }
}