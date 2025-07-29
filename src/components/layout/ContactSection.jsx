import React, { useState } from 'react';
import '../styles/contactSec.css';

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
          
          <form onSubmit={handleSubmit}>
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

              <div className="form-group">
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

              <div className="form-group">
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

              <div className="form-group">
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

            <p className="form-note">
              Nos pondremos en contacto con usted en un plazo de 1 a 2 días laborables.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;