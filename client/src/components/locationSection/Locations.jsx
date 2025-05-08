import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard';

function Locations() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/locations')
      .then((res) => res.json())
      .then((data) => {
        setCities(
          data.locations.flatMap(({ cities }) =>
            cities.map(({ city, areas }) => ({ city, areas }))
          )
        );
      })
      .catch((err) => {
        console.error('Error fetching locations:', err);
      });
  }, []);

  return (
    <div className='w-full h-auto md:h-[65vh] bg-gray-900 flex flex-col items-center'>
      <h1 className='text-4xl text-brand-primary text-center my-10'>
        Our Locations
      </h1>
      <div className='text-background-light flex flex-wrap items-center justify-center md:gap-10 gap-10'>
        {cities.map(({ city, areas }) => (
          <LocationCard key={city} city={city} locations={areas} />
        ))}
      </div>
    </div>
  );
}

export default Locations;
