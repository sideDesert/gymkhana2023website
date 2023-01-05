import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

import "./Gallery.css";

// import required modules

export default function Gallery() {
  const image1 = "images/gallery/0.jpg";
  const image2 = "images/gallery/1.jpg";
  const image3 = "images/gallery/2.jpg";
  const image4 = "images/gallery/3.jpg";
  const image5 = "images/gallery/4.jpg";
  const images = [image1, image2, image3, image4, image5];
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        autoplay={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.5": {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoHeight={true}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        className="mySwiper text-black w-full h-auto "
      >
        {images.map((src, index) => {
          return (
            <SwiperSlide className="bg-white">
              <img src={src} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
