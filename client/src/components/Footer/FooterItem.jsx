import React from 'react';

function FooterItem({ name, icon, className }) {
  return (
    <li className={`flex items-center gap-2 ${className}`}>
      {icon}
      <span className='text-gray-300 hover:text-brand-primary transition-colors cursor-pointer text-sm md:text-base'>
        {name}
      </span>
    </li>
  );
}

export default FooterItem;
