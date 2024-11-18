// src/App.js
// import "bootstrap/dist/css/bootstrap.min.css";
import "./customBootstrap.scss";

import React from "react";
import Header from "./components/Header/header";
import TrustedBySection from "./widgets/TrustedBySection/trustedBySection";
import FeaturesSection from "./widgets/FeaturesSection/featuresSection";
import PricingTable from "./widgets/PricingTable/pricingTable";
import HeroSection from "./widgets/HeroSection";
import EaseInHand from "./widgets/EaseInHand/easeInHand";
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
