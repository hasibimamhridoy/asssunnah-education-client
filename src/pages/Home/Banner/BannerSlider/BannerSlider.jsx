import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./BannerSlider.css";

import bannerOne from "../../../../assets/banner/1.png"
import bannerTwo from "../../../../assets/banner/2.png"
import bannerThree from "../../../../assets/banner/3.png"
import bannerFour from "../../../../assets/banner/4.png"

// import required modules
import { Pagination, Navigation } from "swiper";

const BannerSlider = () => {
  
  return (
    <div  className="mb-20">
      <div className=" lg:h-[80vh]">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="rounded-lg" src={bannerOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={bannerTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={bannerThree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={bannerFour} alt="" />
        </SwiperSlide>
        
      </Swiper>
      </div>
     
    </div>
  );
};

export default BannerSlider;
