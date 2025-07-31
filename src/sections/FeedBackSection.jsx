import React from "react";

const FeedbackSection = () => {
  return (
    <section className="relative w-full h-auto px-4 py-16 bg-gradient-to-t from-gray-100 to-gray-500">
      {/* SVG Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-[80px] sm:h-[100px]"
        >
          <path
            className="fill-white"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3
              c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,
              192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,
              106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,
              158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
              c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,
              411.6,7.5,421.9,6.5z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto pt-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12 leading-tight">
          What Our Clients Say & Our Achievements
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Facebook Feed */}
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-xl overflow-hidden p-6 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
              Our Facebook Feed
            </h3>
            <div className="relative w-full aspect-square">
              <iframe
                title="OMX Technologies Facebook Page"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FOMXTechnologiesPune%2F&amp;tabs=timeline&amp;width=500&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>

          {/* Stats Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h3 className="text-3xl font-bold text-gray-800 text-center lg:text-left">
              Our Milestones
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 shadow-xl rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-blue-100">
                <h4 className="text-5xl font-extrabold text-blue-700 mb-2">
                  8,000 +
                </h4>
                <p className="text-xl text-gray-700 font-semibold">
                  Keyword Rankings
                </p>
              </div>

              <div className="bg-white p-8 shadow-xl rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-green-100">
                <h4 className="text-5xl font-extrabold text-green-700 mb-2">
                  750 +
                </h4>
                <p className="text-xl text-gray-700 font-semibold">
                  Happy Clients
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="bg-white p-8 shadow-xl rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-purple-100 w-full sm:w-2/3 md:w-1/2 lg:w-3/4 xl:w-2/3">
                <h4 className="text-5xl font-extrabold text-purple-700 mb-2">
                  2,000 +
                </h4>
                <p className="text-xl text-gray-700 font-semibold">
                  Awesome Projects & Counting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
