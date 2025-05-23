// src/components/layout/FeaturesGeneral.jsx
import React, { useEffect } from 'react';

// Icon components matching the Astro version exactly
const ExperienceIcon = () => (
  <svg className="mt-1 h-8 w-8 flex-shrink-0 fill-primary-500 dark:fill-secondary-500" height="48" viewBox="0 -960 960 960" width="48">
    <title></title>
    <path d="M480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm-.351-60Q505-540 522.5-557.149t17.5-42.5Q540-625 522.649-642.5t-43-17.5Q454-660 437-642.649t-17 43Q420-574 437.149-557t42.5 17ZM240-240v-76q0-27 17.5-47.5T300-397q42-22 86.943-32.5 44.942-10.5 93-10.5Q528-440 573-429.5t87 32.5q25 13 42.5 33.5T720-316v76H240Zm240-140q-47.546 0-92.773 13T300-328v28h360v-28q-42-26-87.227-39-45.227-13-92.773-13Zm0-220Zm0 300h180-360 180ZM140-80q-24 0-42-18t-18-42v-172h60v172h172v60H140ZM80-648v-172q0-24 18-42t42-18h172v60H140v172H80ZM648-80v-60h172v-172h60v172q0 24-18 42t-42 18H648Zm172-568v-172H648v-60h172q24 0 42 18t18 42v172h-60Z"></path>
  </svg>
);

const PersonalizedIcon = () => (
  <svg className="mt-1 h-8 w-8 flex-shrink-0 fill-primary-500 dark:fill-secondary-500" height="48" viewBox="0 -960 960 960" width="48">
    <title></title>
    <path d="m150-400 82-80-82-82-80 82 80 80Zm573-10 87-140 88 140H723Zm-243-70q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.351-180Q455-660 437.5-642.851t-17.5 42.5Q420-575 437.351-557.5t43 17.5Q506-540 523-557.351t17-43Q540-626 522.851-643t-42.5-17ZM480-600ZM0-240v-53q0-39.464 42-63.232T150.398-380q12.158 0 23.38.5T196-377.273q-8 17.273-12 34.842-4 17.57-4 37.431v65H0Zm240 0v-65q0-65 66.5-105T480-450q108 0 174 40t66 105v65H240Zm570-140q67.5 0 108.75 23.768T960-293v53H780v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5Zm-330.2-10Q400-390 350-366q-50 24-50 61v5h360v-6q0-36-49.5-60t-130.7-24Zm.2 90Z"></path>
  </svg>
);

const IntegralServicesIcon = () => (
  <svg className="mt-1 h-8 w-8 flex-shrink-0 fill-primary-500 dark:fill-secondary-500" height="48" viewBox="0 -960 960 960" width="48">
    <title></title>
    <path d="M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"></path>
  </svg>
);

const SmartSavingsIcon = () => (
  <svg className="mt-1 h-7 w-7 flex-shrink-0 text-primary-500 hs-tab-active:text-primary-500 dark:text-secondary-500 dark:hs-tab-active:text-secondary-500 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <title></title>
    <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"></path>
  </svg>
);

const QualityGuaranteedIcon = () => (
  <svg className="mt-1 h-8 w-8 flex-shrink-0 fill-primary-500 dark:fill-secondary-500" height="48" viewBox="0 -960 960 960" width="48">
    <title></title>
    <path d="m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm27-79 107-45 110 45 67-100 117-30-12-119 81-92-81-94 12-119-117-28-69-100-108 45-110-45-67 100-117 28 12 119-81 94 81 92-12 121 117 28 70 100Zm107-341Zm-43 133 227-225-45-41-182 180-95-99-46 45 141 140Z"></path>
  </svg>
);

const TrustIcon = () => (
  <svg className="mt-2 h-7 w-7 flex-shrink-0 text-primary-500 dark:text-secondary-500" height="32" viewBox="0 0 24 24" width="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <title></title>
    <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path>
  </svg>
);

// Icon mapping
const iconMap = {
  experience: ExperienceIcon,
  personalized: PersonalizedIcon,
  integral: IntegralServicesIcon,
  savings: SmartSavingsIcon,
  quality: QualityGuaranteedIcon,
  trust: TrustIcon,
};

const IconComponent = ({ name }) => {
  const Icon = iconMap[name] || ExperienceIcon;
  return <Icon />;
};

const FeaturesGeneral = ({ 
  title, 
  subTitle, 
  features = [], 
  src, 
  alt 
}) => {
  // Inject styles
  useEffect(() => {
    const featuresStyles = `
      /* Import Google fonts */
      @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');

      .font-georgia {
        font-family: 'Georgia', serif;
      }
      
      .font-poppins {
        font-family: 'Poppins', sans-serif;
      }
      
      .feature-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      /* Primary and secondary colors for SVG icons */
      .fill-primary-500 {
        fill: #1e40af;
      }

      .dark .fill-secondary-500 {
        fill: #FFD000;
      }

      .text-primary-500 {
        color: #1e40af;
      }

      .dark .text-secondary-500 {
        color: #FFD000;
      }

      /* Improved mobile styling */
      @media (max-width: 640px) {
        .feature-card {
          border-radius: 0.75rem;
          margin-bottom: 0.75rem;
          padding: 1.25rem;
        }
        
        /* Better contrast for mobile dark mode */
        .dark .feature-card {
          background-color: rgba(30, 41, 59, 0.8) !important; /* slate-800 with opacity */
          border-color: rgba(71, 85, 105, 0.5) !important; /* slate-600 with opacity */
        }
      }

      /* Feature section specific styles */
      .features-section {
        margin-top: 0;
        padding-top: 0;
      }

      /* Ensure proper spacing */
      .features-container {
        margin-top: -2rem; /* Negative margin to bring closer to hero */
      }

      /* Dark mode text colors */
      .dark .feature-text-primary {
        color: #F8F1E7 !important;
      }

      .dark .feature-text-secondary {
        color: #F8F1E7 !important;
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = featuresStyles;
    document.head.appendChild(styleElement);

    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  // Features data matching the Astro version exactly
  const astroFeatures = [
    {
      heading: "Experiencia y profesionalismo",
      content: "Contamos con un equipo de expertos en reformas y decoración con años de experiencia en el sector. Garantizamos un trabajo impecable y profesional.",
      svg: "experience"
    },
    {
      heading: "Soluciones personalizadas",
      content: "Entendemos que cada cliente es único, por eso diseñamos proyectos adaptados a tus preferencias, presupuesto y estilo de vida.",
      svg: "personalized"
    },
    {
      heading: "Servicios integrales",
      content: "Ofrecemos una amplia gama de servicios para que no tengas que preocuparte por nada. Desde la reforma completa de tu cocina hasta el montaje de muebles, pintura, electricidad y más.",
      svg: "integral"
    },
    {
      heading: "Ahorro inteligente",
      content: "Sabemos que la economía importa, por eso diseñamos soluciones que combinan calidad y precios competitivos. Gracias a nuestra experiencia, seleccionamos los materiales y procesos más eficientes.",
      svg: "savings"
    },
    {
      heading: "Calidad garantizada",
      content: "Trabajamos con los mejores materiales y las últimas tendencias en diseño para garantizar acabados de alta calidad. Nos preocupamos por cada detalle, asegurando resultados duraderos y funcionales que maximizan tu inversión.",
      svg: "quality"
    },
    {
      heading: "Cercanía y confianza",
      content: "Como empresa local, estamos comprometidos con brindar un servicio cercano y confiable en la Comunidad de Madrid y alrededores. Nos enorgullece construir relaciones basadas en la honestidad y el respeto.",
      svg: "trust"
    }
  ];

  const featuresToShow = features.length > 0 ? features : astroFeatures;
  
  // Filter out the "Compromiso con el medio ambiente" card if it exists
  const filteredFeatures = featuresToShow.filter(feature => 
    feature.heading !== "Compromiso con el medio ambiente"
  );

  // Calculate how many features to show in each row
  const firstRowFeatures = filteredFeatures.slice(0, 3);
  const secondRowFeatures = filteredFeatures.slice(3, 6);

  return (
    <div className="feature-section">
      <section className="mx-auto max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-12 2xl:max-w-full">
        {/* Section header with title and subtitle */}
        <div className="mb-8 text-center lg:mb-12">
          <h2 className="text-balance text-2xl font-bold text-[#000000] dark:text-[#000000] md:text-3xl lg:text-4xl font-georgia">
            {title || "Diseño y Calidad para su Hogar"}
          </h2>
          {subTitle && (
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-[#000000] dark:text-[#000000] text-base sm:text-lg font-poppins">
              {subTitle}
            </p>
          )}
        </div>

        {/* Feature image display (if provided) - optimized for mobile */}
        {src && alt && (
          <div className="relative mb-10 overflow-hidden rounded-lg md:rounded-xl">
            <img
              src={src}
              alt={alt}
              className="h-full w-full max-w-4xl object-cover object-center mx-auto"
              draggable="false"
              loading="eager"
            />
          </div>
        )}

        {/* First row of features - 3 cards centered */}
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 mx-auto max-w-5xl">
          {firstRowFeatures.map((feature, index) => (
            <div 
              key={index}
              className="feature-card group rounded-xl border border-neutral-200 bg-[#F8F1E7] p-5 sm:p-6 transition-all duration-300 hover:border-[#FFD000] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800/80 dark:hover:border-[#FFD000]"
            >
              <div className="mb-4 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#FFD000]/20 text-[#FFD000] dark:bg-[#FFD000]/10 dark:text-[#FFD000]">
                <IconComponent name={feature.svg} />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-[#000000] dark:text-[#F8F1E7] font-georgia">
                {feature.heading}
              </h3>
              <p className="text-sm sm:text-base text-[#000000] dark:text-[#F8F1E7] font-poppins">
                {feature.content}
              </p>
            </div>
          ))}
        </div>

        {/* Second row of features - remaining cards centered */}
        {secondRowFeatures.length > 0 && (
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl">
            {secondRowFeatures.map((feature, index) => (
              <div 
                key={index + 3}
                className="feature-card group rounded-xl border border-neutral-200 bg-[#F8F1E7] p-5 sm:p-6 transition-all duration-300 hover:border-[#FFD000] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800/80 dark:hover:border-[#FFD000]"
              >
                <div className="mb-4 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#FFD000]/20 text-[#FFD000] dark:bg-[#FFD000]/10 dark:text-[#FFD000]">
                  <IconComponent name={feature.svg} />
                </div>
                <h3 className="mb-2 text-base sm:text-lg font-semibold text-[#000000] dark:text-[#F8F1E7] font-georgia">
                  {feature.heading}
                </h3>
                <p className="text-sm sm:text-base text-[#000000] dark:text-[#F8F1E7] font-poppins">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default FeaturesGeneral;