import heroImg from "../../assets/about-us-hero.webp"

const FounderAndCeo = () => {
  return (
    <section className="w-full bg-white mt-16">
      <section
        style={{ backgroundImage: `url(${heroImg})` }}
        className="relative bg-cover bg-center min-h-[500px] flex items-center justify-left text-center overflow-hidden"
      >
        {/* Background Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

        {/* Main Content */}
        <div className="relative z-10 p-4">
          <h1 className="text-white px-20 text-5xl font-bold">Founder and CEO</h1>
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
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Innovations Motivate the Growth of Organization.
        </h1>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div>
          <img
            src="https://omxtechnologies.com/wp-content/uploads/2024/04/mukundsir-1024x484.jpeg"
            alt="Mr. Mukund Awsarmal - Founder & CEO OMX"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-left space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Mr. Mukund Awasarmal - Founder & CEO
          </h3>
          <p>
            In March 2014, Mr. Mukund Awasarmal commenced his entrepreneurial
            journey with the successful launch of OMX Technologies.
          </p>
          <p>
            As a graduate of Business Administration, he made a pivotal decision
            to channel his skills and expertise into the IT sector. He is
            focused on creating a world where businesses in India could thrive
            globally.
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-5xl mx-auto mt-10 space-y-6 text-justify text-gray-700">
        <p>
          However, what distinguishes Mr. Awasarmal is his genuine work ethic
          and firm commitment to excellence. His intense dedication and
          innovative approach have earned him a renowned position among clients,
          especially in the medical sector. Over the years, he had the privilege
          of serving and earning the trust of an impressive clientele comprising
          1200 organizations within the healthcare sector.
        </p>

        <p>
          Through his exceptional service, Mr. Awasarmal has consistently
          demonstrated his ability to understand the unique challenges and
          requirements of healthcare organizations as well as other sectors. He
          approaches each project with a client-centric mindset, ensuring that
          the solutions he formulates are tailored to meet their specific needs
          while keeping up with industry regulations and standards. He
          consistently goes above and beyond to exceed client expectations and
          drive positive outcomes.
        </p>

        <p>
          Due to his focused vision, OMX Technologies has achieved remarkable
          growth and is renowned as a{" "}
          <a
            href="https://omxtechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Growth hacking company in Pune
          </a>
          , serving over 1200+ customers across various digital marketing
          services including website development, SEO, and social media
          marketing.
        </p>

        <p>
          Under his amazing leadership, OMX Technologies has reached its
          clientele nationally and internationally. The success of OMX
          Technologies can be attributed to Mr. Awasarmal’s visionary
          leadership, effective team-building strategies, and the continued
          dedication of all employees to delivering exceptional services.
        </p>

        <p>
          Despite encountering challenges like high competition and an immensely
          evolved industry, constant encouragement and active motivation from
          Mr. Awasarmal have helped OMX Technologies rank higher and higher with
          happy and satisfied clients. OMX Technologies has emerged as a
          prominent force in the digital marketing landscape, solidifying its
          position as a formidable player as a{" "}
          <a
            href="https://omxtechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            top growth marketing company in Pune, India
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default FounderAndCeo;
