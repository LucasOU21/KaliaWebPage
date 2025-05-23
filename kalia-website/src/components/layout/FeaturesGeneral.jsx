// src/components/sections/FeaturesGeneral.jsx
import React from 'react';

// Icon components - you can replace these with your preferred icon library
const VerifiedIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const GroupsIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const ToolsIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);

const EarthIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const BooksIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);

const FrameIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21,15 16,10 5,21" />
  </svg>
);

// Icon mapping
const iconMap = {
  verified: VerifiedIcon,
  groups: GroupsIcon,
  tools: ToolsIcon,
  earth2: EarthIcon,
  books: BooksIcon,
  frame: FrameIcon,
};

const IconComponent = ({ name }) => {
  const Icon = iconMap[name] || VerifiedIcon;
  return <Icon />;
};

const FeaturesGeneral = ({ 
  title, 
  subTitle, 
  features = [], 
  src, 
  alt 
}) => {
  // Default features if none provided
  const defaultFeatures = [
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

  const featuresToShow = features.length > 0 ? features : defaultFeatures;
  
  // Filter out the "Compromiso con el medio ambiente" card if it exists
  const filteredFeatures = featuresToShow.filter(feature => 
    feature.heading !== "Compromiso con el medio ambiente"
  );

  // Calculate how many features to show in each row
  const firstRowFeatures = filteredFeatures.slice(0, 3);
  const secondRowFeatures = filteredFeatures.slice(3, 6);

  return (
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
  );
};

export default FeaturesGeneral;