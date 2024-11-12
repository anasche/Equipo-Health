// src/App.js
import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import SalesStatistics from "../../components/SalesStatistics/SalesStatistics";
import RatingReview from "../../components/RatingReview/RatingReview";
import TotalPartner from "../../components/TotalPartner/TotalPartner";
import Testimonial from "../../components/Testimonial/Testimonial";
import "./Banner.css";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase";


function Banner() {
    const [bannerData, setBannerData] = useState(null);

    console.log(bannerData,"jjjjjjjj")

    useEffect(() => {
        const fetchBanner = async () => {
          const docRef = doc(firestore, "homepage", "partners");
          const snapshot = await getDoc(docRef);
          if (snapshot.exists()) {
            setBannerData(snapshot.data());
          } else {
            console.error("No banner data found");
          }
        };
    
        fetchBanner();
      }, []);
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
