import React from "react";
import { Link } from "react-router-dom";
import { services } from "../lib/services";

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "Blog", link: "/blog" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#242424] text-white">
        {/* Top SVG Wave */}
      <div className="relative top-0 left-0 w-full z-20">
        <svg
          className="w-full h-[80px] sm:h-[100px]"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7
            c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3
            c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Footer Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="flex flex-col space-y-4">
            <img
              src="" // Use the imported logo variable
              alt="Footer Logo"
              className="w-40 h-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              A prominent Digital Marketing Agency for more than a decade, has
              earned a well-known reputation as a provider of top-notch digital
              marketing services.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links with SVGs */}
              <a
                href="https://www.facebook.com/omxtech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              ></a>
              <a
                href="https://www.linkedin.com/company/omxtechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              ></a>
              <a
                href="https://www.instagram.com/omxtech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              ></a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-white pb-2">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="hover:text-gray-300 transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-white pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="hover:text-gray-300 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-white pb-2">
              Contact Us
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href="tel:+919104999222"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  (+91) 9104999222
                </a>
              </p>
              <p>
                <a
                  href="mailto:sales@omxtechnologies.com"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  sales@omxtechnologies.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className=" py-4 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm">
            Copyright © {currentYear} Digitlize Your Brand. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
