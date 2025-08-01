import React from "react";
import { Link } from "react-router-dom";
import ServiceItems from "../../components/ServiceHelpers/ServiceItems";

const advantages = [
  "Video Content Creation",
  "High movement",
  "Measurable outcomes",
  "Increase position on search motor",
  "Videos stay until the end of time",
  "Worldwide reach",
  "Source for a backlink",
  "Brand mindfulness",
  "Possibility of another client is high",
];

const YoutubeMarketing = () => {
  const heroImage =
    "https://omxtechnologies.com/wp-content/uploads/2024/10/content-service-internet-online-editorial-connection-1024x683.jpg";

  return (
    <div className="youtube-marketing-page mt-16 text-black">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center flex items-center py-5 px-4 min-h-[200px]"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute z-10 lg:pl-20 max-w-6xl mx-auto text-white">
          <h1 className="text-4xl font-medium text-left leading-tight mb-4 animate-fade-in-up">
            YouTube Marketing Company In Pune
          </h1>
          <p className="text-lg text-left animate-fade-in-up delay-200">
            Lights, Camera, Conversion: Your YouTube Empire Awaits
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
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                decoding="async"
                src={heroImage}
                alt="Best YouTube Account Management Company in Pune"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Best YouTube Account Management Company in Pune
            </h1>

            {/* Description */}
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                YouTube is the second-largest search engine, where users come
                and search for different queries and find a solution. It is a
                free and powerful platform where you can reach out and give a
                clear message to the audience. The content on YouTube has the
                potential to go viral and get heavy engagement across the globe.
                Everybody is more interested in watching videos instead of
                spending time reading. YouTube, which has already gained market
                share in recent times, has become one of the most popular
                platforms for video sharing. We at Digitlize Your Brand is an
                all-round YouTube Marketing Company In Pune for all kinds of
                business needs. Our service is focused on providing engagement
                and conversion of potential viewers into clients.
              </p>
              <p>
                YouTube sits on the top of all video streaming sites. It is open
                to all and gives a business opportunity to showdown products and
                generate business leads. We create a wide range of promotional
                videos depending on the needs of our clients. Digitlize Your Brand
                is one of the leading{" "}
                <a
                  href="https://omxtechnologies.com/"
                  className="text-blue-600 hover:underline"
                >
                  <strong>YouTube Marketing Company in Pune</strong>
                </a>
                , Maharashtra, India with a diversified client base.
              </p>
              <p>
                YouTube is one of the most popular web indexes and individuals
                invest a great deal of energy in YouTube. Step by step, the
                quantity of individuals going to YouTube is rising and it won’t
                go down.
              </p>
              <p>
                The greatest online video sharing group, YouTube encounters an
                expansive share of individuals to focus at. Thinking about this
                angle, we have found a way to give you the ideal presentation in
                this online media. YouTube ads are an additional aspect
                identified with this stage, which is additionally utilized for
                limited time exercises.
              </p>
              <p>
                Support your brand image with the assistance of highly-requested
                YouTube marketing services. In this quick paced world, where
                everyone is keen on watching videos as opposed to perusing the
                extensive reviews of anything. YouTube, which is now a
                celebrated web-based social networking stage, is additionally
                getting to be well known for making organizations and the
                callings common before the world. We at Digitlize Your Brand deliver
                restrictive{" "}
                <a
                  href="https://omxtechnologies.com/2022/06/27/15-tips-of-youtube-for-business-promotion/"
                  className="text-blue-600 hover:underline"
                >
                  <strong>YouTube Marketing Services in Pune</strong>
                </a>{" "}
                for all business or non-business people anticipating advancing
                their services or calling. Our service is tied in with giving
                the commitment, likes, views, shares, and transformations in
                regards to your video to lead you to the opportune place.YouTube
              </p>
            </div>

            {/* Advantages of YouTube Marketing */}
            <h2 className="text-3xl font-extrabold leading-tight mt-4">
              Advantages of our YouTube Marketing Services in Pune –
            </h2>
            <p className="text-lg leading-relaxed">
              The significance of YouTube Marketing cannot be overstated in
              today’s digital landscape. Here’s why:
            </p>

            {/* Advantages List */}
            <ul className="list-disc list-inside text-xl space-y-2">
              {advantages.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

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

export default YoutubeMarketing;
