import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <div className="bg-gray-200">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <div
            className="h-96 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/banner1.jpg')",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-96 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/banner2.jpg')",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
