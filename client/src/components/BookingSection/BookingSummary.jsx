// BookingSummary.jsx
import React from 'react';

const BookingSummary = ({ formData, price, selectedPackage }) => (
  <div className='h-full text-xl text-text-muted flex items-center justify-center'>
    <div className='bg-background-light p-6 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Booking Summary</h2>
      <div className='space-y-2'>
        <p>
          Package: <span className='font-semibold'>{selectedPackage.name}</span>
        </p>
        {formData.date && (
          <p>
            Date: <span className='font-semibold'>{formData?.date}</span>
          </p>
        )}
        {formData.timeSlot && (
          <p>
            Time: <span className='font-semibold'>{formData?.timeSlot}</span>
          </p>
        )}
        {formData.noOfPerson && (
          <p>
            Persons: <span className='font-semibold'>{formData?.noOfPerson}</span>
          </p>
        )}
        <p className='text-3xl text-brand-primary mt-4'>₹ {price}</p>
      </div>
    </div>
  </div>
);

export default BookingSummary;
