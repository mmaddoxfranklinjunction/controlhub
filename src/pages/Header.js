
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Franklin Junction" className="logo" />
       
      </div>
      <nav className="header-nav">
        <Link to="/">wrong header</Link>
        <a href="https://franklinjunction.com" target="_blank" rel="noopener noreferrer">Website</a>
        <Link to="/profile">Profile</Link>
      </nav>
      <hr className="header-divider" />
    </header>
  );
};

export default Header;
