// src/pages/Services.jsx - Services listing page with clean image cards
import React, { useState, useEffect } from 'react';

const Services = () => {
  // Services data matching the content structure
  const servicesData = [
    {
      id: 'montaje-de-muebles',
      data: {
        title: 'Montaje de Muebles',
        cardTitle: 'Montaje de Muebles',
        main: {
          id: 1,
          imgCard: '/src/assets/images/montaje-muebles-main.jpg',
          imgAlt: 'Servicio Profesional de Montaje de Muebles'
        }
      }
    },
    {
      id: 'diseno-de-muebles',
      data: {
        title: 'Diseño de Muebles',
        cardTitle: 'Diseño de Muebles',
        main: {
          id: 2,
          imgCard: '/src/assets/images/realEstanteria1.jpg',
          imgAlt: 'Servicio Profesional de Diseños de Muebles a Medida'
        }
      }
    },
    {
      id: 'intalacion-cocinas-electrodomesticos',
      data: {
        title: 'Instalación de Cocinas y Electrodomésticos',
        cardTitle: 'Instalación de Cocinas y Electrodomésticos',
        main: {
          id: 3,
          imgCard: '/src/assets/images/realKitchen1.jpg',
          imgAlt: 'Instalación de Cocinas y Electrodomésticos'
        }
      }
    },
    {
      id: 'reformas-de-vivienda',
      data: {
        title: 'Reformas de Vivienda',
        cardTitle: 'Reformas de Vivienda',
        main: {
          id: 4,
          imgCard: '/src/assets/images/reformas-vivienda2.jpg',
          imgAlt: 'Reformas de Vivienda'
        }
      }
    },
    {
      id: 'instalacion-puertas-tarimaflotante-rodapies',
      data: {
        title: 'Instalación de Puertas, Tarima Flotante y Rodapiés',
        cardTitle: 'Instalación de Puertas, Tarima Flotante y Rodapiés',
        main: {
          id: 5,
          imgCard: '/src/assets/images/puertas-tarima-rodapies-main.jpg',
          imgAlt: 'Instalación de Puertas, Tarima Flotante y Rodapiés'
        }
      }
    },
    {
      id: 'servicios-de-acabados',
      data: {
        title: 'Servicios de Acabados',
        cardTitle: 'Servicios de Acabados',
        main: {
          id: 6,
          imgCard: '/src/assets/images/acabados-main.jpg',
          imgAlt: 'Servicios de Acabados'
        }
      }
    },
    {
      id: 'manitas',
      data: {
        title: 'Manitas',
        cardTitle: 'Manitas',
        main: {
          id: 7,
          imgCard: '/src/assets/images/manitas-main.jpg',
          imgAlt: 'Servicio Profesional de Manitas'
        }
      }
    }
  ];

  const [services, setServices] = useState([]);

  // Load services data on component mount
  useEffect(() => {
    // Sort by main.id as in the original Astro file
    const sortedServices = [...servicesData].sort((a, b) => a.data.main.id - b.data.main.id);
    setServices(sortedServices);
    
    // Set page title
    document.title = 'Servicios | Kalia Reformas';
  }, []);

  // Handle navigation to individual service pages
  const navigateToService = (serviceId) => {
    console.log(`Navigate to: /services/${serviceId}`);
    // In a real app: navigate(`/services/${serviceId}`);
  };

  // Clean service card component - just image and title with hover effects
  const ServiceCard = ({ service, isWide = false }) => {
    const cardClass = isWide 
      ? "col-span-1 sm:col-span-2 md:col-span-2 wide-card" 
      : "col-span-1";

    return (
      <div className={`service-card group ${cardClass}`}>
        <div 
          className="block h-full cursor-pointer"
          onClick={() => navigateToService(service.id)}
        >
          <div className={`card-container relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 dark:bg-neutral-800 group`} style={{ height: isWide ? '280px' : '320px' }}>
            {/* Image with overlay effects */}
            <div className="relative h-full overflow-hidden">
              <img
                src={service.data.main.imgCard}
                alt={service.data.main.imgAlt}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110"
                loading="lazy"
                draggable="false"
              />
              
              {/* Dark overlay that appears on hover */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />
              
              {/* Title overlay */}
              <div className="absolute inset-0 flex items-end p-6">
                <div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold text-white font-georgia mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {service.data.cardTitle}
                  </h3>
                  
                  {/* Click indicator */}
                  <div className="flex items-center text-[#FFD000] font-medium font-poppins text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                    <span>Ver detalles</span>
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subtle title at bottom when not hovered */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-lg font-semibold text-white font-georgia">
                  {service.data.cardTitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Contact form component
  const ContactForm = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      telefono: '',
      email: '',
      servicio: '',
      mensaje: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Here you would handle the form submission
      alert('Gracias por tu mensaje. Te contactaremos pronto.');
    };

    const handleChange = (e) => {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };

    return (
      <section className="bg-white dark:bg-neutral-800 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4 font-georgia">
              Solicita tu Presupuesto
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-poppins">
              ¿Interesado en alguno de nuestros servicios? Contáctanos para recibir una valoración gratuita y sin compromiso.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 font-poppins">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FFD000] focus:border-transparent dark:bg-neutral-700 dark:border-neutral-600 dark:text-white font-poppins"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 font-poppins">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FFD000] focus:border-transparent dark:bg-neutral-700 dark:border-neutral-600 dark:text-white font-poppins"
                  placeholder="603 37 08 40"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 font-poppins">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FFD000] focus:border-transparent dark:bg-neutral-700 dark:border-neutral-600 dark:text-white font-poppins"
                placeholder="tu@email.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="servicio" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 font-poppins">
                Servicio de Interés
              </label>
              <select
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FFD000] focus:border-transparent dark:bg-neutral-700 dark:border-neutral-600 dark:text-white font-poppins"
              >
                <option value="">Selecciona un servicio</option>
                <option value="montaje-muebles">Montaje de Muebles</option>
                <option value="diseno-muebles">Diseño de Muebles</option>
                <option value="cocinas-electrodomesticos">Instalación de Cocinas y Electrodomésticos</option>
                <option value="reformas-vivienda">Reformas de Vivienda</option>
                <option value="puertas-tarima-rodapies">Instalación de Puertas, Tarima Flotante y Rodapiés</option>
                <option value="acabados">Servicios de Acabados</option>
                <option value="manitas">Manitas</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="mensaje" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 font-poppins">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FFD000] focus:border-transparent dark:bg-neutral-700 dark:border-neutral-600 dark:text-white font-poppins"
                placeholder="Cuéntanos sobre tu proyecto..."
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#FFD000] text-black font-semibold rounded-lg hover:bg-[#E0C000] transition-colors duration-300 font-poppins"
              >
                Enviar Solicitud
              </button>
              <a
                href="tel:603370840"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#FFD000] text-[#FFD000] font-semibold rounded-lg hover:bg-[#FFD000] hover:text-black transition-colors duration-300 font-poppins"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llamar Ahora
              </a>
            </div>
          </form>
        </div>
      </section>
    );
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        .font-georgia {
          font-family: 'Georgia', serif;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        /* Page background */
        .services-page {
          background-color: #F8F1E7;
          min-height: 100vh;
        }

        .dark .services-page {
          background-color: #374151;
        }

        /* Enhanced hover effects for service cards */
        .service-card {
          perspective: 1000px;
        }

        .service-card:hover {
          transform: translateY(-8px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Ensure consistent card heights */
        .service-card .card-container {
          height: 320px;
        }

        /* Wide cards for alternating layout */
        .service-card.wide-card .card-container {
          height: 280px;
        }

        /* Smooth image scaling and overlay effects */
        .service-card img {
          transition: transform 600ms cubic-bezier(0.45, 0, 0.55, 1);
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }

        .service-card:hover img {
          transform: scale(1.1);
        }

        /* Custom shadow effects */
        .service-card:hover > div > div {
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 208, 0, 0.1);
        }

        /* Responsive grid adjustments */
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .service-card .card-container {
            height: 280px;
          }
          
          .service-card.wide-card .card-container {
            height: 280px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .service-card .card-container {
            height: 300px;
          }
        }

        /* Focus states for accessibility */
        .service-card:focus-within > div > div {
          outline: 3px solid #FFD000;
          outline-offset: 2px;
        }

        /* Form styling */
        input:focus, select:focus, textarea:focus {
          box-shadow: 0 0 0 3px rgba(255, 208, 0, 0.1);
        }

        /* Loading state for images */
        img {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }

        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .dark img {
          background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
          background-size: 200% 100%;
        }

        /* Smooth animations for text overlays */
        .service-card h3, .service-card div {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <div className="services-page">
        <div className="max-w-[85rem] mx-auto px-4 py-10 pt-28 sm:px-6 lg:px-8 lg:py-14 lg:pt-32 2xl:max-w-full">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 mb-4 font-georgia">
              Nuestros Servicios
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-poppins">
              Descubre la gama completa de servicios profesionales que ofrecemos para transformar tu hogar
            </p>
          </div>
          
          {/* Services Grid */}
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 services-grid mb-16">
            {services.map((service, index) => {
              // Alternate card sizes like in the original Astro file
              const position = index % 4;
              const isWide = position === 1 || position === 2;
              
              return (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  isWide={isWide}
                />
              );
            })}
          </section>
        </div>
        
        {/* Contact Form */}
        <ContactForm />
      </div>
    </>
  );
};

export default Services;