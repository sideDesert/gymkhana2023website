import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import 'swiper/css/autoplay'

import './Gallery.css'

// import required modules

export default function Gallery() {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        autoHeight={true}
        modules={[Pagination,Navigation, Autoplay]}
        className="mySwiper text-black w-full h-auto md:max-w-3xl"
      >
        <SwiperSlide className="bg-white">
        <img src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80" alt="people" />
        </SwiperSlide>
        <SwiperSlide className="bg-white">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="people" />
        </SwiperSlide>
        <SwiperSlide className="bg-white">
        <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="people" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
