class ContactEmailService {
  constructor() {
    // Dedicated endpoint for contact forms only
    this.apiEndpoint = 'https://kalia-email-worker.2mmanitasmadrid.workers.dev';
    this.companyEmail = 'info@kaliareformas.com';
  }

  // ========================================
  // CONTACT FORM EMAIL TEMPLATES
  // ========================================

  // Generate contact form email template for Kalia team
  generateContactEmailTemplate(formData, formSource) {
    const currentDate = new Date().toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Determine full name (handle different field structures)
    const fullName = this.getFullName(formData);
    
    // Determine form source display name
    const sourceNames = {
      'contact': 'Página de Contacto',
      'services': 'Página de Servicios',
      'nosotros': 'Página de Nosotros',
      'contact-section': 'Sección de Contacto'
    };
    const sourceName = sourceNames[formSource] || 'Formulario de Contacto';

    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nueva Consulta - ${sourceName}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
          
          body {
            font-family: 'Poppins', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #F8F1E7;
          }
          
          .email-container {
            max-width: 700px;
            margin: 20px auto;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          
          .header {
            background-color: #FFD000;
            color: #333333;
            padding: 40px;
            text-align: center;
            border-bottom: 3px solid #333333;
          }
          
          .header h1 {
            font-family: 'Georgia', serif;
            font-size: 28px;
            font-weight: 700;
            margin: 0 0 10px 0;
            color: #333333;
          }
          
          .header p {
            font-family: 'Poppins', Arial, sans-serif;
            font-size: 16px;
            margin: 0;
            color: #333333;
            opacity: 0.8;
          }
          
          .content-section {
            padding: 30px;
            border-bottom: 1px solid #e5e7eb;
          }
          
          .section-title {
            color: #333333;
            margin-top: 0;
            margin-bottom: 25px;
            font-size: 24px;
            font-weight: 700;
            font-family: 'Georgia', serif;
          }
          
          .customer-info {
            background-color: #F8F1E7;
            border-left: 4px solid #FFD000;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }
          
          .info-item {
            background: white;
            padding: 20px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
            font-family: 'Poppins', Arial, sans-serif;
          }
          
          .info-item strong {
            color: #333333;
            font-weight: 600;
          }
          
          .message-section {
            background-color: #f8f9fa;
          }
          
          .message-content {
            background: white;
            padding: 25px;
            border-radius: 6px;
            border-left: 4px solid #FFD000;
            font-family: 'Poppins', Arial, sans-serif;
            line-height: 1.7;
            font-size: 16px;
            color: #333333;
            white-space: pre-wrap;
          }
          
          .source-badge {
            display: inline-block;
            background-color: #333333;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 20px;
          }
          
          .urgent-notice {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 6px;
            padding: 20px;
            margin: 20px 0;
            color: #856404;
            font-family: 'Poppins', Arial, sans-serif;
            text-align: center;
          }
          
          .urgent-notice strong {
            color: #333333;
          }
          
          .footer {
            background-color: #333333;
            color: #F8F1E7;
            text-align: center;
            padding: 30px;
            font-size: 14px;
            font-family: 'Poppins', Arial, sans-serif;
          }
          
          .footer strong {
            color: #FFD000;
          }
          
          .contact-info {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #555555;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          
          <!-- Header -->
          <div class="header">
            <h1>Kalia Reformas y Decoración</h1>
            <p>Nueva consulta desde ${sourceName}</p>
            <p style="font-size: 13px; margin-top: 10px;">${currentDate}</p>
          </div>

          <!-- Form Source -->
          <div class="content-section">
            <div class="source-badge">${sourceName}</div>
            <div class="urgent-notice">
              <strong>⏰ ACCIÓN REQUERIDA:</strong> Nuevo cliente potencial esperando respuesta en 2-4 horas laborables
            </div>
          </div>

          <!-- Customer Information -->
          <div class="content-section customer-info">
            <h2 class="section-title">Información del Cliente</h2>
            <div class="info-grid">
              <div class="info-item">
                <strong>Nombre Completo:</strong> ${fullName}
              </div>
              <div class="info-item">
                <strong>Email:</strong> ${formData.email}
              </div>
              <div class="info-item">
                <strong>Teléfono:</strong> ${formData.telefono}
              </div>
              <div class="info-item">
                <strong>Formulario Origen:</strong> ${sourceName}
              </div>
            </div>
          </div>

          <!-- Message Content -->
          <div class="content-section message-section">
            <h2 class="section-title">Mensaje del Cliente</h2>
            <div class="message-content">
${this.getMessageContent(formData)}
            </div>
          </div>

          <!-- Footer -->
          <div class="footer">
            <p><strong>Kalia Reformas y Decoración</strong></p>
            <p>Especialistas en Reformas Integrales</p>
            <p style="margin-top: 10px;">Email generado automáticamente desde formulario web</p>
            
            <div class="contact-info">
              <p><strong>Email:</strong> info@kaliareformas.com</p>
              <p><strong>Web:</strong> www.kaliareformas.com</p>
              <p><strong>Tiempo de respuesta objetivo:</strong> 2-4 horas laborables</p>
            </div>
          </div>

        </div>
      </body>
      </html>
    `;
  }

  // Generate contact form plain text version
  generateContactPlainTextVersion(formData, formSource) {
    const currentDate = new Date().toLocaleDateString('es-ES');
    const fullName = this.getFullName(formData);
    
    const sourceNames = {
      'contact': 'Página de Contacto',
      'services': 'Página de Servicios', 
      'nosotros': 'Página de Nosotros',
      'contact-section': 'Sección de Contacto'
    };
    const sourceName = sourceNames[formSource] || 'Formulario de Contacto';
    
    return `
NUEVA CONSULTA - ${sourceName.toUpperCase()}
${'='.repeat(50)}
Fecha: ${currentDate}

⏰ ACCIÓN REQUERIDA: Nuevo cliente potencial esperando respuesta en 2-4 horas laborables

INFORMACIÓN DEL CLIENTE:
-----------------------
• Nombre: ${fullName}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}
• Origen: ${sourceName}

MENSAJE DEL CLIENTE:
-------------------
${this.getMessageContent(formData)}

TIEMPO DE RESPUESTA OBJETIVO: 2-4 horas laborables

---
Kalia Reformas y Decoración
Especialistas en Reformas Integrales
Email: info@kaliareformas.com
Web: www.kaliareformas.com
Email generado automáticamente desde formulario web
    `;
  }

  // SIMPLIFIED Customer confirmation email for contact forms
  generateContactConfirmationTemplate(formData, formSource) {
    const fullName = this.getFullName(formData);
    const sourceNames = {
      'contact': 'nuestra página de contacto',
      'services': 'nuestra página de servicios',
      'nosotros': 'nuestra página de nosotros', 
      'contact-section': 'nuestro formulario de contacto'
    };
    const sourceName = sourceNames[formSource] || 'nuestro formulario de contacto';
    
    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de Mensaje - Kalia Reformas</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
          
          body { 
            font-family: 'Poppins', Arial, sans-serif; 
            line-height: 1.6; 
            color: #333333; 
            margin: 0; 
            padding: 0; 
            background-color: #F8F1E7; 
          }
          
          .container { 
            max-width: 600px; 
            margin: 20px auto; 
            background: white; 
            border-radius: 8px; 
            overflow: hidden; 
            box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
          }
          
          .header { 
            background-color: #FFD000; 
            color: #333333; 
            padding: 40px; 
            text-align: center; 
            border-bottom: 3px solid #333333;
          }
          
          .header h1 {
            font-family: 'Georgia', serif;
            font-size: 28px;
            font-weight: 700;
            margin: 0 0 10px 0;
            color: #333333;
          }
          
          .header p {
            font-family: 'Poppins', Arial, sans-serif;
            font-size: 16px;
            margin: 0;
            color: #333333;
            opacity: 0.8;
          }
          
          .content { 
            padding: 40px 30px; 
            font-family: 'Poppins', Arial, sans-serif;
            text-align: center;
          }
          
          .content h2 {
            font-family: 'Georgia', serif;
            color: #333333;
            font-size: 24px;
            margin-bottom: 30px;
          }
          
          .content p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
            color: #333333;
          }
          
          .highlight { 
            background-color: #F8F1E7; 
            padding: 25px; 
            border-left: 4px solid #FFD000; 
            margin: 30px 0; 
            border-radius: 6px;
            text-align: left;
          }
          
          .highlight strong {
            color: #333333;
            font-weight: 600;
          }
          
          .contact-highlight {
            background-color: #333333;
            color: white;
            padding: 20px;
            border-radius: 6px;
            text-align: center;
            margin: 30px 0;
          }
          
          .contact-highlight strong {
            color: #FFD000;
            font-size: 18px;
          }
          
          .footer { 
            background-color: #333333; 
            color: #F8F1E7; 
            text-align: center; 
            padding: 25px; 
            font-size: 14px; 
            font-family: 'Poppins', Arial, sans-serif;
          }
          
          .footer strong {
            color: #FFD000;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Kalia Reformas y Decoración</h1>
            <p>Confirmación de Mensaje</p>
          </div>
          
          <div class="content">
            <h2>Estimado/a ${fullName},</h2>
            
            <p>Gracias por contactarnos a través de ${sourceName}. Hemos recibido su mensaje correctamente.</p>
            
            <div class="highlight">
              <p><strong>Nombre:</strong> ${fullName}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Teléfono:</strong> ${formData.telefono}</p>
            </div>
            
            <div class="contact-highlight">
              <p><strong>Nos pondremos en contacto con usted en las próximas 2-4 horas laborables</strong></p>
            </div>
            
            <p>Para consultas urgentes, puede contactarnos directamente en <strong>info@kaliareformas.com</strong></p>
            
            <p style="margin-top: 40px;">Atentamente,<br><strong>Equipo Kalia Reformas y Decoración</strong></p>
          </div>
          
          <div class="footer">
            <p><strong>Kalia Reformas y Decoración</strong></p>
            <p>Especialistas en Reformas Integrales</p>
            <p style="margin-top: 15px;">www.kaliareformas.com</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  // SIMPLIFIED Customer confirmation plain text for contact forms
  generateContactConfirmationText(formData, formSource) {
    const fullName = this.getFullName(formData);
    const sourceNames = {
      'contact': 'nuestra página de contacto',
      'services': 'nuestra página de servicios',
      'nosotros': 'nuestra página de nosotros',
      'contact-section': 'nuestro formulario de contacto'
    };
    const sourceName = sourceNames[formSource] || 'nuestro formulario de contacto';
    
    return `
Estimado/a ${fullName},

Gracias por contactarnos a través de ${sourceName}. Hemos recibido su mensaje correctamente.

DATOS DE CONTACTO:
• Nombre: ${fullName}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}

Nos pondremos en contacto con usted en las próximas 2-4 horas laborables.

Para consultas urgentes: info@kaliareformas.com

Atentamente,
Equipo Kalia Reformas y Decoración

---
Kalia Reformas y Decoración
www.kaliareformas.com
Especialistas en Reformas Integrales
    `;
  }

  // ========================================
  // UTILITY METHODS
  // ========================================

  // Get full name from different form structures
  getFullName(formData) {
    // Handle different field name combinations across forms
    if (formData.nombre && formData.apellido) {
      return `${formData.nombre} ${formData.apellido}`;
    }
    if (formData.nombres && formData.apellidos) {
      return `${formData.nombres} ${formData.apellidos}`;
    }
    if (formData.nombre) {
      return formData.nombre;
    }
    if (formData.nombres) {
      return formData.nombres;
    }
    if (formData.apellido) {
      return formData.apellido;
    }
    if (formData.apellidos) {
      return formData.apellidos;
    }
    return 'Cliente';
  }

  // Get message content from different form structures
  getMessageContent(formData) {
    return formData.message || formData.detalles || 'Sin mensaje específico proporcionado.';
  }

  // Get display name for form source
  getSourceDisplayName(formSource) {
    const sourceNames = {
      'contact': 'Contacto',
      'services': 'Servicios', 
      'nosotros': 'Nosotros',
      'contact-section': 'Contacto'
    };
    return sourceNames[formSource] || 'Contacto';
  }

  // ========================================
  // MAIN EMAIL SENDING METHODS
  // ========================================

  // Send contact form email
  async sendContactEmail(formData, formSource = 'contact') {
    const fullName = this.getFullName(formData);
    
    const emailData = {
      to: this.companyEmail,
      subject: `Nueva Consulta ${this.getSourceDisplayName(formSource)} - ${fullName}`,
      html: this.generateContactEmailTemplate(formData, formSource),
      text: this.generateContactPlainTextVersion(formData, formSource),
      
      customerData: {
        nombre: fullName,
        email: formData.email,
        telefono: formData.telefono,
        mensaje: this.getMessageContent(formData),
        formSource: formSource,
        timestamp: new Date().toISOString(),
        formType: 'contact'
      },
      
      priority: 'normal'
    };

    return this.sendEmail(emailData, formSource);
  }

  // Send customer confirmation for contact forms
  async sendContactConfirmation(formData, formSource = 'contact') {
    if (!formData.email) {
      console.log('No customer email provided, skipping confirmation');
      return { success: true, message: 'No customer email to send confirmation' };
    }

    const fullName = this.getFullName(formData);

    const customerEmailData = {
      to: formData.email,
      subject: `Confirmación de Mensaje - Kalia Reformas`,
      html: this.generateContactConfirmationTemplate(formData, formSource),
      text: this.generateContactConfirmationText(formData, formSource),
      
      customerData: {
        nombre: fullName,
        isConfirmation: true,
        formSource: formSource,
        formType: 'contact'
      },
      
      priority: 'normal'
    };

    try {
      console.log('Sending contact confirmation email to:', formData.email);
      const response = await this.sendEmail(customerEmailData, `${formSource}_confirmation`);
      console.log('Contact confirmation sent successfully');
      return response;
    } catch (error) {
      console.error('Error sending contact confirmation:', error);
      throw new Error(error.message || 'Error al enviar confirmación al cliente');
    }
  }

  // ========================================
  // CORE EMAIL SENDING METHOD
  // ========================================

  // Email sending method (contact forms only)
  async sendEmail(emailData, source) {
  try {
    console.log(`Sending ${source} contact email via MailChannels Worker...`, {
      customer: emailData.customerData?.nombre,
      to: emailData.to,
      source: source,
      willRouteToActual: emailData.customerData?.isConfirmation ? 'customer email' : '2mmanitasmadrid@gmail.com'
    });

    const response = await fetch(this.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`HTTP ${response.status}: ${errorData.error || 'Server error'}`);
    }

    const result = await response.json();
    
    console.log(`${source} contact email sent successfully via MailChannels:`, {
      messageId: result.messageId,
      customer: emailData.customerData?.nombre,
      actualRecipients: result.debug?.routedTo || 'See worker logs',
      fromAddress: result.debug?.fromAddress || 'info@kaliareformas.com',
      timestamp: new Date().toISOString()
    });

    return { 
      success: true, 
      result,
      message: 'Email de contacto enviado correctamente'
    };

  } catch (error) {
    console.error(`Error sending ${source} contact email:`, error);
    throw new Error(error.message || 'Error al enviar el email de contacto');
  }
}
  // Test connection method
  async testConnection() {
    try {
      const response = await fetch('/api/health', {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const result = await response.json();
      console.log('Contact API connection successful:', result);
      return { success: true, result };

    } catch (error) {
      console.error('Contact API connection failed:', error);
      return { success: false, error: error.message };
    }
  }
}

// Export the service
export default ContactEmailService;