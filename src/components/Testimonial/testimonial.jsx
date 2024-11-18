import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import style from "./Testimonial.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Testimonial({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={style.testimonial}>
      <Swiper
        modules={[Navigation, Autoplay]}
        ref={sliderRef}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{ delay: 50000000 }}
        spaceBetween={30}
        slidesPerView={1}
        className={style.swiper_container}
      >
        {data.map((testimonial, index) => (
          <SwiperSlide key={index} className={style.swiper_slide}>
            <div className={style.testimonial_card}>
              <blockquote className={style.review}>
                {testimonial.review}
              </blockquote>
              <div
                className={`${style.profile} flex items-center w-fit space-x-2`}
              >
                {/* <img
                  src={testimonial.profileImage}
                  alt={`${testimonial.name}`}
                  className={style.profile_image}
                /> */}
                <div className="h-[40px] w-[40px] rounded-full bg-[#DC8558]"></div>
                <p className={style.author}>
                  <strong>{testimonial.name}</strong>,<br />{" "}
                  {testimonial.designation}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-[20%] right-[40px] flex space-x-3 z-10">
        <div className="cursor-pointer" onClick={handlePrev}>
          <FaArrowLeft
            className={`h-6 w-6 ${
              activeIndex === 0 ? "text-black" : "text-primary-tw"
            }`}
          />
        </div>
        <div className="cursor-pointer" onClick={handleNext}>
          <FaArrowRight
            className={`h-6 w-6 ${
              activeIndex + 1 === data.length ? "text-black" : "text-primary-tw"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
