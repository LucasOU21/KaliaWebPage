// Contact.jsx - Updated with ContactEmailService integration
import React, { useState } from 'react';
import ContactEmailService from '../services/contactEmailService'; // Fixed import
import '../styles/contactpage.css'; // Import the CSS file

const Contact = () => {
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

  // Initialize ContactEmailService (fixed)
  const contactEmailService = new ContactEmailService();

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
      console.log('Sending contact form via ContactEmailService:', formData);
      
      // Send email to Kalia team using ContactEmailService
      await contactEmailService.sendContactEmail(formData, 'contact');
      console.log('Contact email sent successfully');
      
      // Send confirmation email to customer (optional, will skip if no email)
      try {
        await contactEmailService.sendContactConfirmation(formData, 'contact');
        console.log('Contact confirmation email sent successfully');
      } catch (confirmationError) {
        console.warn('Contact confirmation email failed, but main email was sent:', confirmationError.message);
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
      console.error('Error sending contact form:', error);
      
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
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-wrapper">
          {/* Header */}
          <div className="contact-header">
            <h1 className="contact-title">
              Contáctanos
            </h1>
            <p className="contact-subtitle">
              ¿Tiene alguna pregunta o quiere hablar de un proyecto? Póngase en contacto con nosotros y déjenos elaborar la solución perfecta utilizando nuestras herramientas y servicios.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="form-container">
              <h2 className="form-title">
                Rellene el siguiente formulario
              </h2>

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

            {/* Contact Information */}
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

      {/* Success Notification */}
      {showSuccess && (
        <div className="success-notification">
          <svg
            className="success-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20,6 9,17 4,12"></polyline>
          </svg>
          
          <div className="success-content">
            <div className="success-title">¡Mensaje enviado!</div>
            <div className="success-message">
              Nos pondremos en contacto contigo pronto.
            </div>
          </div>
          
          <button 
            className="success-close"
            onClick={() => setShowSuccess(false)}
            aria-label="Cerrar notificación"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;