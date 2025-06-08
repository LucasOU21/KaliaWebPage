// src/components/sections/ContactSection.jsx - Contact form component matching the design
import React, { useState } from 'react';

const ContactSection = ({ simplified = false }) => {
  const [formData, setFormData] = useState({
    apellidos: '',
    nombres: '',
    email: '',
    telefono: '',
    detalles: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo en un plazo de 1 a 2 días laborables.');
      
      // Reset form
      setFormData({
        apellidos: '',
        nombres: '',
        email: '',
        telefono: '',
        detalles: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .contact-section {
          background-color: #F8F1E7;
          font-family: 'Poppins', sans-serif;
          padding: 4rem 1rem;
        }

        .dark .contact-section {
          background-color: #374151;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }

        .contact-info {
          text-align: center;
        }

        @media (min-width: 1024px) {
          .contact-info {
            text-align: left;
          }
        }

        .contact-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #2C3E50;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .dark .contact-title {
          color: #F8F1E7;
        }

        .contact-description {
          font-size: 1.1rem;
          color: #5D6D7E;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .dark .contact-description {
          color: #D1D5DB;
        }

        .contact-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background-color: #E8F4FD;
          color: #2C3E50;
          padding: 1.25rem 2rem;
          border-radius: 0.75rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          font-size: 1rem;
        }

        @media (min-width: 1024px) {
          .contact-cta {
            justify-content: flex-start;
          }
        }

        .contact-cta:hover {
          background-color: #D4EDDA;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .dark .contact-cta {
          background-color: rgba(75, 85, 99, 0.8);
          color: #F8F1E7;
        }

        .dark .contact-cta:hover {
          background-color: rgba(107, 114, 128, 0.9);
        }

        .form-container {
          background: white;
          border-radius: 1rem;
          padding: 2.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .dark .form-container {
          background: #1F2937;
          border-color: rgba(255, 255, 255, 0.1);
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2C3E50;
          margin-bottom: 2rem;
          text-align: center;
        }

        .dark .form-title {
          color: #F8F1E7;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid #E8E8E8;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #F8F9FA;
          color: #2C3E50;
          font-family: 'Poppins', sans-serif;
        }

        .form-input:focus {
          outline: none;
          border-color: #3498DB;
          background: white;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }

        .form-input::placeholder {
          color: #95A5A6;
          font-weight: 400;
        }

        .dark .form-input {
          background: #374151;
          border-color: #4B5563;
          color: #F8F1E7;
        }

        .dark .form-input:focus {
          border-color: #60A5FA;
          background: #4B5563;
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
        }

        .dark .form-input::placeholder {
          color: #9CA3AF;
        }

        .form-textarea {
          height: 120px;
          resize: vertical;
          min-height: 100px;
          max-height: 300px;
        }

        .submit-button {
          width: 100%;
          background: #1B4F72;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 0.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-button:hover {
          background: #154360;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(27, 79, 114, 0.3);
        }

        .submit-button:disabled {
          background: #95A5A6;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .form-note {
          font-size: 0.9rem;
          color: #7F8C8D;
          text-align: center;
          margin-top: 1rem;
          line-height: 1.4;
        }

        .dark .form-note {
          color: #9CA3AF;
        }

        /* Loading spinner */
        .spinner {
          width: 20px;
          height: 20px;
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
            font-size: 2rem;
          }

          .form-container {
            padding: 2rem 1.5rem;
          }

          .contact-section {
            padding: 3rem 1rem;
          }
        }
      `}</style>

      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="contact-title">Contáctanos</h2>
            <p className="contact-description">
              ¿Tiene alguna pregunta o quiere hablar de un proyecto? Póngase en contacto con nosotros y déjenos elaborar la solución perfecta utilizando nuestras herramientas y servicios.
            </p>
            
            <button 
              className="contact-cta"
              onClick={() => window.open('mailto:info@kaliareformas.com', '_blank')}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Póngase en contacto con nosotros...
            </button>
          </div>

          {/* Contact Form */}
          <div className="form-container">
            <h3 className="form-title">Rellene el siguiente formulario</h3>
            
            <div>
              <div className="form-grid">
                <div className="form-group">
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    placeholder="Apellidos"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    placeholder="Nombres"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Número de teléfono"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <textarea
                    name="detalles"
                    value={formData.detalles}
                    onChange={handleChange}
                    placeholder="Detalles"
                    className="form-input form-textarea"
                    required
                  ></textarea>
                </div>
              </div>

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

              <p className="form-note">
                Nos pondremos en contacto con usted en un plazo de 1 a 2 días laborables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;