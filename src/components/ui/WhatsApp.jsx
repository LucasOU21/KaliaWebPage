// src/components/ui/WhatsApp.jsx - Updated to match Astro positioning
import React, { useState, useEffect } from 'react';

const WhatsApp = ({ 
  phoneNumber = "603370840", 
  message = "Hola! Quisiera más información",
  position = "bottom-right",
  showTooltip = true,
  customStyles = {} 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltipState, setShowTooltipState] = useState(false);

  // Show the button after a delay to create a nice entrance effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Show tooltip periodically if enabled
  useEffect(() => {
    if (!showTooltip) return;

    const showTooltipTimer = setTimeout(() => {
      setShowTooltipState(true);
      
      // Hide tooltip after 5 seconds
      setTimeout(() => {
        setShowTooltipState(false);
      }, 5000);
    }, 3000);

    // Show tooltip every 30 seconds
    const intervalTimer = setInterval(() => {
      setShowTooltipState(true);
      setTimeout(() => {
        setShowTooltipState(false);
      }, 5000);
    }, 30000);

    return () => {
      clearTimeout(showTooltipTimer);
      clearInterval(intervalTimer);
    };
  }, [showTooltip]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Floating Button - Fixed positioning like Astro version */}
      <a 
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} 
        target="_blank" 
        rel="noreferrer noopener" 
        className="fixed top-[85%] right-0 z-50 inline-flex items-center justify-center w-12 h-12 rounded-tl-2xl rounded-bl-2xl bg-[#25d366] hover:bg-[#30bd63] transition duration-300 ease-in-out"
        style={{
          position: 'fixed',
          top: '85%',
          right: '0',
          zIndex: 50,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '3rem',
          height: '3rem',
          borderTopLeftRadius: '1rem',
          borderBottomLeftRadius: '1rem',
          backgroundColor: '#25d366',
          transition: 'all 0.3s ease-in-out',
          textDecoration: 'none',
          ...customStyles
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#30bd63';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#25d366';
        }}
      >
        {/* Pulse animation rings */}
        <div 
          className="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-[#25d366]"
          style={{
            position: 'absolute',
            zIndex: 10,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: '#25d366',
            animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
          }}
        />
        
        {/* WhatsApp Icon - exact SVG from Astro version */}
        <div className="relative z-20">
          <svg 
            fill="#fff" 
            height="24px" 
            width="24px" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 308.00 308.00"
            style={{ position: 'relative', zIndex: 20 }}
          >
            <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"/> 
            <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"/>
          </svg>
        </div>
      </a>

      {/* Global styles for animations - exactly matching Astro */}
      <style jsx>{`
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        /* Make sure it appears above everything */
        a[href*="wa.me"] {
          z-index: 9999 !important;
        }
      `}</style>
    </>
  );
};

// Simple WhatsApp Button Component (alternative version)
export const SimpleWhatsApp = ({ phoneNumber = "603370840", message = "Hola" }) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2 rounded-lg transition-colors duration-300"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M19.355 4.642A9.946 9.946 0 0 0 12.008 2C6.485 2 2 6.485 2 11.992c0 1.856.483 3.666 1.392 5.267L2 22l4.833-1.268a10.022 10.022 0 0 0 5.175 1.408h.008c5.517 0 10-4.485 10-10 0-2.667-1.042-5.183-2.93-7.067l-.73-.431zm-7.346 15.358h-.008c-1.492 0-2.95-.4-4.225-1.158l-.3-.183-3.133.825.833-3.05-.2-.317a8.274 8.274 0 0 1-1.267-4.392c0-4.584 3.734-8.317 8.325-8.317a8.277 8.277 0 0 1 5.9 2.45 8.275 8.275 0 0 1 2.441 5.892c0 4.575-3.733 8.317-8.325 8.317l.033-.067h-.074zm4.567-6.224c-.25-.125-1.483-.733-1.717-.817-.233-.083-.4-.125-.566.125-.167.25-.65.817-.8 1-.15.183-.3.208-.55.083-.25-.125-1.05-.383-2-1.233-.741-.667-1.241-1.492-1.391-1.742-.15-.25-.016-.383.113-.508.116-.108.25-.283.375-.425.125-.142.167-.242.25-.4.083-.159.041-.3-.021-.425-.063-.125-.567-1.358-.775-1.85-.208-.483-.416-.4-.567-.416-.15-.017-.316-.017-.483-.017a.934.934 0 0 0-.675.317c-.233.25-.883.867-.883 2.108 0 1.242.9 2.442.025 2.608.125.167 1.75 2.675 4.25 3.75.591.258 1.05.408 1.408.525.591.183 1.133.158 1.559.1.475-.07 1.483-.608 1.692-1.2.208-.591.208-1.1.146-1.2-.063-.1-.23-.158-.48-.275l.09.017z" clipRule="evenodd" />
      </svg>
      WhatsApp
    </button>
  );
};

export default WhatsApp;