// src/components/ui/blocks/TabNav.jsx
import React from 'react';

const TabNav = ({ 
  id, 
  dataTab, 
  aria, 
  heading, 
  content, 
  first = false, 
  children, 
  isActive = false, 
  onClick 
}) => {
  // Define button classes - exact same as Astro version
  const BUTTON_CLASS = 
    "dark:hover:bg-neutral-700 rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:focus:outline-none dark:hs-tab-active:bg-neutral-700/60 md:p-5 last:xl:col-span-2";

  // Function to add gold styling to "Kalia"
  const addGoldToKalia = (text) => {
    if (!text) return text;
    return text.replace(/Kalia/g, '<span style="color: #D4AF37; font-weight: 600;">Kalia</span>');
  };

  return (
    <>
      <style jsx>{`
        /* Active tab styles matching Astro */
        .tab-active {
          border-color: #FFD000 !important;
          box-shadow: 0 4px 12px rgba(255, 208, 0, 0.15) !important;
          background-color: #f9fafb !important;
        }

        .dark .tab-active {
          border-color: #FFD000 !important;
          background-color: rgba(255, 208, 0, 0.1) !important;
        }

        /* Hover states */
        .tab-button:hover:not(.tab-active) {
          background-color: rgba(255, 208, 0, 0.05);
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }

        /* Text color changes when active */
        .tab-active .heading-text {
          color: #1e40af !important;
        }

        .dark .tab-active .heading-text {
          color: #FFD000 !important;
        }

        .tab-active .content-text {
          color: #4b5563 !important;
        }

        .dark .tab-active .content-text {
          color: #e5e7eb !important;
        }
      `}</style>

      {/* Tab button with dynamic class based on 'first' property, id, tab data, and aria-controls */}
      <button
        type="button"
        className={`tab-button ${(isActive || first) ? "tab-active " : ""}${BUTTON_CLASS}`}
        id={id}
        data-hs-tab={dataTab}
        aria-controls={aria}
        role="tab"
        onClick={onClick}
      >
        {/* Slot for additional content */}
        <span className="flex">
          {children}
          {/* Container for the heading and content of the tab */}
          <span className="ms-6 grow">
            {/* Heading of the tab, changes color when active */}
            <span
              className="heading-text block text-base font-bold text-neutral-800 dark:text-neutral-200"
              style={{ 
                fontFamily: 'Georgia, serif',
                fontWeight: 600
              }}
              dangerouslySetInnerHTML={{ __html: addGoldToKalia(heading) }}
            />
            {/* Content of the tab, changes color when active */}
            {content && (
              <span
                className="content-text mt-1 block text-neutral-500 dark:text-neutral-400"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400
                }}
                dangerouslySetInnerHTML={{ __html: addGoldToKalia(content) }}
              />
            )}
          </span>
        </span>
      </button>
    </>
  );
};

export default TabNav;