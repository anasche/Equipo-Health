// src/components/HeroSection.js
import React, { useEffect, useState } from "react";
import styles from  "./HeroFirstSection.module.scss";
import { fetchDocument } from "../../services/firebaseService";


function HeroFirstSection() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const getBannerData = async () => {
      try {
        const data = await fetchDocument("homepage", "banner");
        setBannerData(data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    getBannerData();
  }, []);


    return (
    <section >
    {bannerData ?  <div >
        <p>{bannerData?.subtitle}</p>
        <h1>{bannerData?.title}</h1>
        <button className={styles.ctabutton}>Get Started for Free →</button>
      </div>: "loading.."}
      {/* <div >
        <img src="https://via.placeholder.com/500" alt="Tablet illustration" />
      </div> */}
    </section>
  );
}

export default HeroFirstSection;
