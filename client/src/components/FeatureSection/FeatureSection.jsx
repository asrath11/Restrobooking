import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Film, Music, Gamepad2, Users, PartyPopper } from 'lucide-react';
import { FEATURES } from '../../../data';

function FeatureSection() {
  let navigate = useNavigate();
  let handleOnClick = () => {
    navigate('/locations');
  };
  return (
    <section className='bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-14'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6'>
            Hyderabad's Premier Private Theater Experience
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Immerse yourself in cinematic excellence with cutting-edge 4K
            projection and ground-shaking Dolby Atmos audio
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 mb-20'>
          {/* Theater Features */}
          <div className='space-y-8'>
            <div className='flex items-start gap-6 p-6 bg-gray-800 rounded-2xl'>
              <Film className='w-12 h-12 text-brand-primary flex-shrink-0' />
              <div>
                <h3 className='text-2xl font-bold mb-3'>
                  120" 4K Ultra HD Projection
                </h3>
                <p className='text-gray-400'>
                  Crystal-clear visuals with HDR10+ support for breathtaking image
                  quality
                </p>
              </div>
            </div>

            <div className='flex items-start gap-6 p-6 bg-gray-800 rounded-2xl'>
              <Music className='w-12 h-12 text-brand-primary flex-shrink-0' />
              <div>
                <h3 className='text-2xl font-bold mb-3'>Dolby Atmos System</h3>
                <p className='text-gray-400'>
                  360° immersive sound with ceiling-mounted height channels
                </p>
              </div>
            </div>
          </div>

          {/* Entertainment Features */}
          <div className='space-y-8'>
            <div className='flex items-start gap-6 p-6 bg-gray-800 rounded-2xl'>
              <Gamepad2 className='w-12 h-12 text-brand-primary flex-shrink-0' />
              <div>
                <h3 className='text-2xl font-bold mb-3'>
                  Private Gaming Rooms With A/C
                </h3>
                <p className='text-gray-400'>
                  Enjoy your gaming with your friends with all types of games,
                  from action-packed adventures to relaxing puzzles.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-6 p-6 bg-gray-800 rounded-2xl'>
              <Users className='w-12 h-12 text-brand-primary flex-shrink-0' />
              <div>
                <h3 className='text-2xl font-bold mb-3'>Luxury Lounge Seating</h3>
                <p className='text-gray-400'>
                  Reclining leather seats with individual tables and VIP service
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Types */}
        <div className='text-center'>
          <div className='mb-12'>
            <PartyPopper className='w-16 h-16 text-brand-primary mx-auto mb-6' />
            <h3 className='text-2xl font-bold mb-8'>
              Perfect For Every Celebration
            </h3>
            <div className='flex flex-wrap justify-center gap-4 max-w-2xl mx-auto'>
              {FEATURES.map((event) => (
                <span
                  key={event}
                  className='bg-brand-primary/20 px-5 py-2 rounded-full text-brand-primary'
                >
                  {event}
                </span>
              ))}
            </div>
          </div>

          <button
            className='bg-brand-primary text-gray-900 px-10 py-4 rounded-full text-lg font-bold 
            hover:bg-brand-primary/90 transition-colors shadow-xl hover:shadow-2xl'
            onClick={handleOnClick}
          >
            Reserve Your Private Theater
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
