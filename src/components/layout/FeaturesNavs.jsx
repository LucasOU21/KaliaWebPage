import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const FeaturesNavs = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { isDarkMode } = useTheme();

  // Default tabs data matching the website
  const defaultTabs = [
    {
      heading: "Montaje de muebles",
      svg: "tools",
      src: "/images/montaje-muebles.jpg",
      alt: "Montaje de muebles",
      first: true
    },
    {
      heading: "Diseños de muebles a medida", 
      svg: "design",
      src: "/images/muebles-disenio.jpg",
      alt: "Diseños de muebles a medida"
    },
    {
      heading: "Instalación de cocinas y electrodomésticos",
      svg: "kitchen",
      src: "/images/cocinas-electro.jpg", 
      alt: "Instalación de cocinas y electrodomésticos"
    },
    {
      heading: "Reformas de vivienda",
      svg: "home",
      src: "/images/reformas-vivienda.jpg",
      alt: "Reformas de vivienda"
    },
    {
      heading: "Acabados (papel pintado) y pintura",
      svg: "paint", 
      src: "/images/acabados-papel-pintado.jpg",
      alt: "Acabados papel pintado y pintura"
    },
    {
      heading: "Manitas",
      svg: "handyman",
      src: "/images/handyman.jpg",
      alt: "Servicios de manitas"
    },
    {
      heading: "Instalación de puertas, tarima flotante y rodapiés",
      svg: "flooring",
      src: "/images/puerta-tarima-rodapies.jpg",
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

  // Dynamic styles based on theme
  const sectionStyle = {
    width: '100%',
    backgroundColor: isDarkMode ? '#1f2937' : '#F8F1E7',
    padding: '5rem 0',
    minHeight: '120vh',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s ease'
  };

  const contentContainerStyle = {
    flex: 1,
    background: isDarkMode 
      ? 'linear-gradient(to bottom right, #374151, #1f2937)'
      : 'linear-gradient(to bottom right, #fffbeb, #fef3c7)',
    borderRadius: '16px',
    padding: '3.5rem 2.5rem 3.5rem 4rem',
    marginLeft: 0,
    position: 'relative',
    zIndex: 1,
    border: isDarkMode 
      ? '1px solid rgba(75, 85, 99, 0.3)'
      : '1px solid rgba(255, 255, 255, 0.2)',
    minHeight: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    backdropFilter: isDarkMode ? 'blur(10px)' : 'none'
  };

  const sectionTitleStyle = {
    fontFamily: 'Georgia, serif',
    fontSize: '1.75rem',
    fontWeight: 700,
    color: isDarkMode ? '#f9fafb' : '#000000',
    marginBottom: '3rem',
    lineHeight: 1.3,
    transition: 'color 0.3s ease'
  };

  const getTabButtonStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    padding: '1.25rem 1rem',
    borderRadius: '8px',
    border: isDarkMode 
      ? '1px solid rgba(75, 85, 99, 0.4)'
      : '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: isActive
      ? (isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.9)')
      : (isDarkMode ? 'rgba(55, 65, 81, 0.3)' : 'rgba(255, 255, 255, 0.1)'),
    color: isDarkMode ? '#f3f4f6' : '#000000',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    outline: 'none',
    fontSize: '0.875rem',
    backdropFilter: 'blur(5px)',
    minHeight: '70px',
    borderColor: isActive
      ? (isDarkMode ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 208, 0, 0.3)')
      : undefined,
    boxShadow: isActive
      ? (isDarkMode ? '0 4px 12px rgba(59, 130, 246, 0.2)' : '0 4px 12px rgba(0, 0, 0, 0.15)')
      : undefined
  });

  const getTabIconStyle = (isActive) => ({
    marginRight: '0.75rem',
    color: isActive
      ? (isDarkMode ? '#60a5fa' : '#ea580c')
      : (isDarkMode ? '#9ca3af' : '#6b7280'),
    flexShrink: 0,
    transition: 'color 0.2s ease'
  });

  const getTabHeadingStyle = (isActive) => ({
    fontFamily: 'Poppins, sans-serif',
    fontWeight: isActive ? 600 : 500,
    color: isActive
      ? (isDarkMode ? '#93c5fd' : '#1e40af')
      : (isDarkMode ? '#f3f4f6' : '#000000'),
    lineHeight: 1.4,
    transition: 'color 0.2s ease'
  });

  const tabImageStyle = {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: isDarkMode 
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
      : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: 'all 0.3s ease',
    filter: isDarkMode ? 'brightness(0.9) contrast(1.1)' : 'none'
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        .features-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          gap: 3rem;
          position: relative;
          min-height: 80vh;
        }

        /* Left container - Image */
        .image-container {
          flex: 0 0 45%;
          position: relative;
          z-index: 3;
          height: 100%;
          display: flex;
          align-items: center;
          margin-right: -6rem;
        }

        .nav-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          flex-grow: 1;
        }

        /* Utility classes */
        .hidden {
          display: none;
        }

        /* Kalia highlighting */
        .text-kalia-gold {
          color: #D4AF37;
          font-weight: 600;
        }

        /* Hide on mobile, show on desktop */
        .features-section {
          display: none;
        }

        @media (min-width: 768px) {
          .features-section {
            display: flex;
          }
        }

        /* Mobile responsive */
        @media (max-width: 1024px) {
          .features-section {
            padding: 3rem 0 !important;
            min-height: auto !important;
          }

          .features-wrapper {
            flex-direction: column;
            gap: 2rem;
            min-height: auto;
          }

          .image-container {
            flex: none;
            width: 100%;
            height: auto;
            margin-right: 0;
          }

          .content-container {
            margin-left: 0 !important;
            width: 100%;
            min-height: auto !important;
            padding: 2.5rem !important;
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
            padding: 2rem 1.5rem !important;
          }

          .nav-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        /* Hover effects */
        .tab-button:hover {
          background-color: ${isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(255, 255, 255, 0.25)'} !important;
          transform: translateY(-1px);
          box-shadow: ${isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.1)'};
        }

        /* Focus states for accessibility */
        .tab-button:focus {
          outline: 2px solid ${isDarkMode ? '#fbbf24' : '#60a5fa'};
          outline-offset: 2px;
        }
      `}</style>

      <section className="features-section" style={sectionStyle}>
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
                  style={tabImageStyle}
                  draggable="false"
                  loading="eager"
                />
              </div>
            ))}
          </div>

          {/* Right container - Content */}
          <div style={contentContainerStyle}>
            <h2 style={sectionTitleStyle}>
              Elige <span className="text-kalia-gold">Kalia</span> para un servicio profesional, de calidad y a precio competitivo.
            </h2>
            
            {/* Tab navigation */}
            <nav className="nav-grid" aria-label="Tabs" role="tablist">
              {tabsToUse.map((tab, index) => (
                <button
                  key={index}
                  type="button"
                  className="tab-button"
                  style={getTabButtonStyle(activeTab === index)}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={(e) => {
                    if (activeTab !== index) {
                      e.target.style.backgroundColor = isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(255, 255, 255, 0.25)';
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== index) {
                      const defaultStyle = getTabButtonStyle(false);
                      e.target.style.backgroundColor = defaultStyle.backgroundColor;
                      e.target.style.transform = 'none';
                      e.target.style.boxShadow = defaultStyle.boxShadow || 'none';
                    }
                  }}
                >
                  {/* Icon */}
                  <span style={getTabIconStyle(activeTab === index)}>
                    <IconComponent name={tab.svg} />
                  </span>
                  
                  {/* Tab content */}
                  <span style={getTabHeadingStyle(activeTab === index)}>
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