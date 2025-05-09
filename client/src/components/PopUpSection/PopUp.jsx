import React from 'react';

function PopUp({ icon: Icon, desc }) {
  return (
    <div className='absolute top-20 md:top-40 left-1/2 -translate-x-1/2 min-w-[300px] max-w-md w-full mx-4 md:mx-auto p-4 flex items-center gap-3 bg-black text-white rounded-2xl shadow-lg px-4 md:px-8 animate-popup opacity-0'>
      <div className="flex items-center justify-center">
        <Icon className='text-green-500 text-xl sm:text-2xl flex-shrink-0' />
      </div>
      <span className='text-sm sm:text-base text-center sm:text-left'>
        {desc}
      </span>
    </div>
  );
}

export default PopUp;

