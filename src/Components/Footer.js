import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img 
              src="/logo-footer.png" 
              alt="Little Lemon restaurant logo" 
              width="150"
              height="50"
              className="footer-logo"
            />
            <p>
              Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
          </div>
          
          <nav className="footer-section" aria-labelledby="footer-navigation">
            <h3 id="footer-navigation">Navigation</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#order-online">Order Online</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
          </nav>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <address>
              <p>123 Main Street</p>
              <p>Chicago, IL 60601</p>
              <p>Phone: <a href="tel:+13125551234">(312) 555-1234</a></p>
              <p>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
            </address>
          </div>
          
          <div className="footer-section">
            <h3>Social Media</h3>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Follow us on Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="https://instagram.com" aria-label="Follow us on Instagram">
                <span className="social-icon">📷</span>
              </a>
              <a href="https://twitter.com" aria-label="Follow us on Twitter">
                <span className="social-icon">🐦</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
