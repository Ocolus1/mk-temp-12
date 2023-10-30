import React from "react";
import HeroSection from "./Hero/HeroSection";
import FeatureSection from "./Feature/FeatureSection";
import ServiceSection from "./Service/ServiceSection";
import BenefitSection from "./Benefits/BenefitSection";
import CategorySection from "./Category/CategorySection";
import PricingSection from "./Pricing/PricingSection";
import CtaSection from "./Cta/CtaSection";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="idk__12">
      <HeroSection />
      <FeatureSection />
      <ServiceSection />
      <CategorySection />
      <PricingSection />
      <BenefitSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
