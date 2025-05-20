// src/components/home/HeroSection.jsx
import { Link } from 'react-router-dom';
// Import your hero image
// import heroImage from '../../assets/images/HeroImg1.jpg';

const HeroSection = () => {
  return (
    <section className="relative z-10 w-[100vw] h-[110vh] min-h-[110vh] flex p-0 m-0 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-black"></div>
      
      <div className="relative w-1/2 h-[110vh] flex justify-center items-center z-2 animate-[fadeInLeft_1.2s_ease-out_forwards]">
        <div className="bg-black/85 backdrop-blur-md p-[3.5rem_2.5rem] rounded-xl w-[90%] max-w-[40rem] text-center shadow-lg border border-white/10 flex flex-col items-center">
          <h1 className="font-georgia text-4xl font-bold -tracking-[1px] leading-none mb-2 text-center text-kalia-gold">
            <span className="text-white font-extrabold">Kalia</span><br /> Reformas<br />y Decoración
          </h1>
          
          <p className="font-poppins text-xl font-light tracking-[2px] mb-6 text-white uppercase text-center">
            Espacios excepcionales
          </p>
          
          <p className="font-poppins text-lg font-light text-white mb-8 leading-relaxed whitespace-nowrap inline-block">
            <span>Diseño personalizado</span>
            <span className="text-kalia-gold mx-1">•</span>
            <span>Calidad excepcional</span>
            <span className="text-kalia-gold mx-1">•</span>
            <span>Precio inmejorable</span>
          </p>
          
          <div className="flex flex-col items-center gap-6 mt-4 w-full max-w-[400px]">
            <Link 
              to="/calculadora" 
              className="bg-kalia-gold text-black border-none rounded-lg py-3.5 px-8 text-lg font-semibold font-poppins tracking-wide uppercase transition-all duration-300 cursor-pointer relative overflow-hidden inline-flex items-center justify-center w-full max-w-[300px] shadow-lg animate-[pulse_2s_infinite] hover:transform hover:-translate-y-1 hover:shadow-xl group"
            >
              <span className="relative z-2 transition-transform duration-300 group-hover:translate-x-2">
                CALCULAR PRESUPUESTO
              </span>
              <svg 
                className="absolute right-5 opacity-0 transform -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <p className="font-poppins text-sm text-white -mt-2 mb-4 italic">
              ¡Haz clic aquí para obtener tu presupuesto personalizado!
            </p>
            
            <a href="tel:603370840" className="flex flex-col items-center text-kalia-beige font-poppins text-lg font-light transition-all duration-300 mt-2 hover:text-kalia-gold">
              <svg 
                className="w-12 h-12 bg-kalia-gold p-3 rounded-full transition-transform duration-300 mb-2 hover:scale-110" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#000000" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              603 37 08 40
            </a>
          </div>
        </div>
      </div>
      
      <div className="relative w-1/2 h-[110vh] overflow-hidden animate-[fadeInRight_1.2s_ease-out_forwards]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 to-transparent z-1"></div>
        <img 
          src="/src/assets/images/HeroImg1.jpg" 
          alt="Kalia Reformas interior design"
          className="w-full h-[110vh] object-cover object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;