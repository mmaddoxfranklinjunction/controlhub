import React from 'react';
import { Link } from 'react-router-dom';
import HostDropdown from '../components/shared/HostDropdown';
import hostStoreList from '../data/hostStoreList';

const visibilityScores = { A: 22, B: 14, C: 8, D: 2 };
const storeRatings = { '2.5-3.0': 1, '3.0-3.5': 3, '3.5-4.0': 10 };
const training = { assigned: 18, complete: 13 };
const totalSales = "$244,286";
const recentErrorRate = "5.5%";
const userCount = 8;

const Home = () => (
  <div className="flex flex-col min-h-screen bg-gray-100 px-4 relative font-[Futura,Arial,sans-serif]">
    {/* Top nav buttons */}
    <div className="w-full flex justify-end items-center py-4 max-w-7xl mx-auto">
      <Link
        to="/account-setup"
        className="inline-block bg-[#B3282D] text-white px-4 py-1.5 rounded-full font-normal text-sm border border-[#B3282D] transition-all mr-3 tracking-wide font-[Futura,Arial,sans-serif] shadow-none hover:bg-[#8c1c24]"
        style={{ borderWidth: 1 }}
      >
        Get Started
      </Link>
      <Link
        to="/login"
        className="inline-block bg-white text-[#B3282D] border border-[#B3282D] px-4 py-1.5 rounded-full font-normal text-sm transition-all tracking-wide font-[Futura,Arial,sans-serif] shadow-none hover:bg-[#B3282D] hover:text-white"
        style={{ borderWidth: 1 }}
      >
        Login
      </Link>
    </div>

    {/* Logo and Title */}
    <div className="flex flex-col items-center justify-center text-center mb-3">
      <img src="/homelogo.png" alt="Franklin Junction Logo" className="w-20 mb-3" />
      <img src={`${process.env.PUBLIC_URL}/control_hub_logo.png`} alt="Control Hub Logo" className="w-100 mb-3" />
      <h1 className="text-3xl font-normal text-[#002147] mb-1 font-[Futura,Arial,sans-serif]">The GM for your Digital Restaurant</h1>
    </div>

    {/* More space after tagline, before dropdown */}
    <div className="max-w-xl w-full mx-auto mb-8 mt-0">
      <HostDropdown hosts={hostStoreList} />
    </div>

    {/* Grid of Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mx-auto mb-12 font-[Futura,Arial,sans-serif]">

      {/* Analytics */}
      <Link to="/analytics/sales" className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition flex flex-col items-center justify-center text-center">
         <img src="/analytics.png" alt="Franklin Junction Logo" className="w-30 mb-4"  />
   
        <h2 className="font-semibold text-xl text-[#002147] mb-1 font-[Futura,Arial,sans-serif]">Analytics</h2>
        <p className="text-sm text-gray-600 mb-2">View your sales and operational data</p>
        <div className="flex gap-8 justify-center mt-2 text-sm w-full">
          <div>
            <div className="text-gray-500">Total Sales</div>
            <div className="font-bold text-[#2679c8]">{totalSales}</div>
          </div>
          <div>
            <div className="text-gray-500">Error Rate</div>
            <div className="font-bold text-[#b3282d]">{recentErrorRate}</div>
          </div>
        </div>
      </Link>

      {/* Alerts */}
      <Link to="/alerts" className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition flex flex-col items-center justify-center text-center">
         <img src="/alerts.png" alt="Franklin Junction Logo" className="w-30 mb-4"  />
        
        <h2 className="font-semibold text-xl text-[#002147] mb-1 font-[Futura,Arial,sans-serif]">Alerts</h2>
        <p className="text-sm text-gray-600 mb-2">Review flagged issues across your stores</p>
        <div className="text-sm text-[#b3282d] font-bold mt-2">View all alerts</div>
      </Link>

      {/* Control Panel */}
      <Link to="/control-panel" className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition flex flex-col items-center justify-center text-center">
         <img src="/controls.png" alt="Franklin Junction Logo" className="w-30 mb-4"  />
        
        <h2 className="font-semibold text-xl text-[#002147] mb-1 font-[Futura,Arial,sans-serif]">Control Panel</h2>
        <p className="text-sm text-gray-600 mb-2">Adjust your online menu and settings</p>
        <div className="mt-2 flex gap-4 justify-center text-sm">
          <div className="text-gray-500 mb-1">Visibility Score</div>
          <div className="flex gap-2 justify-center">
            {Object.entries(visibilityScores).map(([grade, count]) => (
              <span key={grade} className={`inline-block w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                grade === 'A' ? 'bg-green-100 text-green-800' :
                grade === 'B' ? 'bg-yellow-100 text-yellow-700' :
                grade === 'C' ? 'bg-orange-100 text-orange-700' :
                'bg-red-100 text-red-700'
              }`}>{grade}:{count}</span>
            ))}
          </div>
        </div>
      </Link>

      {/* AI WorkFlows */}
      <Link to="/autoflows/workflow" className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition flex flex-col items-center justify-center text-center">
        <img src="/settings.png" alt="AI Workflows Icon" className="w-30 mb-4"  />
        <h2 className="font-semibold text-xl text-[#002147] mb-1 font-[Futura,Arial,sans-serif]">AI Workflows</h2>
        <p className="text-sm text-gray-600 mb-2">Manage your Autonomous Flows and Preferences</p>
        <div className="flex flex-col gap-1 items-center mt-2 text-sm">
          <div><span className="text-gray-500">Connected Flows</span><span className="font-bold text-[#2679c8] ml-2">{userCount}</span></div>
          <div className="text-gray-500">Autonomous Triggers</div>
          <div>
            {Object.entries(storeRatings).map(([band, num]) => (
              <span key={band} className="mr-2">
                <span className="font-bold text-[#2679c8]">{num}</span>
                <span className="text-xs text-gray-400 ml-1">{band}</span>
              </span>
            ))}
          </div>
          <div>
            <span className="text-gray-500">Trigger Runs</span>
            <span className="ml-2 text-[#b3282d] font-bold">{training.complete}</span>
            <span className="text-xs text-gray-400 mx-1">/</span>
            <span className="font-bold text-[#2679c8]">{training.assigned}</span>
            <span className="text-xs text-gray-400 ml-1">complete</span>
          </div>
        </div>
      </Link>

    </div>
  </div>
);

export default Home;
