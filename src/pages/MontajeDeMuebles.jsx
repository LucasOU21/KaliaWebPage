import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const MontajeDeMuebles = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Tab data
  const tabs = [
    { id: 'descripcion', title: 'Descripción' },
    { id: 'imagenes', title: 'Imágenes' }
  ];

  // Images data for the gallery
  const galleryImages = [
    {
      src: '/images/armario.jpg',
      alt: 'Armario',
      title: 'Armario'
    },
    {
      src: '/images/armario-puertas-corredizas.jpg',
      alt: 'Armario con puertas corredizas',
      title: 'Armario con puertas corredizas'
    },
    {
      src: '/images/cama-cajoneras.jpg',
      alt: 'Cama cajonera',
      title: 'Cama cajonera'
    },
    {
      src: '/images/cama-nido.jpg',
      alt: 'Cama nido',
      title: 'Cama nido'
    },
    {
      src: '/images/cama-somier.jpg',
      alt: 'Cama somier',
      title: 'Cama somier'
    },
    {
      src: '/images/canape.jpg',
      alt: 'Canapé',
      title: 'Canapé'
    },
    {
      src: '/images/comoda.jpg',
      alt: 'Cómoda',
      title: 'Cómoda'
    },
    {
      src: '/images/litera-armario.jpg',
      alt: 'Litera armario',
      title: 'Litera armario'
    },
    {
      src: '/images/litera-cajonera-armario.jpg',
      alt: 'Litera cajonera armario',
      title: 'Litera cajonera armario'
    },
    {
      src: '/images/litera-simple.jpg',
      alt: 'Litera simple',
      title: 'Litera simple'
    },
    {
      src: '/images/mesita-de-noche.jpg',
      alt: 'Mesita de noche',
      title: 'Mesita de noche'
    },
    {
      src: '/images/mueble-de-banio.jpg',
      alt: 'Mueble de baño',
      title: 'Mueble de baño'
    },
    {
      src: '/images/repisa.jpg',
      alt: 'Repisa',
      title: 'Repisa'
    },
    {
      src: '/images/sofa-baul.jpg',
      alt: 'Sofá baúl',
      title: 'Sofá baúl'
    },
    {
      src: '/images/sofa-cama.jpg',
      alt: 'Sofá cama',
      title: 'Sofá cama'
    },
    {
      src: '/images/sofa-simple.jpg',
      alt: 'Sofá simple',
      title: 'Sofá simple'
    }
  ];

  // Handle image modal
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev + 1 >= galleryImages.length ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev - 1 < 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle escape key for modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isModalOpen]);

  const styles = {
    container: {
      backgroundColor: isDarkMode ? '#374151' : '#F8F1E7',
      minHeight: '100vh',
      fontFamily: 'Poppins, sans-serif',
      color: isDarkMode ? '#F8F1E7' : '#111827'
    },
    heroSection: {
      maxWidth: '85rem',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '2.5rem 1rem 0',
      paddingTop: '7rem',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s ease-out'
    },
    introText: {
      marginBottom: '1rem',
      maxWidth: '65ch',
      fontWeight: '500',
      color: isDarkMode ? '#F8F1E7' : '#111827',
      fontSize: '1.25rem',
      lineHeight: '1.6',
      fontFamily: 'Poppins, sans-serif',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
      transition: 'all 0.6s ease-out 0.2s'
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      borderRadius: '0.5rem',
      padding: '0.75rem 1rem',
      fontWeight: 'bold',
      color: '#000',
      backgroundColor: '#FFD000',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontSize: '0.875rem',
      border: 'none',
      cursor: 'pointer'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1rem',
      flexWrap: 'wrap'
    },
    heroContent: {
      display: 'flex',
      flexDirection: 'row', // Always row for desktop
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem',
      marginTop: '1rem'
    },
    heroText: {
      flex: '1',
      maxWidth: '50%',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s ease-out 0.4s'
    },
    heroTitle: {
      display: 'block',
      fontSize: '3rem',
      fontWeight: 'bold',
      letterSpacing: '-0.025em',
      color: isDarkMode ? '#F8F1E7' : '#1f2937',
      fontFamily: 'Georgia, serif'
    },
    heroSubtitle: {
      marginTop: '0.75rem',
      fontSize: '1.125rem',
      color: isDarkMode ? '#F8F1E7' : '#1f2937',
      fontFamily: 'Poppins, sans-serif'
    },
    heroTitleButtonContainer: {
      marginTop: '2.5rem',
      marginBottom: '1rem'
    },
    heroImageContainer: {
      flex: '1',
      maxWidth: '50%',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    heroImage: {
      width: '100%',
      maxWidth: '500px',
      borderRadius: '0.375rem',
      boxShadow: isDarkMode ? 
        '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)' :
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateX(0)' : 'translateX(50px)',
      transition: 'all 1s ease-out 0.6s'
    },
    tabContainer: {
      maxWidth: '85rem',
      margin: '0 auto',
      padding: '2.5rem 1rem 0',
      backgroundColor: isDarkMode ? '#374151' : '#F8F1E7'
    },
    tabNav: {
      maxWidth: '6xl',
      margin: '0 auto',
      display: 'grid',
      gap: '1px',
      gridTemplateColumns: '1fr 1fr',
      fontFamily: 'Poppins, sans-serif'
    },
    tabButton: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      borderRadius: '0.75rem',
      border: '1px solid transparent',
      padding: '0.75rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      backgroundColor: 'transparent',
      cursor: 'pointer'
    },
    tabButtonActive: {
      backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f3f4f6',
      border: '1px solid transparent'
    },
    tabText: {
      display: 'block',
      textAlign: 'center',
      fontWeight: 'bold',
      color: isDarkMode ? '#F8F1E7' : '#1f2937'
    },
    tabContent: {
      marginTop: '3rem'
    },
    contentSection: {
      maxWidth: '85rem',
      margin: '0 auto',
      padding: '0 1rem 2.5rem'
    },
    contentGrid: {
      display: 'grid',
      gap: '3rem',
      gridTemplateColumns: '1fr',
      '@media (min-width: 768px)': {
        gridTemplateColumns: '1fr 1fr'
      }
    },
    contentMain: {
      width: '75%'
    },
    contentTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      letterSpacing: '-0.025em',
      color: isDarkMode ? '#F8F1E7' : '#1f2937',
      lineHeight: '1.2',
      fontFamily: 'Georgia, serif'
    },
    contentDescription: {
      marginTop: '0.75rem',
      color: isDarkMode ? '#F8F1E7' : '#1f2937',
      fontFamily: 'Poppins, sans-serif',
      lineHeight: '1.6'
    },
    featuresSection: {
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    featureTitle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: isDarkMode ? '#F8F1E7' : '#1f2937',
      fontFamily: 'Georgia, serif'
    },
    featureText: {
      marginTop: '0.25rem',
      color: isDarkMode ? '#F8F1E7' : '#1f2937',
      fontFamily: 'Poppins, sans-serif'
    },
    gallerySection: {
      maxWidth: '85rem',
      margin: '0 auto',
      padding: '0 1rem 2.5rem'
    },
    galleryGrid: {
      display: 'grid',
      width: '100%',
      gridTemplateColumns: '1fr',
      gap: '4rem',
      '@media (min-width: 768px)': {
        gridTemplateColumns: '1fr 1fr'
      }
    },
    galleryColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      fontFamily: 'Poppins, sans-serif'
    },
    galleryItem: {
      display: 'flex',
      flexDirection: 'column'
    },
    galleryImage: {
      height: '100%',
      width: '100%',
      cursor: 'pointer',
      borderRadius: '0.375rem',
      objectFit: 'cover',
      objectPosition: 'center',
      boxShadow: isDarkMode ? 
        '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)' :
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      transition: 'transform 0.3s ease'
    },
    modal: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.9)'
    },
    modalImage: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      maxHeight: '100vh',
      maxWidth: '100vw',
      transform: 'translate(-50%, -50%)',
      objectFit: 'contain'
    },
    modalButton: {
      position: 'absolute',
      cursor: 'pointer',
      fontSize: '1.125rem',
      fontWeight: '800',
      color: 'white',
      fontFamily: 'Poppins, sans-serif',
      background: 'none',
      border: 'none'
    },
    closeButton: {
      right: '1rem',
      top: '1rem',
      fontSize: '1.875rem'
    },
    nextButton: {
      right: '1.5rem',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    prevButton: {
      left: '1.5rem',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  };

  // Media query handling for responsive design
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive styles
  const responsiveStyles = {
    heroContent: {
      ...styles.heroContent,
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '1rem' : '2rem'
    },
    heroText: {
      ...styles.heroText,
      maxWidth: isMobile ? '100%' : '50%',
      order: isMobile ? 2 : 1
    },
    heroTitle: {
      ...styles.heroTitle,
      fontSize: isMobile ? '1.5rem' : '3rem'
    },
    heroImageContainer: {
      ...styles.heroImageContainer,
      maxWidth: isMobile ? '100%' : '50%',
      order: isMobile ? 1 : 2,
      justifyContent: isMobile ? 'center' : 'flex-end'
    },
    contentGrid: {
      ...styles.contentGrid,
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr'
    },
    galleryGrid: {
      ...styles.galleryGrid,
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr'
    },
    tabNav: {
      ...styles.tabNav,
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '0.25rem' : '1rem'
    },
    buttonContainer: {
      ...styles.buttonContainer,
      flexDirection: isMobile ? 'column' : 'row'
    }
  };

  return (
    <div style={styles.container}>
      {/* Overlay div */}
      <div id="overlay" style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#F8F1E7',
        zIndex: -1
      }}></div>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div>
          <p style={styles.introText}>
            Ofrecemos montaje de muebles con precisión y rapidez, realizado por expertos capacitados para todo tipo de mobiliario. Aseguramos un trabajo limpio, eficiente y con garantía para tu total tranquilidad.
          </p>

          {/* Side by side CTA Buttons */}
          <div style={responsiveStyles.buttonContainer}>
            <a 
              href="/contact" 
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e0b800';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FFD000';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Contáctanos
              <svg 
                style={{ height: '1rem', width: '1rem', flexShrink: 0, transition: 'transform 0.3s ease' }} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>

            <a 
              href="/calculadora" 
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e0b800';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FFD000';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <svg 
                style={{ height: '1rem', width: '1rem', flexShrink: 0 }} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Calcular Presupuesto
              <svg 
                style={{ height: '1rem', width: '1rem', flexShrink: 0 }} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
          </div>
        </div>

        <div style={responsiveStyles.heroContent}>
          {/* Text content - always order 1 (left side) */}
          <div style={responsiveStyles.heroText}>
            <h1 style={responsiveStyles.heroTitle}>
              Servicio Profesional de Montaje de Muebles
            </h1>
            <p style={styles.heroSubtitle}>
              Descubre por qué somos la opción más confiable
            </p>

            {/* Additional Calcular Presupuesto button under title */}
            <div style={styles.heroTitleButtonContainer}>
              <a 
                href="/calculadora" 
                style={styles.ctaButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e0b800';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#FFD000';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <svg 
                  style={{ height: '1rem', width: '1rem', flexShrink: 0 }} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Calcular Presupuesto
                <svg 
                  style={{ height: '1rem', width: '1rem', flexShrink: 0 }} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Image container - always order 2 (right side) */}
          <div style={responsiveStyles.heroImageContainer}>
            <img
              src="/images/montaje-muebles-main2.jpg"
              alt="Servicio Profesional de Montaje de Muebles | Precisión y Garantía"
              style={styles.heroImage}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div style={styles.tabContainer}>
        <nav style={responsiveStyles.tabNav} aria-label="Tabs" role="tablist">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              style={{
                ...styles.tabButton,
                ...(activeTab === index ? styles.tabButtonActive : {})
              }}
              onClick={() => setActiveTab(index)}
              role="tab"
              onMouseEnter={(e) => {
                if (activeTab !== index) {
                  e.target.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.02)' : '#f9fafb';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== index) {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span style={styles.tabText}>{tab.title}</span>
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <div style={styles.tabContent}>
          {/* Description Tab */}
          <div style={{ display: activeTab === 0 ? 'block' : 'none' }} role="tabpanel">
            <div style={styles.contentSection}>
              <div style={responsiveStyles.contentGrid}>
                <div style={styles.contentMain}>
                  <h2 style={styles.contentTitle}>
                    Montaje de Muebles
                  </h2>
                  <p style={styles.contentDescription}>
                    El montaje de muebles requiere precisión y experiencia. En Qero Reformas y Decoración, ensamblamos todo tipo de muebles con garantía de estabilidad y seguridad. Olvídate de las complicaciones del montaje y disfruta de un mobiliario perfectamente ensamblado.
                  </p>
                </div>

                <div style={styles.featuresSection}>
                  <div>
                    <h3 style={styles.featureTitle}>Armarios</h3>
                    <p style={styles.featureText}>
                      Montamos armarios Ikea, incluyendo armario Pax Ikea, armario Brimnes Ikea y armarios modulares Ikea, asegurando un ajuste preciso y funcionalidad óptima.
                    </p>
                    <p style={styles.featureText}>
                      Especialistas en montaje de armarios con puertas correderas, ideales para aprovechar mejor el espacio en dormitorios y vestidores.
                    </p>
                  </div>

                  <div>
                    <h3 style={styles.featureTitle}>Camas</h3>
                    <p style={styles.featureText}>
                      Ensamblamos camas abatibles Ikea, perfectas para espacios reducidos.
                    </p>
                    <p style={styles.featureText}>
                      Instalamos camas nido con cajones, optimizando almacenamiento y comodidad.
                    </p>
                    <p style={styles.featureText}>
                      Montamos camas con cajones, una solución práctica para guardar ropa de cama y otros objetos.
                    </p>
                  </div>

                  <div>
                    <h3 style={styles.featureTitle}>Muebles de Almacenamiento</h3>
                    <p style={styles.featureText}>
                      Montamos cómodas y mesitas de noche Ikea, asegurando estabilidad y acabados de calidad.
                    </p>
                    <p style={styles.featureText}>
                      Instalamos muebles de baño Ikea y muebles de baño con lavabo Leroy Merlin, brindando funcionalidad y diseño en cada instalación.
                    </p>
                    <p style={styles.featureText}>
                      Colocamos repisas de pared, ideales para maximizar el espacio y mejorar la organización del hogar.
                    </p>
                  </div>

                  <div>
                    <h3 style={styles.featureTitle}>Sofás y Literas</h3>
                    <p style={styles.featureText}>
                      Ensamblamos sofás cama Ikea, sofá cama Leroy Merlin, sofá cama Amazon y sofá cama de El Corte Inglés, garantizando comodidad y durabilidad.
                    </p>
                    <p style={styles.featureText}>
                      Instalamos literas armario, literas cajoneras y literas simples, ideales para dormitorios infantiles y habitaciones compartidas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Images Tab */}
          <div style={{ display: activeTab === 1 ? 'block' : 'none' }} role="tabpanel">
            <div style={styles.gallerySection}>
              <div style={responsiveStyles.galleryGrid}>
                {/* Left Column */}
                <div style={styles.galleryColumn}>
                  {galleryImages.slice(0, Math.ceil(galleryImages.length / 2)).map((image, index) => (
                    <div key={index} style={styles.galleryItem}>
                      <h3 style={styles.featureTitle}>{image.title}</h3>
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={styles.galleryImage}
                        loading="lazy"
                        onClick={() => openModal(index)}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div style={styles.modal} onClick={closeModal}>
          <img
            src={galleryImages[currentImageIndex]?.src}
            alt={galleryImages[currentImageIndex]?.alt}
            style={styles.modalImage}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            style={{...styles.modalButton, ...styles.closeButton}}
            onClick={closeModal}
          >
            ×
          </button>
          <button
            style={{...styles.modalButton, ...styles.nextButton}}
            onClick={nextImage}
          >
            Next
          </button>
          <button
            style={{...styles.modalButton, ...styles.prevButton}}
            onClick={prevImage}
          >
            Prev
          </button>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/34603370840?text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n"
        target="_blank"
        rel="noreferrer noopener"
        style={{
          position: 'fixed',
          top: '85%',
          right: 0,
          zIndex: 50,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '3rem',
          height: '3rem',
          borderTopLeftRadius: '1rem',
          borderBottomLeftRadius: '1rem',
          backgroundColor: '#25d366',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#30bd63';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#25d366';
        }}
      >
        <div style={{
          position: 'absolute',
          zIndex: 10,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#25d366',
          animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
        }}></div>
        <div style={{ position: 'relative', zIndex: 20 }}>
          <svg
            fill="#fff"
            height="24px"
            width="24px"
            viewBox="0 0 308.00 308.00"
          >
            <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path>
            <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default MontajeDeMuebles;