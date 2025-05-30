import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="fj-main-header">
      <div className="fj-header-inner">
        {/* Left: Navigation */}
        <nav className="fj-nav">
          <Link to="/" className="fj-nav-link">Home</Link>
          <a
            href="https://franklinjunction.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fj-nav-link"
          >
            Website
          </a>
          <a
            href="https://franklinjunction.streamorders.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="fj-nav-link"
          >
            Storefronts
          </a>
        </nav>

        {/* Center: Logo */}
        <div className="fj-logo-section">
          <img src="/logo.png" alt="Franklin Junction" className="fj-main-logo" />
        </div>

        {/* Right: Profile/Login */}
        <div className="fj-header-actions">
          <Link to="/settings" className="fj-profile-link" title="Profile / Settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#B3282D"
              viewBox="0 0 24 24"
              width="32"
              height="32"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M12 14c-4.4 0-8 1.79-8 4v2h16v-2c0-2.21-3.6-4-8-4z" />
            </svg>
          </Link>
          <Link to="/login" className="fj-get-started-btn" style={{marginLeft: 12}}>
            Login
          </Link>
        </div>
      </div>
      <hr className="fj-header-divider" />
    </header>
  );
};

export default Header;
