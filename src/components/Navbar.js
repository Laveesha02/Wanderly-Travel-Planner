import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <h2><i>Wanderly</i></h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/itinerary-builder">Itinerary Builder</Link></li>
        <li><Link to="/weather-currency">Weather & Currency</Link></li>
        <li><Link to="/budget-tracker">Budget Tracker</Link></li>
        <li><Link to="/share-itinerary">Social Sharing</Link></li>
      </ul>
      <div className="auth-buttons">
        <Link to="/login" className="login-btn">LOGIN</Link>
        <Link to="/signup" className="signup-btn">SIGNUP</Link>
      </div>
    </nav>
  );
}

export default Navbar;
