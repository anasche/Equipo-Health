// src/App.js
import React from "react";
import Header from "./components/header/Header";
import TrustedBySection from "./widgets/TrustedBySection";
import FeaturesSection from "./widgets/FeaturesSection";
import PricingTable from "./widgets/PricingTable";
import HeroSection from "./widgets/HeroSection";
import EaseInHand from "./widgets/EaseInHand"
import FAQ from "./widgets/Faq";

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <TrustedBySection/>
      <FeaturesSection/>
      <PricingTable/>
      <EaseInHand/>
      <FAQ/>
    </div>
  );
}

export default App;
