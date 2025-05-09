import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Locations from '../locationSection/Locations';
import GiftSection from '../GiftSection/GiftSection';
import FeatureSection from '../FeatureSection/FeatureSection';
import Services from '../Services/Services';
import '../../App.css';

function HomePage() {
  return (
    <>
      <HeroSection />
      <Locations />
      <GiftSection />
      <FeatureSection />
      <Services />
    </>
  );
}

export default HomePage;
