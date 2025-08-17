import React from 'react';
import './Hero.css';

function Hero() {
  console.log('Hero component rendering'); // Debug log
  
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-logo">
            <div className="lemon-icon">
              <div className="lemon-shape"></div>
              <div className="leaf"></div>
            </div>
            <h1 id="hero-title">LITTLE LEMON</h1>
          </div>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional 
            recipes served with a modern twist.
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary" aria-label="Reserve a table">
              Reserve a Table
            </button>
            <button className="cta-button secondary" aria-label="Order online">
              Order Online
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="placeholder-icon">🍋</div>
            <p>Restaurant Image</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
