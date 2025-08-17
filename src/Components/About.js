import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 id="about-title">Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
            </p>
            <p>
              To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
            </p>
          </div>
          <div className="about-images">
            <img 
              src="/restaurant-owners.jpg" 
              alt="Mario and Adrian, the owners of Little Lemon restaurant"
              width="400"
              height="300"
              className="about-image-main"
            />
            <img 
              src="/restaurant-interior.jpg" 
              alt="Cozy interior of Little Lemon restaurant"
              width="300"
              height="200"
              className="about-image-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
