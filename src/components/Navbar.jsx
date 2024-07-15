import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Horse Ride Booking</div>
      <div className="menu-icon" style={{ display: 'block', fontSize: '1.5em', color: 'white', cursor: 'pointer' }} onClick={toggleMenu}>
  ☰
</div>
<div className="menu-icon" style={{ display: 'block', fontSize: '1.5em', color: 'white', cursor: 'pointer' }} onClick={toggleMenu}>
  ☰
</div>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li onClick={toggleMenu}><Link to="/">Home</Link></li>
        <li onClick={toggleMenu}><Link to="/booking">Booking</Link></li>
        <li onClick={toggleMenu}><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
