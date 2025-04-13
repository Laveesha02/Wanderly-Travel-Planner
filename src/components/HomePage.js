import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <h1><center>Welcome to Wanderly</center></h1>
        <p>Your ultimate travel companion to plan and enjoy a perfect vacation.</p>
        <Link to="/itinerary-builder">
          <center><button className="cta-button">Start Planning Your Trip</button></center>
        </Link>
      </div>

      {/* Features Section */}
      <div className="features">
        <section>
          <img class="img1" src="https://images.pexels.com/photos/8937442/pexels-photo-8937442.jpeg?auto=compress&cs=tinysrgb&w=600"height="200" width="290" alt=""></img>
          <h2>Custom Itinerary Builder</h2>
          <p>Plan your trip with ease! Create a custom itinerary with activities, restaurants, and places to visit based on your preferences.</p>
        </section>

        <section>
        <img class="img1" src="https://imgs.search.brave.com/FRvD0K4pXXqYWhUN3Tq1rm0y513YHlGsLkKUA-sOSIo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/NTk4NzI0L3Bob3Rv/L2FyZS15b3UtcmVh/ZHktc2lnbi13aXRo/LXN0b3JteS1iYWNr/Z3JvdW5kLndlYnA_/YT0xJmI9MSZzPTYx/Mng2MTImdz0wJms9/MjAmYz1mVUV2cTRX/VDhvTldTMWdULWlT/bzJZemh3aExZaWx2/azJFdWUwNUFpWDg0/PQ"height="200" width="290" alt=""></img>
          <h2>Live Weather & Currency Exchange</h2>
          <p>Stay updated with real-time weather forecasts and currency exchange rates for your travel destinations.</p>
        </section>

        <section>
        <img class="img1" src="https://imgs.search.brave.com/ayVM8ZgsCzb55VXs6T-eVFtprc2DB7Np0UdnCSLdqyo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzM3ODIwMDM1L3Iv/aWwvMmFiOGRkLzUz/MjMwMDAyMzcvaWxf/NjAweDYwMC41MzIz/MDAwMjM3X3B1ZGMu/anBn"height="200" width="290" alt=""></img>
          <h2>Budget Tracker</h2>
          <p>Keep track of your travel expenses and manage your budget effectively throughout your journey.</p>
        </section>

        <section>
        <img class="img1" src="https://imgs.search.brave.com/AhHYSEN9HhdUo3KiU5zIek6zm0Ko0dL8AZ20uDSWdhc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2Nkbi1j/Z2kvaW1hZ2Uvdz03/MDAwLGZpdD1jb250/YWluLHE9OTAsZj1h/dXRvL2xpYnJhcnkv/Y29udGVudC9pbWFn/ZXMvMjAyMy8wMy9X/b3Jkc1RoYXRDb252/ZXJ0LmpwZw"height="200" width="290" alt="social sharing"></img>
          <h2>Social Sharing Integration</h2>
          <p>Share your itineraries with friends and collaborate to make the most of your travel plans.</p>
        </section>
      </div>
      <center><div>
        <img src="https://imgs.search.brave.com/cckHqMA4PpgfykLvsq2AzYFMyBNRpTNVjnJHD6TjH-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NS9QbGFuZS1QTkct/SW1hZ2UucG5n"height="100" width="400" alt="India gate"></img>
      </div></center>
      {/* Explore Destinations Section */}
      <div className="explore-destinations">
        <center><h2>Explore Popular Destinations</h2></center>
        <div className="destination-cards">
        <div className="card">
          <img class="img1" src="https://imgs.search.brave.com/q3VH85UAdgq6qsAz4t5qnpy_wKcIml1G6l1OvMfLLPM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTEw/Nzk1OTEyL3Bob3Rv/L2luZGlhLWdhdGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWtaa2RyRURYRXRv/TEs2UWg4WFB5d2M5/VllWOTVtSlhYY1dM/QnhIZnROX1U9"height="180" width="200" alt="Effil tower"></img>
            <h3>India</h3>
            <p>India is the seventh-largest country in the world by area and the most populous country. </p>
          </div>
          <div className="card">
          <img class="img1" src="https://imgs.search.brave.com/RLltglItFLCkbpOALyIBYQh8aBktGMNYL0RWOT1FQVw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY5/NTI5NDY5OS9waG90/by9zdHJlZXQtaW4t/cGFyaXMtd2l0aC1l/aWZmZWwtdG93ZXIt/ZnJhbmNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1Pbmcw/cC1MZFpBTy1sVF9m/WkZOckZUd0k0cE5r/UmFTZFAxY2x3Y3ZH/SXU0PQ"height="180" width="200" alt="temple in tokyo"></img>
            <h3>Paris</h3>
            <p>The City of Light awaits you with its charming cafes and iconic Eiffel Tower.</p>
          </div>
          <div className="card">
          <img class="img1" src="https://imgs.search.brave.com/-cx857Jc1gdn6Z_RJafVuEQQvPRJIKTq4UvPDVSYzxQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzg5LzgwLzQy/LzM2MF9GXzg5ODA0/MjY1X3paRUJNamhz/dGR2U3pWaUM0cnln/dlNyMWtET1dCMjYw/LmpwZw"height="180" width="200" alt="statue of liberty"></img>
            <h3>Tokyo</h3>
            <p>Experience the vibrant culture, delicious food, and bustling streets of Tokyo.</p>
          </div>
          <div className="card">
          <img class="img1" src="https://imgs.search.brave.com/coLi-knImNw116_PuMKEF7-AjxJMlVord6kHedi_0B4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzA5LzcwLzU2/LzM2MF9GXzIwOTcw/NTY0NV9iNzhIR0pJ/MWkxbXhxTHdNWUE3/ejFtM1Z2Q3hneEpG/Ty5qcGc"height="180" width="200" alt=""></img>
            <h3>New York</h3>
            <p>The Big Apple offers endless attractions, from Times Square to Central Park.</p>
          </div>
          <div className="card">
          <img class="img1" src="https://imgs.search.brave.com/rn2i88jDtv1eGyea7LOyU1iShcKaQDTAknuiSj_YogI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIw/ODcwMTY4L3Bob3Rv/L3NyaS1sYW5rYS10/cmluY29tYWxlZS11/cHB1dmVsaS1iZWFj/aC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RGliRS12ZEVh/d2dibmZJWWM3VGlq/SHNQam1SXzhIV0Uy/c2NGRTVoYUdxYz0"height="180" width="200" alt=""></img>
            <h3>Sri Lanka</h3>
            <p>The country has had a long history of engagement with modern international groups.</p>
          </div>
          
          
        </div>
      </div>
     
      {/* Testimonials Section */}
      <div className="testimonials">
       <center><h2>What Our Users Say</h2></center> 
        <div className="testimonial-card">
          <p>"Wanderly made planning my trip so easy and stress-free!"</p>
          <p>- Jane D.</p>
        </div>
        <div className="testimonial-card">
          <p>"I loved the budget tracker feature; it helped me stay on top of my expenses."</p>
          <p>- Mudit.</p>
        </div>
        <div className="testimonial-card">
          <p>"Had an amazing experience. Thank you Wanderly!"</p>
          <p>- Laveesha.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
