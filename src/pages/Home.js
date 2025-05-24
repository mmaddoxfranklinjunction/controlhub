import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fefaf7] text-center px-4">
      {/* Franklin Junction Logo */}
      <img
        src="/homelogo.png"
        alt="Franklin Junction Logo"
        className="w-36 mb-6"
      />

      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#002147] mb-2 font-sans">
        Control Hub
      </h1>
      <p className="text-[#253847] text-lg md:text-xl mb-12 font-light">
        Control your digital restaurant<br />
        like you do your physical
      </p>

      {/* Grid Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full mb-10">
        <Link to="/analytics/sales" className="bg-white p-6 rounded-lg shadow hover:shadow-md border text-[#002147] transition">
          <div className="text-2xl mb-2">📈</div>
          <h2 className="font-semibold text-lg">Analytics</h2>
          <p className="text-sm text-[#253847]">View your sales and operational data</p>
        </Link>
        <Link to="/store-search" className="bg-white p-6 rounded-lg shadow hover:shadow-md border text-[#002147] transition">
          <div className="text-2xl mb-2">🔍</div>
          <h2 className="font-semibold text-lg">Store Search</h2>
          <p className="text-sm text-[#253847]">Locate and manage your stores</p>
        </Link>
        <Link to="/control-panel" className="bg-white p-6 rounded-lg shadow hover:shadow-md border text-[#002147] transition">
          <div className="text-2xl mb-2">☑️</div>
          <h2 className="font-semibold text-lg">Control Panel</h2>
          <p className="text-sm text-[#253847]">Adjust your online menu and settings</p>
        </Link>
        <Link to="/settings" className="bg-white p-6 rounded-lg shadow hover:shadow-md border text-[#002147] transition">
          <div className="text-2xl mb-2">⚙️</div>
          <h2 className="font-semibold text-lg">Settings</h2>
          <p className="text-sm text-[#253847]">Manage your account and preferences</p>
        </Link>
      </div>

      {/* Get Started Button */}
      <Link
        to="/control-panel"
        className="bg-[#b3282d] text-white px-8 py-3 text-lg font-semibold rounded hover:bg-[#99242b] transition"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;
