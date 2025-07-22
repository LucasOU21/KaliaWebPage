// src/components/layout/FeaturesGeneral.jsx - Your working code with dark mode added
import React from 'react';

// Icon components with proper sizing
const VerifiedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const GroupsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const FrameIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21,15 16,10 5,21" />
  </svg>
);

const BooksIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);

const HouseFIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

const Community2Icon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const EarthIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

// Icon mapping
const iconMap = {
  frame: FrameIcon,
  groups: GroupsIcon,
  books: BooksIcon,
  houseF: HouseFIcon,
  verified: VerifiedIcon,
  community2: Community2Icon,
  earth2: EarthIcon,
};

const IconComponent = ({ name }) => {
  const Icon = iconMap[name] || VerifiedIcon;
  return <Icon />;
};

const FeaturesGeneral = ({ 
  title = "Diseño y Calidad para su Hogar", 
  subTitle, 
  features = [], 
  src, 
  alt 
}) => {
  //Check if we're in dark mode by looking for the dark class on a parent element
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const checkDarkMode = () => {
      const htmlElement = document.documentElement;
      const bodyElement = document.body;
      const appElement = document.querySelector('.app-container');
      
      const hasDarkClass = htmlElement.classList.contains('dark') || 
                          bodyElement.classList.contains('dark') ||
                          appElement?.classList.contains('dark') ||
                          document.querySelector('.dark') !== null;
      
      setIsDarkMode(hasDarkClass);
    };

    // Check initially
    checkDarkMode();

    // Create observer to watch for class changes
    const observer = new MutationObserver(checkDarkMode);
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Your actual features data from features.json
  const actualFeatures = [
    {
      heading: "Experiencia y profesionalismo",
      content: "Contamos con un equipo de expertos en reformas y decoración con años de experiencia en el sector. Garantizamos un trabajo impecable y profesional.",
      svg: "frame"
    },
    {
      heading: "Soluciones personalizadas",
      content: "Entendemos que cada cliente es único, por eso diseñamos proyectos adaptados a tus preferencias, presupuesto y estilo de vida.",
      svg: "groups"
    },
    {
      heading: "Servicios integrales",
      content: "Ofrecemos una amplia gama de servicios para que no tengas que preocuparte por nada. Desde la reforma completa de tu cocina hasta el montaje de muebles, pintura, electricidad y más.",
      svg: "books"
    },
    {
      heading: "Ahorro inteligente",
      content: "Sabemos que la economía importa, por eso diseñamos soluciones que combinan calidad y precios competitivos. Gracias a nuestra experiencia, seleccionamos los materiales y procesos más eficientes.",
      svg: "houseF"
    },
    {
      heading: "Calidad garantizada",
      content: "Trabajamos con los mejores materiales y las últimas tendencias en diseño para garantizar acabados de alta calidad. Nos preocupamos por cada detalle, asegurando resultados duraderos y funcionales que maximizan tu inversión.",
      svg: "verified"
    },
    {
      heading: "Cercanía y confianza",
      content: "Como empresa local, estamos comprometidos con brindar un servicio cercano y confiable en la Comunidad de Madrid y alrededores. Nos enorgullece construir relaciones basadas en la honestidad y el respeto.",
      svg: "community2"
    }
    // Note: Excluding the environmental commitment feature as requested in the Astro version
  ];

  const featuresToShow = features.length > 0 ? features : actualFeatures;
  
  // Filter out the "Compromiso con el medio ambiente" card if it exists
  const filteredFeatures = featuresToShow.filter(feature => 
    feature.heading !== "Compromiso con el medio ambiente"
  );

  // Calculate how many features to show in the first row (3)
  const firstRowFeatures = filteredFeatures.slice(0, 3);
  const secondRowFeatures = filteredFeatures.slice(3, 6);

  // Inline styles for better control - with dark mode support
  const styles = {
    container: {
      position: 'relative',
      backgroundColor: isDarkMode ? '#374151' : 'white',
      width: '100%',
      transition: 'background-color 0.3s ease'
    },
    section: {
      maxWidth: '85rem',
      margin: '0 auto',
      padding: '2rem 1rem',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: isDarkMode ? '#F8F1E7' : '#000000',
      fontFamily: 'Georgia, serif',
      marginBottom: '1rem',
      lineHeight: '1.2',
      transition: 'color 0.3s ease'
    },
    subtitle: {
      fontSize: '1.125rem',
      color: isDarkMode ? '#D1D5DB' : '#000000',
      fontFamily: 'Poppins, sans-serif',
      maxWidth: '42rem',
      margin: '0 auto',
      lineHeight: '1.6',
      transition: 'color 0.3s ease'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem',
      maxWidth: '80rem',
      margin: '0 auto 2rem auto'
    },
    card: {
      backgroundColor: isDarkMode ? '#4B5563' : '#F8F1E7',
      border: `1px solid ${isDarkMode ? '#6B7280' : '#e5e7eb'}`,
      borderRadius: '0.75rem',
      padding: '1.5rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      boxShadow: isDarkMode ? '0 1px 3px rgba(0, 0, 0, 0.3)' : '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    iconContainer: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '3rem',
      height: '3rem',
      backgroundColor: isDarkMode ? 'rgba(255, 208, 0, 0.3)' : 'rgba(255, 208, 0, 0.2)',
      color: '#FFD000',
      borderRadius: '0.5rem',
      marginBottom: '1rem',
      transition: 'background-color 0.3s ease'
    },
    cardTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: isDarkMode ? '#F8F1E7' : '#000000',
      fontFamily: 'Georgia, serif',
      marginBottom: '0.5rem',
      transition: 'color 0.3s ease'
    },
    cardContent: {
      fontSize: '0.875rem',
      color: isDarkMode ? '#D1D5DB' : '#000000',
      fontFamily: 'Poppins, sans-serif',
      lineHeight: '1.5',
      transition: 'color 0.3s ease'
    },
    image: {
      width: '100%',
      maxWidth: '64rem',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '0.5rem',
      margin: '0 auto 2rem auto',
      display: 'block'
    }
  };

  return (
    <>
      {/* CSS for responsive behavior and hover effects */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .feature-card:hover {
          border-color: #FFD000 !important;
          box-shadow: ${isDarkMode ? '0 4px 12px rgba(0, 0, 0, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.15)'} !important;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .section-responsive {
            padding: 1rem 0.5rem !important;
          }
          
          .title-responsive {
            font-size: 1.5rem !important;
          }
          
          .subtitle-responsive {
            font-size: 1rem !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .grid-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (min-width: 1025px) {
          .grid-responsive {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>

      <div style={styles.container}>
        <section style={styles.section} className="section-responsive">
          {/* Section header */}
          <div style={styles.header}>
            <h2 style={styles.title} className="title-responsive">
              {title}
            </h2>
            {subTitle && (
              <p style={styles.subtitle} className="subtitle-responsive">
                {subTitle}
              </p>
            )}
          </div>

          {/* Feature image display (if provided) */}
          {src && alt && (
            <img
              src={src}
              alt={alt}
              style={styles.image}
              draggable="false"
              loading="eager"
            />
          )}

          {/* First row of features - 3 cards */}
          <div style={styles.grid} className="grid-responsive">
            {firstRowFeatures.map((feature, index) => (
              <div 
                key={index}
                style={styles.card}
                className="feature-card"
              >
                <div style={styles.iconContainer}>
                  <IconComponent name={feature.svg} />
                </div>
                <h3 style={styles.cardTitle}>
                  {feature.heading}
                </h3>
                <p style={styles.cardContent}>
                  {feature.content}
                </p>
              </div>
            ))}
          </div>

          {/* Second row of features - remaining cards */}
          {secondRowFeatures.length > 0 && (
            <div style={styles.grid} className="grid-responsive">
              {secondRowFeatures.map((feature, index) => (
                <div 
                  key={index + 3}
                  style={styles.card}
                  className="feature-card"
                >
                  <div style={styles.iconContainer}>
                    <IconComponent name={feature.svg} />
                  </div>
                  <h3 style={styles.cardTitle}>
                    {feature.heading}
                  </h3>
                  <p style={styles.cardContent}>
                    {feature.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default FeaturesGeneral;