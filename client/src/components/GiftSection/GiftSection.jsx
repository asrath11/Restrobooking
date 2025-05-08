import React from 'react';
import GiftCard from './GiftCard';
import { CakeSlice } from 'lucide-react';
import { GIFT_SECTION_CONTENT } from '../../../data';

function GiftSection() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-10 px-4 ml-2'>
      {GIFT_SECTION_CONTENT.map((gift, index) => (
        <GiftCard
          key={index}
          title={gift.title}
          description={gift.description}
          icon={CakeSlice}
        />
      ))}
    </div>
  );
}

export default GiftSection;
