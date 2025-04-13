import React, { useState } from 'react';
import axios from 'axios';
import './WeatherCurrency.css';

function WeatherCurrency() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const [currency, setCurrency] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const fetchWeatherCurrency = async () => {
    if (!location) {
      alert("Please enter a destination.");
      return;
    }

    setLoading(true); // Start loading
    setWeather(''); // Reset previous data
    setCurrency('');

    try {
      // Replace with your API keys for better results
      const weatherResponse = await axios.get(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}`);
      const currencyResponse = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);

      setWeather(`Temperature in ${location}: ${weatherResponse.data.current.temp_c}°C`);
      const exchangeRate = currencyResponse.data.rates[location.toUpperCase()];
      setCurrency(`USD to ${location.toUpperCase()} Rate: ${exchangeRate ? exchangeRate : 'N/A'}`);
    } catch (error) {
      console.error(error);
      setWeather('Error fetching weather data');
      setCurrency('Error fetching currency data');
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="ib">
      <div className="weather-currency">
        <h2>Weather & Currency Info</h2>
        <input
          type="text"
          placeholder="Enter Destination (e.g., London, EUR)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={fetchWeatherCurrency} disabled={loading}>
          {loading ? 'Loading...' : 'Get Info'}
        </button>
        {loading ? <p>Loading data...</p> : (
          <>
            <p>{weather}</p>
            <p>{currency}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherCurrency;
