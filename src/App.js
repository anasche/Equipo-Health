// src/App.js
// import "bootstrap/dist/css/bootstrap.min.css";
import "./customBootstrap.scss";

import React from "react";
import Header from "./components/header/Header";
import TrustedBySection from "./widgets/TrustedBySection/TrustedBySection";
import FeaturesSection from "./widgets/FeaturesSection/FeaturesSection";
import PricingTable from "./widgets/PricingTable/PricingTable";
import HeroSection from "./widgets/HeroSection";
import EaseInHand from "./widgets/EaseInHand/EaseInHand";
import FAQ from "./widgets/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <PricingTable />
      <EaseInHand />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
