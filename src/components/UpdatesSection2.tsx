import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function UpdatesSection2() {
  return (
    <section className="bg-w px-0 pt-[1.5rem]  lg:pt-[3rem]">
      <div className="px-7">
        <div className="bg-r h-[6px] w-full self-center">
          <div className="bg-p h-[6px] w-16 ml-16"></div>
        </div>
      </div>
      <h2 className="text-p font-bold text-4xl pt-3 px-7 mb-4 lg:pl-[4rem] lg:text-5xl lg:py-[2rem]">
        Latest
      </h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={true}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <UpdateCard />
        </SwiperSlide>
        <SwiperSlide>
          <UpdateCard />
        </SwiperSlide>
        <SwiperSlide>
          <UpdateCard />
        </SwiperSlide>
        <SwiperSlide>
          <UpdateCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

function UpdateCard({ imgUrl = "", altText = "" }) {
  return (
    <div className="min-h-[500px] bg-white flex justify-center items-center">
      <div className="">
        Sample
        <img src={imgUrl} alt={altText} className="object-cover" />
      </div>
    </div>
  );
}

export default UpdatesSection2;
