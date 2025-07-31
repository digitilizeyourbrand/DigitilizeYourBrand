import React from "react";

const features = [
  {
    number: "01",
    title: "Develop deep expertise:",
    content:
      "In our Website Development Company in Pune, we focus on refining deep expertise that will lead to creating exceptional designs. With a team of Dedicated experts and a commitment to innovation, we have mastered all facets of website development. This qualifies us to deliver the services as per the unique requirements of our clients.",
  },
  {
    number: "02",
    title: "Build a strong reputation:",
    content:
      "With a website, we develop a strong online presence for your business that will create an impactful brand positioning. As the Best Website Designing Company in Pune, OMX Technologies has been Crafting strong Business websites for all our clients. This has led us to the top position among the digital marketing agencies in Pune.",
  },
  {
    number: "03",
    title: "Optimize marketing efforts:",
    content:
      "Maximize your digital marketing efforts with Our effective marketing strategies that are specially designed for your business. Promote your Business more adequately, Connect with the right Audience for your Business, and establish an ensuring Marketing position for your business.",
    fullWidth: true,
  },
];

const FeatureHighlights = () => {
  return (
    <section className="md:p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features
            .filter((feature) => !feature.fullWidth)
            .map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-3 rounded-lg border-[0.5px] border-gray-500 transition-shadow duration-300"
              >
                <h3 className="text-2xl font-medium text-black mb-3">
                  <span className="text-blue-600 mr-2">{feature.number}</span><br />
                  {feature.title}
                </h3>
                <p className="leading-relaxed">{feature.content}</p>
              </div>
            ))}
        </div>

        {features
          .filter((feature) => feature.fullWidth)
          .map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-3 rounded-lg border border-gray-500 transition-shadow duration-300"
            >
              <h3 className="text-2xl font-medium text-black mb-3">
                <span className="text-blue-600 mr-2">{feature.number}</span><br />
                {feature.title}
              </h3>
              <p className="leading-relaxed">{feature.content}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
