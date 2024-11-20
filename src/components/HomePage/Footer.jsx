// src/components/HomePage/Footer.jsx
import React from 'react';
import Logo from "../../assets/Logo.png";  // Go up two levels to the src folder


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 md:p-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

         {/* Left Section */}
         <div className="text-center md:text-left">
          <img src={Logo} alt="Logo" className="w-16 mb-4 mx-auto md:mx-0" />
          <h2 className="font-bold text-lg">Royal Garden</h2>
          <p className="text-sm mt-2">
          A luxurious hotel blending comfort, elegance, and unforgettable experiences.
          </p>
        </div>

        {/* Center Section */}
        <div className="grid grid-cols-2 gap-4 text-center md:text-left text-sm">
          <div>
            {["Home", "About", "Offers", "Branchs", "Gallery"].map(item => (
              <p key={item} className="hover:underline cursor-pointer">{item}</p>
            ))}
          </div>
          <div>
            {["Help & Support", "Contact Us"].map(item => (
              <p key={item} className="hover:underline cursor-pointer">{item}</p>
            ))}
          </div>
        </div>

         {/* Right Section */}
         <div className="text-center md:text-left">
         <h3 className="font-bold mt-4">Subscribe</h3>
          <input type="email" placeholder="Your email" className="p-2 rounded placeholder-gray-500 text-black" />
          <button className="bg-blue-500 text-white p-2 rounded ml-2">Send</button>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;
