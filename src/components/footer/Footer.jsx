import React from "react";
import "./Footer.css";
import { FiFacebook, FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";
import { BsLinkedin, BsTelegram } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer_bottom">
        <div className="footer_copyright">
          <small>&copy; {currentYear} ASHISH KUMAR. ALL RIGHTS RESERVED.</small>
        </div>
        <div className="footer_socials">
          <a href="https://github.com/Ashish-kumarsn/" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href="www.linkedin.com/in/ashish-kumar-a41a66256" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FiTwitter />
          </a>
          <a href="https://telegram.org/@ashishk2939" target="_blank" rel="noopener noreferrer">
            <BsTelegram />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;