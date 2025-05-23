import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/layout/HeroSection';
import FeaturesGeneral from '../components/sections/FeaturesGeneral';

// Import feature image if you have one
// import featureImage from '../assets/images/features-image.png';

const Home = () => {
  useEffect(() => {
    // Add any animation or initialization code here
    document.title = "Kalia | Reformas y Decoración";
  }, []);

  const features = [
    {
      heading: "Atención Personalizada",
      content: "Nos adaptamos a tus necesidades y preferencias para crear espacios que reflejen tu estilo personal.",
      svg: "verified"
    },
    {
      heading: "Calidad Garantizada", 
      content: "Utilizamos materiales de primera calidad y técnicas avanzadas para asegurar resultados duraderos.",
      svg: "groups"
    },
    {
      heading: "Precios Competitivos",
      content: "Ofrecemos presupuestos transparentes y ajustados para que puedas transformar tu hogar sin comprometer tu economía.",
      svg: "tools"
    },
    {
      heading: "Experiencia Comprobada",
      content: "Años de experiencia en el sector nos respaldan para ofrecer soluciones innovadoras y eficientes.",
      svg: "earth2"
    },
    {
      heading: "Asesoramiento Profesional",
      content: "Te guiamos en cada paso del proceso, desde la planificación hasta la ejecución final del proyecto.",
      svg: "books"
    },
    {
      heading: "Acabados Impecables",
      content: "Cuidamos cada detalle para garantizar un resultado final que supere tus expectativas.",
      svg: "frame"
    }
  ];

  return (
    <>
      {/* Hero Section Component */}
      <HeroSection />

      {/* Features Section with styling wrapper */}
      <div className="feature-section">
        <FeaturesGeneral
          title="Diseño y Calidad para su Hogar"
          subTitle="En Kalia Reformas y Decoración transformamos espacios en hogares que reflejan su estilo personal. Nuestro compromiso con la excelencia y atención al detalle nos distingue como líderes en reformas de cocina, montaje de muebles y servicios integrales de decoración."
          features={features}
          // src={featureImage} // uncomment if you have a feature image
          // alt="Kalia reformas y decoración, tu mejor elección" // uncomment if you have a feature image
        />
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