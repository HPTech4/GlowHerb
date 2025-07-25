import React, { useState } from 'react';
import './style.css'



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className='navBar'>
    <nav className="navbar">
      <div className="logo">Glow Herb</div>
      <ul className={`nav-links $ {menuOpen ? 'open' : ''}`} >
        <li><a href="#about">About</a></li>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#cta">Shop</a></li>
      </ul>
    </nav>
    <span className = "menu-toggle" onClick={() => setMenuOpen(!menuOpen)}> &#9776; </span>
    </header>
  );
};

export default Navbar;