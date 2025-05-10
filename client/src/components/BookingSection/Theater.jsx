// Theater.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { LOCATIONS_TIME_SLOTS } from '../../../data';
import HeaderSection from './HeaderSection';
import BookingForm from './BookingForm';
import BookingSummary from './BookingSummary';
import PopUp from './../PopUpSection/PopUp';
import { CircleCheck } from 'lucide-react';

function Theater() {
  const backendUrl = 'http://localhost:8000';
  const { state } = useLocation();
  const { package: packageName } = useParams();
  const packageFormatted = packageName.replace(/-/g, ' ');
  const { packages = [] } = state || {};

  const selectedPackage = packages.find((pkg) => pkg.name === packageFormatted);

  const [price, setPrice] = useState(selectedPackage.price);
  const currentDate = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = useState({
    date: currentDate,
    timeSlot: '',
    noOfPerson: '',
  });
  const [slotData, setSlotData] = useState([]);
  const [isPopUp, setIsPopUp] = useState(false);

  const handleDateChange = (e) => {
    const date = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      date,
    }));
  };

  const handlePriceChange = (e) => {
    const numPersons = Number(e.target.value);
    const { price: basePrice, extraPersonCost, minCapacity } = selectedPackage;
    setFormData((prevFormData) => ({
      ...prevFormData,
      noOfPerson: numPersons,
    }));

    setPrice(() => {
      if (numPersons > minCapacity) {
        return basePrice + extraPersonCost * (numPersons - minCapacity);
      } else {
        return basePrice;
      }
    });
  };

  const handleOnTimeChange = (e) => {
    const timeSlot = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      timeSlot,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const isoDate = new Date(formData.date).toISOString();
    try {
      await axios.post(`${backendUrl}/api/v1/slotbookings`, {
        date: isoDate,
        timeSlot: formData.timeSlot,
        numberOfPeople: formData.noOfPerson,
        packageId: selectedPackage.id,
      });

      setIsPopUp(true);
    } catch (error) {
      console.error('Error booking slot:', error);
      alert('Booking failed. Please try again later.');
    }
  };

  useEffect(() => {
    const getAllSlots = async () => {
      const isoDate = new Date(formData.date).toISOString();
      const response = await axios.get(
        `${backendUrl}/api/v1/slotbookings/${isoDate}`
      );
      const slots = response.data.slots;
      setSlotData(slots);
    };
    getAllSlots();
  }, [formData]);

  // Auto-dismiss popup after 3 seconds
  useEffect(() => {
    if (isPopUp) {
      const timer = setTimeout(() => setIsPopUp(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isPopUp]);

  const timeSlotsForPackage =
    LOCATIONS_TIME_SLOTS[packageFormatted.toLowerCase().replace(/\s+/g, '')] ||
    [];

  return (
    <div className='bg-gray-900 text-gray-100 w-full min-h-screen'>
      {/* Header Section */}
      <HeaderSection selectedPackage={selectedPackage} />

      {/* PopUp Notification */}
      {isPopUp && <PopUp icon={CircleCheck} desc='Booking successful!' />}

      {/* Booking Section */}
      <div className='w-11/12 lg:w-3/4 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
        <BookingForm
          handleDateChange={handleDateChange}
          handlePriceChange={handlePriceChange}
          handleOnTimeChange={handleOnTimeChange}
          handleOnSubmit={handleOnSubmit}
          timeSlotsForPackage={timeSlotsForPackage}
          formData={formData}
          slotData={slotData}
          price={price}
          selectedPackage={selectedPackage}
          isPopUp={isPopUp}
          currentDate={currentDate}
        />

        {/* Pricing Summary */}
        <BookingSummary
          formData={formData}
          price={price}
          selectedPackage={selectedPackage}
        />
      </div>
    </div>
  );
}

export default Theater;
