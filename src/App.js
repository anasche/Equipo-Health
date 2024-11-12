// src/App.js
import React from "react";
import Header from "./components/header/Header";
import TrustedBySection from "./widgets/TrustedBySection/TrustedBySection.js";
import FeaturesSection from "./widgets/FeaturesSection/FeaturesSection.js";
import PricingTable from "./widgets/PricingTable/PricingTable.js";
import HeroSection from "./widgets/HeroSection/HeroSection.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <TrustedBySection/>
      <FeaturesSection/>
      <PricingTable/>
    </div>
  );
}

export default App;
