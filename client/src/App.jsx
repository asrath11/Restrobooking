import React from 'react';
import NavBar from './components/NavBarSection/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import Locations from './components/locationSection/Locations';
import './App.css';
function App() {
  return (
    <>
      <div className='bg-black'>
        <NavBar />
        <HeroSection />
        <Locations />
      </div>
    </>
  );
}

export default App;
