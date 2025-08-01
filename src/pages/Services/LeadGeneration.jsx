import React from "react";
import { Link } from "react-router-dom";
import LeadGenFeatures from "../../components/ServiceHelpers/LeadGenFeatures";
import ServiceItems from "../../components/ServiceHelpers/ServiceItems";

const LeadGeneration = () => {
  return (
    <div className="lead-generation-page mt-16 text-black">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center flex items-center py-5 px-4 min-h-[200px]"
        style={{
          backgroundImage:
            'url("https://omxtechnologies.com/wp-content/uploads/2024/07/pikaso_texttoimage_Create-an-image-that-captures-the-dynamic-process-.jpeg")', // Use a relevant background image
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute z-10 lg:pl-20 max-w-6xl mx-auto text-white">
          <h1 className="text-4xl font-medium text-left leading-tight mb-4 animate-fade-in-up">
            Fuel Your Sales Pipeline with High-Quality Leads
          </h1>
          <p className="text-lg text-left animate-fade-in-up delay-200">
            Strategic lead generation services tailored to scale your business.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row md:gap-1 lg:gap-3">
          {/* Left Column */}
          <ServiceItems />

          {/* Right Column */}
          <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col gap-8 bg-white rounded-xl">
            {/* Main Image */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://omxtechnologies.com/wp-content/uploads/2024/07/lead-gen-visual.jpg"
                alt="Lead Generation"
                className="h-[200px] w-full md:h-[400px] object-cover"
              />
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Targeted Lead Generation to Boost Conversions & ROI
            </h2>

            {/* Description */}
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Our Lead Generation services are crafted to bring you consistent,
                high-quality, and sales-ready leads. At Digitlize Your Brand, we
                don’t just generate leads — we generate opportunities for growth.
              </p>
              <p>
                Whether you're a B2B enterprise or a growing D2C brand, our
                strategies are custom-built to engage your ideal audience,
                qualify them efficiently, and hand them over to your sales team
                when they’re ready to buy.
              </p>
              <p>
                From email campaigns and landing pages to lead magnets and
                conversion funnels — we offer everything your business needs to
                fill its pipeline with prospects that convert.
              </p>
            </div>

            {/* Feature Blocks */}
            <LeadGenFeatures />

            {/* Request Consultation Button */}
            <div className="text-left md:p-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-blue-700 text-white text-lg font-semibold rounded-md hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105"
              >
                Request a Consultation
                <svg
                  className="ml-3 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadGeneration;
