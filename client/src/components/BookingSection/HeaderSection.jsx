import React from 'react';

const HeaderSection = ({ selectedPackage }) => (
  <div className='w-full bg-gradient-to-r from-brand-primary to-gray-900 shadow-lg relative overflow-hidden'>
    {/* Optional decorative background element */}
    <div className='absolute inset-0 opacity-5 bg-gradient-to-bl from-transparent to-gray-900' />

    <div className='w-11/12 lg:w-3/4 mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10'>
      <div className='flex flex-col gap-3 sm:gap-4 max-w-2xl'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 tracking-wide drop-shadow-md'>
          {selectedPackage.name}
        </h1>

        <div className='space-y-2'>
          <p className='text-lg sm:text-xl lg:text-2xl text-background-light'>
            {selectedPackage.priceDescription}
          </p>
          <p className='text-base sm:text-lg text-background-light'>
            (₹
            <span className='font-medium'>
              {selectedPackage.extraPersonCost}
            </span>{' '}
            per extra person)
          </p>
          <p className='text-base sm:text-lg text-gray-300'>
            {selectedPackage.capacityDescription}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderSection;
