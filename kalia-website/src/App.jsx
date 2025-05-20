// src/App.jsx (update this file)
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;