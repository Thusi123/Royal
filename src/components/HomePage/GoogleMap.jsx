import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Hotel_1 from "../../assets/HoteA/View.png";
import Hotel_2 from "../../assets/HotelB.png";
import Hotel_3 from "../../assets/HotelC.png";

// Custom marker icons
const redIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const OpenStreetMapComponent = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const locations = [
    {
      id: "hotelA",
      lat: 6.5500,
      lng: 80.0000,
      name: "Hotel A",
      description: "Enjoy comfort and modern amenities at Hotel A, perfect for families and business trips.",
      price: "LKR 5,297 per night",
      features: "Free Wi-Fi • Free parking • Swimming pool • Spa services",
      rating: "⭐⭐⭐⭐ (4.5/5 based on 500 reviews)",
      image: Hotel_1
    },
    {
      id: "hotelB",
      lat: 7.5000,
      lng: 79.9940,
      name: "Hotel B",
      description: "A beachfront retreat offering luxurious rooms with stunning ocean views, modern amenities, and exceptional service, perfect for a relaxing getaway.",
      price: "LKR 2,297 per night",
      features: "Free Wi-Fi • Free parking • Swimming pool • Spa services",
      rating: "⭐⭐⭐ (2.5/5 based on 120 reviews)",
      image: Hotel_2
    },
    {
      id: "hotel3",
      lat: 6.8833,
      lng: 79.9897,
      name: "Hotel C",
      description: "Nestled in the hills, this cozy lodge features rustic charm, breathtaking mountain views, and a peaceful atmosphere, ideal for nature lovers and adventurers.",
      price: "LKR 1,999 per night",
      features: "Free Wi-Fi • Free parking • Swimming pool ",
      rating: "⭐⭐ (1.5/5 based on 50 reviews)",
      image: Hotel_3
    }
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: "100vh" }}>
      {/* Hotel List */}
      <div
        style={{
          flex: "1 1 30%",
          overflowY: "auto",
          maxHeight: "100%",
          padding: "10px",
          boxSizing: "border-box",
          borderRight: "1px solid #ccc",
        }}
      >
        {locations.map((hotel) => (
          <div
            key={hotel.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: selectedHotel?.id === hotel.id ? "#ffe4e1" : "#fff",
            }}
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h4>{hotel.name}</h4>
            <p><strong>Price:</strong> {hotel.price}</p>
            <p><strong>Features:</strong> {hotel.features}</p>
            <p><strong>Rating:</strong> {hotel.rating}</p>
            <p><strong>Description:</strong> {hotel.description}</p>

            <Link to={`/hotel-details/${hotel.id}`}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      style={{
                        marginTop: "10px",
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        width: "200px",
                      }}
                    >
                      More
                    </button>
                  </div>
              
            </Link>
          </div>
        ))}
      </div>

      {/* Map Container */}
      <div style={{ flex: "1 1 50%", height: "100%" }}>
        <MapContainer
          center={
            selectedHotel
              ? [selectedHotel.lat, selectedHotel.lng]
              : [7.8731, 80.7718] // Default center coordinates for Sri Lanka
          }
          zoom={selectedHotel ? 6 : 8} // Adjust zoom based on selection
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={[location.lat, location.lng]}
              icon={redIcon}
              eventHandlers={{
                click: () => setSelectedHotel(location),
              }}
            >
              <Popup>
              <div>
                <img
                  src={location.image}
                  alt={location.name}
                  style={{ width: "100%", height: "auto", marginBottom: "5px" }}
                />
                <h4>{location.name}</h4>
                <p>{location.description}</p>
                {/* Use location.hotel or similar property if hotel is part of location */}
                              <Link to={`/hotel-details/${location.id}`}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      width: "200px",
                    }}
                  >
                    More
                  </button>
                </div>
              </Link>

              </div>
            </Popup>

            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default OpenStreetMapComponent;
