const ServiceCardSection = () => {
  const services = [
    {
      title: "Website Development",
      href: "/",
      img: "https://omxtechnologies.com/wp-content/uploads/2024/10/web-development-3-768x768-compressed_11zon.webp",
      alt: "Web Development",
    },
    {
      title: "Search Engine Optimization",
      href: "https://omxtechnologies.com/seo-company-in-pune/",
      img: "https://omxtechnologies.com/wp-content/uploads/2024/10/SEO-4-768x768-compressed_11zon.webp",
      alt: "SEO",
    },
    {
      title: "Social Media Marketing",
      href: "https://omxtechnologies.com/social-media-marketing-company/",
      img: "https://omxtechnologies.com/wp-content/uploads/2024/10/Social-Media-Marketing-2-768x768-compressed_11zon.webp",
      alt: "Social Media Marketing",
    },
    {
      title: "Online Reputation Management",
      href: "https://omxtechnologies.com/online-reputation-management-orm/",
      img: "https://omxtechnologies.com/wp-content/uploads/2024/10/reputation-copy-768x768-compressed_11zon.webp",
      alt: "ORM",
    },
  ];

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <a
            href={service.href}
            key={index}
            className="space-y-3 transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={service.img}
              alt={service.alt}
              className="rounded-xl w-full h-auto object-cover"
            />
            <p className="text-center font-semibold text-gray-800 text-lg">
              {service.title}
            </p>
          </a>
        ))}
      </div>
      <a
            href="https://omxtechnologies.com/our-digital-marketing-services/"
            className="inline-block mt-4 px-6 py-2 bg-black text-white font-semibold rounded-full md:hidden"
          >
            Explore More
          </a>
    </section>
  );
};

export default ServiceCardSection;
