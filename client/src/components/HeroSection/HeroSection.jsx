import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from './Slide';

import { SLIDE_CONTENT } from '../../../data';
function HeroSection() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 60000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <>
      <Slider className='' {...settings}>
        {SLIDE_CONTENT.map((slide) => (
          <Slide {...slide}></Slide>
        ))}
      </Slider>
    </>
  );
}

export default HeroSection;
