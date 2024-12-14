import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
const Hero = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Slide images={slide1} text='This ensures that the background image is dynamically applied to the div element using.'></Slide></SwiperSlide>
                <SwiperSlide><Slide images={slide2} text='This ensures that the background image is dynamically applied to the div element using.'></Slide></SwiperSlide>
                <SwiperSlide><Slide images={slide3} text='This ensures that the background image is dynamically applied to the div element using.'></Slide></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;