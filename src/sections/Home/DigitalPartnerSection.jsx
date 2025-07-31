import React from "react";

const DigitalPartnerSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="https://omxtechnologies.com/wp-content/uploads/2024/10/Digital-Marketing-Agency-Header.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 z-10" />

      {/* Top SVG Wave */}
      <div className="absolute top-0 left-0 w-full z-20">
        <svg
          className="w-full h-[80px] sm:h-[100px]"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-white"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7
            c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3
            c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-30 px-6 py-20 text-white max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Your Digital Growth Partner in the World Full Of Competition.
        </h1>
        <p className="mt-6 text-sm sm:text-base md:text-lg font-light">
          OMX has been providing Online marketing services with its teams of Experts
          for over a decade now. The successful results that we have achieved
          throughout these years are our main source of motivation. Our dedication,
          innovation and commitment to deliver the best service possible, makes us
          stand out.
        </p>
        <a
          href="/about"
          className="mt-6 inline-block bg-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-teal-600 transition duration-300"
        >
          Read more
        </a>
      </div>
    </section>
  );
};

export default DigitalPartnerSection;
