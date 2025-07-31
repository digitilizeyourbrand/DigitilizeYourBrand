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
