import React, { useRef, useState } from 'react';
import { assets } from '../assets/assets'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from './Image';

const Testimonials = () => {

    const slides = [{img: assets.image7, test: "“A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.", name: "Mr Williams"}, {img: assets.image7, test: "“A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.", name: "Mr Williams"} ]

  return (
    <div className='w-full my-28'>
       
    <Swiper 
    navigation={true} modules={[Navigation]} className="mySwiper"
    breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
    >
        {
            slides.map((slide, index) => (
            <SwiperSlide key={index} className='w-full'>
                {/* <div> */}
                <Image img={slide.img}/>

                {/* </div> */}
            </SwiperSlide>
            ))
        }

      </Swiper>



    </div>
  )
}

export default Testimonials
