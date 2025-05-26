// src/components/layout/FeaturesGeneral.jsx
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

const ToolsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);

const EarthIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const BooksIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);

const FrameIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  title = "Diseño y Calidad para su Hogar", 
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

  // Calculate how many features to show in the first row (3)
  const firstRowFeatures = filteredFeatures.slice(0, 3);
  const secondRowFeatures = filteredFeatures.slice(3, 6);

  // Inline styles for better control
  const styles = {
    container: {
      position: 'relative',
      backgroundColor: 'white',
      width: '100%'
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
      color: '#000000',
      fontFamily: 'Georgia, serif',
      marginBottom: '1rem',
      lineHeight: '1.2'
    },
    subtitle: {
      fontSize: '1.125rem',
      color: '#000000',
      fontFamily: 'Poppins, sans-serif',
      maxWidth: '42rem',
      margin: '0 auto',
      lineHeight: '1.6'
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
      backgroundColor: '#F8F1E7',
      border: '1px solid #e5e7eb',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    iconContainer: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '3rem',
      height: '3rem',
      backgroundColor: 'rgba(255, 208, 0, 0.2)',
      color: '#FFD000',
      borderRadius: '0.5rem',
      marginBottom: '1rem'
    },
    cardTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#000000',
      fontFamily: 'Georgia, serif',
      marginBottom: '0.5rem'
    },
    cardContent: {
      fontSize: '0.875rem',
      color: '#000000',
      fontFamily: 'Poppins, sans-serif',
      lineHeight: '1.5'
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
          border-color: #FFD000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .grid-responsive {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .section-responsive {
            padding: 1rem 0.5rem;
          }
          
          .title-responsive {
            font-size: 1.5rem;
          }
          
          .subtitle-responsive {
            font-size: 1rem;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .grid-responsive {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1025px) {
          .grid-responsive {
            grid-template-columns: repeat(3, 1fr);
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