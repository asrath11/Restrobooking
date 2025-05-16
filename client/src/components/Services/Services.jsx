import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Services.css';
import { SERVICES } from './ServiceData';

function Services() {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // Large desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1024, // Laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className='relative mx-20 my-5'>
      <Slider {...settings}>
        {SERVICES.map((service, index) => (
          <div key={index} className='lg:px-0 sm:px-4'>
            <div className='relative group rounded-md overflow-hidden shadow-lg max-w-[300px] w-full h-[300px] sm:h-[350px] mx-auto'>
              <img
                src={service.img}
                alt={service.title}
                className='w-full h-full object-cover'
              />
              <div className='absolute bottom-0 left-0 w-full py-4 bg-brand-primary text-white transition-all duration-300 ease-in-out h-[100px] group-hover:h-[125px] flex flex-col items-center overflow-hidden'>
                <h3 className='text-md sm:text-lg font-semibold mb-1 text-center'>
                  {service.title}
                </h3>
                <p className='text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in mt-1 text-center px-2'>
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Services;
