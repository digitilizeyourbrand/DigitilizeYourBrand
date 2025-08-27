import heroImg from "../assets/contact-us-hero.jpg"

const ContactUs = () => {
  return (
    <div className="text-black min-h-screen w-full mt-16">
      <section
       style={{ backgroundImage: `url(${heroImg})` }}
       className="relative bg-cover bg-center min-h-[500px] flex items-center justify-left text-center overflow-hidden">
        {/* Background Overlay */}

        {/* Main Content */}
        <div className="relative z-10 p-4">
          <h1 className="text-white px-20 text-5xl font-bold">Contact Us</h1>
        </div>

        {/* Wave Shape Divider SVG */}
        <div className="absolute bottom-0 left-0 w-full z-0 transform translate-y-px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-auto"
          >
            <path
              className="fill-current text-white"
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9
          c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7
          c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7
          C839.5,97,814.1,95.2,790.5,93.1z"
            />
          </svg>
        </div>
      </section>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white text-black p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">
            Get In Touch
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <textarea
              rows="4"
              placeholder="Your message (optional)"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="px-4 py-10">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Contact Details
          </h2>

          <div className="mb-2">
            <span className="font-semibold">Mail :</span>{" "}
            <a
              href="mailto:inquirydyb@gmail.com"
              className="text-blue-300 underline"
            >
              inquirydyb@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
