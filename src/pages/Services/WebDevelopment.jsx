import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom for navigation
import FeatureHighlights from "../../components/ServiceHelpers/WebDevFeatureHighlights";
import ServiceItems from "../../components/ServiceHelpers/ServiceItems";

const WebDevelopment = () => {
  return (
    <div className="web-development-page mt-16 text-black">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center flex items-center py-5 px-4 min-h-[200px]"
        style={{
          backgroundImage:
            'url("https://omxtechnologies.com/wp-content/uploads/2024/07/pikaso_texttoimage_Create-an-image-that-captures-the-dynamic-process-.jpeg")', // Use a relevant background image
        }}
      >
        <div className="absolute inset-0 bg-black/50 "></div>
        <div className="absolute z-10 lg:pl-20 max-w-6xl mx-auto text-white">
          <h1 className="text-4xl font-medium text-left  leading-tight mb-4 animate-fade-in-up">
            Transforming ideas into digital reality
          </h1>
          <p className="text-lg text-left  animate-fade-in-up delay-200">
            Your premier choice for expert web development services in Pune.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row md:gap-1 lg:gap-3">
          {/* Left Column - Main Services & Contact */}
          <ServiceItems />

          {/* Right Column - Content and Features */}
          <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col gap-8 bg-white rounded-xl">
            {/* Main Image */}
            <div className="rounded-xl bg-red-500 overflow-hidden shadow-xl">
              <img
                fetchpriority="high"
                decoding="async"
                src="https://omxtechnologies.com/wp-content/uploads/2024/07/pikaso_texttoimage_Create-an-image-that-captures-the-dynamic-process-.jpeg"
                alt="Web Development"
                className="h-[200px] w-full md:h-[400px] md:w-full object-cover"
              />
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-extrabold  leading-tight">
              Crafting Your Digital Excellence, Elevating Your Online Presence.
            </h2>

            {/* Description */}
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Website is the crucial platform to represent your business. A
                good website is not only your online presence but a Strong
                Podium to derive customers to your business. With the current
                competitive market, running a business online is a decisive
                aspect of Growth.
              </p>
              <p>
                Omx Technologies has been one of the{" "}
                <a
                  href="https://omxtechnologies.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Best Web Development Company in Pune
                </a>{" "}
                for over a decade. Developing and Designing Websites that are
                not just user-friendly but enhance the conversion rate for your
                business, is our main Objective. Every element of your website,
                from its enticing design to its flawless operation, is geared to
                draw in visitors and improve your online visibility. Whether
                you’re a startup trying to build your brand or an established
                company trying to increase your online presence, you can rely on
                OMX Technology to provide cutting-edge web solutions that will
                help you stand out and succeed in the digital space.
              </p>
            </div>

            {/* Feature Blocks */}
            <FeatureHighlights />

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

export default WebDevelopment;
