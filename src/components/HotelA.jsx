import React, { useState } from "react";

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

  // Inline styles
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "3rem",
      marginBottom: "20px",
      color: "#333",
      fontWeight: "800",
    },
    description: {
      fontSize: "1.2rem",
      marginBottom: "40px",
      color: "#555",
      lineHeight: "1.8",
    },
    imagesContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginBottom: "40px",
    },
    imageCard: {
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      position: "relative",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
    imageCardHover: {
      transform: "scale(1.05)",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "16px",
    },
    imageDescription: {
      position: "absolute",
      bottom: "10px",
      left: "10px",
      color: "white",
      fontSize: "1.1rem",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      padding: "5px 10px",
      borderRadius: "8px",
    },
    attractionsTitle: {
      fontSize: "2.5rem",
      marginBottom: "30px",
      color: "#333",
      fontWeight: "700",
    },
    attractionCard: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#ffffff",
      padding: "20px",
      marginBottom: "30px",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
    },
    attractionCardHover: {
      transform: "translateY(-5px)",
    },
    attractionImage: {
      maxWidth: "200px",
      height: "auto",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    attractionDetails: {
      marginLeft: "20px",
      flex: 1,
    },
    attractionName: {
      fontSize: "1.6rem",
      fontWeight: "700",
      color: "#333",
    },
    attractionDescription: {
      fontSize: "1.2rem",
      color: "#555",
      marginTop: "10px",
    },
    button: {
      padding: "12px 20px",
      fontSize: "1rem",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      textTransform: "uppercase",
      fontWeight: "500",
      transition: "background-color 0.3s ease",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      alignSelf: "center",
    },
    buttonHovered: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hotel Details</h1>
      <p style={styles.description}>
        Welcome to Hotel A. Experience a blend of luxury and comfort like never
        before. Nestled in a beautifully designed location, Hotel A offers you
        the ultimate escape with modern amenities tailored for your perfect
        stay.
      </p>

      {/* Hotel Image Gallery */}
      <div style={styles.imagesContainer}>
        {hotelImages.map((image, index) => (
          <div
            key={index}
            style={{ ...styles.imageCard, ...(hoveredButton ? styles.imageCardHover : {}) }}
          >
            <img src={image.src} alt={image.alt} style={styles.image} />
            <p style={styles.imageDescription}>{image.alt}</p>
          </div>
        ))}
      </div>

      {/* Nearby Attractions */}
      <div>
        <h2 style={styles.attractionsTitle}>Nearby Attractions</h2>
        {nearbyAttractions.map((attraction, index) => (
          <div
            key={index}
            style={{
              ...styles.attractionCard,
              ...(hoveredButton ? styles.attractionCardHover : {}),
            }}
          >
            <img
              src={attraction.image}
              alt={attraction.name}
              style={styles.attractionImage}
            />
            <div style={styles.attractionDetails}>
              <p style={styles.attractionName}>{attraction.name}</p>
              <p style={styles.attractionDescription}>
                {attraction.description}
              </p>
            </div>
            <button
              style={{
                ...styles.button,
                ...(hoveredButton ? styles.buttonHovered : {}),
              }}
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
