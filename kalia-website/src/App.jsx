// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/layout/HeroSection';
import FeaturesGeneral from './components/layout/FeaturesGeneral';
import { useTheme } from './context/ThemeContext';

// Sample features data - this would typically come from a data file or API
const featuresData = [
  {
    heading: "Atención Personalizada",
    content: "Nos adaptamos a tus necesidades y preferencias para crear espacios que reflejen tu estilo personal.",
    svg: "groups"
  },
  {
    heading: "Calidad Garantizada", 
    content: "Utilizamos materiales de primera calidad y técnicas avanzadas para asegurar resultados duraderos.",
    svg: "verified"
  },
  {
    heading: "Precios Competitivos",
    content: "Ofrecemos presupuestos transparentes y ajustados para que puedas transformar tu hogar sin arruinar tu economía.",
    svg: "frame"
  }
];

function App() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <HeroSection
                title={`<span class="brand-highlight">Kalia</span><br /> Reformas<br />y Decoración`}
                subTitle="Espacios excepcionales"
                primaryBtn="CALCULAR PRESUPUESTO"
                primaryBtnURL="/calculadora"
                withReview={false}
                src="/src/assets/images/HeroImg1.jpg"
                alt="Kalia reformas y decoración, tu mejor elección"
              />

              {/* Features Section with wrapper */}
              <div className="feature-section">
                <FeaturesGeneral
                  title="Diseño y Calidad para su Hogar"
                  subTitle="En Kalia Reformas y Decoración transformamos espacios en hogares que reflejan su estilo personal. Nuestro compromiso con la excelencia y atención al detalle nos distingue como líderes en reformas de cocina, montaje de muebles y servicios integrales de decoración."
                  src="/src/assets/images/features-image.png"
                  alt="Kalia reformas y decoración, tu mejor elección"
                  features={featuresData}
                />
              </div>

              {/* Additional sections can be added here */}
              <div className="mt-16 py-10 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 rounded-xl shadow-md">
                {/* FeaturesNavs component would go here if converted */}
              </div>
            </>
          } />
          
          {/* Add other routes as needed */}
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/nosotros" element={<div>About Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/calculadora" element={<div>Calculator Page</div>} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;