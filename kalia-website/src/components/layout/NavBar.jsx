// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setServicesMenuOpen(false);
    }
  };

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!servicesMenuOpen);
  };

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById('navbar');
      const isMenuButton = event.target.closest('#mobile-menu-button');
      const isMenuContent = event.target.closest('#mobile-menu');
      
      if (mobileMenuOpen && !isMenuButton && !isMenuContent && navbar && !navbar.contains(event.target)) {
        setMobileMenuOpen(false);
        setServicesMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header id="navbar" className="absolute top-2 left-0 right-0 z-50 w-screen">
      <div className="w-full max-w-none px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between backdrop-blur-sm px-4 sm:px-8 py-2 shadow-sm rounded-xl mx-2 sm:mx-4 bg-white dark:bg-black border border-opacity-5 border-black dark:border-white dark:border-opacity-5">
          {/* Logo */}
          <div className="flex-shrink-0 h-10 flex items-center overflow-hidden" style={{ marginLeft: "-24px" }}>
            <Link to="/" className="flex items-center" aria-label="Kalia Reformas y Decoración">
              <div className="flex-shrink-0 py-4">
                {/* Replace with your logo path */}
                <img 
                  src="/src/assets/images/logos/KaliaLogo-300x300.png" 
                  alt="Kalia Logo" 
                  className="w-auto h-48 -mt-2 block dark:hidden"
                />
                <img 
                  src="/src/assets/images/logos/KaliaLogo300x300Dark.png" 
                  alt="Kalia Logo" 
                  className="w-auto h-48 -mt-2 hidden dark:block"
                />
              </div>
            </Link>
          </div>

          {/* Right side with nav links and theme toggle */}
          <div className="flex items-center space-x-2 md:space-x-8">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link text-neutral-800 dark:text-kalia-beige">Inicio</Link>
              
              {/* Services dropdown menu */}
              <div className="relative group">
                <Link to="/services" className="nav-link text-neutral-800 dark:text-kalia-beige flex items-center group-hover:text-kalia-gold dark:group-hover:text-kalia-gold">
                  Servicios
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top scale-95 group-hover:scale-100">
                  <div className="py-1 rounded-md bg-white dark:bg-gray-800 shadow-xs">
                    <Link to="/services/montaje-de-muebles" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Montaje de Muebles
                    </Link>
                    <Link to="/services/diseno-de-muebles" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Diseño de Muebles
                    </Link>
                    <Link to="/services/intalacion-cocinas-electrodomesticos" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Cocinas y Electrodomésticos
                    </Link>
                    <Link to="/services/reformas-de-vivienda" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Reformas de Vivienda
                    </Link>
                    <Link to="/services/instalacion-puertas-tarimaflotante-rodapies" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Puertas, Tarima y Rodapiés
                    </Link>
                    <Link to="/services/servicios-de-acabados" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Servicios de Acabados
                    </Link>
                    <Link to="/services/manitas" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Manitas
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link to="/nosotros" className="nav-link text-neutral-800 dark:text-kalia-beige">Nosotros</Link>
              <Link to="/blog" className="nav-link text-neutral-800 dark:text-kalia-beige">Blog</Link>
            </nav>

            {/* Theme Toggle */}
            <div className="flex items-center">
              <button 
                onClick={toggleTheme} 
                className="group flex h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 dark:text-neutral-400 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400 dark:hover:bg-neutral-700 dark:hover:text-orange-300"
              >
                {isDarkMode ? (
                  <svg 
                    className="h-4 w-4 flex-shrink-0" 
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 8a2 2 0 1 0 4 4"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                ) : (
                  <svg 
                    className="h-4 w-4 flex-shrink-0" 
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              id="mobile-menu-button" 
              type="button" 
              className="md:hidden inline-flex items-center justify-center p-1.5 rounded-md text-gray-700 hover:text-kalia-gold dark:text-gray-300 dark:hover:text-kalia-gold"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Abrir menú principal</span>
              {mobileMenuOpen ? (
                <svg 
                  className="h-5 w-5" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg 
                  className="h-5 w-5" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden mx-2 mt-2">
          <div className="px-5 pt-4 pb-6 space-y-2 rounded-xl shadow-lg mx-2 sm:mx-4 bg-white dark:bg-black dark:border-gray-800 backdrop-blur-10">
            {/* Mobile nav items */}
            <Link to="/" className="block px-2 py-3 text-neutral-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg font-medium border-b border-gray-100 dark:border-gray-800">
              Inicio
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="border-b border-gray-100 dark:border-gray-800">
              <button 
                onClick={toggleServicesMenu} 
                className="w-full text-left flex items-center justify-between px-2 py-3 text-neutral-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg font-medium"
              >
                <span>Servicios</span>
                <svg 
                  className={`h-5 w-5 text-neutral-500 dark:text-neutral-400 transition-transform duration-300 ${servicesMenuOpen ? 'rotate-90' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Mobile Submenu */}
              <div 
                className={`overflow-hidden mt-1 space-y-1 ${servicesMenuOpen ? 'max-h-96 opacity-100 transition-all duration-500 ease-in' : 'max-h-0 opacity-0 transition-all duration-300 ease-out'}`}
              >
                <Link to="/services/montaje-de-muebles" className="block py-2 px-4 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-gray-900 ml-4">
                  Montaje de Muebles
                </Link>
                <Link to="/services/diseno-de-muebles" className="block py-2 px-4 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-gray-900 ml-4">
                  Diseño de Muebles
                </Link>
                <Link to="/services/intalacion-cocinas-electrodomesticos" className="block py-2 px-4 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-gray-900 ml-4">
                  Cocinas y Electrodomésticos
                </Link>
                <Link to="/services/reformas-de-vivienda" className="block py-2 px-4 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-gray-900 ml-4">
                  Reformas de Vivienda
                </Link>
                <Link to="/services/instalacion-puertas-tarimaflotante-rodapies" className="block py-2 px-4 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-gray-900 ml-4">
                  Puertas, Tarima y Rodapiés
                </Link>
                <Link to="/services/servicios-de-acabados" className="block py-2 px-4 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-gray-900 ml-4">
                  Servicios de Acabados
                </Link>
                <Link to="/services/manitas" className="block py-2 px-4 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-gray-900 ml-4">
                  Manitas
                </Link>
              </div>
            </div>
            
            <Link to="/nosotros" className="block px-2 py-3 text-neutral-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg font-medium border-b border-gray-100 dark:border-gray-800">
              Nosotros
            </Link>
            <Link to="/blog" className="block px-2 py-3 text-neutral-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg font-medium border-b border-gray-100 dark:border-gray-800">
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;