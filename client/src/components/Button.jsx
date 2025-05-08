import React from 'react';
import { useNavigate } from 'react-router-dom';
function Button({ children }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/locations');
  };
  return (
    <div className='bg-brand-primary text-background-light hover:bg-brand-primary-hover px-4 py-2 text-center rounded-3xl cursor-pointer'>
      <button className='cursor-pointer' onClick={handleClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
