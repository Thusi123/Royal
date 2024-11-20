import React, { useState } from "react";
import logImage from "../../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center relative">
      {/* Logo and Name */}
      <div className="flex items-center">
        <img src={logImage} alt="Logo" className="h-14 ml-5" />
        {/* Display "Royal Garden" next to the logo */}
        <span className="ml-2 text-3xl font-bold">Royal Garden</span>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="block sm:hidden text-white"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation */}
      <nav
        className={`${
          showMobileMenu ? "block" : "hidden"
        } sm:flex sm:flex-row sm:space-x-14 items-center sm:block absolute sm:relative bg-gray-800 sm:bg-transparent w-full sm:w-auto sm:px-5 sm:py-4 top-16 sm:top-0 left-0 right-0 z-10`}
      >
        <a href="#home" className="hover:text-gray-400 py-2">Home</a>
        <a href="#live-tracking" className="hover:text-gray-400 py-2">Offers</a>
        <a href="#stations" className="hover:text-gray-400 py-2">Branches</a>
        <a href="#weather" className="hover:text-gray-400 py-2">Gallery</a>
        <a href="#about" className="hover:text-gray-400 py-2">Contact Us</a>
        <a href="#login" className="hover:text-gray-400 py-2">Login</a>
      </nav>

      {/* Mobile Navigation */}
      {showMobileMenu && (
        <div className="absolute top-16 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col space-y-4 sm:hidden z-10">
          <a href="#home" className="hover:text-gray-400 py-2">Home</a>
          <a href="#live-tracking" className="hover:text-gray-400 py-2">Offers</a>
          <a href="#stations" className="hover:text-gray-400 py-2">Branches</a>
          <a href="#weather" className="hover:text-gray-400 py-2">Gallery</a>
          <a href="#about" className="hover:text-gray-400 py-2">Contact Us</a>
          <a href="#login" className="hover:text-gray-400 py-2">Login</a>
        </div>
      )}
    </header>
  );
};

export default Header;
