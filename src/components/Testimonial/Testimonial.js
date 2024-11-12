// src/components/Testimonial.js
import React from "react";
import style from "./Testimonial.module.scss";

function Testimonial() {
  return (
    <div className={style.testimonial}>
      <blockquote>
        “Deliver a better customer experience and increase their operational efficiency.”
      </blockquote>
      <p><strong>Patrick Fernandes</strong>, CEO at Burger King</p>
    </div>
  );
}

export default Testimonial;
