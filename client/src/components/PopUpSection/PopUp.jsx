import React from 'react';

function PopUp({ icon: Icon, desc }) {
  return (
    <div className='absolute top-20 md:top-40 left-1/2 -translate-x-1/2 min-w-[300px] max-w-md w-full mx-4 md:mx-auto p-4 flex flex-col md:flex-row gap-4 items-center bg-black text-white rounded-2xl shadow-lg px-4 md:px-8 animate-popup opacity-0'>
      <Icon className='text-green-500 text-2xl mb-2 md:mb-0 md:mr-3' />
      <span className='text-sm md:text-base text-center md:text-left'>
        {desc}
      </span>
    </div>
  );
}

export default PopUp;
