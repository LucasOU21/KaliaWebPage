
class EmailService {
  constructor() {
    // Vercel API endpoint (relative path works in production)
    this.apiEndpoint = '/api/send-calculator-email';
    this.companyEmail = 'info@kaliareformas.com';
  }

  // Generate professional email template for calculator submission
  generateEmailTemplate(formData, productList, totalPrice, instalationType, productQuantities) {
    const formatPrice = (price) => price.toFixed(2) + ' €';
    
    // Create products table with actual quantities
    const productsTable = productList.map(product => {
      const quantity = productQuantities[product.id] || 0;
      const subtotal = product.precio * quantity;
      return `
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 12px 8px; text-align: left; vertical-align: top;">
            <strong>${product.nombre}</strong>
          </td>
          <td style="padding: 12px 8px; text-align: center; vertical-align: top;">
            ${quantity}
          </td>
          <td style="padding: 12px 8px; text-align: center; vertical-align: top;">
            ${product.tipoUnidad === 'unidad' ? 'und.' : 'ml'}
          </td>
          <td style="padding: 12px 8px; text-align: right; vertical-align: top;">
            ${formatPrice(product.precio)}
          </td>
          <td style="padding: 12px 8px; text-align: right; vertical-align: top; font-weight: bold; color: #1B4F72;">
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
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          
          body {
            font-family: 'Poppins', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
          }
          
          .email-container {
            max-width: 800px;
            margin: 20px auto;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }
          
          .header {
            background: linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }
          
          .content-section {
            padding: 25px;
            border-bottom: 1px solid #f0f0f0;
          }
          
          .section-title {
            color: #1B4F72;
            margin-top: 0;
            margin-bottom: 20px;
            font-size: 22px;
            font-weight: 600;
          }
          
          .customer-info {
            background: #f8f9fa;
            border-left: 4px solid #1B4F72;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-top: 15px;
          }
          
          .info-item {
            background: white;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #e9ecef;
          }
          
          .package-badge {
            display: inline-block;
            padding: 12px 20px;
            border-radius: 25px;
            font-weight: 600;
            font-size: 16px;
            margin-top: 10px;
          }
          
          .package-standard {
            background: linear-gradient(135deg, #007bff, #0056b3);
            color: white;
          }
          
          .package-premium {
            background: linear-gradient(135deg, #28a745, #1e7e34);
            color: white;
          }
          
          .products-table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            margin-top: 15px;
          }
          
          .products-table th {
            background: #1B4F72;
            color: white;
            padding: 15px 12px;
            text-align: left;
            font-weight: 600;
            font-size: 14px;
          }
          
          .total-row {
            background: #f8f9fa;
            font-weight: bold;
            font-size: 18px;
          }
          
          .total-row td {
            padding: 20px 12px;
            border-top: 3px solid #1B4F72;
          }
          
          .next-steps {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
          }
          
          .footer {
            background: #2c3e50;
            color: #ecf0f1;
            text-align: center;
            padding: 25px;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          
          <!-- Header -->
          <div class="header">
            <h1>🏠 Kalia Reformas</h1>
            <p>Nueva consulta desde la calculadora de presupuestos</p>
            <p style="font-size: 14px; opacity: 0.8;">📅 ${currentDate}</p>
          </div>

          <!-- Customer Information -->
          <div class="content-section customer-info">
            <h2 class="section-title">👤 Información del Cliente</h2>
            <div class="info-grid">
              <div class="info-item">
                <strong>Nombre:</strong> ${formData.nombre}
              </div>
              <div class="info-item">
                <strong>Teléfono:</strong> 📱 ${formData.telefono}
              </div>
              <div class="info-item">
                <strong>Código Postal:</strong> 📍 ${formData.codigopostal}
              </div>
              ${formData.email ? `
              <div class="info-item">
                <strong>Email:</strong> 📧 ${formData.email}
              </div>
              ` : `
              <div class="info-item" style="background: #fff3cd; border-color: #ffc107;">
                <strong>⚠️ Email:</strong> No proporcionado
              </div>
              `}
            </div>
          </div>

          <!-- Package Type -->
          <div class="content-section">
            <h2 class="section-title">📦 Tipo de Instalación Seleccionada</h2>
            <div class="package-badge ${instalationType === 'Premium' ? 'package-premium' : 'package-standard'}">
              ${instalationType === 'Premium' ? '⭐ PAQUETE PREMIUM' : '🔧 PAQUETE ESTÁNDAR'}
            </div>
            <p style="margin-top: 15px; color: #666; line-height: 1.8;">
              <strong>Características:</strong> 
              ${instalationType === 'Premium' 
                ? 'Instalación premium con ajustes finos en cortes y alineaciones, nivelación exacta para una estética impecable, y cuidado extra en cada unión y terminación.' 
                : 'Instalación rápida y eficiente con ajustes esenciales para un buen acabado y servicio confiable a un precio accesible.'}
            </p>
          </div>

          <!-- Products/Services Table -->
          <div class="content-section">
            <h2 class="section-title">🛠️ Servicios Solicitados</h2>
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
                  <td style="text-align: right; color: #1B4F72; font-size: 22px;">
                    ${formatPrice(totalPrice)}
                  </td>
                </tr>
              </tfoot>
            </table>
            
            <p style="font-size: 13px; color: #666; margin-top: 15px; font-style: italic;">
              <strong>Nota:</strong> Este es un presupuesto preliminar basado en la calculadora. 
              El precio final puede variar tras la evaluación presencial.
            </p>
          </div>

          <!-- Next Steps -->
          <div class="content-section next-steps">
            <h2 class="section-title" style="color: white;">📞 Plan de Acción - Próximos Pasos</h2>
            <ol style="margin: 15px 0 0 20px; padding-left: 20px;">
              <li style="margin-bottom: 12px;"><strong>Contacto Inicial:</strong> Llamar al cliente en las próximas 2-4 horas (horario laboral)</li>
              <li style="margin-bottom: 12px;"><strong>Programar Cita:</strong> Coordinar visita para evaluación presencial sin compromiso</li>
              <li style="margin-bottom: 12px;"><strong>Evaluación Técnica:</strong> Revisar el espacio, medidas exactas y requerimientos específicos</li>
              <li style="margin-bottom: 12px;"><strong>Presupuesto Detallado:</strong> Elaborar cotización final personalizada con cronograma</li>
              <li><strong>Propuesta Comercial:</strong> Presentar opciones de pago y fechas de instalación disponibles</li>
            </ol>
            
            <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin-top: 20px;">
              <strong>⏰ Tiempo de Respuesta Objetivo:</strong> Máximo 4 horas en horario laboral
              <br>
              <strong>🎯 Meta de Conversión:</strong> Programar cita dentro de las primeras 24 horas
            </div>
          </div>

          <!-- Footer -->
          <div class="footer">
            <p><strong>Kalia Reformas</strong> - Especialistas en Reformas Integrales</p>
            <p>Email generado automáticamente desde la calculadora de presupuestos</p>
            
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #34495e;">
              <p><strong>📧 Email:</strong> info@kaliareformas.com</p>
              <p><strong>🌐 Web:</strong> www.kaliareformas.com</p>
              <p><strong>⏰ Horario:</strong> Lunes a Viernes 9:00 - 18:00h</p>
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

👤 INFORMACIÓN DEL CLIENTE:
---------------------------
• Nombre: ${formData.nombre}
• Teléfono: ${formData.telefono}
• Código Postal: ${formData.codigopostal}
${formData.email ? `• Email: ${formData.email}` : '• Email: No proporcionado'}

📦 TIPO DE INSTALACIÓN:
-----------------------
${instalationType.toUpperCase()} - ${instalationType === 'Premium' 
  ? 'Instalación premium con ajustes finos y cuidado extra en terminaciones' 
  : 'Instalación estándar rápida y eficiente con ajustes esenciales'}

🛠️ SERVICIOS SOLICITADOS:
--------------------------`;

    productList.forEach(product => {
      const quantity = productQuantities[product.id] || 0;
      const subtotal = product.precio * quantity;
      text += `\n• ${product.nombre}`;
      text += `\n  - Cantidad: ${quantity} ${product.tipoUnidad === 'unidad' ? 'und.' : 'ml'}`;
      text += `\n  - Precio unitario: ${formatPrice(product.precio)}`;
      text += `\n  - Subtotal: ${formatPrice(subtotal)}`;
    });

    text += `\n
💰 PRESUPUESTO TOTAL ESTIMADO: ${formatPrice(totalPrice)}

📞 PRÓXIMOS PASOS:
------------------
1. Contactar al cliente en 2-4 horas (horario laboral)
2. Programar cita para evaluación presencial sin compromiso
3. Realizar evaluación técnica y medidas exactas
4. Elaborar presupuesto detallado personalizado
5. Presentar propuesta comercial con opciones de pago

⏰ OBJETIVO: Contactar dentro de las primeras 4 horas
🎯 META: Programar cita en las primeras 24 horas

---
Kalia Reformas - info@kaliareformas.com
Email generado automáticamente desde calculadora
`;

    return text;
  }

  // Main method to send calculator email via Vercel API
  async sendCalculatorEmail(formData, productList, totalPrice, instalationType, productQuantities) {
    const emailData = {
      // Email recipient (using test email for development)
      to: this.testEmail, // Change to this.companyEmail for production
      subject: `🏠 Nueva Consulta - ${formData.nombre} - ${totalPrice.toFixed(2)}€ (${instalationType})`,
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
      console.log('📧 Sending calculator email via Vercel API...', {
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
      
      console.log('✅ Calculator email sent successfully:', {
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
      console.error('❌ Error sending calculator email:', error);
      
      // Return detailed error information
      throw new Error(error.message || 'Error al enviar el email');
    }
  }

  // Optional: Send confirmation email to customer
  async sendCustomerConfirmation(formData, totalPrice, instalationType) {
    if (!formData.email) {
      console.log('No customer email provided, skipping confirmation');
      return { success: true, message: 'No customer email to send confirmation' };
    }

    // For now, just log that we would send a confirmation
    // You can implement this later if needed
    console.log('📬 Would send confirmation email to:', formData.email);
    return { success: true, message: 'Confirmation email skipped for now' };
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
      console.log('✅ API connection successful:', result);
      return { success: true, result };

    } catch (error) {
      console.error('❌ API connection failed:', error);
      return { success: false, error: error.message };
    }
  }
}

// Helper function for price formatting
function formatPrice(price) {
  return price.toFixed(2) + ' €';
}

// Export the service
export default EmailService;