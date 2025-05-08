import React from 'react';
import Button from '../Button';

function Slide({ image, title, description }) {
  return (
    <div className='relative w-full h-screen max-h-[800px]'>
      {/* Background Image */}
      <img
        src={image}
        alt='Luxurious private theater'
        className='absolute w-full h-full object-cover'
      />

      {/* Centered Content */}
      <div className='relative z-20 flex flex-col justify-center items-center text-center h-full px-4'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
          {title}
        </h1>
        <p className='text-xl md:text-2xl text-white mb-8 max-w-2xl'>
          {description}
        </p>
        <Button>Book Now</Button>
      </div>
    </div>
  );
}

export default Slide;
