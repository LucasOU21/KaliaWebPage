import React, { useState } from 'react';

const FeaturesNavs = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Default tabs data matching the website
  const defaultTabs = [
    {
      heading: "Montaje de muebles",
      svg: "tools",
      src: "/src/assets/images/montaje-muebles.jpg",
      alt: "Montaje de muebles",
      first: true
    },
    {
      heading: "Diseños de muebles a medida", 
      svg: "design",
      src: "/src/assets/images/muebles-disenio.jpg",
      alt: "Diseños de muebles a medida"
    },
    {
      heading: "Instalación de cocinas y electrodomésticos",
      svg: "kitchen",
      src: "/src/assets/images/cocinas-electro.jpg", 
      alt: "Instalación de cocinas y electrodomésticos"
    },
    {
      heading: "Reformas de vivienda",
      svg: "home",
      src: "/src/assets/images/reformas-vivienda.jpg",
      alt: "Reformas de vivienda"
    },
    {
      heading: "Acabados (papel pintado) y pintura",
      svg: "paint", 
      src: "/src/assets/images/acabados-papel-pintado.jpg",
      alt: "Acabados papel pintado y pintura"
    },
    {
      heading: "Manitas",
      svg: "handyman",
      src: "/src/assets/images/handyman.jpg",
      alt: "Servicios de manitas"
    },
    {
      heading: "Instalación de puertas, tarima flotante y rodapiés",
      svg: "flooring",
      src: "/src/assets/images/puerta-tarima-rodapies.jpg",
      alt: "Instalación de puertas, tarima flotante y rodapiés"
    }
  ];

  const tabsToUse = tabs || defaultTabs;

  // Icon components matching the website
  const IconComponent = ({ name }) => {
    const iconStyle = {
      width: '20px',
      height: '20px',
      stroke: 'currentColor',
      strokeWidth: '1.5',
      fill: 'none'
    };

    const icons = {
      tools: (
        <svg style={iconStyle} viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      design: (
        <svg style={iconStyle} viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      kitchen: (
        <svg style={iconStyle} viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <path d="M3 9h18M9 21V9"/>
        </svg>
      ),
      home: (
        <svg style={iconStyle} viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      ),
      paint: (
        <svg style={iconStyle} viewBox="0 0 24 24">
          <path d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 00-2.82 0L8 7l9 9 1.59-1.59a2 2 0 000-2.82L17 10l4.37-4.37a2.12 2.12 0 10-3-3z"/>
          <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/>
          <path d="M14.5 17.5L4.5 15"/>
        </svg>
      ),
      handyman: (
        <svg style={iconStyle} viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      flooring: (
        <svg style={iconStyle} viewBox="0 0 24 24">
          <rect x="6" y="3" width="12" height="18" rx="1"/>
          <rect x="6" y="7" width="12" height="1"/>
          <rect x="6" y="16" width="12" height="1"/>
        </svg>
      )
    };
    
    return icons[name] || icons.tools;
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        .features-section {
          width: 100%;
          background-color: #F8F1E7;
          padding: 5rem 0; /* Increased from 3rem to 5rem */
          min-height: 120vh; /* Added minimum height for more vertical space */
          display: flex;
          align-items: center;
        }

        .features-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          gap: 3rem; /* Increased from 2rem to 3rem */
          position: relative;
          min-height: 80vh; /* Added minimum height */
        }

        /* Left container - Image */
        .image-container {
          flex: 0 0 45%;
          position: relative;
          z-index: 3; /* Increased z-index to overlap content container */
          height: 100%; /* Use full available height */
          display: flex;
          align-items: center;
          margin-right: -6rem; /* Increased overlap for image to sit on top of container */
        }

        .tab-image {
          width: 100%;
          height: 500px; /* Increased from 400px to 500px */
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Right container - Content */
        .content-container {
          flex: 1;
          background: linear-gradient(to bottom right, #fffbeb, #fef3c7); /* from-amber-50 to-yellow-100 */
          border-radius: 16px;
          padding: 3.5rem 2.5rem 3.5rem 4rem; /* Added extra left padding to accommodate image overlap */
          margin-left: 0; /* Removed margin since image is now overlapping from the right */
          position: relative;
          z-index: 1;
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-height: 500px; /* Added minimum height for content container */
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Dark mode gradient for content container */
        .dark .content-container {
          background: linear-gradient(to bottom right, #262626, #171717); /* from-neutral-800 to-neutral-900 */
          background-opacity: 0.7;
        }

        .section-title {
          font-family: 'Georgia', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 3rem; /* Increased from 2rem to 3rem */
          line-height: 1.3;
        }

        .nav-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem; /* Increased from 0.75rem to 1.25rem */
          flex-grow: 1;
        }

        .tab-button {
          display: flex;
          align-items: center;
          text-align: left;
          padding: 1.25rem 1rem; /* Increased vertical padding from 0.875rem to 1.25rem */
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background-color: rgba(255, 255, 255, 0.1);
          color: #000000;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
          font-size: 0.875rem;
          backdrop-filter: blur(5px);
          min-height: 70px; /* Added minimum height for buttons */
        }

        .tab-button:hover {
          background-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .tab-button.active {
          background-color: rgba(255, 255, 255, 0.9);
          border-color: rgba(255, 208, 0, 0.3);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .tab-icon {
          margin-right: 0.75rem;
          color: #6b7280;
          flex-shrink: 0;
        }

        .tab-button.active .tab-icon {
          color: #ea580c;
        }

        .tab-heading {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          color: #000000;
          line-height: 1.4; /* Slightly increased line height */
        }

        .tab-button.active .tab-heading {
          font-weight: 600;
          color: #1e40af;
        }

        .hidden {
          display: none;
        }

        /* Hide on mobile, show on desktop */
        .features-section {
          display: none;
        }

        @media (min-width: 768px) {
          .features-section {
            display: flex; /* Changed from block to flex for better centering */
          }
        }

        /* Mobile responsive */
        @media (max-width: 1024px) {
          .features-section {
            padding: 3rem 0;
            min-height: auto;
          }

          .features-wrapper {
            flex-direction: column;
            gap: 2rem; /* Increased gap */
            min-height: auto;
          }

          .image-container {
            flex: none;
            width: 100%;
            height: auto;
            margin-right: 0; /* Remove overlap on mobile */
          }

          .tab-image {
            height: 400px;
          }

          .content-container {
            margin-left: 0;
            width: 100%;
            min-height: auto;
            padding: 2.5rem;
          }

          .nav-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .features-wrapper {
            padding: 0 1rem;
          }

          .content-container {
            padding: 2rem 1.5rem;
          }

          .section-title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          .tab-button {
            padding: 1rem;
            min-height: 60px;
          }
        }

        /* Kalia highlighting */
        .text-kalia-gold {
          color: #D4AF37;
          font-weight: 600;
        }
      `}</style>

      <section className="features-section">
        <div className="features-wrapper">
          {/* Left container - Image */}
          <div className="image-container">
            {tabsToUse.map((tab, index) => (
              <div
                key={index}
                className={activeTab === index ? "" : "hidden"}
              >
                <img
                  src={tab.src}
                  alt={tab.alt}
                  className="tab-image"
                  draggable="false"
                  loading="eager"
                />
              </div>
            ))}
          </div>

          {/* Right container - Content */}
          <div className="content-container">
            <h2 className="section-title">
              Elige <span className="text-kalia-gold">Kalia</span> para un servicio profesional, de calidad y a precio competitivo.
            </h2>
            
            {/* Tab navigation */}
            <nav className="nav-grid" aria-label="Tabs" role="tablist">
              {tabsToUse.map((tab, index) => (
                <button
                  key={index}
                  type="button"
                  className={`tab-button ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {/* Icon */}
                  <span className="tab-icon">
                    <IconComponent name={tab.svg} />
                  </span>
                  
                  {/* Tab content */}
                  <span className="tab-heading">
                    {tab.heading}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesNavs;