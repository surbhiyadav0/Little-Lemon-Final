
import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  console.log('Header component rendering'); // Debug log

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
              <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a></li>
              <li><a href="#specials" onClick={() => setIsMenuOpen(false)}>Specials</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#reservations" onClick={() => setIsMenuOpen(false)}>Reservations</a></li>
              <li><a href="#order-online" onClick={() => setIsMenuOpen(false)}>Order Online</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
