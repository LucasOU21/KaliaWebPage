class EmailService {
  constructor() {
    // Vercel API endpoint (relative path works in production)
    this.apiEndpoint = '/api/send-calculator-email';
    this.companyEmail = 'lucasurrutia21@gmail.com'; // Your main business email
  }

  // Generate professional email template for calculator submission
  generateEmailTemplate(formData, productList, totalPrice, instalationType, productQuantities) {
    const formatPrice = (price) => price.toFixed(2) + ' €';
    
    // Create products table with actual quantities
    const productsTable = productList.map(product => {
      const quantity = productQuantities[product.id] || 0;
      const subtotal = product.precio * quantity;
      return `
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 16px 12px; text-align: left; vertical-align: top; font-family: 'Poppins', Arial, sans-serif;">
            <strong>${product.nombre}</strong>
          </td>
          <td style="padding: 16px 12px; text-align: center; vertical-align: top; font-family: 'Poppins', Arial, sans-serif;">
            ${quantity}
          </td>
          <td style="padding: 16px 12px; text-align: center; vertical-align: top; font-family: 'Poppins', Arial, sans-serif;">
            ${product.tipoUnidad === 'unidad' ? 'und.' : 'ml'}
          </td>
          <td style="padding: 16px 12px; text-align: right; vertical-align: top; font-family: 'Poppins', Arial, sans-serif;">
            ${formatPrice(product.precio)}
          </td>
          <td style="padding: 16px 12px; text-align: right; vertical-align: top; font-weight: bold; color: #333333; font-family: 'Poppins', Arial, sans-serif;">
            ${formatPrice(subtotal)}
          </td>
        </tr>
      `;
    }).join('');

    const currentDate = new Date().toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nueva Consulta - Calculadora Kalia Reformas</title>
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
            max-width: 800px;
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
          
          .logo {
            width: 400px;
            height: 400px;
            margin: 0 auto 20px auto;
            display: block;
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
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
          
          .package-badge {
            display: inline-block;
            padding: 15px 25px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 16px;
            margin-top: 15px;
            font-family: 'Poppins', Arial, sans-serif;
          }
          
          .package-standard {
            background-color: #333333;
            color: white;
          }
          
          .package-premium {
            background-color: #FFD000;
            color: #333333;
            border: 2px solid #333333;
          }
          
          .products-table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            overflow: hidden;
            margin-top: 20px;
          }
          
          .products-table th {
            background-color: #333333;
            color: white;
            padding: 18px 12px;
            text-align: left;
            font-weight: 600;
            font-size: 14px;
            font-family: 'Poppins', Arial, sans-serif;
          }
          
          .total-row {
            background-color: #F8F1E7;
            font-weight: bold;
            font-size: 18px;
          }
          
          .total-row td {
            padding: 25px 12px;
            border-top: 3px solid #FFD000;
            font-family: 'Poppins', Arial, sans-serif;
          }
          
          .package-description {
            margin-top: 20px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 6px;
            border-left: 4px solid #FFD000;
            font-family: 'Poppins', Arial, sans-serif;
            line-height: 1.7;
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
          
          .warning-note {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 6px;
            padding: 15px;
            margin-top: 20px;
            font-style: italic;
            color: #856404;
            font-family: 'Poppins', Arial, sans-serif;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          
          <!-- Header -->
          <div class="header">
            <img src="https://kaliareformas.com/images/logos/KaliaLogo-300x300.png" alt="Kalia Logo" class="logo" />
            <h1>Kalia Reformas y Decoración</h1>
            <p>Nueva consulta desde la calculadora de presupuestos</p>
            <p style="font-size: 13px; margin-top: 10px;">${currentDate}</p>
          </div>

          <!-- Customer Information -->
          <div class="content-section customer-info">
            <h2 class="section-title">Información del Cliente</h2>
            <div class="info-grid">
              <div class="info-item">
                <strong>Nombre:</strong> ${formData.nombre}
              </div>
              <div class="info-item">
                <strong>Teléfono:</strong> ${formData.telefono}
              </div>
              <div class="info-item">
                <strong>Código Postal:</strong> ${formData.codigopostal}
              </div>
              ${formData.email ? `
              <div class="info-item">
                <strong>Email:</strong> ${formData.email}
              </div>
              ` : `
              <div class="info-item" style="background: #fff3cd; border-color: #ffc107;">
                <strong>Email:</strong> No proporcionado
              </div>
              `}
            </div>
          </div>

          <!-- Package Type -->
          <div class="content-section">
            <h2 class="section-title">Tipo de Instalación Seleccionada</h2>
            <div class="package-badge ${instalationType === 'Premium' ? 'package-premium' : 'package-standard'}">
              ${instalationType === 'Premium' ? 'PAQUETE PREMIUM' : 'PAQUETE ESTÁNDAR'}
            </div>
            <div class="package-description">
              <strong>Características:</strong> 
              ${instalationType === 'Premium' 
                ? 'Instalación premium con ajustes finos en cortes y alineaciones, nivelación exacta para una estética impecable, y cuidado extra en cada unión y terminación.' 
                : 'Instalación rápida y eficiente con ajustes esenciales para un buen acabado y servicio confiable a un precio accesible.'}
            </div>
          </div>

          <!-- Products/Services Table -->
          <div class="content-section">
            <h2 class="section-title">Servicios Solicitados</h2>
            <table class="products-table">
              <thead>
                <tr>
                  <th>Servicio / Producto</th>
                  <th style="text-align: center;">Cantidad</th>
                  <th style="text-align: center;">Unidad</th>
                  <th style="text-align: right;">Precio Unit.</th>
                  <th style="text-align: right;">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                ${productsTable}
              </tbody>
              <tfoot>
                <tr class="total-row">
                  <td colspan="4" style="text-align: right; padding-right: 20px;">
                    <strong>PRESUPUESTO TOTAL ESTIMADO:</strong>
                  </td>
                  <td style="text-align: right; color: #333333; font-size: 22px;">
                    ${formatPrice(totalPrice)}
                  </td>
                </tr>
              </tfoot>
            </table>
            
            <div class="warning-note">
              <strong>Nota:</strong> Este es un presupuesto preliminar basado en la calculadora. 
              El precio final puede variar tras la evaluación presencial.
            </div>
          </div>

          <!-- Footer -->
          <div class="footer">
            <p><strong>Kalia Reformas y Decoración</strong></p>
            <p>Especialistas en Reformas Integrales</p>
            <p style="margin-top: 10px;">Email generado automáticamente desde la calculadora de presupuestos</p>
            
            <div class="contact-info">
              <p><strong>Email:</strong> info@kaliareformas.com</p>
              <p><strong>Web:</strong> www.kaliareformas.com</p>
              <p><strong>Horario:</strong> Lunes a Viernes 9:00 - 18:00h</p>
            </div>
          </div>

        </div>
      </body>
      </html>
    `;
  }

  // Generate plain text version
  generatePlainTextVersion(formData, productList, totalPrice, instalationType, productQuantities) {
    const formatPrice = (price) => price.toFixed(2) + ' €';
    const currentDate = new Date().toLocaleDateString('es-ES');
    
    let text = `
NUEVA CONSULTA - CALCULADORA KALIA REFORMAS
==========================================
Fecha: ${currentDate}

INFORMACIÓN DEL CLIENTE:
-----------------------
• Nombre: ${formData.nombre}
• Teléfono: ${formData.telefono}
• Código Postal: ${formData.codigopostal}
${formData.email ? `• Email: ${formData.email}` : '• Email: No proporcionado'}

TIPO DE INSTALACIÓN:
-------------------
${instalationType.toUpperCase()} - ${instalationType === 'Premium' 
  ? 'Instalación premium con ajustes finos y cuidado extra en terminaciones' 
  : 'Instalación estándar rápida y eficiente con ajustes esenciales'}

SERVICIOS SOLICITADOS:
---------------------`;

    productList.forEach(product => {
      const quantity = productQuantities[product.id] || 0;
      const subtotal = product.precio * quantity;
      text += `\n• ${product.nombre}`;
      text += `\n  - Cantidad: ${quantity} ${product.tipoUnidad === 'unidad' ? 'und.' : 'ml'}`;
      text += `\n  - Precio unitario: ${formatPrice(product.precio)}`;
      text += `\n  - Subtotal: ${formatPrice(subtotal)}`;
    });

    text += `\n
PRESUPUESTO TOTAL ESTIMADO: ${formatPrice(totalPrice)}

NOTA: Este es un presupuesto preliminar basado en la calculadora.
El precio final puede variar tras la evaluación presencial.

---
Kalia Reformas y Decoración
Especialistas en Reformas Integrales
Email: info@kaliareformas.com
Web: www.kaliareformas.com
Email generado automáticamente desde calculadora
`;

    return text;
  }

  // Main method to send calculator email via Vercel API
  async sendCalculatorEmail(formData, productList, totalPrice, instalationType, productQuantities) {
    const emailData = {
      // SIMPLIFIED: Always send to your business email
      to: this.companyEmail,
      subject: `Nueva Consulta - ${formData.nombre} - ${totalPrice.toFixed(2)}€ (${instalationType})`,
      html: this.generateEmailTemplate(formData, productList, totalPrice, instalationType, productQuantities),
      text: this.generatePlainTextVersion(formData, productList, totalPrice, instalationType, productQuantities),
      
      // Additional data for the backend
      customerData: {
        nombre: formData.nombre,
        telefono: formData.telefono,
        codigopostal: formData.codigopostal,
        email: formData.email || null,
        instalationType: instalationType,
        totalPrice: totalPrice,
        productCount: productList.length,
        timestamp: new Date().toISOString()
      },
      
      // Priority flag for urgent follow-up
      priority: totalPrice > 1000 ? 'high' : 'normal'
    };

    try {
      console.log('Sending calculator email via Vercel API...', {
        customer: formData.nombre,
        total: totalPrice,
        products: productList.length,
        type: instalationType
      });

      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      // Handle non-200 responses
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`HTTP ${response.status}: ${errorData.error || 'Server error'}`);
      }

      const result = await response.json();
      
      console.log('Calculator email sent successfully:', {
        messageId: result.messageId,
        customer: formData.nombre,
        timestamp: new Date().toISOString()
      });

      return { 
        success: true, 
        result,
        message: 'Email enviado correctamente a Kalia Reformas'
      };

    } catch (error) {
      console.error('Error sending calculator email:', error);
      
      // Return detailed error information
      throw new Error(error.message || 'Error al enviar el email');
    }
  }

  // Customer confirmation email template
  generateCustomerConfirmationTemplate(formData, totalPrice, instalationType) {
    const formatPrice = (price) => price.toFixed(2) + ' €';
    
    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de Consulta - Kalia Reformas</title>
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
          
          .logo {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px auto;
            display: block;
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
            padding: 30px; 
            font-family: 'Poppins', Arial, sans-serif;
          }
          
          .content h2 {
            font-family: 'Georgia', serif;
            color: #333333;
            font-size: 24px;
            margin-bottom: 20px;
          }
          
          .content h3 {
            font-family: 'Georgia', serif;
            color: #333333;
            font-size: 20px;
            margin-top: 30px;
            margin-bottom: 15px;
          }
          
          .highlight { 
            background-color: #F8F1E7; 
            padding: 20px; 
            border-left: 4px solid #FFD000; 
            margin: 20px 0; 
            border-radius: 6px;
          }
          
          .highlight h3 {
            margin-top: 0;
            font-family: 'Georgia', serif;
            color: #333333;
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
            margin: 25px 0;
          }
          
          .contact-highlight strong {
            color: #FFD000;
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
          
          ol {
            padding-left: 20px;
          }
          
          ol li {
            margin-bottom: 12px;
            line-height: 1.6;
          }
          
          ol li strong {
            color: #333333;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://kaliareformas.com/images/logos/KaliaLogo-300x300.png" alt="Kalia Logo" class="logo" />
            <h1>Kalia Reformas y Decoración</h1>
            <p>Confirmación de Consulta Recibida</p>
          </div>
          
          <div class="content">
            <h2>Estimado/a ${formData.nombre},</h2>
            
            <p>Hemos recibido su consulta a través de nuestra calculadora de presupuestos. Le confirmamos los siguientes detalles:</p>
            
            <div class="highlight">
              <h3>Resumen de su Consulta</h3>
              <p><strong>Tipo de Instalación:</strong> ${instalationType}</p>
              <p><strong>Presupuesto Estimado:</strong> ${formatPrice(totalPrice)}</p>
              <p><strong>Teléfono de Contacto:</strong> ${formData.telefono}</p>
              <p><strong>Código Postal:</strong> ${formData.codigopostal}</p>
            </div>
            
            <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 6px; padding: 20px; margin: 20px 0; color: #856404;">
              <p style="margin: 0; font-weight: 600;"><strong>IMPORTANTE:</strong> Este presupuesto es una estimación preliminar. El precio final puede variar según las características específicas del proyecto y podrían aplicarse cargos adicionales tras la evaluación técnica.</p>
            </div>
            
            <h3>Proceso de Seguimiento</h3>
            <ol>
              <li><strong>Contacto:</strong> Le contactaremos en las próximas 2-4 horas durante horario laboral</li>
              <li><strong>Presupuesto:</strong> Le entregaremos una cotización detallada y personalizada</li>
            </ol>
            
            <div class="contact-highlight">
              <p><strong>Tiempo de respuesta garantizado:</strong> Máximo 4 horas en horario laboral</p>
            </div>
            
            <p>Si tiene alguna pregunta urgente, puede contactarnos directamente en <strong>info@kaliareformas.com</strong></p>
            
            <p>Gracias por confiar en Kalia Reformas y Decoración para su proyecto.</p>
            
            <p style="margin-top: 30px;">Atentamente,<br><strong>Equipo Kalia Reformas y Decoración</strong></p>
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

  // Customer confirmation plain text
  generateCustomerConfirmationText(formData, totalPrice, instalationType) {
    const formatPrice = (price) => price.toFixed(2) + ' €';
    
    return `
Estimado/a ${formData.nombre},

Hemos recibido su consulta a través de nuestra calculadora de presupuestos.

RESUMEN DE SU CONSULTA:
=======================
• Tipo de Instalación: ${instalationType}
• Presupuesto Estimado: ${formatPrice(totalPrice)}
• Teléfono: ${formData.telefono}
• Código Postal: ${formData.codigopostal}

IMPORTANTE: Este presupuesto es una estimación preliminar. El precio final puede variar según las características específicas del proyecto y podrían aplicarse cargos adicionales tras la evaluación técnica.

PROCESO DE SEGUIMIENTO:
======================
1. Le contactaremos en las próximas 2-4 horas (horario laboral)
2. Le entregaremos una cotización detallada y personalizada

Para consultas urgentes: info@kaliareformas.com

Gracias por confiar en Kalia Reformas y Decoración.

Atentamente,
Equipo Kalia Reformas y Decoración

---
Kalia Reformas y Decoración
www.kaliareformas.com
Especialistas en Reformas Integrales
    `;
  }

  // Optional: Send confirmation email to customer
  async sendCustomerConfirmation(formData, totalPrice, instalationType) {
    if (!formData.email) {
      console.log('No customer email provided, skipping confirmation');
      return { success: true, message: 'No customer email to send confirmation' };
    }

    // Generate customer confirmation email
    const customerEmailData = {
      to: formData.email, // Send to customer's email
      subject: `Confirmación de Consulta - Kalia Reformas - ${totalPrice.toFixed(2)}€`,
      html: this.generateCustomerConfirmationTemplate(formData, totalPrice, instalationType),
      text: this.generateCustomerConfirmationText(formData, totalPrice, instalationType),
      
      customerData: {
        nombre: formData.nombre,
        isConfirmation: true
      },
      
      priority: 'normal'
    };

    try {
      console.log('Sending customer confirmation email to:', formData.email);

      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(customerEmailData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`HTTP ${response.status}: ${errorData.error || 'Server error'}`);
      }

      const result = await response.json();
      console.log('Customer confirmation sent successfully');
      
      return { success: true, result };

    } catch (error) {
      console.error('Error sending customer confirmation:', error);
      throw new Error(error.message || 'Error al enviar confirmación al cliente');
    }
  }

  // Health check method to test API connectivity
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
      console.log('API connection successful:', result);
      return { success: true, result };

    } catch (error) {
      console.error('API connection failed:', error);
      return { success: false, error: error.message };
    }
  }
}

// Export the service
export default EmailService;