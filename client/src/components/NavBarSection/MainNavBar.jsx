import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';

function MainNavBar() {
  return (
    <nav className='bg-white h-16 w-full md:w-4/5 lg:w-3/4 mx-auto flex items-center justify-between px-4 sm:px-8 rounded-xl sticky top-0 z-50 shadow-sm border border-gray-100'>
      <div className='hidden'>logo</div>

      <div className='mr-5 hidden lg:flex flex-1 justify-center'>
        <ul className='flex gap-4 md:gap-6 text-base md:text-lg font-medium'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `text-gray-700 hover:text-brand-primary transition-colors
                ${
                  isActive
                    ? 'text-brand-primary border-b-2 border-brand-primary'
                    : ''
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                `text-gray-700 hover:text-brand-primary transition-colors
                ${
                  isActive
                    ? 'text-brand-primary border-b-2 border-brand-primary'
                    : ''
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <span className='text-gray-700 hover:text-brand-primary transition-colors cursor-pointer'>
              Gallery
            </span>
          </li>
          <li>
            <span className='text-gray-700 hover:text-brand-primary transition-colors cursor-pointer'>
              Add-ons
            </span>
          </li>
          <li>
            <span className='text-gray-700 hover:text-brand-primary transition-colors cursor-pointer'>
              Gifts
            </span>
          </li>
          <li>
            <span className='text-gray-700 hover:text-brand-primary transition-colors cursor-pointer'>
              Learn
            </span>
          </li>
          <li>
            <span className='text-gray-700 hover:text-brand-primary transition-colors cursor-pointer'>
              Contact
            </span>
          </li>
        </ul>
      </div>

      <Button
        to='/locations'
        className='bg-brand-primary text-white hover:bg-brand-primary/90 px-6 py-2 rounded-lg transition-colors'
      >
        Book Now
      </Button>
    </nav>
  );
}

export default MainNavBar;
