import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Package() {
  let { area } = useParams();
  const navigate = useNavigate();
  const [packages, setPackages] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          `http://localhost:3000/api/v1/packages/areas/${area}`
        );
        response = await response.json();
        setPackages(response.packages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [area]);

  const handleBookNow = (pkgName) => {
    navigate(`/theater/${pkgName}`, { state: { packages } });
  };

  return (
    <section className='bg-gray-900 text-gray-100 w-full min-h-screen p-6 sm:p-8 md:p-10'>
      <h1 className='text-2xl md:text-4xl uppercase text-center font-bold tracking-wide text-brand-primary mb-8'>
        Choose Your Theater in {area}
      </h1>

      <div className='w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className='bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group'
          >
            <div className='w-full h-48 sm:h-56 md:h-64 relative overflow-hidden'>
              <img
                className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300'
                src={`http://localhost:3000/img/packages/${pkg.imageCover}`}
                alt={pkg.name}
              />
            </div>

            <div className='p-4 sm:p-6 flex flex-col gap-3 items-center text-center'>
              <h2 className='text-xl font-semibold text-brand-primary'>
                {pkg.name}
              </h2>
              <p className='text-background-light'>{pkg.priceDescription}</p>
              <p className='text-background-light italic text-sm'>
                (Rs {pkg.extraPersonCost} per extra person)
              </p>
              <p className='text-background-light'>{pkg.capacityDescription}</p>

              <button
                onClick={() => handleBookNow(pkg.name.replace(/\s+/g, '-'))}
                className='mt-4 bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300'
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Package;
