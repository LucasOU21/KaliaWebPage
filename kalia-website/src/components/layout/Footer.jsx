import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white dark:bg-[#1E1E1E]">
      <div className="mx-auto w-full max-w-[85rem] px-6 pt-4 lg:px-10 lg:pt-6 2xl:max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-8">
          {/* Logo and company information column */}
          <div className="col-span-1">
            {/* Brand Logo - significantly increased size */}
            <div className="flex justify-center md:justify-start mb-6 -mt-20">
              <img 
                src="/src/assets/images/logos/KaliaLogo-300x300.png" 
                alt="Kalia Logo" 
                className="h-85 w-auto block dark:hidden"
              />
              <img 
                src="/src/assets/images/logos/KaliaLogo300x300Dark.png" 
                alt="Kalia Logo" 
                className="h-85 w-auto hidden dark:block"
              />
            </div>
            <p className="text-[#000000] dark:text-[#F8F1E7] text-center md:text-left mb-6 font-poppins">
              Diseñamos y transformamos espacios con calidad y elegancia para hacer de tu hogar un lugar excepcional.
            </p>
            
            {/* Contact information */}
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <a href="tel:603370840" className="flex items-center justify-center md:justify-start gap-2 text-[#000000] dark:text-[#F8F1E7] hover:text-[#FFD000] dark:hover:text-[#FFD000] transition-colors font-poppins">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                603 37 08 40
              </a>
            </div>
          </div>

          {/* Navigation links column */}
          <div className="col-span-1">
            <h3 className="font-bold text-[#000000] dark:text-[#F8F1E7] text-center md:text-left mb-6 font-georgia">
              Servicios
            </h3>
            <ul className="grid grid-cols-1 gap-3 text-center md:text-left">
              <li>
                <Link to="/services/montaje-de-muebles" className="text-[#000000] dark:text-[#F8F1E7] hover:text-[#FFD000] dark:hover:text-[#FFD000] transition-colors font-poppins">
                  Montaje de muebles
                </Link>
              </li>
              <li>
                <Link to="/services/diseno-de-muebles" className="text-[#000000] dark:text-[#F8F1E7] hover:text-[#FFD000] dark:hover:text-[#FFD000] transition-colors font-poppins">
                  Diseño de muebles a medida
                </Link>
              </li>
              <li>
                <Link to="/services/intalacion-cocinas-electrodomesticos" className="text-[#000000] dark:text-[#F8F1E7] hover:text-[#FFD000] dark:hover:text-[#FFD000] transition-colors font-poppins">
                  Instalación de cocinas
                </Link>
              </li>
              <li>
                <Link to="/services/reformas-de-vivienda" className="text-[#000000] dark:text-[#F8F1E7] hover:text-[#FFD000] dark:hover:text-[#FFD000] transition-colors font-poppins">
                  Reformas integrales
                </Link>
              </li>
              <li>
                <Link to="/services/instalacion-puertas-tarimaflotante-rodapies" className="text-[#000000] dark:text-[#F8F1E7] hover:text-[#FFD000] dark:hover:text-[#FFD000] transition-colors font-poppins">
                  Puertas, Tarima y Rodapiés
                </Link>
              </li>
              <li>
                <Link to="/services/servicios-de-acabados" className="text-[#000000] dark:text-[#F8F1E7] hover:text-[#FFD000] dark:hover:text-[#FFD000] transition-colors font-poppins">
                  Servicios de Acabados
                </Link>
              </li>
              <li>
                <Link to="/services/manitas" className="text-[#000000] dark:text-[#F8F1E7] hover:text-[#FFD000] dark:hover:text-[#FFD000] transition-colors font-poppins">
                  Servicio de manitas
                </Link>
              </li>
            </ul>
          </div>

          {/* Social media and location column */}
          <div className="col-span-1">
            <h3 className="font-bold text-[#000000] dark:text-[#F8F1E7] text-center md:text-left mb-6 font-georgia">
              Ubicación
            </h3>
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <p className="text-[#000000] dark:text-[#F8F1E7] font-poppins">
                Madrid, España
              </p>
              <p className="text-[#000000] dark:text-[#F8F1E7] font-poppins">
                Servicio en toda la Comunidad de Madrid
              </p>
            </div>
            
            {/* Social media icons */}
            <div className="mt-6">
              <h3 className="font-bold text-[#000000] dark:text-[#F8F1E7] text-center md:text-left mb-4 font-georgia">
                Síguenos
              </h3>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-[#000000] dark:text-[#F8F1E7] hover:text-[#FFD000] dark:hover:text-[#FFD000] transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.355 4.642A9.946 9.946 0 0 0 12.008 2C6.485 2 2 6.485 2 11.992c0 1.856.483 3.666 1.392 5.267L2 22l4.833-1.268a10.022 10.022 0 0 0 5.175 1.408h.008c5.517 0 10-4.485 10-10 0-2.667-1.042-5.183-2.93-7.067l-.73-.431zm-7.346 15.358h-.008c-1.492 0-2.95-.4-4.225-1.158l-.3-.183-3.133.825.833-3.05-.2-.317a8.274 8.274 0 0 1-1.267-4.392c0-4.584 3.734-8.317 8.325-8.317a8.277 8.277 0 0 1 5.9 2.45 8.275 8.275 0 0 1 2.441 5.892c0 4.575-3.733 8.317-8.325 8.317l.033-.067h-.074zm4.567-6.224c-.25-.125-1.483-.733-1.717-.817-.233-.083-.4-.125-.566.125-.167.25-.65.817-.8 1-.15.183-.3.208-.55.083-.25-.125-1.05-.383-2-1.233-.741-.667-1.241-1.492-1.391-1.742-.15-.25-.016-.383.113-.508.116-.108.25-.283.375-.425.125-.142.167-.242.25-.4.083-.159.041-.3-.021-.425-.063-.125-.567-1.358-.775-1.85-.208-.483-.416-.4-.567-.416-.15-.017-.316-.017-.483-.017a.934.934 0 0 0-.675.317c-.233.25-.883.867-.883 2.108 0 1.242.9 2.442.025 2.608.125.167 1.75 2.675 4.25 3.75.591.258 1.05.408 1.408.525.591.183 1.133.158 1.559.1.475-.07 1.483-.608 1.692-1.2.208-.591.208-1.1.146-1.2-.063-.1-.23-.158-.48-.275l.09.017z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-neutral-200 dark:border-neutral-700 py-6 text-center">
          <p className="text-sm text-[#000000] dark:text-[#F8F1E7] font-poppins">
            © {currentYear} Kalia Reformas y Decoración
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;