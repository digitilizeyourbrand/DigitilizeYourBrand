import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../lib/services";
import logo from "../assets/logo_transparent_cropped.png";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setOpenDropdown(null);
        
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center justifuy-center">
            <img
                        src={logo}
                        alt="Footer Logo"
                        className="w-30 h-auto object-cont'"
                      />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-md font-medium text-gray-800 items-center">
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>

            {/* About Us Dropdown */}
            <Link to="/about-us" className="hover:text-yellow-500">
              About Us
            </Link>

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

          <div className="md:hidden" ref={navRef}>
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

            {/* Mobile Dropdown Menu */}
            <div
              className={`absolute top-16 left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
                isDropdownOpen ? "max-h-screen" : "max-h-0"
              }`}
            >
              <nav className="flex flex-col text-lg font-medium text-gray-800 border-t border-gray-300 z-30">
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="border-b border-gray-300 px-4 py-2"
                >
                  Home
                </Link>

                {/* About */}
                <Link
                  to="/about-us"
                  onClick={handleLinkClick}
                  className="border-b border-gray-300 px-4 py-2"
                >
                  About Us
                </Link>

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
          </div>
        </div>
      </header>
      {/* Backdrop for mobile menu */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => {
            setIsDropdownOpen(false);
            setOpenDropdown(null);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
