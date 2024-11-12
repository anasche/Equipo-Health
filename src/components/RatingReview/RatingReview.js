// src/components/RatingReview.js
import React from "react";
import style from "./RatingReview.module.scss";

function RatingReview() {
  return (
    <div className={style.ratingreview}>
      <h3>Rating Review</h3>
      <p>Reviews of some of our app restaurant industry companies.</p>
      <div className={style.review}>
        <span>4.9</span> ★
      </div>
    </div>
  );
}

export default RatingReview;
