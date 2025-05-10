import React from 'react';

const BookingForm = ({
  handleDateChange,
  handlePriceChange,
  handleOnTimeChange,
  handleOnSubmit,
  timeSlotsForPackage,
  formData,
  slotData,
  price,
  selectedPackage,
  currentDate,
}) => {
  return (
    <form method='post' onSubmit={handleOnSubmit} className='space-y-6 text-lg'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='calendar' className='font-semibold text-background-light'>
          Select Date
        </label>
        {currentDate > handleDateChange && console.log('time disable')}
        <input
          type='date'
          className='h-12 px-4 rounded shadow-inner bg-background-light text-background-dark'
          name='calendar'
          id='calendar'
          onChange={handleDateChange}
          defaultValue={new Date().toISOString().split('T')[0]}
          dis
          required
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label
          htmlFor='timeSlots'
          className='font-semibold text-background-light'
        >
          Time Slots*
        </label>
        <select
          id='timeSlots'
          className='h-12 px-4 rounded shadow-inner bg-background-light text-background-dark'
          required
          onChange={handleOnTimeChange}
        >
          <option value=''>Select a time slot</option>
          {timeSlotsForPackage.map((time, index) => {
            const slotInfo = slotData?.find((slot) => slot.timeSlot === time);
            const isBooked = slotInfo?.status === 'booked';

            return (
              <option
                key={index}
                value={time}
                disabled={isBooked}
                className={`font-medium ${
                  isBooked ? 'text-brand-primary' : 'text-green-600'
                }`}
              >
                {time} {isBooked ? '(Booked)' : ''}
              </option>
            );
          })}
        </select>
      </div>

      <div className='flex flex-col gap-2'>
        <label
          htmlFor='numPersons'
          className='font-semibold text-background-light'
        >
          No. of Persons
        </label>
        <select
          id='numPersons'
          className='h-12 px-4 rounded shadow-inner bg-background-light text-background-dark'
          defaultValue=''
          onChange={handlePriceChange}
          required
        >
          <option disabled value=''>
            Select No. of Persons
          </option>
          {Array.from({ length: selectedPackage.maxCapacity }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <button
          type='submit'
          className='bg-brand-primary text-background-light px-6 py-3 rounded mt-4 my-10 hover:bg-brand-primary-hover cursor-pointer'
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
