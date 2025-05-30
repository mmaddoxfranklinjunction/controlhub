// src/components/shared/SidebarLayout.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarLayout = () => {
  const [openSections, setOpenSections] = useState({
    analytics: true,
    control: true,
    storeSearch: false,
    settings: false,
  });

  const location = useLocation();

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="w-64 bg-gray-800 text-white p-4 space-y-2 overflow-y-auto h-full">
      <nav className="space-y-2">
        {/* Analytics */}
        <button
          onClick={() => toggleSection('analytics')}
          className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded"
        >
          {`Analytics${openSections.analytics ? ' ▼' : ' ▶'}`}
        </button>
        {openSections.analytics && (
          <div className="pl-4 space-y-1">
            <Link to="/analytics/sales" className={`block py-1 px-2 hover:bg-gray-700 rounded${location.pathname === "/analytics/sales" ? " bg-gray-700" : ""}`}>Sales Overview</Link>
            <Link to="/analytics/operations" className="block py-1 px-2 hover:bg-gray-700 rounded">Operations Performance</Link>
            <Link to="/analytics/ratings" className="block py-1 px-2 hover:bg-gray-700 rounded">Ratings & Feedback</Link>
            <Link to="/analytics/promotions" className="block py-1 px-2 hover:bg-gray-700 rounded">Promotions</Link>
            <Link to="/analytics/sponsored" className="block py-1 px-2 hover:bg-gray-700 rounded">Sponsored Listing</Link>
            <Link to="/analytics/recovery" className="block py-1 px-2 hover:bg-gray-700 rounded">Revenue Recovery</Link>
          </div>
        )}

        {/* Control Panel */}
        <button
          onClick={() => toggleSection('control')}
          className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded"
        >
          {`Control Panel${openSections.control ? ' ▼' : ' ▶'}`}
        </button>
        {openSections.control && (
          <div className="pl-4 space-y-1">
            <Link to="/control-panel" className="block py-1 px-2 hover:bg-gray-700 rounded">Overview</Link>
            <Link to="/control-panel/marketing" className="block py-1 px-2 hover:bg-gray-700 rounded">Marketing</Link>
            <Link to="/control-panel/operations" className="block py-1 px-2 hover:bg-gray-700 rounded">Operations</Link>
            <Link to="/control-panel/locations" className="block py-1 px-2 hover:bg-gray-700 rounded">Locations</Link>
            <Link to="/control-panel/menu" className="block py-1 px-2 hover:bg-gray-700 rounded">Menu</Link>
          </div>
        )}

        {/* Store Search */}
        <button
          onClick={() => toggleSection('storeSearch')}
          className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded"
        >
          {`Store Search${openSections.storeSearch ? ' ▼' : ' ▶'}`}
        </button>
        {openSections.storeSearch && (
          <div className="pl-4 space-y-1">
            <Link to="/store-search" className="block py-1 px-2 hover:bg-gray-700 rounded">Search</Link>
          </div>
        )}

        {/* Settings */}
        <button
          onClick={() => toggleSection('settings')}
          className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded"
        >
          {`Settings${openSections.settings ? ' ▼' : ' ▶'}`}
        </button>
        {openSections.settings && (
          <div className="pl-4 space-y-1">
            <Link to="/settings" className="block py-1 px-2 hover:bg-gray-700 rounded">Settings</Link>
          </div>
        )}
      </nav>
    </aside>
  );
};

export default SidebarLayout;
