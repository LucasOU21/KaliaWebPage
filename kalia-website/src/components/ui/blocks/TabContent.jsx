// src/components/ui/blocks/TabContent.jsx
import React from 'react';

const TabContent = ({ 
  id, 
  aria, 
  src, 
  alt, 
  first = false, 
  second = false, 
  isActive = false 
}) => {
  // Set class based on 'first' property or isActive
  // If 'first' is present or isActive, show the tab content immediately
  const firstClass = (isActive || first) ? "" : "hidden";
  
  // Set class based on 'second' property
  // If 'second' is present, use an alternate style for the image
  const secondClass = second
    ? "shadow-xl aspect-[5/4] bg-neutral-300 dark:bg-neutral-600 object-cover lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]"
    : "shadow-xl aspect-[3/2] object-cover lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]";

  return (
    <>
      <style jsx>{`
        /* Enhanced image appearance matching Astro styles */
        .tab-image {
          border-radius: 12px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          transition: all 0.5s ease;
          width: 100%;
          height: auto;
          max-height: 400px;
        }

        .dark .tab-image {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }

        /* Responsive image sizing */
        @media (min-width: 1024px) {
          .tab-image {
            max-height: 450px;
          }
        }
      `}</style>

      {/* Container for tab content that controls visibility and accessibility */}
      <div 
        id={id} 
        role="tabpanel" 
        className={firstClass} 
        aria-labelledby={aria}
      >
        {/* React Image component to display the image with dynamic classes based on the 'second' property */}
        <img
          src={src}
          alt={alt}
          className={`tab-image ${secondClass}`}
          draggable="false"
          loading="eager"
        />
      </div>
    </>
  );
};

export default TabContent;