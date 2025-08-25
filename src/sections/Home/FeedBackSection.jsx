const FeedbackSection = () => {
  return (
    <section className="relative w-full py-16 bg-[#efeae3]">
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

      <div className="max-w-7xl mt-[80px] mx-auto px-6 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-12 leading-tight">
          Our Achievements
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Column */}
          <div className="lg:w-1/3 text-center lg:text-left space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Our Milestones
            </h3>
            <p className="text-gray-700">
              We take pride in our achievements. Every milestone reflects our
              dedication to excellence, innovation, and client success.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl border border-black text-center transform transition-transform duration-300 hover:scale-105">
              <h4 className="text-5xl font-extrabold text-black mb-2">
                8,000 +
              </h4>
              <p className="text-lg font-semibold text-gray-800">
                Keyword Rankings
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl border border-black text-center transform transition-transform duration-300 hover:scale-105">
              <h4 className="text-5xl font-extrabold text-black mb-2">
                750 +
              </h4>
              <p className="text-lg font-semibold text-gray-800">
                Happy Clients
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl border border-black text-center transform transition-transform duration-300 hover:scale-105">
              <h4 className="text-5xl font-extrabold text-black mb-2">
                2,000 +
              </h4>
              <p className="text-lg font-semibold text-gray-800">
                Awesome Projects & Counting
              </p>
            </div>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-800 mb-4 text-lg">
            Join us and be a part of our growing list of satisfied clients!
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
