// src/components/layout/HeroSection.jsx
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    // Inject the hero section styles - exact match to Astro file
    const heroStyles = `
      /* Import Google fonts */
      @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
      
      .hero-container {
        position: relative;
        z-index: 10;
        width: 100vw;
        height: 110vh;
        min-height: 110vh;
        display: flex;
        padding: 0;
        margin: 0;
        margin-left: calc(-50vw + 50%);
        margin-right: calc(-50vw + 50%);
        overflow: hidden;
      }
      
      .hero-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: #000;
      }
      
      .hero-content-side {
        position: relative;
        width: 50%;
        height: 110vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
      }
      
      .hero-image-side {
        position: relative;
        width: 50%;
        height: 110vh;
        overflow: hidden;
      }
      
      .hero-image-side::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
        z-index: 1;
      }
      
      .hero-image-full {
        width: 100%;
        height: 110vh;
        object-fit: cover;
        object-position: center;
      }
      
      @keyframes fadeInLeft {
        0% { opacity: 0; transform: translateX(-50px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      
      @keyframes fadeInRight {
        0% { opacity: 0; transform: translateX(50px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      
      .hero-content {
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(3px);
        padding: 3.5rem 2.5rem;
        border-radius: 12px;
        width: 90%;
        max-width: 40rem;
        text-align: center;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .brand-name {
        font-family: 'Georgia', serif;
        font-size: 4rem;
        font-weight: 700;
        letter-spacing: -1px;
        line-height: 1;
        margin-bottom: 0.5rem;
        text-align: center;
        color: #FFD000;
      }
      
      .brand-highlight {
        color: #FFFFFF;
        font-weight: 800;
      }
      
      .brand-subtitle {
        font-family: 'Poppins', sans-serif;
        font-size: 1.25rem;
        font-weight: 300;
        letter-spacing: 2px;
        margin-bottom: 1.5rem;
        color: #FFFFFF;
        text-transform: uppercase;
        text-align: center;
      }
      
      .tagline {
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        font-weight: 300;
        color: #FFFFFF;
        margin-bottom: 2rem;
        line-height: 1.6;
        white-space: nowrap;
        display: inline-block;
      }
      
      .tagline-bullet {
        color: #FFD000;
        margin: 0 0.25rem;
      }
      
      .contact-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin-top: 1rem;
      }
      
      .call-button,
      .whatsapp-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #F8F1E7;
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        font-weight: 300;
        text-decoration: none;
      }
      
      .call-button svg,
      .whatsapp-button svg {
        width: 3rem;
        height: 3rem;
        padding: 0.75rem;
        border-radius: 50%;
        margin-bottom: 0.5rem;
      }
      
      .call-button svg {
        background: #FFD000;
      }
      
      .whatsapp-button svg {
        background: #25D366;
      }
      
      @media (max-width: 1200px) {
        .hero-content {
          padding: 2.5rem 2rem;
        }
        
        .brand-name {
          font-size: 3.5rem;
        }
      }
      
      @media (max-width: 992px) {
        .hero-container {
          flex-direction: column;
          height: auto;
          min-height: 110vh;
          position: relative;
        }
        
        .hero-content-side, 
        .hero-image-side {
          width: 100%;
        }
        
        .hero-content-side {
          order: 2;
          height: auto;
          min-height: 60vh;
          position: relative;
          z-index: 2;
          padding: 2rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }
        
        .hero-image-side {
          order: 1;
          position: absolute;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
        }
        
        .hero-image-full {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
        
        .hero-content {
          background: rgba(0, 0, 0, 0.75);
          margin: 6rem auto 2rem auto;
          backdrop-filter: blur(3px);
        }
        
        .hero-image-side::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
          z-index: 1;
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      }
      
      @media (max-width: 768px) {
        .hero-container {
          min-height: 110vh;
        }
        
        .hero-content-side {
          min-height: 60vh;
        }
        
        .hero-image-side {
          height: 100%;
        }
        
        .hero-content {
          padding: 2rem 1.5rem;
          width: 95%;
          margin-top: 6rem;
        }
        
        .brand-name {
          font-size: 2.5rem;
        }
        
        .brand-subtitle {
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        
        .tagline {
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          white-space: normal;
          max-width: 100%;
        }
        
        .contact-buttons {
          gap: 1.5rem;
        }
        
        .call-button,
        .whatsapp-button {
          font-size: 0.9rem;
        }
        
        .call-button svg,
        .whatsapp-button svg {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    `;

    // Create style element and inject CSS
    const styleElement = document.createElement('style');
    styleElement.textContent = heroStyles;
    document.head.appendChild(styleElement);

    // Cleanup function to remove styles when component unmounts
    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  return (
    <section className="hero-container">
      <div className="hero-background"></div>
      
      <div className="hero-content-side">
        <div className="hero-content">
          <h1 className="brand-name">
            <span className="brand-highlight">Kalia</span><br /> Reformas<br />y Decoración
          </h1>
          
          <p className="brand-subtitle">
            Espacios excepcionales
          </p>
          
          <p className="tagline">
            <span>Diseño personalizado</span>
            <span className="tagline-bullet">•</span>
            <span>Calidad excepcional</span>
            <span className="tagline-bullet">•</span>
            <span>Precio inmejorable</span>
          </p>
          
          <div className="contact-buttons">
            <a href="tel:603370840" className="call-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              603 37 08 40
            </a>
            
            <a href="https://wa.me/603370840?text=Hola%2C%20me%20interesa%20obtener%20información%20sobre%20sus%20servicios%20de%20reformas%20y%20decoración" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zM12.04 20.15c-1.4 0-2.79-.38-3.99-1.08l-.29-.17-2.99.78.8-2.91-.18-.3c-.78-1.23-1.19-2.66-1.19-4.12 0-4.28 3.48-7.76 7.76-7.76 2.07 0 4.01.81 5.47 2.27 1.46 1.46 2.27 3.4 2.27 5.47 0 4.28-3.48 7.76-7.76 7.76z"/>
                <path d="M9.34 7.28c-.18-.4-.37-.41-.54-.41-.14 0-.3 0-.46 0-.16 0-.43.06-.65.3-.22.24-.84.82-.84 2.01s.86 2.33.98 2.49c.12.16 1.75 2.67 4.24 3.74.59.27 1.05.43 1.41.55.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <div className="hero-image-side">
        <img src="/images/HeroImg1.jpg" alt="Kalia Reformas interior design" className="hero-image-full" />
      </div>
    </section>
  );
};

export default HeroSection;