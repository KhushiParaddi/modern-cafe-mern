import React from 'react';
import "../Home.css";
export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-left">
          <h1>Welcome to Modern Café</h1>
          <p className="lead">Warm drinks. Fresh pastries. Calm mornings.</p>
          <div className="hero-cta">
            <a href="/menu" className="btn">See Menu</a>
            <a href="/contact" className="btn btn-outline">Reserve</a>
          </div>
        </div>
        <div className="hero-right">
          <img src="/coffee.jpeg" alt="coffee" />
        </div>
      </section>

      <section className="about-cafe">
        <h2>About Modern Café</h2>
        <p>
          Nestled in the heart of the city, Modern Café offers a cozy ambiance
          for coffee lovers and pastry enthusiasts. Whether you need a quiet
          corner to work, a morning pick-me-up, or a place to catch up with friends,
          we've got you covered.
        </p>
        <div className="about-images">
          <img src="/cafe-interior1.jpg" alt="Cafe interior" />
          <img src="/cafe-interior2.jpg" alt="Cafe seating" />
          <img src="/cafe-coffee.jpg" alt="coffee" />
        </div>
      </section>
    </div>
  );
}