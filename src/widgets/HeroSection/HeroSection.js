// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css";
import styles from "./heroSection.module.scss";
import HeroFirstSection from "../../components/HeroFirstSection/HeroFirstSection";
import SalesStatistics from "../../components/SalesStatistics/SalesStatistics";
import RatingReview from "../../components/RatingReview/RatingReview";
import TotalPartner from "../../components/TotalPartner/TotalPartner";
import Testimonial from "../../components/Testimonial/Testimonial";

function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.parent}>
          <div className={styles.div1}>
            {" "}
            <div className={styles.card}>
              <HeroFirstSection/>
            </div>
          </div>
          <div className={styles.div2}>
            <div className={styles.card}> <Testimonial /></div>
          </div>
          <div className={styles.div3}>
            {" "}
            <div className={styles.card}><RatingReview/>
            <TotalPartner /></div>
          </div>
          <div className={styles.div4}>
            <div className={styles.card}><SalesStatistics/></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
