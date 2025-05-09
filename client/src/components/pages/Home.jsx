import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Locations from '../locationSection/Locations';
import GiftSection from '../GiftSection/GiftSection';
import FeatureSection from '../FeatureSection/FeatureSection';
import Services from '../Services/Services';
import PopUp from '../PopUpSection/PopUp';
import { CircleCheck } from 'lucide-react';
import '../../App.css';

function HomePage() {
  return (
    <>
      <HeroSection />
      <Locations />
      <GiftSection />
      <FeatureSection />
      <Services />
      <PopUp icon={CircleCheck} desc={'Successfully Booked'} />
    </>
  );
}

export default HomePage;
