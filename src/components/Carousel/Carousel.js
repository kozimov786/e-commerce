import React from 'react'
import Slider from "react-slick";

import CarouselItem from './CarouselItem'
import SliderWrapper from './Slider'

export default function Carousel() {
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };
  return (
    <SliderWrapper>
      <Slider {...settings}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Slider>
    </SliderWrapper>
  )
}
