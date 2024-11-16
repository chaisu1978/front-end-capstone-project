import React, { useState } from 'react';
import hamburgerIcon from '../assets/hamburger_icon.svg';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={isOpen ? 'active' : ''}>
            {/* Hamburger Button */}
            <button className="hamburger" aria-label="Toggle menu" onClick={toggleMenu}>
                <img src={hamburgerIcon} alt="Hamburger Icon" />
            </button>

            {/* Navigation Links */}
            <div className="nav-links">
                <ul>
                    <li><a href="/" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
                    <li><a href="#reservations" onClick={closeMenu}>Reservations</a></li>
                    <li><a href="#order-online" onClick={closeMenu}>Order Online</a></li>
                    <li><a href="#login" onClick={closeMenu}>Login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;