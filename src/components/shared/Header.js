import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// Simulated login status (replace with real auth state)
const isLoggedIn = false;

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src="/logo.png" alt="Franklin Junction" className="logo" />
        </div>

        <nav className="header-nav">
          <Link to="/">Home</Link>
          <a href="https://franklinjunction.com" target="_blank" rel="noopener noreferrer">Website</a>
        </nav>

        <div className="header-account">
          {isLoggedIn ? (
            <Link to="/profile" className="account-link">
              <span role="img" aria-label="profile">👤</span> Profile
            </Link>
          ) : (
            <Link to="/login" className="account-link">
              <span role="img" aria-label="login">🔑</span> Login
            </Link>
          )}
        </div>
      </header>

      <hr className="header-divider" />
    </>
  );
};

export default Header;
