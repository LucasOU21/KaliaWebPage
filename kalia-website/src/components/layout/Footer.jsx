// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const styles = {
    footer: {
      width: '100%',
      backgroundColor: 'white'
    },
    container: {
      maxWidth: '85rem',
      margin: '0 auto',
      width: '100%',
      padding: '1rem 1.5rem 1rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
      padding: '2rem 0'
    },
    gridMd: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '3rem',
      padding: '2rem 0'
    },
    logoSection: {
      gridColumn: 'span 1'
    },
    logoContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      marginTop: '-5rem' // -mt-20 equivalent
    },
    logoContainerMd: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: '1.5rem',
      marginTop: '-5rem'
    },
    logo: {
      height: '21.25rem', // h-85 equivalent (340px)
      width: 'auto',
      display: 'block'
    },
    logoHidden: {
      height: '21.25rem',
      width: 'auto',
      display: 'none'
    },
    description: {
      color: '#000000',
      textAlign: 'center',
      marginBottom: '1.5rem',
      fontFamily: 'Poppins, sans-serif'
    },
    descriptionMd: {
      color: '#000000',
      textAlign: 'left',
      marginBottom: '1.5rem',
      fontFamily: 'Poppins, sans-serif'
    },
    contactContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      textAlign: 'center'
    },
    contactContainerMd: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      textAlign: 'left'
    },
    contactLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      color: '#000000',
      textDecoration: 'none',
      fontFamily: 'Poppins, sans-serif',
      transition: 'color 0.3s ease'
    },
    contactLinkMd: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '0.5rem',
      color: '#000000',
      textDecoration: 'none',
      fontFamily: 'Poppins, sans-serif',
      transition: 'color 0.3s ease'
    },
    sectionTitle: {
      fontWeight: 'bold',
      color: '#000000',
      textAlign: 'center',
      marginBottom: '1.5rem',
      fontFamily: 'Georgia, serif'
    },
    sectionTitleMd: {
      fontWeight: 'bold',
      color: '#000000',
      textAlign: 'left',
      marginBottom: '1.5rem',
      fontFamily: 'Georgia, serif'
    },
    servicesList: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '0.75rem',
      textAlign: 'center',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    servicesListMd: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '0.75rem',
      textAlign: 'left',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    serviceLink: {
      color: '#000000',
      textDecoration: 'none',
      fontFamily: 'Poppins, sans-serif',
      transition: 'color 0.3s ease'
    },
    locationContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      textAlign: 'center'
    },
    locationContainerMd: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      textAlign: 'left'
    },
    locationText: {
      color: '#000000',
      fontFamily: 'Poppins, sans-serif'
    },
    socialContainer: {
      marginTop: '1.5rem'
    },
    socialTitle: {
      fontWeight: 'bold',
      color: '#000000',
      textAlign: 'center',
      marginBottom: '1rem',
      fontFamily: 'Georgia, serif'
    },
    socialTitleMd: {
      fontWeight: 'bold',
      color: '#000000',
      textAlign: 'left',
      marginBottom: '1rem',
      fontFamily: 'Georgia, serif'
    },
    socialLink: {
      color: '#000000',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    copyrightSection: {
      borderTop: '1px solid #e5e7eb',
      padding: '1.5rem 0',
      textAlign: 'center'
    },
    copyrightText: {
      fontSize: '0.875rem',
      color: '#000000',
      fontFamily: 'Poppins, sans-serif'
    }
  };

  // Use window width to determine if we're on mobile or desktop
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .hover-gold:hover {
          color: #FFD000 !important;
        }
        
        .dark .dark-bg {
          background-color: #1E1E1E;
        }
        .dark .dark-text {
          color: #F8F1E7;
        }
        .dark .dark-hidden {
          display: none;
        }
        .dark .dark-block {
          display: block;
        }
        
        @media (min-width: 1024px) {
          .lg-padding {
            padding-left: 2.5rem;
            padding-right: 2.5rem;
            padding-top: 1.5rem;
          }
        }
        
        @media (min-width: 1536px) {
          .container-2xl {
            max-width: 100vw;
          }
        }
      `}</style>

      <footer className="dark-bg" style={styles.footer}>
        <div 
          className="lg-padding container-2xl"
          style={styles.container}
        >
          <div style={isMobile ? styles.grid : styles.gridMd}>
            {/* Logo and company information column */}
            <div style={styles.logoSection}>
              {/* Brand Logo */}
              <div style={isMobile ? styles.logoContainer : styles.logoContainerMd}>
                <img 
                  src="/src/assets/images/logos/KaliaLogo-300x300.png" 
                  alt="Kalia Logo" 
                  className="dark-hidden"
                  style={styles.logo}
                />
                <img 
                  src="/src/assets/images/logos/KaliaLogo300x300Dark.png" 
                  alt="Kalia Logo" 
                  className="dark-block"
                  style={styles.logoHidden}
                />
              </div>
              <p 
                className="dark-text"
                style={isMobile ? styles.description : styles.descriptionMd}
              >
                Diseñamos y transformamos espacios con calidad y elegancia para hacer de tu hogar un lugar excepcional.
              </p>
              
              {/* Contact information */}
              <div style={isMobile ? styles.contactContainer : styles.contactContainerMd}>
                <a 
                  href="tel:603370840" 
                  className="hover-gold dark-text"
                  style={isMobile ? styles.contactLink : styles.contactLinkMd}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.25rem', width: '1.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  603 37 08 40
                </a>
              </div>
            </div>

            {/* Navigation links column */}
            <div style={styles.logoSection}>
              <h3 
                className="dark-text"
                style={isMobile ? styles.sectionTitle : styles.sectionTitleMd}
              >
                Servicios
              </h3>
              <ul style={isMobile ? styles.servicesList : styles.servicesListMd}>
                <li>
                  <Link to="/servicios/montaje-muebles" className="hover-gold dark-text" style={styles.serviceLink}>
                    Montaje de muebles
                  </Link>
                </li>
                <li>
                  <Link to="/servicios/diseno-muebles" className="hover-gold dark-text" style={styles.serviceLink}>
                    Diseño de muebles a medida
                  </Link>
                </li>
                <li>
                  <Link to="/services/intalacion-cocinas-electrodomesticos" className="hover-gold dark-text" style={styles.serviceLink}>
                    Instalación de cocinas
                  </Link>
                </li>
                <li>
                  <Link to="/services/reformas-de-vivienda" className="hover-gold dark-text" style={styles.serviceLink}>
                    Reformas integrales
                  </Link>
                </li>
                <li>
                  <Link to="/services/instalacion-puertas-tarimaflotante-rodapies" className="hover-gold dark-text" style={styles.serviceLink}>
                    Puertas, Tarima y Rodapiés
                  </Link>
                </li>
                <li>
                  <Link to="/services/servicios-de-acabados" className="hover-gold dark-text" style={styles.serviceLink}>
                    Servicios de Acabados
                  </Link>
                </li>
                <li>
                  <Link to="/servicios/manitas" className="hover-gold dark-text" style={styles.serviceLink}>
                    Servicio de manitas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social media and location column */}
            <div style={styles.logoSection}>
              <h3 
                className="dark-text"
                style={isMobile ? styles.sectionTitle : styles.sectionTitleMd}
              >
                Ubicación
              </h3>
              <div style={isMobile ? styles.locationContainer : styles.locationContainerMd}>
                <p className="dark-text" style={styles.locationText}>
                  Madrid, España
                </p>
                <p className="dark-text" style={styles.locationText}>
                  Servicio en toda la Comunidad de Madrid
                </p>
              </div>
              
              {/* Social media icons */}
              <div style={styles.socialContainer}>
                <h3 
                  className="dark-text"
                  style={isMobile ? styles.socialTitle : styles.socialTitleMd}
                >
                  Síguenos
                </h3>
                <a 
                  href="https://whatsapp.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover-gold dark-text"
                  style={styles.socialLink}
                >
                  <svg style={{ height: '1.5rem', width: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.355 4.642A9.946 9.946 0 0 0 12.008 2C6.485 2 2 6.485 2 11.992c0 1.856.483 3.666 1.392 5.267L2 22l4.833-1.268a10.022 10.022 0 0 0 5.175 1.408h.008c5.517 0 10-4.485 10-10 0-2.667-1.042-5.183-2.93-7.067l-.73-.431zm-7.346 15.358h-.008c-1.492 0-2.95-.4-4.225-1.158l-.3-.183-3.133.825.833-3.05-.2-.317a8.274 8.274 0 0 1-1.267-4.392c0-4.584 3.734-8.317 8.325-8.317a8.277 8.277 0 0 1 5.9 2.45 8.275 8.275 0 0 1 2.441 5.892c0 4.575-3.733 8.317-8.325 8.317l.033-.067h-.074zm4.567-6.224c-.25-.125-1.483-.733-1.717-.817-.233-.083-.4-.125-.566.125-.167.25-.65.817-.8 1-.15.183-.3.208-.55.083-.25-.125-1.05-.383-2-1.233-.741-.667-1.241-1.492-1.391-1.742-.15-.25-.016-.383.113-.508.116-.108.25-.283.375-.425.125-.142.167-.242.25-.4.083-.159.041-.3-.021-.425-.063-.125-.567-1.358-.775-1.85-.208-.483-.416-.4-.567-.416-.15-.017-.316-.017-.483-.017a.934.934 0 0 0-.675.317c-.233.25-.883.867-.883 2.108 0 1.242.9 2.442.025 2.608.125.167 1.75 2.675 4.25 3.75.591.258 1.05.408 1.408.525.591.183 1.133.158 1.559.1.475-.07 1.483-.608 1.692-1.2.208-.591.208-1.1.146-1.2-.063-.1-.23-.158-.48-.275l.09.017z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div style={styles.copyrightSection}>
            <p className="dark-text" style={styles.copyrightText}>
              © {currentYear} Kalia Reformas y Decoración
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;