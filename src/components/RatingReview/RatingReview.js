// src/components/RatingReview.js
import React from "react";
import "./RatingReview.css";

function RatingReview() {
  return (
    <div className="rating-review">
      <h3>Rating Review</h3>
      <p>Reviews of some of our app restaurant industry companies.</p>
      <div className="rating">
        <span>4.9</span> ★
      </div>
    </div>
  );
}

export default RatingReview;
