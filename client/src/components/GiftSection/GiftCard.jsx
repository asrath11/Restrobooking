import React from 'react';

function GiftCard({ title, description, icon: Icon }) {
  return (
    <div
      className='w-full max-w-screen-sm md:max-w-[700px] lg:max-w-[800px] my-3 sm:my-4 md:my-5 
      bg-gray-50 shadow-md hover:shadow-xl rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 
      flex items-start gap-4 transition-all duration-300 
      hover:bg-gray-100 border border-gray-200 hover:border-brand-primary/20 mx-auto
      transform hover:-translate-y-1 group'
    >
      {/* Icon Container on the left */}
      <div
        className='bg-brand-primary/10 p-3 rounded-lg flex-shrink-0 
        transition-colors duration-300 group-hover:bg-brand-primary/20
        flex justify-center items-center'
      >
        <Icon
          className='text-brand-primary w-10 h-10 md:w-12 md:h-12 
          transition-transform duration-300 hover:scale-105'
        />
      </div>

      {/* Text Container */}
      <div className='flex-1 min-w-0'>
        <h2
          className='text-base md:text-lg font-semibold text-gray-900 
          transition-colors duration-300 hover:text-brand-primary
          line-clamp-2 md:line-clamp-3'
        >
          {title}
        </h2>
        <p
          className='text-sm md:text-base text-gray-600 mt-2
          transition-colors duration-300 line-clamp-2 md:line-clamp-3'
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default GiftCard;
