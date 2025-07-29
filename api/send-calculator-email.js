/* global process */

import nodemailer from 'nodemailer';

// Helper function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
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
    console.log('🔍 === DETAILED DEBUG INFO ===');
    console.log('📧 Received calculator email request');
    console.log('📧 Request method:', req.method);
    console.log('📧 Request body keys:', Object.keys(req.body || {}));
    
    // DETAILED ENVIRONMENT VARIABLE DEBUG
    console.log('🔍 Environment Variables Debug:');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
    console.log('EMAIL_USER value (masked):', process.env.EMAIL_USER ? `${process.env.EMAIL_USER.substring(0, 3)}***@${process.env.EMAIL_USER.split('@')[1]}` : 'NOT SET');
    console.log('EMAIL_APP_PASSWORD exists:', !!process.env.EMAIL_APP_PASSWORD);
    console.log('EMAIL_APP_PASSWORD length:', process.env.EMAIL_APP_PASSWORD ? process.env.EMAIL_APP_PASSWORD.length : 0);
    console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
    console.log('EMAIL_PASS length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0);
    
    // Try both possible environment variable names
    const emailPassword = process.env.EMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
    console.log('Final password to use exists:', !!emailPassword);
    console.log('Final password length:', emailPassword ? emailPassword.length : 0);
    
    if (!process.env.EMAIL_USER || !emailPassword) {
      console.error('❌ Missing email credentials!');
      console.error('EMAIL_USER missing:', !process.env.EMAIL_USER);
      console.error('EMAIL_PASSWORD missing:', !emailPassword);
      
      return res.status(500).json({
        success: false,
        error: 'Missing email credentials in environment variables',
        code: 'CONFIG_ERROR',
        debug: {
          emailUserExists: !!process.env.EMAIL_USER,
          emailPassExists: !!emailPassword,
          availableEnvVars: Object.keys(process.env).filter(key => key.includes('EMAIL'))
        }
      });
    }

    // TEST EMAIL CONNECTION FIRST
    console.log('🔍 Testing email connection...');
    
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
      console.log('🔍 Attempting to verify email connection...');
      await transporter.verify();
      console.log('✅ Email server connection verified successfully!');
    } catch (verifyError) {
      console.error('❌ Email server verification failed:', verifyError);
      console.error('❌ Error code:', verifyError.code);
      console.error('❌ Error message:', verifyError.message);
      console.error('❌ Error response:', verifyError.response);
      
      return res.status(401).json({
        success: false,
        error: 'Error de autenticación del email',
        code: 'AUTH_ERROR',
        debug: {
          errorCode: verifyError.code,
          errorMessage: verifyError.message,
          errorResponse: verifyError.response,
          emailUser: process.env.EMAIL_USER ? 'SET' : 'NOT SET',
          passwordLength: emailPassword ? emailPassword.length : 0
        }
      });
    }

    // If we get here, email connection is working
    console.log('🎉 Email authentication successful! Processing request...');
    
    const { to, subject, html, text, customerData, priority } = req.body;

    // For now, let's just return success since authentication worked
    return res.status(200).json({
      success: true,
      message: 'Email authentication successful - endpoint working',
      debug: {
        emailConfigured: true,
        requestReceived: true,
        authenticationPassed: true
      }
    });

  } catch (error) {
    console.error('❌ Unexpected error:', error);
    console.error('❌ Error stack:', error.stack);

    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      code: 'UNEXPECTED_ERROR',
      debug: {
        errorMessage: error.message,
        errorCode: error.code
      }
    });
  }
}