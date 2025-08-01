import React from "react";

const features = [
  {
    title: "Local SEO Marketing",
    image: "https://omxtechnologies.com/wp-content/uploads/2024/09/local-seo.png",
    alt: "Local SEO",
    url: "https://omxtechnologies.com/local-seo-company/",
  },
  {
    title: "Webpage SEO",
    image: "https://omxtechnologies.com/wp-content/uploads/2024/09/Webpage-SEO.png",
    alt: "Webpage SEO",
    url: "https://omxtechnologies.com/website-seo-services/",
  },
  {
    title: "YouTube SEO",
    image: "https://omxtechnologies.com/wp-content/uploads/2024/09/YouTube-SEO1.png",
    alt: "YouTube SEO",
    url: "https://omxtechnologies.com/youtube-marketing-in-pune/",
  },
  {
    title: "E-Commerce SEO",
    image: "https://omxtechnologies.com/wp-content/uploads/2024/09/eCommerece-SEO.png",
    alt: "E-Commerce SEO",
    url: "https://omxtechnologies.com/e-commerce-seo/",
  },
];

const SEOFeatures = () => {
  return (
    <section className="mt-12 px-4 md:px-0">
      <header className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          SEO Services Offerings at Digitlize Your Brand
        </h2>
        <p className="text-lg text-gray-700 mt-2">
          Digitlize Your Brand offers result-driven SEO services in Pune, including:
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <a
            key={index}
            href={feature.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={feature.title}
          >
            <img
              loading="lazy"
              decoding="async"
              src={feature.image}
              alt={feature.alt}
              className="mb-4 w-24 h-24 object-contain"
              width={96}
              height={96}
            />
            <h3 className="text-2xl font-medium text-black hover:text-blue-600">
              {feature.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SEOFeatures;
