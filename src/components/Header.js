import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <nav className="navbar section-content">
            <Link href="/" className="nav-logo">
                <h2 className="logo-text">pinku.coding</h2>
            </Link>

           
            <div className="nav-menu">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/services">Services</Link>
                <Link className="nav-link" to="/ourteam">OurTeam</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </div>
            <button id="menu-open-button" className="fas fa-bars"></button>
        </nav>
    </header>
  )
}

export default Header
