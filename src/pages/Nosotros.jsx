import React, { useState } from 'react';

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

        .form-group {
          position: relative;
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

        .form-input::placeholder, .form-textarea::placeholder {
          color: #6b7280;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
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
          background-color: #1e40af;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
        }

        .submit-button:hover:not(:disabled) {
          background-color: #1e3a8a;
          transform: translateY(-2px);
        }

        .submit-button:disabled {
          background-color: #9ca3af;
          cursor: not-allowed;
          transform: none;
        }

        .dark .submit-button {
          color: #404040;
          background-color: #FFD000;
        }

        .dark .submit-button:hover:not(:disabled) {
          background-color: #fbbf24;
        }

        .dark .submit-button:disabled {
          background-color: #6b7280;
          color: #9ca3af;
        }

        @media (min-width: 1536px) {
          .submit-button {
            font-size: 1rem;
          }
        }

        .submit-button:focus-visible {
          box-shadow: 0 0 0 2px #6b7280;
        }

        .dark .submit-button:focus-visible {
          box-shadow: 0 0 0 2px #e5e7eb;
        }

        /* Loading spinner */
        .spinner {
          width: 16px;
          height: 16px;
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

        /* Success message */
        .success-message {
          background-color: #dcfce7;
          border: 1px solid #16a34a;
          color: #166534;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .dark .success-message {
          background-color: rgba(22, 163, 74, 0.1);
          border-color: #22c55e;
          color: #4ade80;
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
    </>
  );
};

export default Nosotros;