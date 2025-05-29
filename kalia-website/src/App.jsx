// src/App.jsx - Fixed to prevent double navbar/footer
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import MainLayout from './components/layout/MainLayout';
import HeroSection from './components/layout/HeroSection';
import FeaturesGeneral from './components/layout/FeaturesGeneral';
import FeaturesNavs from './components/layout/FeaturesNavs';
import CalculadoraContent from '/src/pages/Calculadora';

// Sample tabs data for FeaturesNavs - this is what the Astro version expects
const tabsData = [
  {
    heading: "Reformas Integrales con Kalia",
    content: "Transformamos completamente tu hogar con las mejores técnicas y materiales del mercado.",
    svg: "tools",
    src: "/src/assets/images/tab-image-1.jpg",
    alt: "Reformas integrales Kalia",
    first: true
  },
  {
    heading: "Diseño Personalizado",
    content: "Cada proyecto es único. Creamos espacios que reflejan tu personalidad y estilo de vida.",
    svg: "verified",
    src: "/src/assets/images/tab-image-2.jpg",
    alt: "Diseño personalizado Kalia"
  },
  {
    heading: "Calidad Premium",
    content: "Utilizamos solo los mejores materiales y trabajamos con artesanos especializados.",
    svg: "groups",
    src: "/src/assets/images/tab-image-3.jpg",
    alt: "Calidad premium Kalia"
  },
  {
    heading: "Servicio Integral",
    content: "Desde la planificación hasta la entrega final, Kalia se encarga de todo el proceso.",
    svg: "earth2",
    src: "/src/assets/images/tab-image-4.jpg",
    alt: "Servicio integral Kalia",
    second: true
  }
];

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Use MainLayout to wrap all content - it handles navbar, footer, and WhatsApp */}
      <MainLayout>
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <HeroSection />

              {/* Features General Section */}
              <FeaturesGeneral
                title="Diseño y Calidad para su Hogar"
                subTitle="En Kalia Reformas y Decoración transformamos espacios en hogares que reflejan su estilo personal. Nuestro compromiso con la excelencia y atención al detalle nos distingue como líderes en reformas de cocina, montaje de muebles y servicios integrales de decoración."
                src="/src/assets/images/features-image.png"
                alt="Kalia reformas y decoración, tu mejor elección"
              />

              {/* Features Navigation Section - NOW WITH PROPER DATA */}
              <FeaturesNavs
                title="Por qué elegir Kalia para tu próximo proyecto"
                tabs={tabsData}
              />
            </>
          } />
          
          {/* Other routes - simple pages without additional layout */}
          <Route path="/services" element={<div className="pt-32 min-h-screen flex items-center justify-center">Services Page</div>} />
          <Route path="/nosotros" element={<div className="pt-32 min-h-screen flex items-center justify-center">About Page</div>} />
          <Route path="/blog" element={<div className="pt-32 min-h-screen flex items-center justify-center">Blog Page</div>} />
          
          {/* Calculadora without MainLayout since App.jsx already provides it */}
          <Route path="/calculadora" element={<CalculadoraContent />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;