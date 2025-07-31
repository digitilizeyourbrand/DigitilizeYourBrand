import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../lib/services";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 h-16">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-yellow-500">
          LOGO
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-md font-medium text-gray-800 items-center">
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("about")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover:text-yellow-500">About Us</button>
            <div
              className={`absolute left-0 top-full w-48 bg-white shadow-lg border border-gray-200 rounded-md transition-opacity duration-300 ease-in-out ${
                openDropdown === "about"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <Link
                to="/about-us"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                About OMX
              </Link>
              <Link
                to="/founder-and-ceo"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Founder and CEO
              </Link>
            </div>
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover:text-pink-700">Services</button>
            {openDropdown === "services" && (
              <div className="absolute left-0 mt-0 w-64 bg-white shadow-lg border border-gray-200 rounded-md">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.path}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className="hover:text-yellow-500">
            Blog
          </Link>
          <Link to="/online-payment" className="hover:text-yellow-500">
            Online Payment
          </Link>
          <Link to="/contact-us" className="rounded-sm">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          isDropdownOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col text-lg font-medium text-gray-800 border border-gray-300">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="border-b border-gray-300 px-4 py-2"
          >
            Home
          </Link>

          {/* About */}
          <div className="border-b border-gray-300">
            <button
              onClick={() => toggleDropdown("about")}
              className="w-full text-left font-semibold px-4 py-2"
            >
              About
            </button>
            {openDropdown === "about" && (
              <div className="bg-gray-100 pl-2">
                <Link
                  to="/about-us"
                  onClick={handleLinkClick}
                  className="block px-6 py-2 border-t border-gray-300"
                >
                  About OMX
                </Link>
                <Link
                  to="/founder-and-ceo"
                  onClick={handleLinkClick}
                  className="block px-6 py-2 border-t border-gray-300"
                >
                  Founder and CEO
                </Link>
              </div>
            )}
          </div>

          {/* Services */}
          <div className="border-b border-gray-300">
            <button
              onClick={() => toggleDropdown("services")}
              className="w-full text-left font-semibold px-4 py-2"
            >
              Services
            </button>
            {openDropdown === "services" && (
              <div className="bg-gray-100 pl-2">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.path}
                    onClick={handleLinkClick}
                    className="block px-6 py-2 border-t border-gray-300"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/blog"
            onClick={handleLinkClick}
            className="border-b border-gray-300 px-4 py-2"
          >
            Blog
          </Link>
          <Link
            to="/online-payment"
            onClick={handleLinkClick}
            className="border-b border-gray-300 px-4 py-2"
          >
            Online Payment
          </Link>
          <Link
            to="/contact-us"
            onClick={handleLinkClick}
            className="px-4 py-2"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
