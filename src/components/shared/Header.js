import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const isLoggedIn = false;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fj-header">
        {/* Hamburger menu */}
        <div className="fj-header-left">
          <button
            className="fj-burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
          >
            <svg width="32" height="32" fill="#B3282D" viewBox="0 0 24 24">
              <rect y="5" width="24" height="3" rx="1.5" />
              <rect y="10.5" width="24" height="3" rx="1.5" />
              <rect y="16" width="24" height="3" rx="1.5" />
            </svg>
          </button>
          <div className={`fj-dropdown${menuOpen ? ' open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>🏠 Home</Link>
            <a href="https://www.franklinjunction.com" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>🌐 FJ.com</a>
            <a href="https://franklinjunction.streamorders.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>🏬 Storefronts</a>
            <Link to="/settings" onClick={() => setMenuOpen(false)}>👤 Profile</Link>
          </div>
        </div>

        {/* Centered logo */}
        <div className="fj-header-center">
          <div className="fj-logo-wrapper">
            <img src="/logo.png" alt="Franklin Junction" className="fj-logo" />
          </div>
        </div>

        {/* User/profile icon */}
        <div className="fj-header-right">
          <Link
            to={isLoggedIn ? "/settings" : "/login"}
            className="fj-profile-link"
            aria-label={isLoggedIn ? "Profile" : "Login"}
          >
            <svg width="32" height="32" fill="#B3282D" viewBox="0 0 24 24">
              <circle cx="12" cy="9" r="4" />
              <path d="M12 15c-5 0-7 2.5-7 4v1h14v-1c0-1.5-2-4-7-4z" />
            </svg>
          </Link>
        </div>
      </header>
      <hr className="fj-header-divider" />
    </>
  );
};

export default Header;
