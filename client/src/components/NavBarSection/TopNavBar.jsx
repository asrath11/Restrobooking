import React from 'react';
import NavCard from './NavCard';
import { PhoneCall, MapPin } from 'lucide-react';
import instagram from '../../assets/instagram.jpg';
import HeaderLogo from '../../assets/header-logo.png';

function TopNavBar() {
  return (
    <nav className='w-full flex items-center justify-between bg-white border-b border-gray-100 h-16 px-4 sm:px-6 lg:px-8'>
      {/* Logo Section */}
      <div className='flex-shrink-0'>
        <img
          className='w-32 h-auto transition-all hover:scale-105'
          src={HeaderLogo}
          alt='Company Logo'
        />
      </div>

      {/* Navigation Cards */}
      <div className='hidden md:flex items-center gap-4 lg:gap-6'>
        <NavCard
          title='Call Us'
          subtitle='+91 9666002006'
          icon={<PhoneCall className='w-5 h-5 text-brand-primary' />}
          className='hover:bg-brand-primary/10 transition-colors'
        />

        <NavCard
          title='Instagram'
          subtitle='@flixandfun'
          src={instagram}
          className='hover:bg-brand-primary/10 transition-colors'
        />

        <NavCard
          title='Address'
          subtitle='Madhapur, Hyderabad'
          icon={<MapPin className='w-5 h-5 text-brand-primary' />}
          className='hover:bg-brand-primary/10 transition-colors'
        />
      </div>
    </nav>
  );
}

export default TopNavBar;
