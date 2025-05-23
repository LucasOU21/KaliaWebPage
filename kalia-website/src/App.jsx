// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import { useTheme } from './context/ThemeContext';
import WhatsApp from './components/ui/WhatsApp';

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      
      <main>
        <Routes>
          {/* Use the Home component instead of inline JSX */}
          <Route path="/" element={<Home />} />
          
          {/* Add other routes as needed */}
          <Route path="/services" element={<div className="pt-20">Services Page</div>} />
          <Route path="/services/montaje-de-muebles" element={<div className="pt-20">Montaje de Muebles</div>} />
          <Route path="/services/diseno-de-muebles" element={<div className="pt-20">Diseño de Muebles</div>} />
          <Route path="/services/intalacion-cocinas-electrodomesticos" element={<div className="pt-20">Instalación de Cocinas</div>} />
          <Route path="/services/reformas-de-vivienda" element={<div className="pt-20">Reformas de Vivienda</div>} />
          <Route path="/services/instalacion-puertas-tarimaflotante-rodapies" element={<div className="pt-20">Puertas, Tarima y Rodapiés</div>} />
          <Route path="/services/servicios-de-acabados" element={<div className="pt-20">Servicios de Acabados</div>} />
          <Route path="/services/manitas" element={<div className="pt-20">Manitas</div>} />
          <Route path="/nosotros" element={<div className="pt-20">About Page</div>} />
          <Route path="/blog" element={<div className="pt-20">Blog Page</div>} />
          <Route path="/calculadora" element={<div className="pt-20">Calculator Page</div>} />
        </Routes>
      </main>
      
      <Footer />
      
      {/* WhatsApp floating button - appears on all pages */}
      <WhatsApp 
        phoneNumber="603370840"
        message="Hola, me gustaría obtener información sobre los servicios de Kalia Reformas y Decoración."
        position="bottom-right"
        showTooltip={true}
      />
    </div>
  );
}

export default App;