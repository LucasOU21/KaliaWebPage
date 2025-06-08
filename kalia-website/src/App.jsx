// src/App.jsx - Updated to include Services page
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsApp from './components/ui/WhatsApp';
import HeroSection from './components/layout/HeroSection';
import FeaturesGeneral from './components/layout/FeaturesGeneral';
import FeaturesNavs from './components/layout/FeaturesNavs';
import CalculadoraContent from './pages/Calculadora';
import Services from './pages/Services';
import MontajeDeMuebles from './pages/MontajeDeMuebles';
import DisenoDeMuebles from './pages/DisenoDeMuebles';

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

                {/* Features General Section - Now using actual features data */}
                <FeaturesGeneral
                  title="Diseño y Calidad para su Hogar"
                  subTitle="En Kalia Reformas y Decoración transformamos espacios en hogares que reflejan su estilo personal. Nuestro compromiso con la excelencia y atención al detalle nos distingue como líderes en reformas de cocina, montaje de muebles y servicios integrales de decoración."
                  src="/src/assets/images/features-image.png"
                  alt="Kalia reformas y decoración, tu mejor elección"
                />

                {/* Features Navigation Section */}
                <FeaturesNavs 
                  title="Elige Kalia para un servicio profesional, de calidad y a precio competitivo."
                />
              </>
            } />
            
            {/* Services page - now using the actual Services component */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/montaje-de-muebles" element={<MontajeDeMuebles />} />
            <Route path="/services/diseno-de-muebles" element={<DisenoDeMuebles />} />
            
            {/* Other routes */}
            <Route path="/nosotros" element={<div className="pt-32 min-h-screen flex items-center justify-center">About Page</div>} />
            <Route path="/blog" element={<div className="pt-32 min-h-screen flex items-center justify-center">Blog Page</div>} />
            
            {/* Calculadora route */}
            <Route path="/calculadora" element={<CalculadoraContent />} />
          </Routes>
          
          {/* WhatsApp floating button - positioned fixed */}
          <WhatsApp 
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