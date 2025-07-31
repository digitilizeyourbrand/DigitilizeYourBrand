import React from "react";

const steps = [
  {
    title: "Analysis",
    image:
      "https://omxtechnologies.com/wp-content/uploads/2024/10/analysis-1.png",
  },
  {
    title: "Planning",
    image:
      "https://omxtechnologies.com/wp-content/uploads/2024/10/planning-1_11zon.png",
  },
  {
    title: "Implementation",
    image:
      "https://omxtechnologies.com/wp-content/uploads/2024/10/implementation-300x247_11zon.png",
  },
  {
    title: "Result",
    image:
      "https://omxtechnologies.com/wp-content/uploads/2024/10/measurement_11zon.png",
  },
];

const OurProcessSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="w-[120%] h-[60px] md:h-[100px]"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f5f5f5"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
            c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
            c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          />
        </svg>
      </div>
      {/* Section Heading */}
      <div className="text-center top-[80px] mb-14 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Process
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          We can help you with picking out the best people for your company.
        </p>
      </div>

      {/* Process Flow */}
      <div className="flex flex-col items-center space-y-12 sm:space-y-0 sm:grid sm:grid-cols-7 gap-4 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step */}
            <div className="flex flex-col items-center col-span-1">
              <img src={step.image} alt={step.title} className="w-32 md:w-36" />
              <p className="mt-3 text-center text-gray-800 font-medium">
                {step.title}
              </p>
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div className="hidden sm:flex items-center justify-center col-span-1">
                <img
                  src="https://omxtechnologies.com/wp-content/uploads/2024/07/New-Project-27.webp"
                  alt="Connector"
                  className="w-20 opacity-50"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      
    </section>
  );
};

export default OurProcessSection;
