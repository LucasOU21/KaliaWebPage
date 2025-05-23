// src/components/ui/WhatsApp.jsx
import React, { useState, useEffect } from 'react';

const WhatsApp = ({ 
  phoneNumber = "603370840", 
  message = "Hola, me gustaría obtener más información sobre sus servicios de reformas.",
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

  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-6 left-6';
      case 'bottom-right':
        return 'bottom-6 right-6';
      case 'top-left':
        return 'top-6 left-6';
      case 'top-right':
        return 'top-6 right-6';
      default:
        return 'bottom-6 right-6';
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div 
        className={`fixed ${getPositionClasses()} z-50 transition-all duration-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        style={customStyles}
      >
        {/* Tooltip */}
        {showTooltip && showTooltipState && (
          <div className="absolute bottom-full mb-2 right-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 min-w-[200px] animate-bounce">
            <div className="text-sm font-medium">
              ¡Hola! 👋
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
              ¿Necesitas ayuda? Escríbenos
            </div>
            {/* Tooltip arrow */}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-600"
          aria-label="Contactar por WhatsApp"
        >
          {/* Pulse animation rings */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-30"></div>
          
          {/* WhatsApp Icon */}
          <svg
            className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:rotate-12"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M19.355 4.642A9.946 9.946 0 0 0 12.008 2C6.485 2 2 6.485 2 11.992c0 1.856.483 3.666 1.392 5.267L2 22l4.833-1.268a10.022 10.022 0 0 0 5.175 1.408h.008c5.517 0 10-4.485 10-10 0-2.667-1.042-5.183-2.93-7.067l-.73-.431zm-7.346 15.358h-.008c-1.492 0-2.95-.4-4.225-1.158l-.3-.183-3.133.825.833-3.05-.2-.317a8.274 8.274 0 0 1-1.267-4.392c0-4.584 3.734-8.317 8.325-8.317a8.277 8.277 0 0 1 5.9 2.45 8.275 8.275 0 0 1 2.441 5.892c0 4.575-3.733 8.317-8.325 8.317l.033-.067h-.074zm4.567-6.224c-.25-.125-1.483-.733-1.717-.817-.233-.083-.4-.125-.566.125-.167.25-.65.817-.8 1-.15.183-.3.208-.55.083-.25-.125-1.05-.383-2-1.233-.741-.667-1.241-1.492-1.391-1.742-.15-.25-.016-.383.113-.508.116-.108.25-.283.375-.425.125-.142.167-.242.25-.4.083-.159.041-.3-.021-.425-.063-.125-.567-1.358-.775-1.85-.208-.483-.416-.4-.567-.416-.15-.017-.316-.017-.483-.017a.934.934 0 0 0-.675.317c-.233.25-.883.867-.883 2.108 0 1.242.9 2.442.025 2.608.125.167 1.75 2.675 4.25 3.75.591.258 1.05.408 1.408.525.591.183 1.133.158 1.559.1.475-.07 1.483-.608 1.692-1.2.208-.591.208-1.1.146-1.2-.063-.1-.23-.158-.48-.275l.09.017z"
              clipRule="evenodd"
            />
          </svg>

          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full animate-pulse"></div>
        </button>
      </div>

      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes pulse {
          50% {
            opacity: .5;
          }
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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