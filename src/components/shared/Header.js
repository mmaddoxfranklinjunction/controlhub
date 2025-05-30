import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="fj-header">
        <div className="fj-header-content">
          {/* Logo Left */}
          <div className="fj-header-logo">
            <img src="/logo.png" alt="Franklin Junction" className="fj-logo-img" />
          </div>
          {/* Nav Middle */}
          <nav className="fj-header-nav">
            <Link to="/" className="fj-nav-link">Home</Link>
            <a href="https://franklinjunction.com" className="fj-nav-link" target="_blank" rel="noopener noreferrer">Website</a>
            <a href="https://franklinjunction.streamorders.com/" className="fj-nav-link" target="_blank" rel="noopener noreferrer">Storefronts</a>
            <Link to="/settings" className="fj-nav-link">Profile</Link>
          </nav>
          {/* Right Side */}
          <div className="fj-header-actions">
            <Link to="/login" className="fj-login-btn" title="Login">
              <span className="fj-user-icon" role="img" aria-label="user">👤</span> Login
            </Link>
            <Link to="/account-setup" className="fj-getstarted-btn">
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <hr className="fj-header-divider" />
    </>
  );
};

export default Header;
