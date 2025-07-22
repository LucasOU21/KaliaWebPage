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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual emailjs integration)
      console.log('Form submitted:', formData);
      
      // Here you would integrate with emailjs like in the original
      // emailjs.send("service_8t7pklm","template_lnq0jea", formData)
      //   .then(function (response) {
      //     alert("Se ha enviado el mensaje satisfactoriamente, ¡Gracias por su preferencia!");
      //     console.log("Correo enviado", response);
      //   })
      //   .catch(function (error) {
      //     console.error("Error", error);
      //   });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert("Se ha enviado el mensaje satisfactoriamente, ¡Gracias por su preferencia!");
      
      // Reset form
      setFormData({
        apellido: '',
        nombre: '',
        email: '',
        telefono: '',
        message: ''
      });
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

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #6b7280;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #e5e7eb;
          box-shadow: 0 0 0 3px rgba(163, 163, 163, 0.1);
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
          box-shadow: 0 0 0 1px #fafafa;
        }

        .form-textarea {
          resize: vertical;
          min-height: 6rem;
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

        .submit-button:hover {
          background-color: #1e3a8a;
        }

        .dark .submit-button {
          color: #404040;
          background-color: #eab308;
        }

        .dark .submit-button:hover {
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

                <div>
                  <div className="form-grid">
                    {/* Name Fields Row */}
                    <div className="form-row">
                      <div>
                        <label htmlFor="apellido" className="sr-only">Apellidos</label>
                        <input
                          type="text"
                          name="apellido"
                          id="apellido"
                          value={formData.apellido}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Apellidos"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="nombre" className="sr-only">Nombres</label>
                        <input
                          type="text"
                          name="nombre"
                          id="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Nombres"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        autoComplete="email"
                        className="form-input"
                        placeholder="Email"
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="telefono" className="sr-only">Número de teléfono</label>
                      <input
                        type="tel"
                        name="telefono"
                        id="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Número de teléfono"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="sr-only">Detalles</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-textarea"
                        placeholder="Detalles"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div style={{ marginTop: '1rem' }}>
                    <button 
                      type="button"
                      onClick={handleSubmit}
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
                </div>
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
      </div>
    </>
  );
};

export default Contact;
                