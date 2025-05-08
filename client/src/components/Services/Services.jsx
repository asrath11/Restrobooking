import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Services.css';
import { SERVICES } from '../../../data';

function Services() {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className='m-7 relative'>
      <h1 className='text-center text-brand-primary text-2xl font-bold mb-6'>
        Our Services
      </h1>
      <Slider {...settings}>
        {SERVICES.map((service, index) => (
          <div key={index}>
            <div className='relative group rounded-md overflow-hidden shadow-lg w-[400px] h-[300px] mx-auto'>
              <img
                src={service.img}
                alt={service.title}
                className='w-full h-full object-cover'
              />
              <div className='absolute bottom-0 left-0 w-full py-4 bg-brand-primary text-white transition-all duration-300 ease-in-out h-[60px] group-hover:h-[125px] flex flex-col items-center overflow-hidden'>
                <h3 className='text-md font-semibold mb-1 text-center'>
                  {service.title}
                </h3>
                <p className='text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in mt-1 text-center px-2'>
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Services;
