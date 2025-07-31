import React from "react";
import HeroSection from "../sections/Home/HeroSection";
import ServiceSection from "../sections/Home/ServiceSection";
import OurProcessSection from "../sections/Home/OurProcessSection";
import FeedbackSection from "../sections/Home/FeedBackSection";
import LatestBlogsSection from "../sections/Home/LatestBlogsSection";
import DigitalPartnerSection from "../sections/Home/DigitalPartnerSection";
import OurClientsSection from "../sections/Home/OurClientsSection";

export const Home = () => {
  return (
    <div className="gap-0">
      <HeroSection />
      <ServiceSection />
      <OurProcessSection />
      <FeedbackSection />
      <LatestBlogsSection />
      <DigitalPartnerSection />
      <OurClientsSection />
    </div>
  );
};

export default Home;
