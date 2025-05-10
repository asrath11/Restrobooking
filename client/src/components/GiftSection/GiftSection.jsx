import React from 'react';
import GiftCard from './GiftCard';
import { CakeSlice } from 'lucide-react';
import { PARTY_SECTION } from './partyData';

function GiftSection() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-10 px-4 ml-2'>
      {PARTY_SECTION.map((gift, index) => (
        <GiftCard
          key={index}
          title={gift.title}
          description={gift.description}
          icon={gift.icon}
          image={gift.image}
        />
      ))}
    </div>
  );
}

export default GiftSection;
