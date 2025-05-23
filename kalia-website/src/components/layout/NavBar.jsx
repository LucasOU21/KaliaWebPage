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

  const styles = {
    header: {
      position: 'absolute',
      top: '0.5rem',
      left: 0,
      right: 0,
      zIndex: 50,
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)'
    },
    navbarContainer: {
      width: '100%',
      maxWidth: 'none',
      padding: '0 1rem'
    },
    navbarBg: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backdropFilter: 'blur(4px)',
      padding: '0.5rem 2rem',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      borderRadius: '0.75rem',
      margin: '0 1rem',
      backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
      border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`
    },
    logoContainer: {
      flexShrink: 0,
      height: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      marginLeft: '-1.5rem'
    },
    logoLink: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    },
    logoImage: {
      width: 'auto',
      height: '12rem',
      marginTop: '-0.5rem'
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    desktopNav: {
      display: 'none',
      alignItems: 'center',
      gap: '2rem'
    },
    navLink: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.3px',
      transition: 'all 0.3s ease',
      position: 'relative',
      color: isDarkMode ? '#F8F1E7' : '#000000',
      textDecoration: 'none',
      padding: '0.5rem 0'
    },
    servicesDropdown: {
      position: 'relative'
    },
    dropdownMenu: {
      position: 'absolute',
      left: 0,
      marginTop: '0.5rem',
      width: '16rem',
      borderRadius: '0.375rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      backgroundColor: isDarkMode ? '#374151' : '#ffffff',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      opacity: 0,
      visibility: 'hidden',
      transition: 'all 0.3s ease',
      zIndex: 50,
      transform: 'scale(0.95)',
      transformOrigin: 'top'
    },
    dropdownItem: {
      display: 'block',
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      color: isDarkMode ? '#D1D5DB' : '#374151',
      textDecoration: 'none',
      transition: 'background-color 0.2s ease'
    },
    themeButton: {
      display: 'flex',
      height: '2rem',
      width: '2rem',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      fontWeight: 'normal',
      color: isDarkMode ? '#9CA3AF' : '#6B7280',
      outline: 'none',
      border: 'none',
      backgroundColor: 'transparent',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    mobileMenuButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.375rem',
      borderRadius: '0.375rem',
      color: isDarkMode ? '#D1D5DB' : '#374151',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    mobileMenu: {
      margin: '0.5rem',
      marginTop: '0.5rem'
    },
    mobileMenuContainer: {
      padding: '1rem 1.25rem 1.5rem',
      borderRadius: '0.75rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      margin: '0.5rem 1rem',
      backgroundColor: isDarkMode ? '#000000' : '#ffffff',
      border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
      backdropFilter: 'blur(10px)'
    },
    mobileNavLink: {
      display: 'block',
      padding: '0.75rem 0.5rem',
      color: isDarkMode ? '#ffffff' : '#000000',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '0.95rem',
      borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
      borderRadius: '0.5rem',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },
    mobileDropdown: {
      borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`
    },
    mobileDropdownButton: {
      width: '100%',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.75rem 0.5rem',
      color: isDarkMode ? '#ffffff' : '#000000',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '0.5rem',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    mobileSubmenu: {
      overflow: 'hidden',
      marginTop: '0.25rem',
      maxHeight: servicesMenuOpen ? '24rem' : 0,
      opacity: servicesMenuOpen ? 1 : 0,
      transition: servicesMenuOpen 
        ? 'max-height 0.5s ease-in, opacity 0.3s ease-in' 
        : 'max-height 0.3s ease-out, opacity 0.2s ease-out'
    },
    mobileSubmenuItem: {
      display: 'block',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      color: isDarkMode ? '#D1D5DB' : '#374151',
      marginLeft: '1rem',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease'
    }
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

  // Inject hover styles
  useEffect(() => {
    const hoverStyles = `
      .nav-link:hover {
        color: #FFD000 !important;
      }
      .nav-link::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1.5px;
        background-color: #FFD000;
        transition: width 0.3s ease;
      }
      .nav-link:hover::after {
        width: 100%;
      }
      .services-group:hover .dropdown-menu {
        opacity: 1 !important;
        visibility: visible !important;
        transform: scale(1) !important;
      }
      .dropdown-item:hover {
        background-color: ${isDarkMode ? '#4B5563' : '#F3F4F6'} !important;
      }
      .theme-button:hover {
        background-color: ${isDarkMode ? '#374151' : '#E5E7EB'} !important;
        color: #F59E0B !important;
      }
      .mobile-menu-button:hover {
        color: #FFD000 !important;
      }
      .mobile-nav-link:hover {
        color: #FFD000 !important;
        background-color: ${isDarkMode ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'} !important;
      }
      .mobile-dropdown-button:hover {
        background-color: ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#F9FAFB'} !important;
      }
      .mobile-submenu-item:hover {
        background-color: ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#F9FAFB'} !important;
      }
      @media (min-width: 768px) {
        .desktop-nav {
          display: flex !important;
        }
        .mobile-menu-button {
          display: none !important;
        }
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = hoverStyles;
    document.head.appendChild(styleElement);

    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, [isDarkMode]);

  return (
    <header id="navbar" style={styles.header}>
      <div style={styles.navbarContainer}>
        <div style={styles.navbarBg}>
          {/* Logo */}
          <div style={styles.logoContainer}>
            <Link to="/" style={styles.logoLink} aria-label="Kalia Reformas y Decoración">
              <div style={{ flexShrink: 0, padding: '1rem 0' }}>
                <img 
                  src={isDarkMode ? "/src/assets/images/logos/KaliaLogo300x300Dark.png" : "/src/assets/images/logos/KaliaLogo-300x300.png"}
                  alt="Kalia Logo" 
                  style={styles.logoImage}
                />
              </div>
            </Link>
          </div>

          {/* Right side with nav links and theme toggle */}
          <div style={styles.rightSection}>
            {/* Desktop Navigation Links */}
            <nav style={styles.desktopNav} className="desktop-nav">
              <Link to="/" style={styles.navLink} className="nav-link">Inicio</Link>
              
              {/* Services dropdown menu */}
              <div style={styles.servicesDropdown} className="services-group">
                <Link to="/services" style={{...styles.navLink, display: 'flex', alignItems: 'center'}} className="nav-link">
                  Servicios
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1rem', width: '1rem', marginLeft: '0.25rem', transition: 'transform 0.3s ease' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div style={styles.dropdownMenu} className="dropdown-menu">
                  <div style={{ padding: '0.25rem', borderRadius: '0.375rem', backgroundColor: isDarkMode ? '#374151' : '#ffffff' }}>
                    <Link to="/services/montaje-de-muebles" style={styles.dropdownItem} className="dropdown-item">
                      Montaje de Muebles
                    </Link>
                    <Link to="/services/diseno-de-muebles" style={styles.dropdownItem} className="dropdown-item">
                      Diseño de Muebles
                    </Link>
                    <Link to="/services/intalacion-cocinas-electrodomesticos" style={styles.dropdownItem} className="dropdown-item">
                      Cocinas y Electrodomésticos
                    </Link>
                    <Link to="/services/reformas-de-vivienda" style={styles.dropdownItem} className="dropdown-item">
                      Reformas de Vivienda
                    </Link>
                    <Link to="/services/instalacion-puertas-tarimaflotante-rodapies" style={styles.dropdownItem} className="dropdown-item">
                      Puertas, Tarima y Rodapiés
                    </Link>
                    <Link to="/services/servicios-de-acabados" style={styles.dropdownItem} className="dropdown-item">
                      Servicios de Acabados
                    </Link>
                    <Link to="/services/manitas" style={styles.dropdownItem} className="dropdown-item">
                      Manitas
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link to="/nosotros" style={styles.navLink} className="nav-link">Nosotros</Link>
              <Link to="/blog" style={styles.navLink} className="nav-link">Blog</Link>
            </nav>

            {/* Theme Toggle */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button 
                onClick={toggleTheme} 
                style={styles.themeButton}
                className="theme-button"
              >
                {isDarkMode ? (
                  <svg 
                    style={{ height: '1rem', width: '1rem', flexShrink: 0 }}
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
                    style={{ height: '1rem', width: '1rem', flexShrink: 0 }}
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
              style={styles.mobileMenuButton}
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
            >
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
                Abrir menú principal
              </span>
              {mobileMenuOpen ? (
                <svg 
                  style={{ height: '1.25rem', width: '1.25rem' }}
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
                  style={{ height: '1.25rem', width: '1.25rem' }}
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
        <div id="mobile-menu" style={styles.mobileMenu}>
          <div style={styles.mobileMenuContainer}>
            {/* Mobile nav items */}
            <Link to="/" style={styles.mobileNavLink} className="mobile-nav-link">
              Inicio
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div style={styles.mobileDropdown}>
              <button 
                onClick={toggleServicesMenu} 
                style={styles.mobileDropdownButton}
                className="mobile-dropdown-button"
              >
                <span>Servicios</span>
                <svg 
                  style={{
                    height: '1.25rem', 
                    width: '1.25rem', 
                    color: isDarkMode ? '#9CA3AF' : '#6B7280', 
                    transition: 'transform 0.3s ease',
                    transform: servicesMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                  }}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Mobile Submenu */}
              <div style={styles.mobileSubmenu}>
                <Link to="/services/montaje-de-muebles" style={styles.mobileSubmenuItem} className="mobile-submenu-item">
                  Montaje de Muebles
                </Link>
                <Link to="/services/diseno-de-muebles" style={styles.mobileSubmenuItem} className="mobile-submenu-item">
                  Diseño de Muebles
                </Link>
                <Link to="/services/intalacion-cocinas-electrodomesticos" style={styles.mobileSubmenuItem} className="mobile-submenu-item">
                  Cocinas y Electrodomésticos
                </Link>
                <Link to="/services/reformas-de-vivienda" style={styles.mobileSubmenuItem} className="mobile-submenu-item">
                  Reformas de Vivienda
                </Link>
                <Link to="/services/instalacion-puertas-tarimaflotante-rodapies" style={styles.mobileSubmenuItem} className="mobile-submenu-item">
                  Puertas, Tarima y Rodapiés
                </Link>
                <Link to="/services/servicios-de-acabados" style={styles.mobileSubmenuItem} className="mobile-submenu-item">
                  Servicios de Acabados
                </Link>
                <Link to="/services/manitas" style={styles.mobileSubmenuItem} className="mobile-submenu-item">
                  Manitas
                </Link>
              </div>
            </div>
            
            <Link to="/nosotros" style={styles.mobileNavLink} className="mobile-nav-link">
              Nosotros
            </Link>
            <Link to="/blog" style={styles.mobileNavLink} className="mobile-nav-link">
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;