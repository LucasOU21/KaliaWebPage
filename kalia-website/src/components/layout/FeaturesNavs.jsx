// src/components/sections/FeaturesNavs.jsx
import React, { useEffect } from 'react';

const FeaturesNavs = ({ title, tabs }) => {
  // Function to add gold styling to "Kalia" in any text
  // This will wrap "Kalia" with a span that has the gold color
  function addGoldToKalia(text) {
    if (!text) return text;
    return text.replace(/Kalia/g, '<span class="text-kalia-gold">Kalia</span>');
  }

  // Process the title and tab content to add gold styling to "Kalia"
  const processedTitle = title ? addGoldToKalia(title) : title;
  const processedTabs = tabs ? tabs.map(tab => ({
    ...tab,
    heading: addGoldToKalia(tab.heading),
    content: tab.content ? addGoldToKalia(tab.content) : tab.content
  })) : [];

  // Icon component matching Astro Icon
  const Icon = ({ name }) => {
    const icons = {
      tools: (
        <svg className="h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-300 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7" viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      verified: (
        <svg className="h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-300 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      groups: (
        <svg className="h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-300 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      earth2: (
        <svg className="h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-300 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" />
          <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" fill="none" />
        </svg>
      )
    };
    return icons[name] || icons.tools;
  };

  // TabNav component - exact copy of Astro TabNav
  const TabNav = ({ id, dataTab, aria, heading, content, first, children }) => {
    const BUTTON_CLASS = "dark:hover:bg-neutral-700 rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:focus:outline-none dark:hs-tab-active:bg-neutral-700/60 md:p-5 last:xl:col-span-2";

    return (
      <button
        type="button"
        className={`${first ? "active " : ""}${BUTTON_CLASS}`}
        id={id}
        data-hs-tab={dataTab}
        aria-controls={aria}
        role="tab"
      >
        <span className="flex">
          {children}
          <span className="ms-6 grow">
            <span 
              className="block text-base font-bold text-neutral-800 hs-tab-active:text-primary-500 dark:text-neutral-200 dark:hs-tab-active:text-secondary-500"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            {content && (
              <span 
                className="mt-1 block text-neutral-500 hs-tab-active:text-neutral-600 dark:text-neutral-400 dark:hs-tab-active:text-neutral-200"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </span>
        </span>
      </button>
    );
  };

  // TabContent component with proper image sizing
  const TabContent = ({ id, aria, src, alt, first, second }) => {
    const firstClass = first ? "" : "hidden";

    return (
      <div id={id} role="tabpanel" className={firstClass} aria-labelledby={aria}>
        <img
          src={src}
          alt={alt}
          className="tab-image"
          draggable="false"
          loading="eager"
        />
      </div>
    );
  };

  // Initialize tabs functionality
  useEffect(() => {
    const initializeTabs = () => {
      const tabButtons = document.querySelectorAll('[data-hs-tab]');
      const tabPanels = document.querySelectorAll('[role="tabpanel"]');

      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          tabButtons.forEach(btn => btn.classList.remove('active', 'hs-tab-active'));
          tabPanels.forEach(panel => panel.classList.add('hidden'));
          
          button.classList.add('active', 'hs-tab-active');
          const targetId = button.getAttribute('data-hs-tab');
          const targetPanel = document.querySelector(targetId);
          if (targetPanel) targetPanel.classList.remove('hidden');
        });
      });
    };

    setTimeout(initializeTabs, 100);
  }, []);

  return (
    <>
      <style jsx>{`
        /* Import Google fonts */
        @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        /* Font classes */
        .font-georgia {
          font-family: 'Georgia', serif;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        /* Add the custom class for Kalia gold text */
        :global(.text-kalia-gold) {
          color: #D4AF37;
          font-weight: 600;
        }

        /* Container and layout fixes */
        .features-container {
          width: 100%;
          max-width: 85rem;
          margin: 0 auto;
          overflow: hidden;
        }

        /* Tab button container and sizing */
        .tab-button-container {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
        }

        @media (min-width: 1280px) {
          .tab-button-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Icon container sizing */
        .icon-container {
          width: 2.875rem;
          height: 2.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Image container proper sizing */
        .image-container {
          width: 100%;
          max-width: 100%;
          height: auto;
        }

        .tab-image {
          width: 100%;
          height: auto;
          max-height: 350px;
          object-fit: cover;
          border-radius: 0.75rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        /* Active tab styles */
        :global(.hs-tab-active) {
          border-color: #FFD000 !important;
          box-shadow: 0 4px 12px rgba(255, 208, 0, 0.15) !important;
          background-color: #f9fafb !important;
        }

        :global(.dark .hs-tab-active) {
          border-color: #FFD000 !important;
          background-color: rgba(255, 208, 0, 0.1) !important;
        }

        /* Hover states */
        :global([data-hs-tab]:hover:not(.hs-tab-active)) {
          background-color: rgba(255, 208, 0, 0.05);
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }

        /* Hide on mobile */
        @media (max-width: 767px) {
          .hidden-mobile {
            display: none !important;
          }
        }

        /* Grid layout fixes */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 1rem;
        }

        @media (min-width: 1024px) {
          .content-grid {
            grid-template-columns: repeat(12, 1fr);
            gap: 4rem;
          }
        }

        .nav-section {
          margin-bottom: 2.5rem;
        }

        @media (min-width: 1024px) {
          .nav-section {
            order: 2;
            grid-column: span 6;
            grid-column-start: 7;
            margin-bottom: 0;
          }
        }

        .image-section {
          grid-column: span 1;
        }

        @media (min-width: 1024px) {
          .image-section {
            grid-column: span 5;
            grid-column-start: 1;
          }
        }
      `}</style>

      <section className="features-container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 hidden-mobile">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 content-grid">
            {/* Section's heading and tab navigation */}
            <div className="nav-section">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl font-georgia">
                <span dangerouslySetInnerHTML={{ __html: processedTitle }} />
              </h2>
              
              {/* Tab navigation */}
              <nav 
                className="mt-8 tab-button-container md:mt-10 font-poppins"
                aria-label="Tabs" 
                role="tablist"
              >
                {processedTabs.map((tab, index) => (
                  <TabNav
                    key={index}
                    id={`tabs-with-card-item-${index + 1}`}
                    dataTab={`#tabs-with-card-${index + 1}`}
                    aria={`tabs-with-card-${index + 1}`}
                    heading={tab.heading}
                    content={tab.content}
                    first={tab.first}
                  >
                    <div className="icon-container">
                      <Icon name={tab.svg} />
                    </div>
                  </TabNav>
                ))}
              </nav>
            </div>

            {/* Contents for each tab */}
            <div className="image-section">
              <div className="relative image-container">
                <div>
                  {processedTabs.map((tab, index) => (
                    <TabContent
                      key={index}
                      id={`tabs-with-card-${index + 1}`}
                      aria={`tabs-with-card-item-${index + 1}`}
                      src={tab.src}
                      alt={tab.alt}
                      first={tab.first}
                      second={tab.second}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 grid h-full w-full grid-cols-12">
            {/* Decorative background */}
            <div className="col-span-full h-5/6 w-full rounded-xl bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-neutral-800 dark:to-neutral-900 dark:bg-opacity-70 sm:h-3/4 lg:col-span-7 lg:col-start-5 lg:h-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesNavs;