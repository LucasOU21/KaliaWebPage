import React, { useState } from 'react';

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
      // Simulate form submission (replace with actual emailjs integration)
      console.log('Form submitted:', formData);
      
      // Here you would integrate with emailjs like in the original
      // emailjs.send("service_8t7pklm","template_lnq0jea", formData)
      //   .then(function (response) {
      //     setShowSuccess(true);
      //     console.log("Correo enviado", response);
      //   })
      //   .catch(function (error) {
      //     console.error("Error", error);
      //   });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
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
      console.error('Error:', error);
      alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx>{`
        /* Import Google fonts */
        @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        .contact-page {
          font-family: 'Poppins', sans-serif;
          background-color: #F8F1E7;
          min-height: 100vh;
          padding-top: 7rem; /* Account for navbar height */
        }

        .dark .contact-page {
          background-color: #374151;
        }

        .contact-container {
          max-width: 85rem;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }

        @media (min-width: 640px) {
          .contact-container {
            padding: 2.5rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .contact-container {
            padding: 3.5rem 2rem;
          }
        }

        .contact-wrapper {
          max-width: 42rem;
          margin: 0 auto;
        }

        @media (min-width: 1024px) {
          .contact-wrapper {
            max-width: 80rem;
          }
        }

        .contact-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact-title {
          font-family: 'Georgia', serif;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #262626;
          margin-bottom: 0.25rem;
          line-height: 1.2;
        }

        .dark .contact-title {
          color: #e5e5e5;
        }

        @media (min-width: 768px) {
          .contact-title {
            font-size: 2.5rem;
            line-height: 1.25;
          }
        }

        .contact-subtitle {
          color: #525252;
          margin-top: 0.25rem;
          line-height: 1.6;
        }

        .dark .contact-subtitle {
          color: #a3a3a3;
        }

        .contact-grid {
          margin-top: 3rem;
          display: grid;
          align-items: center;
          gap: 1.5rem;
        }

        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 4rem;
          }
        }

        .form-container {
          display: flex;
          flex-direction: column;
          border-radius: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        @media (min-width: 640px) {
          .form-container {
            padding: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .form-container {
            padding: 2rem;
          }
        }

        .dark .form-container {
          background: rgba(31, 41, 59, 0.8);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .form-title {
          margin-bottom: 2rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: #404040;
          font-family: 'Georgia', serif;
        }

        .dark .form-title {
          color: #d4d4d8;
        }

        .form-grid {
          display: grid;
          gap: 1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .form-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .form-group {
          position: relative;
        }

        .form-input,
        .form-textarea {
          display: block;
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
          background-color: #f9fafb;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #374151;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
        }

        .form-input.error,
        .form-textarea.error {
          border-color: #ef4444;
          background-color: #fef2f2;
        }

        .dark .form-input.error,
        .dark .form-textarea.error {
          border-color: #f87171;
          background-color: rgba(239, 68, 68, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #6b7280;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .dark .form-input,
        .dark .form-textarea {
          border-color: #4b5563;
          background-color: rgba(75, 85, 99, 0.3);
          color: #d1d5db;
        }

        .dark .form-input::placeholder,
        .dark .form-textarea::placeholder {
          color: #9ca3af;
        }

        .dark .form-input:focus,
        .dark .form-textarea:focus {
          border-color: #60a5fa;
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 6rem;
        }

        .error-message {
          color: #ef4444;
          font-size: 0.75rem;
          margin-top: 0.25rem;
          font-weight: 500;
        }

        .dark .error-message {
          color: #f87171;
        }

        .submit-button {
          display: inline-flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          font-weight: 700;
          color: white;
          outline: none;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          background-color: #3b82f6;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
        }

        .submit-button:hover:not(:disabled) {
          background-color: #1e3a8a;
          transform: translateY(-1px);
        }

        .dark .submit-button {
          color: #404040;
          background-color: #eab308;
        }

        .dark .submit-button:hover:not(:disabled) {
          background-color: #fbbf24;
        }

        @media (min-width: 1536px) {
          .submit-button {
            font-size: 1rem;
          }
        }

        .submit-button:disabled {
          pointer-events: none;
          opacity: 0.5;
        }

        .submit-button:focus-visible {
          box-shadow: 0 0 0 2px #6b7280;
        }

        .dark .submit-button:focus-visible {
          box-shadow: 0 0 0 2px #e5e7eb;
        }

        .form-note {
          margin-top: 0.75rem;
          text-align: center;
        }

        .form-note-text {
          font-size: 0.75rem;
          color: #525252;
        }

        .dark .form-note-text {
          color: #a3a3a3;
        }

        .contact-info {
          border-top: 1px solid #d4d4d8;
          border-bottom: 1px solid #d4d4d8;
        }

        .dark .contact-info {
          border-color: #404040;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 0;
        }

        .contact-icon {
          height: 1.25rem;
          width: 1.25rem;
          flex-shrink: 0;
          color: #3b82f6;
        }

        .contact-text {
          color: #404040;
          font-family: 'Poppins', sans-serif;
        }

        .dark .contact-text {
          color: #d4d4d8;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        /* Loading spinner */
        .spinner {
          width: 1.25rem;
          height: 1.25rem;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Success Message Styles */
        .success-notification {
          position: fixed;
          top: 2rem;
          right: 2rem;
          background: #10b981;
          color: white;
          border-radius: 0.5rem;
          padding: 1rem 1.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          max-width: 24rem;
          animation: slideInRight 0.3s ease-out;
        }

        .dark .success-notification {
          background: #059669;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .success-icon {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .success-content {
          flex: 1;
        }

        .success-title {
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .success-message {
          font-size: 0.75rem;
          opacity: 0.9;
          line-height: 1.4;
        }

        .success-close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 0.25rem;
          opacity: 0.7;
          transition: opacity 0.2s ease;
        }

        .success-close:hover {
          opacity: 1;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .contact-title {
            font-size: 1.75rem;
          }

          .form-container {
            padding: 1.25rem;
          }

          .contact-container {
            padding: 2rem 1rem;
          }

          .success-notification {
            top: 1rem;
            right: 1rem;
            left: 1rem;
            max-width: none;
          }
        }
      `}</style>

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
    </>
  );
};

export default Contact;