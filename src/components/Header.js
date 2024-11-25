import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { GiVineFlower } from "react-icons/gi";

function Header() {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMobileMenuVisible((prev) => !prev);
    document.body.classList.toggle('show-mobile-menu', !isMobileMenuVisible);
  };

  const closeMenu = () => {
    setMobileMenuVisible(false);
    document.body.classList.remove('show-mobile-menu');
  };

  return (
    <header>
      <nav className="navbar section-content">
        <Link to="/" className="nav-logo">
          <h2 className="logo-text"><GiVineFlower /> pinku.coding</h2>
        </Link>

        <div className={`nav-menu ${isMobileMenuVisible ? 'active' : ''}`}>
          <button id="menu-close-button" onClick={closeMenu}>
            <IoIosClose />
          </button>
          <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
          <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
          <Link className="nav-link" to="/services" onClick={closeMenu}>Services</Link>
          <Link className="nav-link" to="/ourteam" onClick={closeMenu}>Our Team</Link>
          <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link>
        </div>

        <button id="menu-open-button" onClick={toggleMenu}>
          <FaBars />
        </button>
      </nav>
    </header>
  );
}

export default Header;
