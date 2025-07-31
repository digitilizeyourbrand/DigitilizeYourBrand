import heroImg from "../assets/contact-us-hero.jpg"

const ContactUs = () => {
  return (
    <div className="text-black min-h-screen w-full mt-16">
      <section
       style={{ backgroundImage: `url(${heroImg})` }}
       className="relative bg-cover bg-center min-h-[500px] flex items-center justify-left text-center overflow-hidden">
        {/* Background Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

        {/* Main Content */}
        <div className="relative z-10 p-4">
          <h1 className="text-white px-20 text-5xl font-bold">Contact Us</h1>
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
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Contact Details
          </h2>

          <div className="mb-4">
            <h3 className="font-bold text-blue-400">Pune :</h3>
            <p>
              2nd floor, Solitaire Business Hub, H-2070, opposite Nico Garden
              Society, Clover Park, Viman Nagar, Pune, Maharashtra 411014
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-blue-500">
              Chhatrapati Sambhaji Nagar :
            </h3>
            <p>
              First floor AN-17 prozone trade, near API corner, Chhatrapati
              Sambhaji Nagar, Maharashtra 431001
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-blue-400">Nashik :</h3>
            <p>
              Flat No.8 Sulaxmi app Near Sagar Sweets, Janakalyan Bank, College
              Rd, Canada Corner, Nashik, Maharashtra 422005
            </p>
          </div>

          <div className="mb-2">
            <span className="font-semibold">Call Us :</span>{" "}
            <a href="tel:+919104999222" className="text-blue-300 underline">
              +91-9104999222
            </a>{" "}
            /{" "}
            <a href="tel:+918669422292" className="text-blue-300 underline">
              +91-8669422292
            </a>
          </div>

          <div className="mb-2">
            <span className="font-semibold">Mail :</span>{" "}
            <a
              href="mailto:sales@omxtechnologies.com"
              className="text-blue-300 underline"
            >
              sales@omxtechnologies.com
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            <strong>Note :</strong> For more details about vacancies please
            contact HR: <br />
            <a href="tel:+919881430717" className="text-blue-300 underline">
              +91-9881430717
            </a>{" "}
            /{" "}
            <a
              href="mailto:hr@omxtechnologies.com"
              className="text-blue-300 underline"
            >
              hr@omxtechnologies.com
            </a>
          </p>
        </div>
      </div>

      {/* Office Locations */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-800">
          Our Office Locations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pune */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-4">Pune</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.033272031048!2d73.9116515748435!3d18.572626967486804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c118ef1b609f%3A0x3e54e0cb4b0d2c8f!2sOMX%20Technologies!5e0!3m2!1sen!2sin!4v1722413649810!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded shadow-md"
              title="Pune Office"
            ></iframe>
          </div>

          {/* Chhatrapati Sambhaji Nagar */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-4">
              Chhatrapati Sambhaji Nagar
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.333389526042!2d75.34303467488343!3d19.682304481677112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2b1c67f697d%3A0xf99a01e0ad2667ae!2sOMX%20Technologies%20-%20Digital%20Marketing%20Agency%20Aurangabad!5e0!3m2!1sen!2sin!4v1722413800817!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded shadow-md"
              title="Chhatrapati Sambhaji Nagar Office"
            ></iframe>
          </div>

          {/* Nashik */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-4">Nashik</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.560388262467!2d73.78681057486798!3d19.172888548689104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddba6ae02f7e75%3A0xd866e7896bb2a3d9!2sOMX%20Technologies%20-%20Digital%20Marketing%20Agency%20Nashik!5e0!3m2!1sen!2sin!4v1722413890522!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded shadow-md"
              title="Nashik Office"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
