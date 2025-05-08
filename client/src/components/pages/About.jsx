import React from 'react';
import { ABOUT_CONTENT } from '../../../data';

function About() {
  return (
    <section className='bg-gray-900 w-full min-h-screen text-gray-50'>
      {/* Title Section */}
      <div className='text-center uppercase py-12 text-4xl font-bold text-brand-primary'>
        {ABOUT_CONTENT.title}
      </div>

      {/* Main Content Card */}
      <div className='bg-gray-800/95 backdrop-blur-sm w-[90%] md:w-[80%] lg:w-[70%] mx-auto p-6 md:p-10 rounded-xl shadow-2xl border border-gray-700'>
        {/* Header Section with Image */}
        <div className='mb-12 lg:flex gap-8 items-center'>
          <div className='lg:w-1/2'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-brand-primary'>
              {ABOUT_CONTENT.header.title}
            </h2>
            {ABOUT_CONTENT.header.content.map((paragraph, index) => (
              <p
                key={index}
                className='text-gray-300 mb-4 text-lg md:text-xl leading-relaxed hover:text-gray-50 transition-colors duration-300'
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className='lg:w-1/2 mt-8 lg:mt-0'>
            <img
              className='rounded-xl w-full h-auto object-cover shadow-lg border-2 border-brand-primary/20 hover:border-brand-primary/40 transition-colors duration-300'
              src={ABOUT_CONTENT.header.image}
              alt='Private Theater Interior'
            />
          </div>
        </div>

        {/* Divider */}
        <div className='h-[1px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent w-full my-12'></div>

        {/* Features Sections */}
        {ABOUT_CONTENT.sections.map((section, index) => (
          <div key={index} className='mb-16 last:mb-0'>
            <h2 className='text-3xl md:text-4xl font-bold mb-10 text-brand-primary hover:text-brand-primary/90 transition-colors duration-300'>
              {section.title}
            </h2>
            <ul className='space-y-10'>
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className='group hover:translate-x-1 transition-transform duration-300'
                >
                  <div className='flex gap-4'>
                    <div className='flex-shrink-0 mt-1'>
                      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary font-bold group-hover:bg-brand-primary/30 transition-colors duration-300'>
                        {itemIndex + 1}
                      </div>
                    </div>
                    <div className='hover:cursor-pointer'>
                      <h3 className='text-2xl md:text-3xl font-semibold mb-3 text-gray-100 group-hover:text-brand-primary transition-colors duration-300'>
                        {item.title}
                      </h3>
                      <p className='text-gray-400 text-lg md:text-xl group-hover:text-gray-200 transition-colors duration-300'>
                        {item.content}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
