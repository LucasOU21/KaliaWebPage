// src/pages/Nosotros.jsx - Fixed layout with proper centering
import React, { useState } from 'react';

const Nosotros = () => {
  const [formData, setFormData] = useState({
    apellido: '',
    nombre: '',
    email: '',
    telefono: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate emailjs functionality
    console.log('Form submitted:', formData);
    
    alert("Se ha enviado el mensaje satisfactoriamente, ¡Gracias por su preferencia!");
    
    // Reset form
    setFormData({
      apellido: '',
      nombre: '',
      email: '',
      telefono: '',
      message: ''
    });
  };

  return (
    <>
      <style jsx>{`
        /* Import Google fonts */
        @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        /* Reset any potential margin/padding issues */
        * {
          box-sizing: border-box;
        }

        .nosotros-page {
          font-family: 'Poppins', sans-serif;
          background-color: #F8F1E7;
          min-height: 100vh;
          width: 100%;
          position: relative;
          /* Remove any potential margins */
          margin: 0;
          padding: 0;
          /* Ensure content doesn't overflow */
          overflow-x: hidden;
        }

        .dark .nosotros-page {
          background-color: #374151;
        }

        .nosotros-content {
          position: relative;
          background-color: #F8F1E7;
          width: 100%;
          min-height: 100vh;
          /* Reset margins and ensure proper positioning */
          margin: 0;
          padding: 0;
          /* Add top padding for navbar */
          padding-top: 5rem;
        }

        .dark .nosotros-content {
          background-color: #374151;
        }

        /* Remove the separate title spacer - padding is handled above */
        .title-spacer {
          display: none;
        }

        /* Container with proper constraints */
        .content-container {
          max-width: 85rem;
          margin: 0 auto;
          padding: 0 1rem;
          width: 100%;
          /* Ensure container doesn't push content off-screen */
          position: relative;
        }

        @media (min-width: 640px) {
          .content-container {
            padding: 0 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .content-container {
            padding: 0 2rem;
          }
        }

        @media (min-width: 1536px) {
          .content-container {
            max-width: 100%;
            padding: 0 4rem;
          }
        }

        /* Main Section with adjusted padding */
        .main-section {
          padding: 2rem 0 2.5rem 0;
          background-color: transparent;
          width: 100%;
          position: relative;
        }

        @media (min-width: 640px) {
          .main-section {
            padding: 3rem 0 4rem 0;
          }
        }

        @media (min-width: 1024px) {
          .main-section {
            padding: 2rem 0 3.5rem 0;
          }
        }

        .main-content {
          max-width: 48rem;
          margin: 0;
        }

        .main-title {
          margin-bottom: 1rem;
          font-size: 2.25rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #262626;
          font-family: 'Georgia', serif;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .main-title {
            font-size: 3rem;
          }
        }

        .dark .main-title {
          color: #e5e5e5;
        }

        .main-subtitle {
          margin-bottom: 2rem;
          max-width: 65ch;
          font-weight: normal;
          color: #404040;
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
        }

        @media (min-width: 640px) {
          .main-subtitle {
            font-size: 1.25rem;
          }
        }

        .dark .main-subtitle {
          color: #a3a3a3;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          font-weight: 700;
          color: #000000;
          outline: none;
          border: 1px solid transparent;
          background-color: #FFD000;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 1rem;
        }

        .cta-button:hover {
          background-color: #fbbf24;
          transform: translateY(-2px);
        }

        @media (min-width: 768px) {
          .cta-button {
            font-size: 1.125rem;
          }
        }

        @media (min-width: 1536px) {
          .cta-button {
            font-size: 1.25rem;
          }
        }

        /* Section styling with proper width constraints */
        .section {
          padding: 2.5rem 0;
          background-color: transparent;
          width: 100%;
          position: relative;
        }

        .section .content-container {
          display: grid;
          align-items: center;
          gap: 4rem;
          width: 100%;
        }

        @media (min-width: 640px) {
          .section {
            padding: 4rem 0;
          }
        }

        @media (min-width: 1024px) {
          .section .content-container {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .section {
            padding: 3.5rem 0;
          }
        }

        @media (min-width: 1280px) {
          .section .content-container {
            gap: 4rem;
          }
        }

        .section-title {
          margin-bottom: 1rem;
          font-size: 2.25rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #262626;
          font-family: 'Georgia', serif;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 3rem;
          }
        }

        .dark .section-title {
          color: #e5e5e5;
        }

        .section-content {
          margin-bottom: 1rem;
          max-width: 65ch;
          font-weight: normal;
          color: #262626;
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
        }

        @media (min-width: 640px) {
          .section-content {
            font-size: 1.125rem;
          }
        }

        .dark .section-content {
          color: #e5e5e5;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          margin-bottom: 1rem;
          max-width: 65ch;
          font-weight: normal;
          color: #262626;
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
        }

        @media (min-width: 640px) {
          .feature-item {
            font-size: 1.125rem;
          }
        }

        .dark .feature-item {
          color: #e5e5e5;
        }

        /* Image grid with proper constraints */
        .image-grid {
          margin-top: 2rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          width: 100%;
          max-width: 100%;
        }

        .grid-image {
          width: 100%;
          border-radius: 0.75rem;
          object-fit: cover;
          height: 200px;
          display: block;
        }

        @media (min-width: 768px) {
          .grid-image {
            height: 250px;
          }
        }

        .grid-image.offset {
          margin-top: 1rem;
        }

        @media (min-width: 1024px) {
          .grid-image.offset {
            margin-top: 2.5rem;
          }
        }

        .single-image {
          width: 100%;
          border-radius: 0.75rem;
          object-fit: cover;
          height: 300px;
          display: block;
        }

        @media (min-width: 768px) {
          .single-image {
            height: 400px;
          }
        }

        /* Contact Section */
        .contact-section {
          padding: 2.5rem 0;
          background-color: transparent;
          width: 100%;
          position: relative;
        }

        @media (min-width: 640px) {
          .contact-section {
            padding: 4rem 0;
          }
        }

        @media (min-width: 1024px) {
          .contact-section {
            padding: 3.5rem 0;
          }
        }

        .contact-container {
          max-width: 42rem;
          margin: 0 auto;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .contact-container {
            max-width: 80rem;
          }
        }

        .contact-header {
          text-align: center;
        }

        .contact-title {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #262626;
          font-family: 'Georgia', serif;
        }

        @media (min-width: 768px) {
          .contact-title {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
        }

        @media (min-width: 1024px) {
          .contact-title {
            line-height: 1.25;
          }
        }

        .dark .contact-title {
          color: #e5e5e5;
        }

        .contact-subtitle {
          margin-top: 0.25rem;
          color: #404040;
          font-family: 'Poppins', sans-serif;
        }

        .dark .contact-subtitle {
          color: #a3a3a3;
        }

        .contact-grid {
          margin-top: 3rem;
          display: grid;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
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
          width: 100%;
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

        .form-title {
          margin-bottom: 2rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: #404040;
          font-family: 'Poppins', sans-serif;
        }

        .dark .form-title {
          color: #d4d4d8;
        }

        .form-grid {
          display: grid;
          gap: 1rem;
          width: 100%;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          width: 100%;
        }

        @media (min-width: 640px) {
          .form-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .form-input, .form-textarea {
          display: block;
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
          background-color: #fafafa;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #374151;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: #6b7280;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #e5e7eb;
          box-shadow: 0 0 0 3px rgba(163, 163, 163, 0.1);
        }

        .dark .form-input, .dark .form-textarea {
          border-color: #525252;
          background-color: rgba(64, 64, 64, 0.3);
          color: #d4d4d8;
        }

        .dark .form-input::placeholder, .dark .form-textarea::placeholder {
          color: #a3a3a3;
        }

        .dark .form-input:focus, .dark .form-textarea:focus {
          box-shadow: 0 0 0 1px #fafafa;
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
          background-color: #1e40af;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
        }

        .submit-button:hover {
          background-color: #1e3a8a;
        }

        .dark .submit-button {
          color: #404040;
          background-color: #FFD000;
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
          font-family: 'Poppins', sans-serif;
        }

        .dark .form-note-text {
          color: #a3a3a3;
        }

        .contact-info {
          border-top: 1px solid #d4d4d8;
          border-bottom: 1px solid #d4d4d8;
          width: 100%;
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
          color: #1e40af;
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

        /* Ensure proper layout flow */
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>

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

                    <div>
                      <div className="form-grid">
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
                            />
                          </div>
                        </div>

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
                          />
                        </div>

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
                          />
                        </div>

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
                          ></textarea>
                        </div>
                      </div>

                      <div style={{ marginTop: '1rem' }}>
                        <button type="button" onClick={handleSubmit} className="submit-button">
                          Envíenos un mensaje
                        </button>
                      </div>

                      <div className="form-note">
                        <p className="form-note-text">
                          Nos pondremos en contacto con usted en un plazo de 1 a 2 días laborables.
                        </p>
                      </div>
                    </div>
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
    </>
  );
};

export default Nosotros;