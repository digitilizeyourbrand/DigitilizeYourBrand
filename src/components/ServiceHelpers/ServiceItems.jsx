import React from "react";
import { Link, useLocation } from "react-router-dom";
import { services } from "../../lib/services";

// SVG for the right arrow icon
const RightArrowIcon = () => (
  <svg
    aria-hidden="true"
    className="w-6 h-6 ml-2"
    viewBox="0 0 256 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
  </svg>
);

export default function ServiceItems() {
  const location = useLocation();

  return (
    <div className="w-full h-fit md:w-1/3 lg:w-1/4 py-2 flex flex-col gap-6 rounded-xl">
      <div className="px-2 py-4 bg-[#f8f9fb] rounded-xl">
        <h2 className="text-3xl font-bold mb-6">Main Services</h2>
        <div className="space-y-4">
          {/* Service Item */}
          <div className="space-y-3">
            {services.map((service) => {
              const isActive = location.pathname === service.path;

              return (
                <Link
                  key={service.label}
                  to={service.path}
                  className={`flex items-center justify-between w-full text-lg font-semibold transition-colors duration-200 px-4 py-2 rounded-xl ${
                    isActive
                      ? "bg-blue-500 text-white "
                      : "text-black hover:bg-blue-500"
                  }`}
                >
                  <span>{service.label}</span>
                  <RightArrowIcon
                    className={`ml-4 w-4 h-4 ${
                      isActive ? "bg-blue-500 text-white" : "text-black"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* Contact Now */}
      <div className="text-black text-center flex flex-col px-4 py-4 items-center bg-[#f8f9fb] rounded-xl">
        <img
          decoding="async"
          src="https://omxtechnologies.com/wp-content/uploads/2024/09/contactus.jpg"
          alt="contactus"
          className="w-full h-48 object-cover rounded-md mb-6 shadow-md"
        />
        <h3 className="text-3xl font-bold mb-2">Contact Now</h3>
        <p className="text-xl">(+91) 9104999222</p>
        <p className="text-xl">sales@omxtechnologies.com</p>
      </div>
    </div>
  );
}
