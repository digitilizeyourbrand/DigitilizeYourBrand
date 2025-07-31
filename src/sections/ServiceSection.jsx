import React from "react";
import ServiceCardSection from "../components/ServiceHelpers/ServiceCardSection";

const ServiceSection = () => {
  return (
    <section className="relative bg-[#f5f5f5] py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="relative space-y-6">
          <p className="text-gray-600 text-5xl font-medium">
            Complete Digital Marketing Solution
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-black">
            Best Digital Marketing Agency In Pune
          </h1>
          <div className="space-y-3 text-gray-800 text-lg">
            <p>
              OMX Technologies is an innovative and Creative digital partner in
              Crafting Digital Solutions for Business. We have been a trusted
              and award-winning Digital Marketing Company in Pune, Nashik, and
              Chhatrapati Sambhaji Nagar.
            </p>
            <p>
              OMX is an Eminent Digital Marketing Agency in Pune with a
              Significant and diverse Clientele, Specializing in Illustrious
              Brand Development, especially for Medical Professionals and
              institutions. Furthermore, we Make sure to provide Full-spectrum
              of business and A to Z Online Marketing services.
            </p>
            <p>
              With our Data-Driven strategies and Promising Results, we have
              become one of the Best Growth Marketing Companies in Pune and
              Helped 1000+ businesses to achieve digital Growth.
            </p>
            <p>
              At OMX, we function as a cohesive digital marketing agency in
              Pune, where creativity is our passion, Our hard work, and
              intelligence fuels our perseverance and our success inspires us to
              be Persistent.
            </p>
          </div>
          <a
            href="https://omxtechnologies.com/our-digital-marketing-services/"
            className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-full hidden md:inline-block"
          >
            Explore More
          </a>
        </div>

        <ServiceCardSection />
      </div>
      
    </section>
  );
};

export default ServiceSection;
