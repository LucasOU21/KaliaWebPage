// src/components/sections/FeaturesGeneral.jsx
import React from 'react';

const FeaturesGeneral = ({ 
  title, 
  subTitle, 
  features = [], 
  src, 
  alt 
}) => {
  // Filter out the "Compromiso con el medio ambiente" card if it exists
  const filteredFeatures = features.filter(feature => 
    feature.heading !== "Compromiso con el medio ambiente"
  );

  // Calculate how many features to show in the first row (3)
  const firstRowFeatures = filteredFeatures.slice(0, 3);
  const secondRowFeatures = filteredFeatures.slice(3, 6);

  // Icon mapping for different feature types
  const getIconSVG = (iconName) => {
    const icons = {
      'verified': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'groups': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      'frame': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      'default': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    };
    
    return icons[iconName] || icons['default'];
  };

  return (
    <section className="mx-auto max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-12 2xl:max-w-full">
      {/* Section header with title and subtitle */}
      <div className="mb-8 text-center lg:mb-12">
        <h2 className="text-balance text-2xl font-bold text-[#000000] dark:text-[#000000] md:text-3xl lg:text-4xl font-georgia">
          {title}
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
              {getIconSVG(feature.svg)}
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
              key={index}
              className="feature-card group rounded-xl border border-neutral-200 bg-[#F8F1E7] p-5 sm:p-6 transition-all duration-300 hover:border-[#FFD000] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800/80 dark:hover:border-[#FFD000]"
            >
              <div className="mb-4 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#FFD000]/20 text-[#FFD000] dark:bg-[#FFD000]/10 dark:text-[#FFD000]">
                {getIconSVG(feature.svg)}
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