import React from 'react';
import './ShareItinerary.css';

function ShareItinerary() {
  const handleShareClick = (e) => {
    e.preventDefault(); // Prevents form submission
    alert("This feature is coming soon!");
  };

  return (
    <div className="ib">
      <div className="form-container">
        <h2>Share Your Itinerary</h2>
        <form>
          <input type="email" placeholder="Enter Email Address" required /><br />
          <button type="button" className="form-button" onClick={handleShareClick}>
            Share Itinerary
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShareItinerary;
