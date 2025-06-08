// src/pages/Services.jsx - Complete services page matching the Astro design
import React, { useState } from 'react';

const Services = () => {
  const [formData, setFormData] = useState({
    apellido: '',
    nombre: '',
    email: '',
    telefono: '',
    message: ''
  });

  // Services data matching the HTML structure
  const services = [
    {
      id: 'montaje-de-muebles',
      title: 'Montaje de Muebles',
      image: '/src/assets/images/montaje-muebles-main.jpg',
      alt: 'Servicio Profesional de Montaje de Muebles | Precisión y Garantía',
      cardType: 'small'
    },
    {
      id: 'diseno-de-muebles',
      title: 'Diseño de Muebles',
      image: '/src/assets/images/realEstanteria1.jpg',
      alt: 'Servicio Profesional de Diseños de Muebles a Medida',
      cardType: 'wide'
    },
    {
      id: 'intalacion-cocinas-electrodomesticos',
      title: 'Instalación de Cocinas y Electrodomésticos',
      image: '/src/assets/images/realKitchen1.jpg',
      alt: 'Instalación de Cocinas y Electrodomésticos',
      cardType: 'wide'
    },
    {
      id: 'reformas-de-vivienda',
      title: 'Reformas de Vivienda',
      image: '/src/assets/images/reformas-vivienda2.jpg',
      alt: 'Reformas de Vivienda',
      cardType: 'small'
    },
    {
      id: 'instalacion-puertas-tarimaflotante-rodapies',
      title: 'Instalación de Puertas, Tarima Flotante y Rodapiés',
      image: '/src/assets/images/puertas-tarima-rodapies-main.jpg',
      alt: 'Instalación de Puertas, Tarima Flotante y Rodapiés',
      cardType: 'small'
    },
    {
      id: 'servicios-de-acabados',
      title: 'Servicios de Acabados',
      image: '/src/assets/images/acabados-main.jpg',
      alt: 'Servicios de Acabados',
      cardType: 'wide'
    },
    {
      id: 'manitas',
      title: 'Manitas',
      image: '/src/assets/images/manitas-main.jpg',
      alt: 'Servicio Profesional de Manitas',
      cardType: 'wide'
    }
  ];

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
    
    // Here you would integrate with emailjs
    // emailjs.send("service_8t7pklm","template_lnq0jea", formData)
    //   .then(function (response) {
    //     alert("Se ha enviado el mensaje satisfactoriamente, ¡Gracias por su preferencia!");
    //     console.log("Correo enviado", response);
    //   })
    //   .catch(function (error) {
    //     console.error("Error", error);
    //   });
    
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

        .services-page {
          font-family: 'Poppins', sans-serif;
          background-color: #F8F1E7;
          min-height: 100vh;
          padding-top: 7rem; /* Account for navbar */
        }

        .dark .services-page {
          background-color: #374151;
        }

        .services-header {
          max-width: 85rem;
          margin: 0 auto;
          padding: 2.5rem 1rem 0 1rem;
        }

        .services-title {
          font-family: 'Georgia', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 2rem;
        }

        .dark .services-title {
          color: #F8F1E7;
        }

        @media (min-width: 768px) {
          .services-title {
            font-size: 2.5rem;
          }
        }

        /* Services Grid */
        .services-grid {
          max-width: 85rem;
          margin: 0 auto;
          padding: 0 1rem 2.5rem 1rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        @media (min-width: 1280px) {
          .services-grid {
            gap: 2rem;
          }
        }

        /* Service Card Styles */
        .service-card {
          position: relative;
          display: flex;
          align-items: flex-end;
          height: 12rem;
          overflow: hidden;
          border-radius: 0.75rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          outline: none;
          transition: all 0.6s cubic-bezier(0.45, 0, 0.55, 1);
          text-decoration: none;
        }

        .service-card:focus-visible {
          ring: 2px solid #6b7280;
        }

        .dark .service-card:focus-visible {
          ring: 2px solid #e5e7eb;
        }

        .service-card.wide {
          grid-column: span 2;
        }

        @media (min-width: 768px) {
          .service-card {
            height: 20rem;
          }
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .service-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s cubic-bezier(0.45, 0, 0.55, 1);
        }

        .service-card:hover .service-image {
          transform: scale(1.1);
        }

        .service-overlay {
          pointer-events: none;
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(38, 38, 38, 0.8) 0%, transparent 50%, transparent 100%);
          opacity: 0.5;
        }

        .service-title {
          position: relative;
          margin-bottom: 0.75rem;
          margin-left: 1rem;
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 700;
          color: #fafafa;
          transition: transform 0.6s cubic-bezier(0.45, 0, 0.55, 1);
        }

        @media (min-width: 768px) {
          .service-title {
            margin-left: 1.25rem;
            font-size: 1.125rem;
          }
        }

        .service-card:hover .service-title {
          transform: scale(1.1);
        }

        .service-arrow {
          margin-left: 0.125rem;
          width: 0.75rem;
          height: 0.75rem;
          display: inline;
          padding-bottom: 0.125rem;
        }

        @media (min-width: 768px) {
          .service-arrow {
            width: 1rem;
            height: 1rem;
          }
        }

        /* Contact Section */
        .contact-section {
          max-width: 85rem;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }

        .contact-container {
          max-width: 42rem;
          margin: 0 auto;
        }

        @media (min-width: 1024px) {
          .contact-container {
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
          color: #000000;
          margin-bottom: 0.25rem;
        }

        .dark .contact-title {
          color: #F8F1E7;
        }

        @media (min-width: 768px) {
          .contact-title {
            font-size: 2.5rem;
          }
        }

        .contact-subtitle {
          color: #525252;
          margin-top: 0.25rem;
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
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
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

        .form-input, .form-textarea {
          display: block;
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid #d4d4d8;
          background-color: #fafafa;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #404040;
          transition: all 0.3s ease;
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: #71717a;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #d4d4d8;
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
          background-color: #3b82f6;
          cursor: pointer;
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
      `}</style>

      <div className="services-page">
        {/* Page Header */}
        <div className="services-header">
          <h1 className="services-title">
            Servicios
          </h1>
        </div>

        {/* Services Grid */}
        <section className="services-grid">
          {services.map((service, index) => {
            const cardClass = `service-card ${service.cardType === 'wide' ? 'wide' : ''}`;
            
            return (
              <a
                key={service.id}
                href={`/services/${service.id}`}
                className={cardClass}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="service-image"
                  draggable="false"
                  loading="lazy"
                />
                <div className="service-overlay"></div>
                <span className="service-title">
                  {service.title}
                  <svg 
                    className="service-arrow" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    width="24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <title></title>
                    <path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                  </svg>
                </span>
              </a>
            );
          })}
        </section>

        {/* Contact Section */}
        <section className="contact-section">
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

                <div onSubmit={handleSubmit}>
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

                  <div style={{ marginTop: '1rem', display: 'grid' }}>
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
        </section>
      </div>
    </>
  );
};

export default Services;