// src/components/RatingReview.js
import React from "react";
import style from "./RatingReview.module.scss";

function RatingReview({data}) {
  return (
    <div className={style.ratingreview}>
      <h3>Rating Review</h3>
      <p>{data?.title}</p>
      <div className={style.review}>
        <span>{data?.count}</span> ★
      </div>
    </div>
  );
}

export default RatingReview;
