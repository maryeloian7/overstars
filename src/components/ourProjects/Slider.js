import { Swiper, SwiperSlide } from "swiper/react";
// import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import "./Slider.css";

import { EffectCoverflow, Pagination,Navigation } from "swiper";

import slide_image_1 from "../resources/proj.png";
import slide_image_2 from "../resources/proj2.png";
import slide_image_3 from "../resources/proj3.png";
import slide_image_4 from "../resources/proj4.png";
import slide_image_5 from "../resources/proj5.png";

import sss from "../resources/Arrows.svg";
import s from "../resources/Arrows2.svg";

import "./Slider.css";

const Slider = () => {
  return (
    <div className="__container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 25,
          slideShadows: true,
          stretch: 0,
          depth: 200,
          modifier: 1.7,
        }}
        // pagination={{ el: '.swiper-pagination', clickable: true }}
        pagination={{clickable: true}}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="logo"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="logo"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="logo"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="logo"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="logo"/>
        </SwiperSlide>
      </Swiper>
      <div className="slider-controler ">
        <button  className="slider-arrow" >
          <img src={sss} alt="s" className="swiper-button-prev"/>
        </button>
        <button  className="slider-arrow " >
          <img src={s} alt="s" className="swiper-button-next"/>
        </button>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Slider;
