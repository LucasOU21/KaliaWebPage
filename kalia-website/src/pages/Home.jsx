import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/layout/HeroSection';
import FeaturesGeneral from '../components/layout/FeaturesGeneral';

const Home = () => {
  useEffect(() => {
    // Add any animation or initialization code here
    document.title = "Kalia | Reformas y Decoración";
  }, []);

  return (
    <>
      {/* Hero Section Component */}
      <HeroSection />

    </>
  );
};

export default Home;