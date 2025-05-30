import React from 'react';
import { Link } from 'react-router-dom';

const isLoggedIn = false; // Replace with your actual auth logic

const Header = () => {
  return (
    <>
      <header
        className="fj-header"
        style={{
          background: '#253847',
          fontFamily: 'Futura, sans-serif',
          color: 'white',
          padding: '0 32px',
          height: '54px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Left Links */}
        <nav style={{ position: 'absolute', left: 32, display: 'flex', gap: '2.2rem', alignItems: 'center', height: '100%' }}>
          <Link to="/" className="fj-header-link">Home</Link>
          <a href="https://franklinjunction.com" target="_blank" rel="noopener noreferrer" className="fj-header-link">Website</a>
          <a href="https://franklinjunction.streamorders.com/" target="_blank" rel="noopener noreferrer" className="fj-header-link">Storefronts</a>
        </nav>

        {/* Centered Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <img
            src="/logo.png"
            alt="Franklin Junction"
            style={{ height: 28, margin: '0 18px' }}
          />
        </div>

        {/* Right Profile/Login */}
        <div style={{ position: 'absolute', right: 32, display: 'flex', alignItems: 'center', height: '100%' }}>
          {isLoggedIn ? (
            <Link to="/settings" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width={21} height={21} fill="none" viewBox="0 0 24 24">
                <circle cx={12} cy={8} r={4} fill="#fff" />
                <rect x={4} y={16} width={16} height={5} rx={2.5} fill="#fff" />
              </svg>
              Profile
            </Link>
          ) : (
            <Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
                <circle cx={12} cy={8} r={4} fill="#fff" />
                <rect x={4} y={16} width={16} height={5} rx={2.5} fill="#fff" />
              </svg>
              Login
            </Link>
          )}
        </div>
      </header>
      <hr style={{ border: 0, borderBottom: '1px solid #e4e7ee', margin: 0 }} />
    </>
  );
};

export default Header;
