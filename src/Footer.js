// Footer.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <div style={{paddingTop:"20px"}}>
    <footer className="footer-container">
      <div className="contact-info">
       
      </div>

      <div className="quick-links">
        <h3>Get in touch with us today</h3>
        <ul>
          <li><a href="/">Call Now!: +1 3333 *** 444</a></li>
          <li><a href="/">1418 River Drive, Suite 35 Cottonhall, CA 9622</a></li>
          <li><a href="/">Check On the Map</a></li>
        </ul>
      </div>

      <div className="subscribe">
        <h3>SUBSCRIBE TO OUR MAILING LIST</h3>
        <form>
          <input type="email" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="social-media">
        <h3>Social Media</h3>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      <p>&copy; 2023 Powered by Finofit - Multipurpose Business Consulting Theme</p>
    </footer>
    </div>
  );
};

export default Footer;
