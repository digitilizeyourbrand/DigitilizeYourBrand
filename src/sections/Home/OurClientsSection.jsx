// OurClientsSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const clientLogos = [
  { src: "/logos/intellibi.png", alt: "IntelliBI" },
  { src: "/logos/melita.png", alt: "Melita" },
  { src: "/logos/sparsh.png", alt: "Sparsh Electronics" },
  { src: "/logos/chairwale.png", alt: "Chairwale" },
  { src: "/logos/logo5.png", alt: "Client 5" },
  { src: "/logos/intellibi.png", alt: "IntelliBI" },
  { src: "/logos/melita.png", alt: "Melita" },
  { src: "/logos/sparsh.png", alt: "Sparsh Electronics" },
  { src: "/logos/chairwale.png", alt: "Chairwale" },
  { src: "/logos/logo5.png", alt: "Client 5" },
];

const OurClientsSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Top Wave */}
      <div className="relative top-0 left-0 w-full z-20">
        <svg
          className="w-full h-[80px] sm:h-[100px]"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7
            c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3
            c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          />
        </svg>
      </div>

      <div className="relative z-10 px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Our Clients
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          loop={true} // 🔁 Infinite loop
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Wave */}
    </section>
  );
};

export default OurClientsSection;
