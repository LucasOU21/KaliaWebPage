// src/components/layout/HeroSection.jsx
import { Link } from 'react-router-dom';

const HeroSection = () => {
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