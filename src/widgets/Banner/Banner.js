// src/App.js
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import SalesStatistics from "../../components/SalesStatistics/SalesStatistics";
import RatingReview from "../../components/RatingReview/RatingReview";
import TotalPartner from "../../components/TotalPartner/TotalPartner";
import Testimonial from "../../components/Testimonial/Testimonial";
import "./Banner.css";


function Banner() {
  return (
    <div>
      <HeroSection />
      <div className="widgets">
        <SalesStatistics />
        <RatingReview />
        <TotalPartner />
      </div>
      <Testimonial />
    </div>
  );
}

export default Banner;
