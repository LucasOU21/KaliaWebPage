// src/pages/InstalacionCocinasElectrodomesticos.jsx - Kitchen installation service detail page
import React, { useState, useEffect } from 'react';

const InstalacionCocinasElectrodomesticos = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Tab data
  const tabs = [
    { id: 'tabs-with-card-1', title: 'Descripción' },
    { id: 'tabs-with-card-2', title: 'Imágenes' }
  ];

  // Images data for the gallery
  const galleryImages = [
    {
      src: '/src/assets/images/muebles-altos.jpg',
      alt: 'Muebles altos',
      title: 'Muebles altos'
    },
    {
      src: '/src/assets/images/muebles-bajo-cocina.jpg',
      alt: 'Muebles bajos',
      title: 'Muebles bajos'
    },
    {
      src: '/src/assets/images/columna-electro.jpg',
      alt: 'Columnas',
      title: 'Columnas'
    },
    {
      src: '/src/assets/images/disenio-cocina.jpg',
      alt: 'Diseño de cocina',
      title: 'Diseño de cocina'
    },
    {
      src: '/src/assets/images/electro-panelados.jpg',
      alt: 'Electrodomésticos panelados',
      title: 'Electrodomésticos panelados'
    },
    {
      src: '/src/assets/images/campana-extractora.jpg',
      alt: 'Campana extractora',
      title: 'Campana extractora'
    },
    {
      src: '/src/assets/images/encimeras.jpg',
      alt: 'Encimera',
      title: 'Encimera'
    }
  ];

  // Split images into two columns (4 left, 3 right)
  const leftColumnImages = galleryImages.slice(0, 4);
  const rightColumnImages = galleryImages.slice(4);

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

  // Handle page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

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

  return (
    <>
      <style jsx>{`
        /* Import Google fonts */
        @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        /* Root variables */
        :root {
          --color-beige-bg: #F8F1E7;
          --color-gold: #FFD000;
          --font-heading: Georgia, serif;
          --font-body: 'Poppins', sans-serif;
        }

        .page-container {
          font-family: var(--font-body);
          background-color: var(--color-beige-bg);
          min-height: 100vh;
          position: relative;
        }

        .dark .page-container {
          background-color: #374151;
        }

        /* Loading overlay */
        .overlay {
          position: fixed;
          inset: 0;
          background-color: #e5e5e5;
          z-index: 9999;
          transition: opacity 1s ease;
        }

        .overlay.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .dark .overlay {
          background-color: #374151;
        }

        /* Hero section */
        .hero-section {
          max-width: 85rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          padding: 2.5rem 1rem 2.5rem 1rem;
          padding-top: 7rem;
          background-color: var(--color-beige-bg);
        }

        .dark .hero-section {
          background-color: #374151;
        }

        @media (min-width: 640px) {
          .hero-section {
            padding: 1.5rem 1.5rem 3.5rem 1.5rem;
            padding-top: 8rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-section {
            padding: 2rem 2rem 3.5rem 2rem;
            padding-top: 8rem;
          }
        }

        .intro-text {
          margin-bottom: 1rem;
          max-width: 65ch;
          font-weight: 500;
          color: #171717;
          font-family: var(--font-body);
          opacity: 0;
          transform: translateY(50px);
          animation: fadeInUp 1.5s ease forwards;
          animation-delay: 1s;
        }

        .dark .intro-text {
          color: #fafafa;
        }

        @media (min-width: 640px) {
          .intro-text {
            font-size: 1.25rem;
          }
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          font-weight: 700;
          color: #000000;
          outline: none;
          border: 1px solid transparent;
          background-color: var(--color-gold);
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 0.875rem;
          margin-bottom: 2rem;
        }

        .cta-button:hover {
          background-color: #e0b800;
          transform: translateY(-2px);
        }

        @media (min-width: 1536px) {
          .cta-button {
            font-size: 1rem;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        @media (min-width: 640px) {
          .hero-content {
            flex-direction: row;
            margin-top: 0;
            gap: 1rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-content {
            gap: 1rem;
          }
        }

        .hero-text {
          opacity: 0;
          transform: translateY(50px);
          animation: fadeInUp 1.5s ease forwards;
          animation-delay: 1.2s;
        }

        .hero-title {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #262626;
          font-family: var(--font-heading);
        }

        .dark .hero-title {
          color: #e5e5e5;
        }

        @media (min-width: 640px) {
          .hero-title {
            font-size: 3rem;
          }
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }

        .hero-subtitle {
          margin-top: 0.75rem;
          font-size: 1.125rem;
          color: #262626;
          font-family: var(--font-body);
        }

        .dark .hero-subtitle {
          color: #e5e5e5;
        }

        .hero-image {
          width: 1000px;
          max-width: 100%;
          height: auto;
          border-radius: 0.375rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          opacity: 0;
          transform: translateX(300px);
          animation: fadeInMoveRight 1.5s ease forwards;
          animation-delay: 1.4s;
        }

        .dark .hero-image {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        }

        /* Tab navigation */
        .tab-container {
          max-width: 85rem;
          margin: 0 auto;
          padding: 2.5rem 1rem 0 1rem;
          background-color: var(--color-beige-bg);
        }

        .dark .tab-container {
          background-color: #374151;
        }

        @media (min-width: 640px) {
          .tab-container {
            padding: 2.5rem 1.5rem 0 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .tab-container {
            padding: 3.5rem 2rem 0 2rem;
          }
        }

        .tab-nav {
          margin: 0 auto;
          display: grid;
          max-width: 48rem;
          gap: 1px;
          font-family: var(--font-body);
        }

        @media (min-width: 640px) {
          .tab-nav {
            display: flex;
            gap: 1rem;
          }
        }

        .tab-button {
          display: flex;
          width: 100%;
          justify-content: center;
          border-radius: 0.75rem;
          border: 1px solid transparent;
          padding: 0.75rem;
          outline: none;
          transition: all 0.3s ease;
          background: transparent;
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .tab-button {
            padding: 1.25rem;
          }
        }

        .tab-button:hover {
          background-color: rgba(163, 163, 163, 0.1);
        }

        .dark .tab-button:hover {
          background-color: rgba(64, 64, 64, 0.7);
        }

        .tab-button.active {
          background-color: rgba(163, 163, 163, 0.1);
          border-color: transparent;
        }

        .dark .tab-button.active {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .tab-text {
          display: block;
          text-align: center;
          font-weight: 700;
          color: #262626;
        }

        .dark .tab-text {
          color: #e5e5e5;
        }

        /* Tab content */
        .tab-content {
          margin-top: 3rem;
        }

        @media (min-width: 768px) {
          .tab-content {
            margin-top: 4rem;
          }
        }

        .content-section {
          max-width: 85rem;
          margin: 0 auto;
          padding: 0 1rem 2.5rem 1rem;
        }

        @media (min-width: 640px) {
          .content-section {
            padding: 0 1.5rem 2.5rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .content-section {
            padding: 0 2rem 3.5rem 2rem;
          }
        }

        .content-grid {
          display: grid;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .content-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .content-main {
          width: 100%;
        }

        @media (min-width: 1024px) {
          .content-main {
            width: 75%;
          }
        }

        .content-title {
          font-size: 1.875rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #262626;
          font-family: var(--font-heading);
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .dark .content-title {
          color: #e5e5e5;
        }

        @media (min-width: 768px) {
          .content-title {
            line-height: 1.25;
          }
        }

        @media (min-width: 1024px) {
          .content-title {
            font-size: 2.25rem;
          }
        }

        .content-description {
          margin-top: 0.75rem;
          color: #262626;
          font-family: var(--font-body);
          line-height: 1.6;
        }

        .dark .content-description {
          color: #e5e5e5;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-family: var(--font-body);
        }

        @media (min-width: 1024px) {
          .features-list {
            gap: 1.5rem;
          }
        }

        .feature-item {
          display: flex;
        }

        .feature-title {
          font-size: 1rem;
          font-weight: 700;
          color: #262626;
          font-family: var(--font-heading);
          margin-bottom: 0.25rem;
        }

        .dark .feature-title {
          color: #e5e5e5;
        }

        @media (min-width: 640px) {
          .feature-title {
            font-size: 1.125rem;
          }
        }

        .feature-text {
          margin-top: 0.25rem;
          color: #262626;
          font-family: var(--font-body);
          line-height: 1.5;
        }

        .dark .feature-text {
          color: #e5e5e5;
        }

        /* Image gallery */
        .gallery-grid {
          display: grid;
          width: 100%;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        @media (min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .gallery-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          font-family: var(--font-body);
        }

        @media (min-width: 1024px) {
          .gallery-column.right {
            margin-left: auto;
            margin-top: 1.5rem;
          }
        }

        .gallery-item {
          /* No additional styles needed */
        }

        .gallery-item-title {
          display: block;
          font-weight: 700;
          color: #262626;
          font-family: var(--font-heading);
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .dark .gallery-item-title {
          color: #e5e5e5;
        }

        .gallery-image {
          height: 100%;
          width: 100%;
          cursor: pointer;
          border-radius: 0.375rem;
          object-fit: cover;
          object-position: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .gallery-image:hover {
          transform: scale(1.02);
        }

        .dark .gallery-image {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        }

        /* Modal */
        .modal {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.9);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .modal.open {
          opacity: 1;
          visibility: visible;
        }

        .modal-image {
          position: absolute;
          left: 50%;
          top: 50%;
          max-width: 100vw;
          max-height: 100vh;
          transform: translate(-50%, -50%);
          object-fit: contain;
        }

        .modal-button {
          position: absolute;
          cursor: pointer;
          font-weight: 800;
          color: white;
          font-family: var(--font-body);
          padding: 0.5rem;
          border-radius: 0.25rem;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          transition: background-color 0.3s ease;
        }

        .modal-button:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        .modal-close {
          right: 1rem;
          top: 1rem;
          font-size: 1.875rem;
        }

        .modal-next {
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.25rem;
        }

        .modal-prev {
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.25rem;
        }

        /* Animations */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInMoveRight {
          0% {
            opacity: 0;
            transform: translateX(300px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Hidden class */
        .hidden {
          display: none !important;
        }
      `}</style>

      <div className="page-container">
        {/* Loading Overlay */}
        <div className={`overlay ${!isLoading ? 'hidden' : ''}`}></div>

        {/* Hero Section */}
        <section className="hero-section">
          <div>
            <p className="intro-text">
              Nos encargamos del montaje e instalación de muebles de cocina Ikea, Leroy Merlin y otros fabricantes.
            </p>

            {/* CTA Button */}
            <div>
              <a href="/contact" className="cta-button">
                Contáctanos
                <svg className="h-4 w-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Servicio de Instalación de Cocinas y Electrodomésticos
              </h1>
              <p className="hero-subtitle">
                Creamos muebles únicos y personalizados que se adaptan a tu espacio y estilo
              </p>
            </div>
            <div>
              <img
                src="/src/assets/images/realKitchen1.jpg"
                alt="Instalación de Cocinas y Electrodomésticos"
                className="hero-image"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="tab-container">
          <nav className="tab-nav" aria-label="Tabs" role="tablist">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                type="button"
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                role="tab"
              >
                <span className="tab-text">{tab.title}</span>
              </button>
            ))}
          </nav>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Description Tab */}
            <div className={`${activeTab === 0 ? '' : 'hidden'}`} role="tabpanel">
              <div className="content-section">
                <div className="content-grid">
                  <div className="content-main">
                    <h2 className="content-title">
                      Instalación de Cocinas y Electrodomésticos
                    </h2>
                    <p className="content-description">
                      Creamos muebles únicos y personalizados que se adaptan a tu espacio y estilo.
                    </p>
                  </div>

                  <div className="features-list">
                    <div className="feature-item">
                      <div>
                        <h3 className="feature-title">Subservicios</h3>
                        <p className="feature-text">
                          Instalamos muebles altos de cocina y muebles bajos de cocina, asegurando un ajuste perfecto.
                        </p>
                        <p className="feature-text">
                          Montamos electrodomésticos panelados, campanas extractoras y encimeras.
                        </p>
                        <p className="feature-text">
                          Diseño e instalación de cocinas Ikea y Leroy Merlin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Images Tab */}
            <div className={`${activeTab === 1 ? '' : 'hidden'}`} role="tabpanel">
              <div className="content-section">
                <div className="gallery-grid">
                  {/* Left Column */}
                  <div className="gallery-column">
                    {leftColumnImages.map((image, index) => (
                      <div key={index} className="gallery-item">
                        <h3 className="gallery-item-title">{image.title}</h3>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="gallery-image"
                          loading="lazy"
                          onClick={() => openModal(index)}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="gallery-column right">
                    {rightColumnImages.map((image, index) => (
                      <div key={index + leftColumnImages.length} className="gallery-item">
                        <h3 className="gallery-item-title">{image.title}</h3>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="gallery-image"
                          loading="lazy"
                          onClick={() => openModal(index + leftColumnImages.length)}
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
        <div className={`modal ${isModalOpen ? 'open' : ''}`} onClick={closeModal}>
          <img
            src={galleryImages[currentImageIndex]?.src}
            alt={galleryImages[currentImageIndex]?.alt}
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="modal-button modal-close" onClick={closeModal}>
            Close
          </button>
          <button className="modal-button modal-next" onClick={nextImage}>
            Next
          </button>
          <button className="modal-button modal-prev" onClick={prevImage}>
            Prev
          </button>
        </div>
      </div>
    </>
  );
};

export default InstalacionCocinasElectrodomesticos;