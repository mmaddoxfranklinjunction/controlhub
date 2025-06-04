import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const isLoggedIn = false;

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => (
  <>
    <header className="fj-header">
      {/* Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(prev => !prev)}
        className="fj-toggle"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? '←' : '→'}
      </button>

      {/* Left Nav */}
      <nav className="fj-left-nav">
        <Link to="/" className="fj-header-link">Home</Link>
        <a href="https://franklinjunction.com" target="_blank" rel="noopener noreferrer" className="fj-header-link">Website</a>
        <a href="https://franklinjunction.streamorders.com/" target="_blank" rel="noopener noreferrer" className="fj-header-link">Storefronts</a>
      </nav>

      {/* Center Logo */}
      <div className="fj-center">
        <img src="/logo.png" alt="Franklin Junction" className="fj-logo" />
      </div>

      {/* Right Side: Search + Login */}
      <div className="fj-right-side">
        <input
          type="text"
          placeholder="Search..."
          className="fj-search"
        />
        {isLoggedIn ? (
          <Link to="/settings" className="fj-header-link">
            <svg width={21} height={21} fill="none" viewBox="0 0 24 24">
              <circle cx={12} cy={8} r={4} fill="#253847" />
              <rect x={4} y={16} width={16} height={5} rx={2.5} fill="#253847" />
            </svg>
            Profile
          </Link>
        ) : (
          <Link to="/login" className="fj-header-link">
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
              <circle cx={12} cy={8} r={4} fill="#253847" />
              <rect x={4} y={16} width={16} height={5} rx={2.5} fill="#253847" />
            </svg>
            Login
          </Link>
        )}
      </div>
    </header>
    <hr className="fj-divider" />
  </>
);

export default Header;
