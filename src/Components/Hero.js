import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-text">
          <h1 id="hero-title">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional 
            recipes served with a modern twist.
          </p>
          <button className="cta-button" aria-label="Reserve a table">
            Reserve a Table
          </button>
        </div>
        <div className="hero-image">
          <img 
            src="/restaurant-hero.jpg" 
            alt="Delicious Mediterranean dishes at Little Lemon restaurant"
            width="400"
            height="300"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
