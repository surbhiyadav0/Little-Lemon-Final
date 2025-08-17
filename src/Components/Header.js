
import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <div className="lemon-shape"></div>
              <div className="leaf"></div>
            </div>
            <span className="logo-text">LITTLE LEMON</span>
          </div>
          
          <nav className="nav" role="navigation" aria-label="Main navigation">
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger"></span>
              <span className="hamburger"></span>
              <span className="hamburger"></span>
            </button>
            
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#specials">Specials</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#order-online">Order Online</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
