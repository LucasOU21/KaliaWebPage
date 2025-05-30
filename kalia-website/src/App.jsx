// src/App.jsx - Fixed version without MainLayout wrapper
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsApp from './components/ui/WhatsApp';
import HeroSection from './components/layout/HeroSection';
import FeaturesGeneral from './components/layout/FeaturesGeneral';
import FeaturesNavs from './components/layout/FeaturesNavs';
import CalculadoraContent from './pages/Calculadora';

// Sample tabs data for FeaturesNavs
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
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`} style={{ backgroundColor: isDarkMode ? '#374151' : '#F8F1E7' }}>
      {/* Layout structure without MainLayout wrapper */}
      <div className="mx-auto flex max-w-screen-2xl flex-col px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="min-h-[calc(100vh-295px)] flex-1">
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

                {/* Features Navigation Section */}
                <FeaturesNavs />
              </>
            } />
            
            {/* Other routes */}
            <Route path="/services" element={<div className="pt-32 min-h-screen flex items-center justify-center">Services Page</div>} />
            <Route path="/nosotros" element={<div className="pt-32 min-h-screen flex items-center justify-center">About Page</div>} />
            <Route path="/blog" element={<div className="pt-32 min-h-screen flex items-center justify-center">Blog Page</div>} />
            
            {/* Calculadora route */}
            <Route path="/calculadora" element={<CalculadoraContent />} />
          </Routes>
          
          {/* WhatsApp floating button - positioned fixed */}
          <WhatsApp 
            position="bottom-right"
            phoneNumber="603370840"
            message="Hola! Quisiera más información"
          />
        </main>
      </div>
      
      {/* Footer outside the main container */}
      <Footer />
    </div>


  );
}

export default App;