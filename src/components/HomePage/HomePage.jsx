// src/components/HomePage/HomePage.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GoogleMap from "./GoogleMap"

//import logImage from "../../assets/Home.png";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Welcome Section 
      <div className="relative">
        <img
          src={logImage} 
          alt="Train Image"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-20 flex items-center justify-end">
          <h1 className="text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
            Welcome to Royal Garden!
          </h1>
        </div>
      </div>
      */}

     
       {/* Google Map */}
       <div> 
          <div className="w-3/3"></div>
          <GoogleMap />
        </div>
 
      <Footer />
    </div>
  );
};

export default HomePage;
