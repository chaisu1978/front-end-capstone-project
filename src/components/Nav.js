import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="#" onClick={closeMenu}>About</Link></li>
                    <li><Link to="#" onClick={closeMenu}>Menu</Link></li>
                    <li><Link to="/booking" onClick={closeMenu}>Reservations</Link></li>
                    <li><Link to="#" onClick={closeMenu}>Order Online</Link></li>
                    <li><Link to="#" onClick={closeMenu}>Login</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;