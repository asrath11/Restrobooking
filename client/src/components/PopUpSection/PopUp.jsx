import React from 'react';
const PopUp = ({ icon: Icon, desc }) => (
  <div className='absolute top-35 left-1/2 -translate-x-1/2 xl:w-[15%] flex gap-5 items-center space-x-2 bg-green-300 p-3 rounded-lg animate-popup opacity-0 z-10'>
    <Icon className='text-green-700 w-12 h-10' />
    <h1 className='font-medium text-black'>{desc}</h1>
  </div>
);

export default PopUp;
