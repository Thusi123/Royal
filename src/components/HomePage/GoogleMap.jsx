import React, { useState } from 'react';
import './GoogleMap.css'; // For styles
import sriMap from '../../assets/sri.png'; // Path to the map image
import locationIcon from '../../assets/location.ico'; // Path to the location marker icon
import Hotel_1 from '../../assets/Home.png'; // Path to hotel image

const GoogleMap = () => {
  const [hoveredPopup, setHoveredPopup] = useState(null); // For hover popups
  const [clickedPopup, setClickedPopup] = useState(null); // For click popups

  // Handle hover popup
  const handleMouseEnter = (id) => {
    setHoveredPopup(id); // Show hover popup
  };

  const handleMouseLeave = () => {
    setHoveredPopup(null); // Hide hover popup
  };

  // Handle click popup
  const handleClick = (id) => {
    console.log(`Clicked on: ${id}`); // Debugging: Check the clicked popup
    if (clickedPopup === id) {
      setClickedPopup(null); // Close the popup if already open
    } else {
      setClickedPopup(id); // Show popup on click
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
            <p>LKR 2,297</p>
            <span>Free Wi-Fi • Free parking</span>
            <div style={{ marginTop: '0.5rem' }}>
              <button className="more-btn">More</button>
              <button className="view-btn">Map</button>
            </div>
          </div>
        </div>
        <div className="hotel-item">
          <img src="https://via.placeholder.com/100" alt="Hotel 2" />
          <div>
            <h4>Hotel B</h4>
            <p>LKR 2,575</p>
            <span>Free Wi-Fi • Free breakfast</span>
            <div style={{ marginTop: '0.5rem' }}>
              <button className="more-btn">More</button>
              <button className="view-btn">Map</button>
            </div>
          </div>
        </div>
        <div className="hotel-item">
          <img src="https://via.placeholder.com/100" alt="Hotel 3" />
          <div>
            <h4>Hotel C</h4>
            <p>LKR 2,575</p>
            <span>Free Wi-Fi • Free breakfast</span>
            <div style={{ marginTop: '0.5rem' }}>
              <button className="more-btn">More</button>
              <button className="view-btn">Map</button>
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
          onMouseEnter={() => handleMouseEnter('hotel1')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('hotel1')}
        >
          <img src={locationIcon} alt="Hotel 1" className="marker-icon" />
        </div>

        {/* Marker 2 */}
        <div
          className="marker"
          style={{ top: '65%', left: '75%' }}
          onMouseEnter={() => handleMouseEnter('hotel2')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('hotel2')}
        >
          <img src={locationIcon} alt="Hotel 2" className="marker-icon" />
        </div>

        {/* Marker 3 */}
        <div
          className="marker"
          style={{ top: '68%', left: '40%' }}
          onMouseEnter={() => handleMouseEnter('hotel3')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('hotel3')}
        >
          <img src={locationIcon} alt="Hotel 3" className="marker-icon" />
        </div>

        {/* Marker 4 */}
        <div
          className="marker"
          style={{ top: '45%', left: '45%' }}
          onMouseEnter={() => handleMouseEnter('hotel4')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('hotel4')}
        >
          <img src={locationIcon} alt="Hotel 4" className="marker-icon" />
        </div>

        {/* Hover Popups */}
        <div
          className={`popup ${hoveredPopup === 'hotel1' ? 'visible' : ''}`}
          style={{ top: '53%', left: '50%' }}
        >
          <img src={Hotel_1} alt="Hotel 1" />
          <h3>Hotel A</h3>
          <p>Hovered: Beautiful hotel in location A.</p>
        </div>
        <div
          className={`popup ${hoveredPopup === 'hotel2' ? 'visible' : ''}`}
          style={{ top: '63%', left: '75%' }}
        >
          <img src="https://via.placeholder.com/150" alt="Hotel 2" />
          <h3>Hotel B</h3>
          <p>Hovered: Lovely hotel in location B.</p>
        </div>
        <div
          className={`popup ${hoveredPopup === 'hotel3' ? 'visible' : ''}`}
          style={{ top: '67%', left: '40%' }}
        >
          <img src="https://via.placeholder.com/150" alt="Hotel 3" />
          <h3>Hotel C</h3>
          <p>Hovered: Beautiful hotel in location C.</p>
        </div>
        <div
          className={`popup ${hoveredPopup === 'hotel4' ? 'visible' : ''}`}
          style={{ top: '43%', left: '50%' }}
        >
          <img src="https://via.placeholder.com/150" alt="Hotel 4" />
          <h3>Hotel D</h3>
          <p>Hovered: Beautiful hotel in location D.</p>
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
            <img src="https://via.placeholder.com/150" alt="Hotel 2" />
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
