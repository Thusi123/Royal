import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for navigation
import './GoogleMap.css'; // For styles
import sriMap from '../../assets/sri.png'; // Adjust the path based on your project structure
import { MdLocationOn } from 'react-icons/md';

import Hotel_1 from '../../assets/HoteA/View.png';
import Hotel_2 from '../../assets/HotelB.png';
import Hotel_3 from '../../assets/HotelC.png';
// Correct path for location icon

const GoogleMap = () => {
  const [hoveredPopup, setHoveredPopup] = useState(null); // For hover popups
  const [clickedPopup, setClickedPopup] = useState(null); // For click popups
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Handle mouse enter to show hover popup
  const handleMouseEnter = (id) => {
    setHoveredPopup(id);
  };

  // Handle mouse leave to hide hover popup
  const handleMouseLeave = () => {
    setHoveredPopup(null);
  };

  // Handle click on marker to toggle click popup
  const handleClick = (id) => {
    if (clickedPopup === id) {
      setClickedPopup(null); // Close the popup if already open
    } else {
      setClickedPopup(id); // Open the popup
    }
  };

  // Handle click on "More" button
  const handleMoreClick = (hotel) => {
    if (hotel === 'HotelA') {
      navigate('/hotel-details'); // Navigate to the HotelDetails page
    }
  };

  return (
    <div className="layout-container">
      {/* Left Side: Hotel List */}
      <div className="hotel-list">
        <div className="hotel-item">
          <img src={Hotel_1} alt="Hotel 1" />
          <div>
            <h4>Hotel A</h4>
            <p><strong>Price:</strong> LKR 5,297 per night</p>
            <p><strong>Features:</strong> Free Wi-Fi • Free parking • Swimming pool • Spa services</p>
            <p><strong>Rating:</strong> ⭐⭐⭐⭐ (4.5/5 based on 500 reviews)</p>
            <p><strong>Description:</strong> Enjoy comfort and modern amenities at Hotel A, perfect for families and business trips.</p>
            <div style={{ marginTop: '0.5rem' }}>
              <button className="more-btn" onClick={() => handleMoreClick('HotelA')}>
                More
              </button>
            </div>
          </div>
        </div>

        <div className="hotel-item">
          <img src={Hotel_2} alt="Hotel 2" />
          <div>
            <h4>Hotel B</h4>
            <p><strong>Price:</strong> LKR 2,297 per night</p>
            <p><strong>Features:</strong> Free Wi-Fi • Free parking • Swimming pool • Spa services</p>
            <p><strong>Rating:</strong> ⭐⭐⭐ (2.5/5 based on 120 reviews)</p>
            <p><strong>Description:</strong> A beachfront retreat offering luxurious rooms with stunning ocean views, modern amenities, and exceptional service, perfect for a relaxing getaway.</p>
            <div style={{ marginTop: '0.5rem' }}>
              <button className="more-btn" onClick={() => handleMoreClick('HotelB')}>
                More
              </button>
            </div>
          </div>
        </div>

        <div className="hotel-item">
          <img src={Hotel_3} alt="Hotel 3" />
          <div>
            <h4>Hotel C</h4>
            <p><strong>Price:</strong> LKR 1,999 per night</p>
            <p><strong>Features:</strong> Free Wi-Fi • Free parking • Swimming pool • Spa services</p>
            <p><strong>Rating:</strong> ⭐⭐ (1.5/5 based on 50 reviews)</p>
            <p><strong>Description:</strong> Nestled in the hills, this cozy lodge features rustic charm, breathtaking mountain views, and a peaceful atmosphere, ideal for nature lovers and adventurers</p>
            <div style={{ marginTop: '0.5rem' }}>
              <button className="more-btn" onClick={() => handleMoreClick('HotelC')}>
                More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Sri Lanka Map */}
      <div className="map-container">
        <img src={sriMap} alt="Sri Lanka Map" className="map-image" />

        {/* Marker 1 */}
        <div
          className="marker"
          style={{ top: '55%', left: '30%' }}
          onMouseEnter={() => setHoveredPopup('hotel1')}
          onMouseLeave={() => setHoveredPopup(null)}
        >
          <div
            className={`popup ${hoveredPopup === 'hotel1' ? 'visible' : ''}`}
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginBottom: '5px',
            }}
          >
            <img src={Hotel_1} alt="Hotel 1" />
            <h3>Hotel A</h3>
            <p>Comfortable, modern, family-friendly, convenient, business-ready</p>
            <button onClick={() => handleMoreClick('HotelA')}>More</button>
          </div>
          <MdLocationOn className="marker-icon" />
        </div>

        {/* Marker 2 */}
        <div
          className="marker"
          style={{ top: '65%', left: '75%' }}
          onMouseEnter={() => handleMouseEnter('hotel2')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('hotel2')}
        >
          <MdLocationOn className="marker-icon" />
        </div>

        {/* Marker 3 */}
        <div
          className="marker"
          style={{ top: '68%', left: '40%' }}
          onMouseEnter={() => handleMouseEnter('hotel3')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('hotel3')}
        >
          <MdLocationOn className="marker-icon" />
        </div>

        {/* Hover Popups */}
        <div
          className={`popup ${hoveredPopup === 'hotel2' ? 'visible' : ''}`}
          style={{ top: '63%', left: '60%' }}
        >
          <img src={Hotel_2} alt="Hotel 2" />
          <h3>Hotel B</h3>
          <button onClick={() => handleMoreClick('Hotel')}>More</button>
        </div>

        <div
          className={`popup ${hoveredPopup === 'hotel3' ? 'visible' : ''}`}
          style={{ top: '67%', left: '40%' }}
        >
          <img src={Hotel_3} alt="Hotel 3" />
          <h3>Hotel C</h3>
          <button onClick={() => handleMoreClick('Hotel')}>More</button>
        </div>

        {/* Click Popups */}
        {clickedPopup === 'hotel1' && (
          <div className="popup" style={{ top: '48%', left: '85%' }}>
            <img src={Hotel_1} alt="Hotel 1" />
            <h3>Hotel A</h3>
            <p>Clicked: More details about Hotel A.</p>
            <button onClick={() => setClickedPopup(null)}>Close</button>
          </div>
        )}
        {clickedPopup === 'hotel2' && (
          <div className="popup" style={{ top: '53%', left: '75%' }}>
            <img src={Hotel_2} alt="Hotel 2" />
            <h3>Hotel B</h3>
            <p>Clicked: More details about Hotel B.</p>
            <button onClick={() => setClickedPopup(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleMap;
