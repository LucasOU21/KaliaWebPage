// src/layouts/MainLayout.jsx - Main layout component matching Astro
import React, { useEffect } from 'react';
import Navbar from '/src/components/layout/Navbar';
import Footer from '/src/components/layout/Footer';
import WhatsApp from '/src/components/ui/WhatsApp';

const MainLayout = ({ 
  children, 
  title = "Kalia Reformas y Decoración", 
  meta, 
  structuredData,
  lang = "es" 
}) => {
  // Set document title and meta information
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;
    
    // Handle dark mode initialization
    const initializeTheme = () => {
      if (
        localStorage.getItem("hs_theme") === "dark" ||
        (!("hs_theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    
    initializeTheme();
    
    // Theme detection and application
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Apply the correct theme immediately
    document.documentElement.classList.toggle('dark', 
      userTheme === 'dark' || (!userTheme && systemTheme === 'dark')
    );
    
    // Store the theme if it's from system preference and not already stored
    if (!userTheme) {
      localStorage.setItem('theme', systemTheme);
    }
    
    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
      
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [title, lang, structuredData]);

  return (
    <>
      <style jsx>{`
        /* CSS rules for the page scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Main layout styles matching Astro */
        .main-layout {
          min-height: 100vh;
          background-color: #F8F1E7;
          selection-background-color: #FFD000;
          selection-color: #374151;
        }

        .main-layout.dark {
          background-color: #374151;
        }

        .layout-container {
          margin: 0 auto;
          display: flex;
          max-width: 1536px; /* max-w-screen-2xl */
          flex-direction: column;
          padding: 0 1rem;
        }

        @media (min-width: 640px) {
          .layout-container {
            padding: 0 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .layout-container {
            padding: 0 2rem;
          }
        }

        .main-content {
          min-height: calc(100vh - 295px);
          flex: 1;
        }
      `}</style>

      <html lang={lang} className="scrollbar-hide lenis lenis-smooth scroll-pt-16">
        <body className="main-layout selection:bg-secondary min-h-screen selection:text-neutral-700 dark:bg-neutral-800">
          {/* Main structure matching Astro MainLayout */}
          <div className="layout-container">
            <Navbar />
            <main className="main-content">
              {children}
              <WhatsApp />
            </main>
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default MainLayout;