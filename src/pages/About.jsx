import React from "react";
import "../About.css";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-hero">
          <div className="about-text">
            <h1>About Modern Café</h1>
            <p>
              Welcome to <strong>Modern Café</strong> — your cozy corner for
              slow mornings, deep conversations, and the perfect cup of coffee.
              We believe that good food and good people make the best moments.
            </p>

            <div className="mission-box"> 
              <h2>Our Mission </h2>
              <p>
                To serve honest food, support local artisans, and make people
                smile with every visit.
              </p>
            </div>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800"
              alt="Coffee cup"
            />
          </div>
        </div>

        <div className="about-gallery">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800"
            alt="Pastry and coffee"
          />
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800"
            alt="Cafe interior"
          />
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
            alt="Coffee beans and latte art"
          />
        </div>
      </div>
    </section>
  );
}