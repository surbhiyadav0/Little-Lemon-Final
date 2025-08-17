
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
            <img 
              src="/logo.png" 
              alt="Little Lemon restaurant logo" 
              width="150"
              height="50"
            />
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
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a></li>
              <li><a href="#reservations" onClick={() => setIsMenuOpen(false)}>Reservations</a></li>
              <li><a href="#order-online" onClick={() => setIsMenuOpen(false)}>Order Online</a></li>
              <li><a href="#login" onClick={() => setIsMenuOpen(false)}>Login</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
