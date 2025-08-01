import heroImg from "../assets/about-us-hero.webp"
const AboutUs = () => {
  return (
    <div className=" text-black">
      <section
       style={{ backgroundImage: `url(${heroImg})` }}
       className="relative bg-cover bg-center min-h-[500px] flex items-center justify-left text-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Main Content */}
        <div className="relative z-10 p-4">
          <h1 className="text-white px-20 text-5xl font-bold">About Digitlize Your Brand</h1>
        </div>

        {/* Wave Shape Divider SVG */}
        {/* This SVG is positioned at the bottom of the section to create a decorative wave effect. */}
        <div className="absolute bottom-0 left-0 w-full z-0 transform translate-y-px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-auto"
          >
            <path
              className="fill-current text-white" // Or replace with Tailwind or inline style
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9
          c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7
          c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7
          C839.5,97,814.1,95.2,790.5,93.1z"
            />
          </svg>
        </div>
      </section>
      <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
            DYB - Your Online Marketing Experts
          </h1>
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <p>
              Digitlize Your Brand is a progressive and innovative digital companion
              in crafting virtual answers for enterprises. We are a trusted and
              award-winning digital marketing agency in Pune, Chhatrapati
              Sambhaji Nagar, and Nashik.
            </p>
            <p>
              DYB is an Eminent{" "}
              <strong>Best Digital Marketing Company in Pune</strong> with a
              diverse clientele. We focus on remarkable brand development,
              especially for medical professionals and institutions, while
              offering a full spectrum of digital marketing services.
            </p>
            <p>
              With data-driven strategies and promising outcomes, we’ve become
              one of the top{" "}
              <strong>Online Lead Generation Agencies in Pune</strong>, helping
              1200+ businesses grow digitally.
            </p>
            <p>
              At DYB, we operate as a cohesive digital marketing agency where
              creativity is our passion, hard work and intelligence fuel our
              perseverance, and our success drives us to remain persistent.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why DYB?</h2>
          <div className="max-w-xl mx-auto space-y-2 text-center text-lg font-medium">
            <p>
              <strong>A</strong>bsolute Dedication
            </p>
            <p>
              <strong>B</strong>eyond Limits
            </p>
            <p>
              <strong>C</strong>reativity at Core
            </p>
            <p>
              <strong>D</strong>edicated Team Support
            </p>
          </div>
        </div>
      </section>

      <section className="w-full md:w-[70vw] lg:w-[50vw] mx-auto py-16">
        <div className="px-4 flex flex-col justify-center items-center text-center gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Absolute Dedication</h2>
            <p>
              The team at Digitlize Your Brand is passionate, creative, and highly
              motivated. Our process of project analysis and customized planning
              motivates us to enhance the quality of output. We’re devoted to
              client satisfaction and it shows in our work.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Beyond Limits</h2>
            <p>
              Going beyond the limits is what sets DYB apart. With over a decade
              of industry experience, we craft the best strategies to reach your
              ideal customers while navigating digital regulations — securing
              our place as a top <strong>Lead Generation Agency in Pune</strong>
              .
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Creativity at Core</h2>
            <p>
              Creativity is at the heart of everything we do. Our team blends
              innovation with trends and advanced technologies, delivering
              uniquely tailored campaigns that drive success.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Dedicated Team Support
            </h2>
            <p>
              Our technical experts are always ready to assist you with any bugs
              or digital disruptions. With proactive communication and
              problem-solving, we ensure your marketing journey is seamless.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full md:w-[80vw] mx-auto py-16 bg-gray-50">
        <div className="container flex flex-row justify-between mx-auto px-4 gap-12 items-center">
          <div className="w-3/4">
            <h3 className="text-3xl font-bold mb-4">Vision</h3>
            <p>
              As a top digital marketing company in Pune, our vision is to
              empower global businesses with a strong digital foundation. We
              strive to ensure steady growth and impactful lead generation
              through strategic digital presence and branding.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://omxtechnologies.com/wp-content/uploads/2024/10/vission3.png"
              alt="Vision at Digitlize Your Brand"
              className="w-64 h-auto"
            />
          </div>
        </div>
      </section>

      <section className="w-full md:w-[80vw] mx-auto py-16 bg-white">
        <div className="container px-4 flex flex-row justify-between gap-2 items-center">
          <div className="w-3/4">
            <h3 className="text-3xl font-bold mb-4">Mission</h3>
            <p>
              Our mission is to revolutionize digital marketing in India by
              crafting innovative, high-quality strategies. We aim to promote
              your brand to the right audience, enhance lead quality, and
              strengthen your online presence — all while protecting and
              uplifting your brand identity.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://omxtechnologies.com/wp-content/uploads/2024/10/mission.png"
              alt="Mission at Digitlize Your Brand"
              className="w-64 h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
