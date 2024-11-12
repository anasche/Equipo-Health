// src/components/HeroSection.js
import React from "react";
import styles from  "./HeroFirstSection.module.scss";

function HeroFirstSection() {
  return (
    <section >
      <div >
        <p>All the features you need in one App for any kind of your business 🚀</p>
        <h1>Manage your restaurant business so advanced</h1>
        <button className={styles.ctabutton}>Get Started for Free →</button>
      </div>
      {/* <div >
        <img src="https://via.placeholder.com/500" alt="Tablet illustration" />
      </div> */}
    </section>
  );
}

export default HeroFirstSection;
