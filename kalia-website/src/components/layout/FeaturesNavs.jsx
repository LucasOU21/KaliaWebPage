import React, { useState, useEffect } from 'react';

const FeaturesNavs = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Services data extracted exactly from the HTML
  const services = [
    {
      id: 1,
      title: "Montaje de muebles",
      image: "/src/assets/images/montaje-muebles.jpg",
      alt: "montaje de muebles",
      isActive: true,
      icon: (
        <svg className="h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-300 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7" height="48" viewBox="0 -960 960 960" width="48">
          <title></title>
          <path d="M764-80q-6 0-11-2t-10-7L501-331q-5-5-7-10t-2-11q0-6 2-11t7-10l85-85q5-5 10-7t11-2q6 0 11 2t10 7l242 242q5 5 7 10t2 11q0 6-2 11t-7 10l-85 85q-5 5-10 7t-11 2Zm0-72 43-43-200-200-43 43 200 200ZM195-80q-6 0-11.5-2T173-89l-84-84q-5-5-7-10.5T80-195q0-6 2-11t7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2Zm0-72 200-200v-43h-43L152-195l43 43Zm0 0-43-43 22 21 21 22Zm569 0 43-43-43 43Z" className=""></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Diseños de muebles a medida",
      image: "/src/assets/images/muebles-diseno.jpg",
      alt: "diseños de muebles a medida",
      icon: (
        <svg className="h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7" height="48" viewBox="0 -960 960 960" width="48">
          <title></title>
          <path d="M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z" className=""></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Instalación de cocinas y electrodomésticos",
      image: "/src/assets/images/cocinas-electro.jpg",
      alt: "instalación de cocinas y electrodomésticos",
      icon: (
        <svg className="h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-300 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <title></title>
          <path d="M18 2.01L6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99M18 20H6v-9.02h12zm0-11H6V4h12zM8 5h2v3H8zm0 7h2v5H8z" className=""></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "Reformas de vivienda",
      image: "/src/assets/images/reformas-vivienda.jpg",
      alt: "reformas de vivienda",
      icon: (
        <svg className="h-6 w-6 flex-shrink-0 text-neutral-700 hs-tab-active:text-orange-400 dark:text-neutral-300 dark:hs-tab-active:text-rose-400 md:h-7 md:w-7" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <title></title>
          <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" className=""></path>
        </svg>
      )
    },
    {
      id: 5,
      title: "Acabados (papel pintado) y pintura",
      image: "/src/assets/images/acabados-papel-pintado.jpg",
      alt: "acabados (papel pintado) y pintura",
      icon: (
        <svg className="h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-300 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <title></title>
          <path d="M6 4h10v2H6z" className=""></path>
          <path d="M17 2H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3V3c0-.55-.45-1-1-1m-1 4H6V4h10z" className=""></path>
        </svg>
      )
    },
    {
      id: 6,
      title: "Manitas",
      image: "/src/assets/images/handyman.jpg",
      alt: "manitas",
      icon: (
        <svg className="h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-300 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <title></title>
          <path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m4.75-7H13c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14C9.68 4.06 9.35 4 9 4s-.68.06-1 .14V5.5c0 .28-.22.5-.5.5S7 5.78 7 5.5v-.95C5.81 5.25 5 6.52 5 8h-.75v1h9.5zM9 13c1.86 0 3.41-1.28 3.86-3H5.14c.45 1.72 2 3 3.86 3m12.98-6.77l.93-.83l-.75-1.3l-1.19.39c-.14-.11-.3-.2-.47-.27L20.25 3h-1.5l-.25 1.22q-.255.105-.48.27l-1.18-.39l-.75 1.3l.93.83c-.02.17-.02.35 0 .52l-.93.85l.75 1.3l1.2-.38c.13.1.28.18.43.25l.28 1.23h1.5l.27-1.22c.16-.07.3-.15.44-.25l1.19.38l.75-1.3l-.93-.85c.03-.19.02-.36.01-.53M19.5 7.75a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m-.1 3.04l-.85.28c-.1-.08-.21-.14-.33-.19l-.18-.88h-1.07l-.18.87c-.12.05-.24.12-.34.19l-.84-.28l-.54.93l.66.59c-.01.13-.01.25 0 .37l-.66.61l.54.93l.86-.27c.1.07.2.13.31.18l.18.88h1.07l.19-.87c.11-.05.22-.11.32-.18l.85.27l.54-.93l-.66-.61c.01-.13.01-.25 0-.37l.66-.59zm-1.9 2.6c-.49 0-.89-.4-.89-.89s.4-.89.89-.89s.89.4.89.89s-.4.89-.89.89" className=""></path>
        </svg>
      )
    },
    {
      id: 7,
      title: "Instalación de puertas, tarima flotante y rodapiés",
      image: "/src/assets/images/puerta-tarima-rodapies.jpg",
      alt: "instalación de puertas, tarima flotante y rodapiés",
      icon: (
        <svg className="h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-300 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <title></title>
          <path d="M18 4v16H6V4zm0-2H6c-1.1 0-2 .9-2 2v18h16V4c0-1.1-.9-2-2-2m-2.5 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 12.83 17 12s-.67-1.5-1.5-1.5" className=""></path>
        </svg>
      )
    }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Initialize active tab styling
  useEffect(() => {
    // Apply the same styling logic as Astro version
    const buttons = document.querySelectorAll('[data-hs-tab]');
    const panels = document.querySelectorAll('[role="tabpanel"]');
    
    buttons.forEach(btn => {
      btn.classList.remove('active', 'hs-tab-active');
    });
    panels.forEach(panel => {
      panel.classList.add('hidden');
    });
    
    // Activate current tab
    const activeButton = document.querySelector(`[data-hs-tab="#tabs-with-card-${activeTab}"]`);
    const activePanel = document.querySelector(`#tabs-with-card-${activeTab}`);
    
    if (activeButton) {
      activeButton.classList.add('active', 'hs-tab-active');
    }
    if (activePanel) {
      activePanel.classList.remove('hidden');
    }
  }, [activeTab]);

  return (
    <>
      <style jsx>{`
        /* Import Google fonts exactly as Astro */
        @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        .font-georgia {
          font-family: 'Georgia', serif;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        /* Kalia gold text styling */
        .text-kalia-gold {
          color: #D4AF37;
          font-weight: 600;
        }

        /* Active tab styles exactly matching Astro */
        .hs-tab-active {
          border-color: #FFD000 !important;
          box-shadow: 0 4px 12px rgba(255, 208, 0, 0.15) !important;
          background-color: #f9fafb !important;
        }

        .dark .hs-tab-active {
          border-color: #FFD000 !important;
          background-color: rgba(255, 208, 0, 0.1) !important;
        }

        /* Hover states */
        [data-hs-tab]:hover:not(.hs-tab-active) {
          background-color: rgba(255, 208, 0, 0.05);
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }

        /* Enhanced image appearance - matching your existing code */
        .tab-image {
          border-radius: 0.75rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transition: all 0.5s ease;
          width: 100%;
          height: auto;
          max-height: 350px;
          object-fit: cover;
        }

        .dark .tab-image {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
        }

        /* Container fixes */
        .features-container {
          width: 100%;
          max-width: 85rem;
          margin: 0 auto;
          overflow: hidden;
        }

        /* Image container proper sizing */
        .image-container {
          width: 100%;
          max-width: 100%;
          height: auto;
        }

        /* Primary and secondary color classes from Tailwind config */
        .text-primary-500 {
          color: #1e40af;
        }

        .text-secondary-500 {
          color: #FFD000;
        }

        .dark .text-secondary-500 {
          color: #FFD000;
        }
      `}</style>

      <section className="features-container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 hidden md:block">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
            {/* Section's heading and tab navigation */}
            <div className="mb-10 lg:order-2 lg:col-span-6 lg:col-start-6 lg:mb-0">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl font-georgia">
                {/* About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments */}
                Elige <span className="text-primary-500 dark:text-secondary-500"><span className="text-kalia-gold">Kalia</span></span> para un servicio profesional, de calidad y a precio competitivo.
              </h2>
              
              {/* Tab navigation - use the attribute 'first' in the first TabNav for the component to work */}
              <nav className="mt-8 grid gap-4 md:mt-10 grid-cols-1 xl:grid-cols-2 font-poppins" aria-label="Tabs" role="tablist">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    type="button"
                    className={`${service.isActive ? 'active ' : ''}dark:hover:bg-neutral-700 rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:focus:outline-none dark:hs-tab-active:bg-neutral-700/60 md:p-5 last:xl:col-span-2`}
                    id={`tabs-with-card-item-${service.id}`}
                    data-hs-tab={`#tabs-with-card-${service.id}`}
                    aria-controls={`tabs-with-card-${service.id}`}
                    role="tab"
                    onClick={() => handleTabClick(service.id)}
                  >
                    {/* Slot for additional content */}
                    <span className="flex">
                      {service.icon}
                      {/* Container for the heading and content of the tab */}
                      <span className="ms-6 grow">
                        {/* Heading of the tab, changes color when active */}
                        <span className="block text-base font-bold text-neutral-800 hs-tab-active:text-primary-500 dark:text-neutral-200 dark:hs-tab-active:text-secondary-500">
                          {service.title}
                        </span>
                        {/* Content of the tab, changes color when active */}
                        {/* <span
                          className="mt-1 block text-neutral-500 hs-tab-active:text-neutral-600 dark:text-neutral-400 dark:hs-tab-active:text-neutral-200"
                        >{content}</span> */}
                      </span>
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Contents for each tab - the 'first' attribute should be used in the first tab for that tab to be initially visible, 'second' changes the styles */}
            <div className="lg:col-span-5 lg:col-start-1">
              <div className="relative image-container">
                <div>
                  {services.map((service, index) => (
                    <div
                      key={service.id}
                      id={`tabs-with-card-${service.id}`}
                      role="tabpanel"
                      className={service.isActive ? "" : "hidden"}
                      aria-labelledby={`tabs-with-card-item-${service.id}`}
                    >
                      {/* Image component to display the image with proper sizing */}
                      <img
                        src={service.image}
                        alt={service.alt}
                        draggable="false"
                        loading="eager"
                        className="tab-image shadow-xl aspect-[3/2] object-cover lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 grid h-full w-full grid-cols-12">
            {/* Decorative background with updated color scheme */}
            <div className="col-span-full h-5/6 w-full rounded-xl bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-neutral-800 dark:to-neutral-900 dark:bg-opacity-70 sm:h-3/4 lg:col-span-7 lg:col-start-5 lg:h-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesNavs;