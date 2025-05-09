import React from 'react';

function PopUp({ icon: Icon, desc }) {
  return (
    <div className='absolute top-40 left-1/2 -translate-x-1/2 w-[28%] p-4 flex gap-4 items-center bg-black text-white rounded-2xl shadow-lg px-40 animate-popup opacity-0'>
      <Icon className='text-green-500 text-2xl mr-3' />
      <span>{desc}</span>
    </div>
  );
}

export default PopUp;
