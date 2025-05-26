import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// ...existing imports...
import StoreSearch from '../../pages/store-search/StoreSearch';
import Settings from '../../pages/settings/Settings';

const SidebarLayout = () => {
  const [openSections, setOpenSections] = useState({
    analytics: true,
    control: true,
    storeSearch: false,
    settings: false,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-2 overflow-y-auto">
        <nav className="space-y-2">

          {/* Analytics Section (now at top) */}
          <button
            onClick={() => toggleSection('analytics')}
            className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded"
          >
            {`Analytics${openSections.analytics ? ' ▼' : ' ▶'}`}
          </button>
          {openSections.analytics && (
            <div className="pl-4 space-y-1">
              <Link to="/analytics/sales" className="block py-1 px-2 hover:bg-gray-700 rounded">Sales Overview</Link>
              <Link to="/analytics/operations" className="block py-1 px-2 hover:bg-gray-700 rounded">Operations Performance</Link>
              <Link to="/analytics/ratings" className="block py-1 px-2 hover:bg-gray-700 rounded">Ratings & Feedback</Link>
              <Link to="/analytics/promotions" className="block py-1 px-2 hover:bg-gray-700 rounded">Promotions</Link>
              <Link to="/analytics/sponsored" className="block py-1 px-2 hover:bg-gray-700 rounded">Sponsored Listing</Link>
              <Link to="/analytics/recovery" className="block py-1 px-2 hover:bg-gray-700 rounded">Revenue Recovery</Link>
            </div>
          )}

          {/* Control Panel Section */}
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

          {/* Store Search Section */}
          <button
            onClick={() => toggleSection('storeSearch')}
            className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded"
          >
            {`Store Search${openSections.storeSearch ? ' ▼' : ' ▶'}`}
          </button>
          {openSections.storeSearch && (
            <div className="pl-4 space-y-1">
              <Link to="/store-search" className="block py-1 px-2 hover:bg-gray-700 rounded">Search</Link>
              {/* Add more store search-related links here if needed */}
            </div>
          )}

          {/* Settings Section */}
          <button
            onClick={() => toggleSection('settings')}
            className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded"
          >
            {`Settings${openSections.settings ? ' ▼' : ' ▶'}`}
          </button>
          {openSections.settings && (
            <div className="pl-4 space-y-1">
              <Link to="/settings" className="block py-1 px-2 hover:bg-gray-700 rounded">Settings</Link>
              {/* Add more settings-related links here if needed */}
            </div>
          )}

        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <Routes>
          {/* Control Panel */}
          <Route path="/control-panel" element={<ControlPanel />} />
          <Route path="/control-panel/marketing" element={<MarketingPanel />} />
          <Route path="/control-panel/operations" element={<OperationsPanel />} />
          <Route path="/control-panel/locations" element={<LocationsPanel />} />
          <Route path="/control-panel/menu" element={<MenuPanel />} />

          {/* Analytics */}
          <Route path="/analytics/sales" element={<SalesOverview />} />
          <Route path="/analytics/operations" element={<OperationsPerformance />} />
          <Route path="/analytics/ratings" element={<RatingsFeedback />} />
          <Route path="/analytics/promotions" element={<PromotionsReport />} />
          <Route path="/analytics/sponsored" element={<SponsoredListingReport />} />
          <Route path="/analytics/recovery" element={<RevenueRecovery />} />

          {/* Store Search */}
          <Route path="/store-search" element={<StoreSearch />} />

          {/* Settings */}
          <Route path="/settings" element={<Settings />} />

          {/* Recommendations (keep these at the end if still needed) */}
          <Route path="/recommendations/marketing" element={<RecommendationsMarketing />} />
          <Route path="/recommendations/operations" element={<RecommendationsOperations />} />
          <Route path="/recommendations/menu" element={<RecommendationsMenu />} />
          <Route path="/recommendations/locations" element={<RecommendationsLocations />} />
        </Routes>
      </main>
    </div>
  );
};

export default SidebarLayout;
