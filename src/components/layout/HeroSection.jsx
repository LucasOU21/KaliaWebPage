// src/components/layout/HeroSection.jsx
import { Link } from 'react-router-dom';
import '../../styles/heroSec.css'; // Import external CSS

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