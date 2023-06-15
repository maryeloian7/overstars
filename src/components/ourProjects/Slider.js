import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../../resources/proj.png";
import slide_image_2 from "../../resources/proj2.png";
import slide_image_3 from "../../resources/proj3.png";
import slide_image_4 from "../../resources/proj4.png";
import slide_image_5 from "../../resources/proj5.png";

import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider__container __container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        loopedSlides={2}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 23,
          slideShadows: true,
          stretch: 0,
          depth: 400,
          modifier: 1.9,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <NavLink to="/Game" data-modal>
            <img src={slide_image_1} alt="logo" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/Game" data-modal>
            <img src={slide_image_2} alt="logo" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/Game" data-modal>
            <img src={slide_image_3} alt="logo" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/Game" data-modal>
            <img src={slide_image_4} alt="logo" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/Game" data-modal>
            <img src={slide_image_5} alt="logo" />
          </NavLink>
        </SwiperSlide>
      </Swiper>
      <div className="slider-controler ">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Slider;
