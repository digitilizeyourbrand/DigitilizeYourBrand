import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import CTASection from "../components/CTASection";
import WavyDividerPage from "../components/WavyDividerPage";
import ServiceSection from "../sections/ServiceSection";
import OurProcessSection from "../sections/OurProcessSection";
import FeedbackSection from "../sections/FeedBackSection";
import LatestBlogsSection from "../sections/LatestBlogsSection";
import DigitalPartnerSection from "../sections/DigitalPartnerSection";
import OurClientsSection from "../sections/OurClientsSection";

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
