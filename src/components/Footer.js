import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="https://example.com">Home</a> </li>
            <li><a href="/itinerary-builder">Itinerary Builder</a></li>
            <li><a href="/weather-currency">Weather & Currency</a></li>
            <li><a href="/budget-tracker">Budget Tracker</a></li>
            <li><a href="https://example.com">About Us</a></li>
            <li><a href="https://example.com">Contact Us</a></li>
          </ul>
        </div>
        <div className="newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <p>&copy; 2024 Wanderly. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
