// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>All the features you need in one App for any kind of your business 🚀</h2>
        <h1>Manage your restaurant business so advanced</h1>
        <button className="cta-button">Get Started for Free →</button>
      </div>
      <div className="hero-image">
        {/* Placeholder for image */}
        <img src="https://via.placeholder.com/500" alt="Tablet illustration" />
      </div>
    </section>
  );
}

export default HeroSection;
