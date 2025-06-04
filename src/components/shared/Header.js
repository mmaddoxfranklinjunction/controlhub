// Enhanced Header with toggle styled to appear like part of the sidebar
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

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
        justifyContent: 'center',
        position: 'relative',
        zIndex: 40
      }}
    >
      {/* Sidebar Toggle - Styled to overlap and appear part of sidebar */}
      <button
        onClick={() => setIsSidebarOpen(prev => !prev)}
        className="absolute -left-3 top-[9px] w-[28px] h-[28px] rounded-full flex items-center justify-center shadow-md border border-white bg-[#253847] hover:bg-[#b3282d] transition"
        aria-label="Toggle Sidebar"
      >
        <span className="text-[#b3282d] hover:text-white text-lg leading-none">
          {isSidebarOpen ? '←' : '→'}
        </span>
      </button>

      {/* Left Nav */}
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
        <Link to="/" className="fj-header-link text-sm text-gray-700 font-light">Home</Link>
        <a href="https://franklinjunction.com" target="_blank" rel="noopener noreferrer" className="fj-header-link text-sm text-gray-700 font-light">Website</a>
        <a href="https://franklinjunction.streamorders.com/" target="_blank" rel="noopener noreferrer" className="fj-header-link text-sm text-gray-700 font-light">Storefronts</a>
      </nav>

      {/* Center Logo + Search */}
      <div className="flex items-center justify-center h-full gap-6">
        <img src="/logo.png" alt="Franklin Junction" style={{ height: 36 }} />
        <input
          type="text"
          placeholder="Search..."
          className="rounded-full px-3 py-1 text-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b3282d]"
          style={{ width: 200 }}
        />
      </div>

      {/* Right Side */}
      <div style={{ position: 'absolute', right: 16, display: 'flex', alignItems: 'center', height: '100%' }}>
        {isLoggedIn ? (
          <Link to="/settings" className="fj-header-link flex items-center gap-2 text-sm">
            <svg width={21} height={21} fill="none" viewBox="0 0 24 24">
              <circle cx={12} cy={8} r={4} fill="#253847" />
              <rect x={4} y={16} width={16} height={5} rx={2.5} fill="#253847" />
            </svg>
            Profile
          </Link>
        ) : (
          <Link to="/login" className="fj-header-link flex items-center gap-2 text-sm">
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
              <circle cx={12} cy={8} r={4} fill="#253847" />
              <rect x={4} y={16} width={16} height={5} rx={2.5} fill="#253847" />
            </svg>
            Login
          </Link>
        )}
      </div>
    </header>
    <hr style={{ border: 0, borderBottom: '1px solid #e4e7ee', margin: 0 }} />
  </>
);

export default Header;
