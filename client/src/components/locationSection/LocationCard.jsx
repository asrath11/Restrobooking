import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Pin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Hyderabad from '../../assets/hyderabad.jpg';

function LocationCard({ city, locations = [] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(`/book-now${path}`);
  };

  const toggleExpand = () => setIsExpanded((prev) => !prev);
  const ChevronIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div className='text-background-light w-xs rounded-2xl overflow-hidden shadow-lg border'>
      {/* Image Section */}
      <div className='relative'>
        <img
          className='w-full h-55 object-cover'
          src={Hyderabad}
          alt={`${city} location`}
          loading='lazy'
        />
        <div className='absolute bottom-0 m-5 text-4xl opacity-50 text-background-light font-bold'>
          {city}
        </div>
      </div>

      {/* Text Section */}
      <div className='w-full bg-background-light'>
        <button
          className='flex items-center justify-between w-full px-4 py-3 text-left'
          onClick={toggleExpand}
        >
          <span className='text-xl font-semibold  text-brand-primary'>
            View locations
          </span>
          <ChevronIcon className='h-5 w-5 text-background-dark' />
        </button>

        {isExpanded && (
          <div className='px-4 pb-3 text-center bg-background-light text-background-dark'>
            {locations.map((location, index) => (
              <div
                key={index}
                className='w-full flex items-center justify-between py-2 border-b border-muted last:border-none'
              >
                <div className='flex items-center'>
                  <Pin className='text-brand-primary' />
                  <span className='text-xl px-4'>{location}</span>
                </div>
                <button
                  onClick={() => handleClick(`/${location.toLowerCase()}`)}
                  className='hover:scale-105 transition-transform'
                >
                  <ArrowRight
                    size={30}
                    className='cursor-pointer text-brand-primary'
                  />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LocationCard;
