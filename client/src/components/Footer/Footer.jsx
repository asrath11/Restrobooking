import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FOOTER_CONTENT } from '../../../data';
import FooterItem from './FooterItem';

function Footer() {
  return (
    <footer className='w-full bg-background-dark text-background-light py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12'>
          {/* Logo Section */}
          <div className='col-span-1 lg:col-span-1 mb-8 md:mb-0'>
            <div className='flex items-center'>
              {/* Replace with your logo */}
              <div className='bg-brand-primary/10 p-3 rounded-lg'>
                <span className='text-2xl font-bold text-brand-primary'>
                  Your Logo
                </span>
              </div>
            </div>
            <p className='mt-4 text-gray-400 text-sm'>
              Elevating entertainment experiences in Hyderabad since 2023
            </p>
          </div>

          {/* Main Links */}
          <div className='col-span-1 md:col-span-1'>
            <h3 className='text-brand-primary text-lg font-semibold uppercase mb-4 tracking-wider'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {FOOTER_CONTENT.mainLinks.map(({ label }) => (
                <FooterItem
                  key={label}
                  name={label}
                  icon={<ChevronRight className='text-brand-primary w-4 h-4' />}
                  className='hover:text-brand-primary transition-all duration-300 hover:translate-x-1'
                />
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className='col-span-1 md:col-span-1'>
            <h3 className='text-brand-primary text-lg font-semibold uppercase mb-4 tracking-wider'>
              Legal
            </h3>
            <ul className='space-y-3'>
              {FOOTER_CONTENT.legalLinks.map(({ label }) => (
                <FooterItem
                  key={label}
                  name={label}
                  icon={<ChevronRight className='text-brand-primary w-4 h-4' />}
                  className='hover:text-brand-primary transition-all duration-300 hover:translate-x-1'
                />
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='col-span-1 md:col-span-1'>
            <h3 className='text-brand-primary text-lg font-semibold uppercase mb-4 tracking-wider'>
              Contact Us
            </h3>
            <ul className='space-y-3'>
              {FOOTER_CONTENT.contactInfo.map(({ value }) => (
                <FooterItem
                  key={value}
                  name={value}
                  icon={<ChevronRight className='text-brand-primary w-4 h-4' />}
                  className='hover:text-brand-primary transition-all duration-300 hover:translate-x-1'
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='border-t border-gray-800 mt-12 pt-8 text-center'>
          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} Flix and Fun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
