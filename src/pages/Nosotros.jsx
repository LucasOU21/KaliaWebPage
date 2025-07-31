// Complete Nosotros.jsx with EmailService integration
import React, { useState } from 'react';
import EmailService from '../services/emailService'; // Add EmailService import
import '../styles/nosotros.css';

const Nosotros = () => {
  const [formData, setFormData] = useState({
    apellido: '',
    nombre: '',
    email: '',
    telefono: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Initialize EmailService
  const emailService = new EmailService();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if at least apellido OR nombre is filled
    if (!formData.apellido.trim() && !formData.nombre.trim()) {
      newErrors.name = 'Debe ingresar al menos su apellido o nombre';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingrese un email válido';
    }

    // Phone validation
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!/^\+?[\d\s\-\(\)]{9,}$/.test(formData.telefono.trim())) {
      newErrors.telefono = 'Ingrese un número de teléfono válido';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Sending nosotros contact form via EmailService:', formData);
      
      // Send email to Kalia team
      await emailService.sendContactEmail(formData, 'nosotros');
      console.log('Nosotros contact email sent successfully');
      
      // Send confirmation email to customer (optional, will skip if no email)
      try {
        await emailService.sendContactConfirmation(formData, 'nosotros');
        console.log('Nosotros confirmation email sent successfully');
      } catch (confirmationError) {
        console.warn('Nosotros confirmation email failed, but main email was sent:', confirmationError.message);
        // Don't fail the whole process if confirmation fails
      }
      
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        apellido: '',
        nombre: '',
        email: '',
        telefono: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending nosotros contact form:', error);
      
      // Show user-friendly error message
      const errorMessage = error.message.includes('Error de autenticación') 
        ? 'Error de configuración del servidor. Por favor, contacte directamente a info@kaliareformas.com'
        : 'Error al enviar el mensaje. Por favor, inténtalo de nuevo o contacta directamente a info@kaliareformas.com';
        
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="nosotros-page">
      <div className="nosotros-content">
        {/* Main Hero Section */}
        <section className="main-section">
          <div className="content-container">
            <div className="main-content">
              <h1 className="main-title">
                Kalia | Reformas y decoración
              </h1>
              <p className="main-subtitle">
                Transformamos hogares en espacios únicos y funcionales. Somos especialistas en reformas de cocina, diseño de mobiliario personalizado y servicios integrales en Madrid. Brindamos soluciones modernas y eficientes adaptadas a las necesidades de cada familia, con un firme compromiso con la calidad y la satisfacción del cliente.
              </p>
              <div>
                <a href="/contact" className="cta-button">
                  Contáctanos
                  <svg className="h-4 w-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section">
          <div className="content-container">
            <div>
              <h2 className="section-title">
                ¿Por qué elegirnos?
              </h2>
              <ul className="feature-list">
                <li className="feature-item">
                  • Montaje profesional de muebles Ikea, Leroy Merlin y otras marcas.
                </li>
                <li className="feature-item">
                  • Diseños de muebles a medida para cualquier espacio.
                </li>
                <li className="feature-item">
                  • Reformas de vivienda y acabados de alta calidad.
                </li>
                <li className="feature-item">
                  • Instalación de cocinas, puertas, tarima flotante y electrodomésticos.
                </li>
                <li className="feature-item">
                  • Servicio de manitas para pequeñas reparaciones y montajes.
                </li>
              </ul>
            </div>
            <div className="image-grid">
              <img 
                src="/images/porque-elegirnos-1.jpg" 
                alt="Cocina blanca con muebles de estilo moderno" 
                className="grid-image"
                draggable="false"
                loading="lazy"
              />
              <img 
                src="/images/porque-elegirnos-2.jpg" 
                alt="Baño con muebles de estilo moderno" 
                className="grid-image offset"
                draggable="false"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section">
          <div className="content-container">
            <img 
              src="/images/experiencia-profesionalismo.jpg" 
              alt="experiencia y profesionalismo" 
              className="single-image"
              draggable="false"
              loading="lazy"
            />
            <div>
              <h2 className="section-title">
                Experiencia y profesionalismo
              </h2>
              <p className="section-content">
                Contamos con un equipo de expertos en reformas y decoración con años de experiencia en el sector. Ya sea que necesites renovar completamente tu cocina, instalar muebles a medida o realizar reparaciones en tu hogar, garantizamos un trabajo impecable y profesional.
              </p>
            </div>
          </div>
        </section>

        {/* Personalized Solutions Section */}
        <section className="section">
          <div className="content-container">
            <div>
              <h2 className="section-title">
                Soluciones personalizadas y un servicio integral
              </h2>
              <p className="section-content">
                Entendemos que cada cliente es único, por eso diseñamos proyectos adaptados a tus preferencias, presupuesto y estilo de vida. Nos aseguramos de que cada detalle, desde los materiales hasta el diseño final, refleje tus expectativas. Ofrecemos una amplia gama de servicios para que no tengas que preocuparte por nada. Desde la reforma completa de tu cocina hasta el montaje de muebles, pintura, electricidad y más, somos tu solución integral para cualquier proyecto en el hogar.
              </p>
            </div>
            <div className="image-grid">
              <img 
                src="/images/soluciones-personalizadas-1.png" 
                alt="Soluciones personalizadas y un servicio integral - imagen 1" 
                className="grid-image"
                draggable="false"
                loading="lazy"
              />
              <img 
                src="/images/soluciones-personalizadas-3.png" 
                alt="Soluciones personalizadas y un servicio integral - imagen 2" 
                className="grid-image offset"
                draggable="false"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="content-container">
            <div className="contact-container">
              <div className="contact-header">
                <h1 className="contact-title">
                  Contáctanos
                </h1>
                <p className="contact-subtitle">
                  ¿Tiene alguna pregunta o quiere hablar de un proyecto? Póngase en contacto con nosotros y déjenos elaborar la solución perfecta utilizando nuestras herramientas y servicios.
                </p>
              </div>

              <div className="contact-grid">
                <div className="form-container">
                  <h2 className="form-title">
                    Rellene el siguiente formulario
                  </h2>

                  {/* Success Message */}
                  {showSuccess && (
                    <div className="success-message">
                      ¡Mensaje enviado exitosamente! Nos pondremos en contacto con usted en un plazo de 1 a 2 días laborables.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                      {/* Name Fields Row */}
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="apellido" className="sr-only">Apellidos</label>
                          <input
                            type="text"
                            name="apellido"
                            id="apellido"
                            value={formData.apellido}
                            onChange={handleInputChange}
                            className={`form-input ${errors.name ? 'error' : ''}`}
                            placeholder="Apellidos"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="nombre" className="sr-only">Nombres</label>
                          <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className={`form-input ${errors.name ? 'error' : ''}`}
                            placeholder="Nombres"
                          />
                        </div>
                      </div>
                      {errors.name && (
                        <div className="error-message" style={{ gridColumn: '1 / -1' }}>
                          {errors.name}
                        </div>
                      )}

                      {/* Email Field */}
                      <div className="form-group">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          autoComplete="email"
                          className={`form-input ${errors.email ? 'error' : ''}`}
                          placeholder="Email"
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                      </div>

                      {/* Phone Field */}
                      <div className="form-group">
                        <label htmlFor="telefono" className="sr-only">Número de teléfono</label>
                        <input
                          type="tel"
                          name="telefono"
                          id="telefono"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          className={`form-input ${errors.telefono ? 'error' : ''}`}
                          placeholder="Número de teléfono"
                        />
                        {errors.telefono && <div className="error-message">{errors.telefono}</div>}
                      </div>

                      {/* Message Field */}
                      <div className="form-group">
                        <label htmlFor="message" className="sr-only">Detalles</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`form-textarea ${errors.message ? 'error' : ''}`}
                          placeholder="Detalles de su proyecto o consulta..."
                        ></textarea>
                        {errors.message && <div className="error-message">{errors.message}</div>}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div style={{ marginTop: '1rem' }}>
                      <button 
                        type="submit"
                        className="submit-button"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="spinner"></div>
                            Enviando...
                          </>
                        ) : (
                          'Envíenos un mensaje'
                        )}
                      </button>
                    </div>

                    {/* Form Note */}
                    <div className="form-note">
                      <p className="form-note-text">
                        Nos pondremos en contacto con usted en un plazo de 1 a 2 días laborables.
                      </p>
                    </div>
                  </form>
                </div>

                <div className="contact-info">
                  <div className="contact-item">
                    <svg 
                      className="contact-icon" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"></path>
                    </svg>
                    <p className="contact-text">
                      Póngase en contacto con nosotros...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nosotros;