import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // Add any animation or initialization code here
    // Similar to the scripts in the Astro components
    document.title = "Kalia | Reformas y Decoración";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-container">
        <div className="hero-background"></div>
        
        <div className="hero-content-side">
          <div className="hero-content">
            <h1 className="brand-name">
              <span className="brand-highlight">Kalia</span><br /> Reformas<br />y Decoración
            </h1>
            
            <p className="brand-subtitle">
              Espacios excepcionales
            </p>
            
            <p className="tagline">
              <span>Diseño personalizado</span>
              <span className="tagline-bullet">•</span>
              <span>Calidad excepcional</span>
              <span className="tagline-bullet">•</span>
              <span>Precio inmejorable</span>
            </p>
            
            <div className="cta-container">
              <Link to="/calculadora" className="primary-button">
                <span className="button-text">CALCULAR PRESUPUESTO</span>
                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <p className="button-hint">¡Haz clic aquí para obtener tu presupuesto personalizado!</p>
              
              <a href="tel:603370840" className="call-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                603 37 08 40
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-image-side">
          <img src="/src/assets/images/HeroImg1.jpg" alt="Kalia Reformas interior design" className="hero-image-full" />
        </div>
      </section>

      {/* Features Section */}
      <div className="feature-section">
        <section className="mx-auto max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-12 2xl:max-w-full">
          {/* Section header with title and subtitle */}
          <div className="mb-8 text-center lg:mb-12">
            <h2 className="text-balance text-2xl font-bold text-[#000000] dark:text-[#000000] md:text-3xl lg:text-4xl font-georgia">
              Diseño y Calidad para su Hogar
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-[#000000] dark:text-[#000000] text-base sm:text-lg font-poppins">
              En Kalia Reformas y Decoración transformamos espacios en hogares que reflejan su estilo personal. Nuestro compromiso con la excelencia y atención al detalle nos distingue como líderes en reformas de cocina, montaje de muebles y servicios integrales de decoración.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 mx-auto max-w-5xl">
            {/* Service Card 1 */}
            <div className="feature-card group rounded-xl border border-neutral-200 bg-[#F8F1E7] p-5 sm:p-6 transition-all duration-300 hover:border-[#FFD000] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800/80 dark:hover:border-[#FFD000]">
              <div className="mb-4 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#FFD000]/20 text-[#FFD000] dark:bg-[#FFD000]/10 dark:text-[#FFD000]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                </svg>
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-[#000000] dark:text-[#F8F1E7] font-georgia">
                Atención Personalizada
              </h3>
              <p className="text-sm sm:text-base text-[#000000] dark:text-[#F8F1E7] font-poppins">
                Nos adaptamos a tus necesidades y preferencias para crear espacios que reflejen tu estilo personal.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="feature-card group rounded-xl border border-neutral-200 bg-[#F8F1E7] p-5 sm:p-6 transition-all duration-300 hover:border-[#FFD000] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800/80 dark:hover:border-[#FFD000]">
              <div className="mb-4 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#FFD000]/20 text-[#FFD000] dark:bg-[#FFD000]/10 dark:text-[#FFD000]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-[#000000] dark:text-[#F8F1E7] font-georgia">
                Calidad Garantizada
              </h3>
              <p className="text-sm sm:text-base text-[#000000] dark:text-[#F8F1E7] font-poppins">
                Utilizamos materiales de primera calidad y técnicas avanzadas para asegurar resultados duraderos.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="feature-card group rounded-xl border border-neutral-200 bg-[#F8F1E7] p-5 sm:p-6 transition-all duration-300 hover:border-[#FFD000] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800/80 dark:hover:border-[#FFD000]">
              <div className="mb-4 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#FFD000]/20 text-[#FFD000] dark:bg-[#FFD000]/10 dark:text-[#FFD000]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-[#000000] dark:text-[#F8F1E7] font-georgia">
                Precios Competitivos
              </h3>
              <p className="text-sm sm:text-base text-[#000000] dark:text-[#F8F1E7] font-poppins">
                Ofrecemos presupuestos transparentes y ajustados para que puedas transformar tu hogar sin arruinar tu economía.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Services Overview Section */}
      <div className="mt-16 py-10 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 rounded-xl shadow-md">
        <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
          <div className="mb-8 text-center">
            <h2 className="text-balance text-2xl font-bold text-[#000000] md:text-3xl lg:text-4xl font-georgia">
              Nuestros <span className="text-[#FFD000]">Servicios</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-[#000000] text-base font-poppins">
              Descubre nuestra amplia gama de servicios profesionales para transformar tu hogar
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Service Card 1 */}
            <Link to="/services/montaje-de-muebles" className="group block rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-[#FFD000] hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD000]/10 text-[#FFD000]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 font-georgia">Montaje de Muebles</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-poppins">Ensamblaje profesional de todo tipo de mobiliario con garantía y precisión.</p>
            </Link>

            {/* Service Card 2 */}
            <Link to="/services/diseno-de-muebles" className="group block rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-[#FFD000] hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD000]/10 text-[#FFD000]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 font-georgia">Diseño de Muebles a Medida</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-poppins">Creamos muebles únicos y personalizados que se adaptan a tu espacio y estilo.</p>
            </Link>

            {/* Service Card 3 */}
            <Link to="/services/intalacion-cocinas-electrodomesticos" className="group block rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-[#FFD000] hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD000]/10 text-[#FFD000]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 font-georgia">Instalación de Cocinas</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-poppins">Montaje de muebles de cocina e instalación de electrodomésticos con acabado profesional.</p>
            </Link>
          </div>

          {/* View All Services Button */}
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center justify-center gap-x-2 rounded-lg bg-[#FFD000] px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-yellow-400 hover:shadow-md">
              Ver todos los servicios
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="mx-auto max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#FFD000]">
          <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                ¿Listo para transformar tu hogar?
              </h2>
              <p className="mt-6 text-lg text-black">
                Contáctanos hoy mismo para un presupuesto sin compromiso y descubre cómo podemos hacer realidad tus ideas.
              </p>
              <div className="mt-10 flex justify-center gap-x-6">
                <Link to="/contact" className="rounded-lg bg-black px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-neutral-800">
                  Contáctanos
                </Link>
                <Link to="/calculadora" className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-black shadow-md transition-all duration-300 hover:bg-neutral-100">
                  Calcular presupuesto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



export default Home;

