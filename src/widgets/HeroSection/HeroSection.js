// src/components/HeroSection.js
import React, { useEffect, useState } from "react";
import styles from "./heroSection.module.scss";
import HeroFirstSection from "../../components/HeroFirstSection/HeroFirstSection";
import SalesStatistics from "../../components/SalesStatistics/SalesStatistics";
import RatingReview from "../../components/RatingReview/RatingReview";
import TotalPartner from "../../components/TotalPartner/TotalPartner";
import Testimonial from "../../components/Testimonial/Testimonial";
import { fetchDocument } from "../../services/firebaseService";

function HeroSection() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the document that contains the features
        const data = await fetchDocument("banner", "banner"); // Adjust the docId if necessary
        setData(data?.banner || []); // Assuming the document contains an array of features
        setLoading(false);
      } catch (err) {
        setError("Error fetching ease in section data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!data) {
    return <p>Loading...</p>; // Handle loading state
  }

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.parent}>
          <div className={styles.div1}>
            {" "}
            <div className={styles.card}>
              <HeroFirstSection data={data} />
            </div>
          </div>
          <div className={styles.div2}>
            <div className={styles.card}>
              {" "}
              <Testimonial data={data?.deliverSection} />
            </div>
          </div>
          <div className={styles.div3}>
            {" "}
            <div className={styles.card}>
              <RatingReview data={data?.reviewSection} />
              <TotalPartner data={data?.totalPartner} />
            </div>
          </div>
          <div className={styles.div4}>
            <div className={styles.card}>
              <SalesStatistics data={data?.saleStatistic} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
