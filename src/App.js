import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ItineraryBuilder from "./components/ItineraryBuilder";
import WeatherCurrency from "./components/WeatherCurrency";
import BudgetTracker from "./components/BudgetTracker";
import ShareItinerary from "./components/ShareItinerary";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import "./styles/main.css";

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [lastVisit, setLastVisit] = useState(null);

  // Check if the user has a "lastVisit" cookie on load
  useEffect(() => {
    const fetchLastVisit = async () => {
      try {
        const response = await axios.get("http://localhost/wanderly-backend/check_cookies.php");
        if (response.data.lastVisit) {
          setLastVisit(response.data.lastVisit); // Set the last visit if the cookie exists
        } else {
          setShowCookieBanner(true); // Show the cookie banner if no cookies are set
        }
      } catch (error) {
        console.error("Error fetching cookie info:", error);
      }
    };

    fetchLastVisit();
  }, []);

  // Handle "Accept Cookies" button click
  const handleAcceptCookies = async () => {
    try {
      await axios.post("http://localhost/wanderly-backend/set_cookies.php");
      setShowCookieBanner(false); // Hide the cookie banner
      alert("Cookies accepted!");
    } catch (error) {
      console.error("Error setting cookies:", error);
    }
  };

  return (
    <Router>
      <Navbar />

      {/* Show last visit message if available */}
      {lastVisit && (
        <div className="last-visit-banner">
          <p>Welcome back! Your last visit was on: {lastVisit}</p>
        </div>
      )}

      {/* Cookie banner */}
      {showCookieBanner && (
        <div className="cookie-banner">
          <p>We use cookies to enhance your experience. Do you accept all cookies?</p>
          <button onClick={handleAcceptCookies}>Accept All Cookies</button>
        </div>
      )}

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/itinerary-builder" element={<ItineraryBuilder />} />
        <Route path="/weather-currency" element={<WeatherCurrency />} />
        <Route path="/budget-tracker" element={<BudgetTracker />} />
        <Route path="/share-itinerary" element={<ShareItinerary />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
