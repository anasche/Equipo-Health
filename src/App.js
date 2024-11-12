// src/App.js
import React from "react";
import AuthTest from "./AuthTest";
import WidgetList from "./WidgetList";
import AddWidget from "./AddWidget";
import Header from "./components/header/Header";
import Banner from "./widgets/Banner/Banner.js";
import TrustedBySection from "./widgets/TrustedBySection/TrustedBySection.js";
import FeaturesSection from "./widgets/FeaturesSection/FeaturesSection.js";
import PricingTable from "./widgets/PricingTable/PricingTable.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <TrustedBySection/>
      <FeaturesSection/>
      <PricingTable/>
    </div>
  );
}

export default App;
