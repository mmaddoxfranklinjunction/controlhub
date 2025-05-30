import React from 'react';
import { Link } from 'react-router-dom';

// Simulated login status
const isLoggedIn = false;

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => (
  <>
  
    <header
      style={{
        background: '#fff',
        fontFamily: 'Futura, sans-serif',
        color: '#253847',
        padding: '0 16px',
        height: '54px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // changed from center
        position: 'relative',
      }}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(prev => !prev)}
        className="absolute left-3 top-[10px] z-50 p-1 rounded-md hover:bg-gray-100 transition"
        aria-label="Toggle Sidebar"
      >
        <span style={{ fontSize: '1.25rem' }}>{isSidebarOpen ? '←' : '→'}</span>
      </button>

      {/* Left Links */}
      <nav
        style={{
          position: 'absolute',
          left: 36,
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Link
          to="/"
          className="fj-header-link"
          style={{ fontSize: '0.875rem' }}
        >
          Home
        </Link>
        <a
          href="https://franklinjunction.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fj-header-link"
          style={{ fontSize: '0.875rem' }}
        >
          Website
        </a>
        <a
          href="https://franklinjunction.streamorders.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="fj-header-link"
          style={{ fontSize: '0.875rem' }}
        >
          Storefronts
        </a>
      </nav>

      {/* Centered Logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <img
          src="/logo.png"
          alt="Franklin Junction"
          style={{ height: 36, margin: '0 12px' }}
        />
      </div>

      {/* Right Profile/Login */}
      <div
        style={{
          position: 'absolute',
          right: 16,
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {isLoggedIn ? (
          <Link
            to="/settings"
            className="fj-header-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.875rem'
            }}
          >
            <svg width={21} height={21} fill="none" viewBox="0 0 24 24">
              <circle cx={12} cy={8} r={4} fill="#253847" />
              <rect x={4} y={16} width={16} height={5} rx={2.5} fill="#253847" />
            </svg>
            Profile
          </Link>
        ) : (
          <Link
            to="/login"
            className="fj-header-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.875rem'
            }}
          >
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
              <circle cx={12} cy={8} r={4} fill="#253847" />
              <rect x={4} y={16} width={16} height={5} rx={2.5} fill="#253847" />
            </svg>
            Login
          </Link>
        )}
      </div>
    </header>
    <hr
      style={{
        border: 0,
        borderBottom: '1px solid #e4e7ee',
        margin: 0
      }}
    />
  </>
);

export default Header;
