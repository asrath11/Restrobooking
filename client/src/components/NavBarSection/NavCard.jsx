import React from 'react';
function NavCard({ title, subtitle, icon, src }) {
  return (
    <div className='flex gap-2'>
      <div className='flex items-center mx-2'>
        {icon || <img className='w-10' src={src} alt='' />}
      </div>
      <div className='flex flex-col'>
        <h1 className='text-2xl'>{title}</h1>
        <p className='text-slate-500'>{subtitle}</p>
      </div>
    </div>
  );
}

export default NavCard;
