import React, { useState } from 'react';
import './ItineraryBuilder.css';
function ItineraryBuilder() {
  const [itinerary, setItinerary] = useState({ date: '', location: '', activities: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItinerary({ ...itinerary, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Itinerary Saved:\nDate: ${itinerary.date}\nLocation: ${itinerary.location}\nActivities: ${itinerary.activities}`);
  };

  return (
    <div className="ib">
    <div className="itinerary-builder">
      <h2>Build Your Itinerary</h2>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" value={itinerary.date} onChange={handleChange} placeholder="Travel Date" required />
        <input type="text" name="location" value={itinerary.location} onChange={handleChange} placeholder="Destination" required />
        <textarea name="activities" value={itinerary.activities} onChange={handleChange} placeholder="Activities" required />
        <button type="submit">Save Itinerary</button>
      </form>
    </div>
    </div>
  );
}

export default ItineraryBuilder;
