// src/components/Testimonial.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import style from "./Testimonial.module.scss";

function Testimonial({data}) {

  return (
    <div className={style.testimonial}>
      <h2 className={style.testimonial_heading}>What Our Customers Say</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        spaceBetween={30}
        slidesPerView={1}
        className={style.swiper_container}
      >
        {data.map((testimonial, index) => (
          <SwiperSlide key={index} className={style.swiper_slide}>
            <div className={style.testimonial_card}>
              <img
                src={testimonial.profileImage}
                alt={`${testimonial.name}`}
                className={style.profile_image}
              />
              <blockquote className={style.review}>{testimonial.review}</blockquote>
              <p className={style.author}>
                <strong>{testimonial.name}</strong>, {testimonial.designation}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
