import React from 'react'
import  { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay,EffectCoverflow, Pagination, Navigation } from "swiper";
import "./Explor.css";

function Explor() {
  return (
    <div>
 <section className="explore">
        <div className="para1 row">
            <h5 className="hed">NEW EXPLORE</h5>
            <h1 className="featurette-heading mb-5 text-light">Explore All</h1>
          </div>
        </section>
  
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay,EffectCoverflow,Pagination, Navigation]}
          
        className="mySwiper">
        <SwiperSlide>
          
        <img src="images/lion.png"  alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="images/lion1.png" alt=""  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/lion2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/lion3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/lion.png" alt=""  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/lion2.png" alt=""  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/lion1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/lion3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/Lion(1).png" alt="" />
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Explor