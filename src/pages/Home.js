import React from 'react';
import { Link } from 'react-router-dom';

// Sample metrics for visuals
const visibilityScores = { A: 22, B: 14, C: 8, D: 2 };
const storeRatings = { '2.5-3.0': 1, '3.0-3.5': 3, '3.5-4.0': 10 };
const training = { assigned: 18, complete: 13 };
const totalSales = "$244,286";
const recentErrorRate = "5.5%";
const userCount = 8;

// SVG icons (unchanged from your version)
const IconStorefront = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2" fill="#B3282D" viewBox="0 0 24 24" width={40} height={40}>
    <path d="M3 9.75V19a2 2 0 002 2h2a1 1 0 001-1v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 001 1h2a2 2 0 002-2V9.75M4.21 4.21A2.25 2.25 0 016.25 3h11.5a2.25 2.25 0 012.04 1.21l1.46 2.75A1.5 1.5 0 0120 9H4a1.5 1.5 0 01-1.25-2.04l1.46-2.75z"/>
  </svg>
);
const IconReport = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2" fill="#B3282D" viewBox="0 0 24 24" width={40} height={40}>
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 12h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2zm10 0H7V7h10v14zm-4-8h2v2h-2v-2zm0-4h2v2h-2V9z"/>
  </svg>
);
const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2" fill="#B3282D" viewBox="0 0 24 24" width={40} height={40}>
    <path d="M10 2a8 8 0 016.32 12.906l4.387 4.387a1 1 0 01-1.414 1.415l-4.387-4.387A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z"/>
  </svg>
);
const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2" fill="#B3282D" viewBox="0 0 24 24" width={40} height={40}>
    <path d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7zm7.43-1.72l1.44 1.11a1 1 0 01.17 1.4l-1.4 2.42a1 1 0 01-1.35.36l-1.7-.98a6.97 6.97 0 01-1.6.93l-.26 1.89A1 1 0 0113 23h-2a1 1 0 01-.99-1.07l-.26-1.89a6.97 6.97 0 01-1.6-.93l-1.7.98a1 1 0 01-1.35-.36l-1.4-2.42a1 1 0 01.17-1.4l1.44-1.11a6.86 6.86 0 010-1.86l-1.44-1.11a1 1 0 01-.17-1.4l1.4-2.42a1 1 0 011.35-.36l1.7.98a6.97 6.97 0 011.6-.93l.26-1.89A1 1 0 0111 1h2a1 1 0 01.99 1.07l.26 1.89a6.97 6.97 0 011.6.93l1.7-.98a1 1 0 011.35.36l1.4 2.42a1 1 0 01-.17 1.4l-1.44 1.11c.12.61.18 1.23.18 1.86s-.06 1.25-.18 1.86z"/>
  </svg>
);

const Home = () => (
  <div className="flex flex-col min-h-screen bg-gray-100 px-4 relative">
    <div className="w-full flex justify-end items-center py-6 max-w-7xl mx-auto">
      <Link
        to="/account-setup"
        className="inline-block bg-[#B3282D] text-white px-6 py-2 rounded-full font-semibold text-md shadow hover:bg-[#8c1c24] transition-all mr-4 tracking-wide"
        style={{ letterSpacing: '0.02em' }}
      >
        Get Started
      </Link>
      <Link
        to="/login"
        className="inline-block bg-white text-[#B3282D] border border-[#B3282D] px-6 py-2 rounded-full font-semibold text-md shadow hover:bg-[#B3282D] hover:text-white transition-all tracking-wide"
        style={{ letterSpacing: '0.02em' }}
      >
        Login
      </Link>
    </div>

    <div className="flex flex-col items-center justify-center flex-1 text-center">
      <img src="/homelogo.png" alt="Franklin Junction Logo" className="w-20 mb-6" />
      <img
        src={`${process.env.PUBLIC_URL}/control_hub_logo.png`}
        alt="Control Hub Logo"
        className="w-100 mb-6"
      />
      <h1 className="text-4xl font-bold text-[#002147] mb-2">The GM for your Digital Restaurant</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-12 mt-6">
        {/* Analytics */}
        <Link
          to="/analytics/sales"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition flex flex-col items-center justify-center text-center"
        >
          <IconReport />
          <h2 className="font-semibold text-xl text-[#002147] mb-1">Analytics</h2>
          <p className="text-sm text-gray-600 mb-2">View your sales and operational data</p>
          <div className="flex gap-8 justify-center mt-2 text-sm w-full">
            <div>
              <div className="text-gray-500">Total Sales</div>
              <div className="font-bold text-lg text-[#2679c8]">{totalSales}</div>
            </div>
            <div>
              <div className="text-gray-500">Error Rate</div>
              <div className="font-bold text-lg text-[#b3282d]">{recentErrorRate}</div>
            </div>
          </div>
        </Link>
        {/* Store Search */}
        <Link
          to="/store-search"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition flex flex-col items-center justify-center text-center"
        >
          <IconSearch />
          <h2 className="font-semibold text-xl text-[#002147] mb-1">Store Search</h2>
          <p className="text-sm text-gray-600 mb-2">Locate and manage your stores</p>
          <div className="mt-2 text-sm">
            <div className="text-gray-500">Active Stores</div>
            <div className="font-bold text-lg text-[#2679c8]">35</div>
          </div>
        </Link>
        {/* Control Panel */}
        <Link
          to="/control-panel"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition flex flex-col items-center justify-center text-center"
        >
          <IconStorefront />
          <h2 className="font-semibold text-xl text-[#002147] mb-1">Control Panel</h2>
          <p className="text-sm text-gray-600 mb-2">Adjust your online menu and settings</p>
          <div className="mt-2 flex gap-4 justify-center text-sm">
            <div>
              <div className="text-gray-500 mb-1">Visibility Score</div>
              <div className="flex gap-2 justify-center">
                {Object.entries(visibilityScores).map(([grade, count]) => (
                  <span
                    key={grade}
                    className={`inline-block w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                      grade === 'A' ? 'bg-green-100 text-green-800' :
                      grade === 'B' ? 'bg-yellow-100 text-yellow-700' :
                      grade === 'C' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}
                    title={`${count} stores scored ${grade}`}
                  >
                    {grade}:{count}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
        {/* Settings */}
        <Link
          to="/settings"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition flex flex-col items-center justify-center text-center"
        >
          <IconSettings />
          <h2 className="font-semibold text-xl text-[#002147] mb-1">Settings</h2>
          <p className="text-sm text-gray-600 mb-2">Manage your account and preferences</p>
          <div className="flex flex-col gap-2 items-center mt-2 text-sm">
            <div>
              <span className="text-gray-500">Users</span>
              <span className="font-bold text-lg text-[#2679c8] ml-2">{userCount}</span>
            </div>
            <div>
              <span className="text-gray-500">Store Ratings</span>
              <span className="ml-2">
                {Object.entries(storeRatings).map(([band, num], idx) => (
                  <span key={band} className="inline-block mr-2">
                    <span className="font-bold text-[#2679c8]">{num}</span>
                    <span className="text-xs text-gray-400 ml-1">{band}</span>
                  </span>
                ))}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Training</span>
              <span className="ml-2">
                <span className="font-bold text-[#b3282d]">{training.complete}</span>
                <span className="text-xs text-gray-400 mx-1">/</span>
                <span className="font-bold text-[#2679c8]">{training.assigned}</span>
                <span className="text-xs text-gray-400 ml-1">complete</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
      <Link
        to="/control-panel"
        className="bg-[#B3282D] text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-[#8c1c24] transition mt-2"
      >
        Get Started
      </Link>
    </div>
  </div>
);

export default Home;
