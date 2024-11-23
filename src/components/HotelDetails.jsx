import React, { useState } from "react";
import './HotelDetails.css';

// Image imports for the components
import lobbyImage from "../assets/HoteA/Lobby.png";
import roomImage from "../assets/HoteA/Room.png";
import poolImage from "../assets/HoteA/Pool.png";
import diningImage from "../assets/HoteA/Dining.png";
import viewImage from "../assets/HoteA/View.png";

import resortImage from "../assets/HoteA/Resort.png";
import viewPointImage from "../assets/HoteA/ViewPoint.png";
import museumImage from "../assets/HoteA/Museum.png";
import parkImage from "../assets/HoteA/Park.png";

const HotelDetailsPage = () => {
  const [hoveredButton, setHoveredButton] = useState(false);

  const hotelImages = [
    { src: lobbyImage, alt: "Hotel Lobby" },
    { src: roomImage, alt: "Hotel Room" },
    { src: poolImage, alt: "Swimming Pool" },
    { src: diningImage, alt: "Dining Area" },
    { src: viewImage, alt: "Exterior View" },
  ];

  const nearbyAttractions = [
    {
      name: "Beach Resort",
      description: "A beautiful beach just a short walk away from the hotel.",
      image: resortImage,
    },
    {
      name: "Mountain View",
      description: "Stunning mountain views, perfect for hiking and outdoor activities.",
      image: viewPointImage,
    },
    {
      name: "Historic Museum",
      description: "A rich collection of local history and culture.",
      image: museumImage,
    },
    {
      name: "City Park",
      description: "Relax and enjoy nature at this peaceful park.",
      image: parkImage,
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Hotel Details</h1>
      <p className="description">
        Welcome to Hotel A. Experience a blend of luxury and comfort like never
        before. Nestled in a beautifully designed location, Hotel A offers you
        the ultimate escape with modern amenities tailored for your perfect
        stay.
      </p>

      {/* Hotel Image Gallery */}
      <div className="images-container">
        {hotelImages.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image.src} alt={image.alt} className="image" />
            <p className="image-description">{image.alt}</p>
          </div>
        ))}
      </div>

      {/* Nearby Attractions */}
      <div>
        <h2 className="attractions-title">Nearby Attractions</h2>
        {nearbyAttractions.map((attraction, index) => (
          <div key={index} className="attraction-card">
            <img
              src={attraction.image}
              alt={attraction.name}
              className="attraction-image"
            />
            <div className="attraction-details">
              <p className="attraction-name">{attraction.name}</p>
              <p className="attraction-description">
                {attraction.description}
              </p>
            </div>
            <button
              className={`button ${hoveredButton ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredButton(true)}
              onMouseLeave={() => setHoveredButton(false)}
            >
              More Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelDetailsPage;
