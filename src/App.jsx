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
import InstalacionCocinasElectrodomesticos from './pages/InstalacionCocinasElectrodomesticos';
import ReformasDeVivienda from './pages/ReformasDeVivienda';
import Nosotros from './pages/Nosotros';
import Blog from './pages/Blog';
import TendenciasSuelosLaminados from './pages/blog/TendenciasSuelosLaminados';
import EstilosCocinaDisenos from './pages/blog/EstilosCocinaDisenos';
import InstalacionPuertasTarimaRodapies from './pages/InstalacionDePuertasTarimaFlotanteRodapies';
import ServiciosDeAcabados from './pages/ServiciosDeAcabados';
import Contact from './pages/Contact';



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
                  src="/images/features-image.png"
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
            <Route path="/services/intalacion-cocinas-electrodomesticos" element={<InstalacionCocinasElectrodomesticos />} />
            <Route path="/services/reformas-de-vivienda" element={<ReformasDeVivienda />} />
            <Route path="/services/reformas-de-vivienda" element={<ReformasDeVivienda />} />
            <Route path="/services/instalacion-puertas-tarimaflotante-rodapies" element={<InstalacionPuertasTarimaRodapies />} />
            <Route path="/services/servicios-de-acabados" element={<ServiciosDeAcabados />} />
            

            {/* Esto es el About us page */}
            <Route path="/nosotros" element={<Nosotros />} />

            {/* Esto es el blog page */}
            <Route path="/blog" element={<Blog />} />

            {/* LOS BLOGS */}
            <Route path="/blog/tendencia-suelos-laminados-tarimas-flotantes" element={<TendenciasSuelosLaminados />} />
            <Route path="/blog/tendencias-suelos-laminados-tarimas-flotantes" element={<TendenciasSuelosLaminados />} />
            <Route path="/blog/estilos-cocina-disenos-inspiran" element={<EstilosCocinaDisenos />} />

            <Route path="/contact" element={<Contact />} />

          

            
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