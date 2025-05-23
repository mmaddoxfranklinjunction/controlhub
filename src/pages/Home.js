import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fefaf7] text-center px-4">
      <h1 className="text-4xl font-bold text-[#002147] mb-2">Control Hub</h1>
      <p className="text-gray-700 text-lg mb-10">
        Control your digital restaurant<br />
        like you do your physical
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mb-10">
        <Link to="/analytics/sales" className="bg-white p-6 rounded-lg shadow hover:shadow-md border text-[#002147]">
          <div className="text-2xl mb-2">📈</div>
          <h2 className="font-semibold text-lg">Analytics</h2>
          <p className="text-sm">View your sales and operational data</p>
        </Link>
        <Link to="/store-search" className="bg-white p-6 rounded-lg shadow hover:shadow-md border text-[#002147]">
          <div className="text-2xl mb-2">🔍</div>
          <h2 className="font-semibold text-lg">Store Search</h2>
          <p className="text-sm">Locate and manage your stores</p>
        </Link>
        <Link to="/control-panel" className="bg-white p-6 rounded-lg shadow hover:shadow-md border text-[#002147]">
          <div className="text-2xl mb-2">☑️</div>
          <h2 className="font-semibold text-lg">Control Panel</h2>
          <p className="text-sm">Adjust your online menu and settings</p>
        </Link>
        <Link to="/settings" className="bg-white p-6 rounded-lg shadow hover:shadow-md border text-[#002147]">
          <div className="text-2xl mb-2">⚙️</div>
          <h2 className="font-semibold text-lg">Settings</h2>
          <p className="text-sm">Manage your account and preferences</p>
        </Link>
      </div>

      <Link
        to="/control-panel"
        className="bg-[#B22234] text-white px-8 py-3 text-lg font-semibold rounded hover:bg-red-700 transition"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;