// src/layouts/MainLayout.jsx - Updated with external CSS
import React, { useEffect, useState } from 'react';
import Navbar from '/src/components/layout/Navbar';
import Footer from '/src/components/layout/Footer';
import WhatsApp from '/src/components/ui/WhatsApp';
import '../../styles/mainLayout.css'; // Import the CSS file

const MainLayout = ({ 
  children, 
  title = "Kalia Reformas y Decoración", 
  meta, 
  structuredData,
  lang = "es" 
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set document title and meta information
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;
    
    // Add CSS classes to html and body
    document.documentElement.classList.add('scrollbar-hide', 'main-html');
    document.body.classList.add('main-body', 'scrollbar-hide');
    
    // Handle dark mode initialization
    const initializeTheme = () => {
      const shouldBeDark = localStorage.getItem("hs_theme") === "dark" ||
        (!("hs_theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      
      if (shouldBeDark) {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        document.body.classList.remove("dark");
        setIsDarkMode(false);
      }
    };
    
    initializeTheme();
    
    // Theme detection and application
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Apply the correct theme immediately
    const shouldUseDark = userTheme === 'dark' || (!userTheme && systemTheme === 'dark');
    
    document.documentElement.classList.toggle('dark', shouldUseDark);
    document.body.classList.toggle('dark', shouldUseDark);
    setIsDarkMode(shouldUseDark);
    
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

    // Cleanup function
    return () => {
      document.documentElement.classList.remove('scrollbar-hide', 'main-html');
      document.body.classList.remove('main-body', 'scrollbar-hide');
    };
  }, [title, lang, structuredData]);

  return (
    <div className={`main-layout ${isDarkMode ? 'dark' : ''}`}>
      {/* Main structure matching Astro MainLayout */}
      <div className="layout-container">
        <Navbar />
        <main className="main-content">
          {children}
          <WhatsApp />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;