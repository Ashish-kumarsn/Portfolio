import React from "react";
import "./Header.css";
import { HiLocationMarker } from "react-icons/hi";
import { BiLayerPlus } from "react-icons/bi";
import { RiStackFill } from "react-icons/ri";


const Header = () => {
  return (
    <header className="hero-section">
      {/* Top-left logo */}
  <div className="hero-logo" onClick={() => window.location.reload()}>
<img src="/ChatGPT_Image_Feb_9__2026__07_38_33_PM-removebg-preview.png" alt="Logo" />
  </div>
      <div className="hero-container">
        {/* Main Name Display */}
        <div className="hero-name">
          <h1 className="name-display">ASHISH</h1>
        </div>

        {/* Tagline Section */}
        <div className="hero-tagline">
          <p className="tagline-top">I DESIGN AND BUILD PRODUCTS THAT</p>
          <p className="tagline-bottom">deliver real impact.</p>
        </div>

        {/* Bottom Info Section */}
        <div className="hero-footer">
          <div className="footer-left">
            <HiLocationMarker className="location-icon" />
            <div className="location-text">
              <p className="location-city">BASED IN DHANBAD,</p>
              <p className="location-country">INDIA</p>
            </div>
          </div>

          <div className="footer-right">
            <RiStackFill className="role-icon" />
            <div className="role-text">
              <p className="role-title">FULL STACK DEV,</p>
              <p className="role-subtitle">& DESIGNER</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;