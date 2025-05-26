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
      
      .cta-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        margin-top: 1rem;
        width: 100%;
        max-width: 400px;
      }
      
      /* STATIC BUTTON - NO ANIMATIONS */
      .primary-button {
        background-color: #FFD000;
        color: #000000;
        border: none;
        border-radius: 8px;
        padding: 0.875rem 2rem;
        font-size: 1.1rem;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 300px;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        text-decoration: none;
      }
      
      .primary-button .button-text {
        position: relative;
      }
      
      .primary-button .arrow {
        margin-left: 0.5rem;
        opacity: 1;
      }
      
      .button-hint {
        font-family: 'Poppins', sans-serif;
        font-size: 0.9rem;
        color: #FFFFFF;
        margin-top: -0.5rem;
        margin-bottom: 1rem;
        font-style: italic;
      }
      
      .call-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #F8F1E7;
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        font-weight: 300;
        margin-top: 0.5rem;
        text-decoration: none;
      }
      
      .call-button svg {
        width: 3rem;
        height: 3rem;
        background: #FFD000;
        padding: 0.75rem;
        border-radius: 50%;
        margin-bottom: 0.5rem;
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
        
        .cta-container {
          gap: 1rem;
        }
        
        .primary-button {
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
        }
        
        .button-hint {
          font-size: 0.8rem;
        }
        
        .call-button {
          font-size: 0.9rem;
        }
        
        .call-button svg {
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
          
          <div className="cta-container">
            <Link to="/calculadora" className="primary-button">
              <span className="button-text">CALCULAR PRESUPUESTO</span>
              <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <p className="button-hint">¡Haz clic aquí para obtener tu presupuesto personalizado!</p>
            
            <a href="tel:603370840" className="call-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              603 37 08 40
            </a>
          </div>
        </div>
      </div>
      
      <div className="hero-image-side">
        <img src="/src/assets/images/HeroImg1.jpg" alt="Kalia Reformas interior design" className="hero-image-full" />
      </div>
    </section>
  );
};

export default HeroSection;