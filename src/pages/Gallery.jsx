import React from 'react';
import '../Gallery.css';

export default function Gallery() {
  return (
    <div className="gallery-page">
      <h2 className="gallery-title">Our Café Moments</h2>
      <p className="gallery-subtitle">
        A glimpse into the aroma, warmth, and stories brewed here ☕
      </p>


      <section className="gallery-section">
        <h3 className="section-title">Drinks</h3>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/photo1.jpeg" alt="Latte Art" className="gallery-img" />
            <div className="gallery-overlay">Latte Art</div>
          </div>
          <div className="gallery-item">
            <img src="/photo2.jpeg" alt="Cold Brew" className="gallery-img" />
            <div className="gallery-overlay">Cold Brew(Coming Soon)</div>
          </div>
          <div className="gallery-item">
            <img src="/photo3.jpeg" alt="Cappuccino" className="gallery-img" />
            <div className="gallery-overlay">Cappuccino</div>
          </div>
        </div>
      </section>

      
      <section className="gallery-section">
        <h3 className="section-title">Upcoming Desserts</h3>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/photo4.jpeg" alt="Pastries" className="gallery-img" />
            <div className="gallery-overlay">Pastries</div>
          </div>
          <div className="gallery-item">
            <img src="/photo5.jpeg" alt="Croissant" className="gallery-img" />
            <div className="gallery-overlay">Croissant</div>
          </div>
          <div className="gallery-item">
            <img src="/photo6.jpeg" alt="Brownie" className="gallery-img" />
            <div className="gallery-overlay">Brownie</div>
          </div>
        </div>
      </section>


      <section className="gallery-section">
        <h3 className="section-title">Café Vibes</h3>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/photo7.jpeg" alt="Café Interior" className="gallery-img" />
            <div className="gallery-overlay">Café Interior</div>
          </div>
          <div className="gallery-item">
            <img src="/photo8.jpeg" alt="Corner Table" className="gallery-img" />
            <div className="gallery-overlay">Corner Table</div>
          </div>
          <div className="gallery-item">
            <img src="/photo9.jpeg" alt="Coffee Beans" className="gallery-img" />
            <div className="gallery-overlay">Coffee Beans</div>
          </div>
        </div>
      </section>
    </div>
  );
}