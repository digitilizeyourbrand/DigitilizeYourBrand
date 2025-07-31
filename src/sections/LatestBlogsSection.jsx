import React from "react";

const blogData = [
  {
    image:
      "https://omxtechnologies.com/wp-content/uploads/2024/10/Different-Areas-of-Graphic-Design-1536x922-1-1024x615_11zon-1.jpeg",
    title: "Different Areas of Graphic Design",
    desc: "Graphic design, also known as communication design, is the process of visual communication where designers create and combine symbols, images and text to form visual representations of ideas.",
    link: "https://omxtechnologies.com/2022/06/27/different-areas-of-graphic-design/",
    textColor: "text-black",
  },
  {
    bgColor: "bg-black",
    title: "Benefits of Social Media Marketing for Small Business",
    desc: "Social media is one of the most rapidly expanding industries in the world. So what are the benefits of marketing in this industry?",
    link: "https://omxtechnologies.com/wp-content/uploads/2024/04/Benefits-of-Social-Media-Marketing-for-Small-Business-1536x922.jpeg",
    textColor: "text-white",
  },
  {
    image:
      "https://omxtechnologies.com/wp-content/uploads/2024/10/img1_11zon.jpg",
    title: "15 YouTube Tips For Business Promotion",
    desc: "Video SEO or visual ploys to market your business—YouTube is the platform you should leverage for online video marketing.",
    link: "https://omxtechnologies.com/2022/06/27/web-development-trends-2024/",
    textColor: "text-black",
  },
  {
    title: "7 SEO Techniques to Get Better Ranking in 2024",
    desc: "SEO stands for search engine optimization. It's the process of getting traffic from organic search results on engines like Google.",
    link: "https://omxtechnologies.com/2022/06/24/7-seo-techniques-to-get-better-ranking-in-2024/",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    image: "https://omxtechnologies.com/wp-content/uploads/2024/07/img3.jpg",
    title: "15 Benefits Of PPC For Business",
    desc: "PPC or Pay Per Click is a digital advertising model that can drive traffic quickly and efficiently to help businesses grow.",
    link: "https://omxtechnologies.com/2022/06/27/15-tips-of-youtube-for-business-promotion/",
    textColor: "text-black",
  },
  {
    title: "Web Development Trends In 2024",
    desc: "Static site generators like Jekyll enable advantages such as improved speed, security, and control in certain scenarios.",
    link: "https://omxtechnologies.com/2022/06/27/web-development-trends-2024/",
    bgColor: "bg-black",
    textColor: "text-white",
  },
];

const LatestBlogsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Our Latest Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, idx) => (
            <div
              key={idx}
              className={`group rounded-2xl overflow-hidden transition-shadow duration-300 ease-in-out ${
                blog.bgColor || "bg-white"
              }`}
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}

              <div className={`p-6 flex flex-col gap-3 ${blog.textColor}`}>
                <h3 className="text-2xl font-semibold leading-tight">
                  {blog.title}
                </h3>

                <p className="text-base leading-relaxed text-opacity-90">
                  {blog.desc}
                </p>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block mt-2 px-4 py-2 text-sm font-semibold`}
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogsSection;
