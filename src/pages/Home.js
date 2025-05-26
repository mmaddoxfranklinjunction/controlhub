import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/shared/Header';

// Mock data for metrics (replace with real data or props)
const visibilityScores = { A: 22, B: 14, C: 8, D: 2 };
const storeRatings = { '2.5-3.0': 1, '3.0-3.5': 3, '3.5-4.0': 10 };
const training = { assigned: 18, complete: 13 };
const totalSales = "$244,286";
const recentErrorRate = "5.5%";
const userCount = 8;

const Home = () => (
  <>
    <Header />
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fefaf7] text-center px-4">
      <img src="/homelogo.png" alt="Franklin Junction Logo" className="w-20 mb-6" />
      <img
        src={`${process.env.PUBLIC_URL}/control_hub_logo.png`}
        alt="Control Hub Logo"
        className="w-100 mb-6"
      />
      <h1 className="text-4xl font-bold text-[#002147] mb-2">The GM for your Digital Restaurant</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-12">
        {/* Analytics */}
        <Link
          to="/analytics/sales"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition text-left flex flex-col"
        >
          <div className="text-3xl mb-2">📈</div>
          <h2 className="font-semibold text-xl text-[#002147]">Analytics</h2>
          <p className="text-sm text-gray-600 mt-1">View your sales and operational data</p>
          <div className="mt-4 flex gap-6 text-sm">
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
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition text-left flex flex-col"
        >
          <div className="text-3xl mb-2">🔍</div>
          <h2 className="font-semibold text-xl text-[#002147]">Store Search</h2>
          <p className="text-sm text-gray-600 mt-1">Locate and manage your stores</p>
          <div className="mt-4 text-sm">
            <div className="text-gray-500">Active Stores</div>
            <div className="font-bold text-lg text-[#2679c8]">35</div>
          </div>
        </Link>
        {/* Control Panel */}
        <Link
          to="/control-panel"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition text-left flex flex-col"
        >
          <div className="text-3xl mb-2">☑️</div>
          <h2 className="font-semibold text-xl text-[#002147]">Control Panel</h2>
          <p className="text-sm text-gray-600 mt-1">Adjust your online menu and settings</p>
          <div className="mt-4 flex gap-6 text-sm">
            {/* Locations: A/B/C/D distribution */}
            <div>
              <div className="text-gray-500 mb-1">Visibility Score</div>
              <div className="flex gap-2">
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
                    {grade}: {count}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
        {/* Settings */}
        <Link
          to="/settings"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition text-left flex flex-col"
        >
          <div className="text-3xl mb-2">⚙️</div>
          <h2 className="font-semibold text-xl text-[#002147]">Settings</h2>
          <p className="text-sm text-gray-600 mt-1">Manage your account and preferences</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
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
        className="bg-[#B3282D] text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-[#8c1c24] transition"
      >
        Get Started
      </Link>
    </div>
  </>
);

export default Home;
