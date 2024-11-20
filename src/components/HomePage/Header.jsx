import React, { useState } from "react";
import logImage from "../../assets/Logo.png";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logImage} alt="Logo" className="h-14 ml-5" />
        <span className="ml-2 text-3xl font-bold hidden sm:block">Royal Garden</span>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="block sm:hidden text-white"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation */}
      <nav
        className={`flex flex-col sm:flex-row sm:space-x-14 items-center sm:block ${
          showMobileMenu ? "block" : "hidden"
        } sm:block`}
      >
        <a href="#home" className="hover:text-gray-400 py-2">Home</a>
        <a href="#live-tracking" className="hover:text-gray-400 py-2">Offers</a>
        <a href="#stations" className="hover:text-gray-400 py-2">Branches</a>
        <a href="#weather" className="hover:text-gray-400 py-2">Gallery</a>
        <a href="#about" className="hover:text-gray-400 py-2">Contact Us</a>
        <a href="#login" className="hover:text-gray-400 py-2">Login</a>
      </nav>
    </header>
  );
};

export default Header;
