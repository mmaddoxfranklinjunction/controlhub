import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ControlPanel from './ControlPanel';
import RecommendationsLocations from './RecommendationsLocations';
import RecommendationsMarketing from './pages/RecommendationsMarketing';
import RecommendationsOperations from './pages/RecommendationsOperations';
import RecommendationsMenu from './pages/RecommendationsMenu';
import MarketingPanel from './pages/MarketingPanel';
import OperationsPanel from './pages/OperationsPanel';
import LocationsPanel from './pages/LocationsPanel';
import MenuPanel from './pages/MenuPanel';
import SalesOverview from './pages/SalesOverview';
import OperationsPerformance from './pages/OperationsPerformance';
import RatingsFeedback from './pages/RatingsFeedback';
import PromotionsReport from './pages/PromotionsReport';
import SponsoredListingReport from './pages/SponsoredListingReport';
import RevenueRecovery from './pages/RevenueRecovery';

const SidebarLayout = () => {
  const [showControlPanel, setShowControlPanel] = useState(true);
  const [showAnalytics, setShowAnalytics] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-2 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Control Hub</h2>
        <nav className="space-y-2">
          <div>
            <button
              onClick={() => setShowControlPanel(!showControlPanel)}
              className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded"
            >
              Control Panel
            </button>
            {showControlPanel && (
              <div className="pl-4 space-y-1">
                <Link to="/control-panel" className="block py-1 hover:bg-gray-700 rounded px-2">Overview</Link>
                <Link to="/control-panel/marketing" className="block py-1 hover:bg-gray-700 rounded px-2">Marketing</Link>
                <Link to="/control-panel/operations" className="block py-1 hover:bg-gray-700 rounded px-2">Operations</Link>
                <Link to="/control-panel/locations" className="block py-1 hover:bg-gray-700 rounded px-2">Locations</Link>
                <Link to="/control-panel/menu" className="block py-1 hover:bg-gray-700 rounded px-2">Menu</Link>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => setShowAnalytics(!showAnalytics)}
              className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded"
            >
              Analytics
            </button>
            {showAnalytics && (
              <div className="pl-4 space-y-1">
                <Link to="/analytics/sales" className="block py-1 hover:bg-gray-700 rounded px-2">Sales Overview</Link>
                <Link to="/analytics/operations" className="block py-1 hover:bg-gray-700 rounded px-2">Operations Performance</Link>
                <Link to="/analytics/ratings" className="block py-1 hover:bg-gray-700 rounded px-2">Ratings & Feedback</Link>
                <Link to="/analytics/promotions" className="block py-1 hover:bg-gray-700 rounded px-2">Promotions</Link>
                <Link to="/analytics/sponsored" className="block py-1 hover:bg-gray-700 rounded px-2">Sponsored Listing</Link>
                <Link to="/analytics/recovery" className="block py-1 hover:bg-gray-700 rounded px-2">Revenue Recovery</Link>
              </div>
            )}
          </div>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route path="/control-panel" element={<ControlPanel />} />
          <Route path="/control-panel/marketing" element={<MarketingPanel />} />
          <Route path="/control-panel/operations" element={<OperationsPanel />} />
          <Route path="/control-panel/locations" element={<LocationsPanel />} />
          <Route path="/control-panel/menu" element={<MenuPanel />} />

          <Route path="/analytics/sales" element={<SalesOverview />} />
          <Route path="/analytics/operations" element={<OperationsPerformance />} />
          <Route path="/analytics/ratings" element={<RatingsFeedback />} />
          <Route path="/analytics/promotions" element={<PromotionsReport />} />
          <Route path="/analytics/sponsored" element={<SponsoredListingReport />} />
          <Route path="/analytics/recovery" element={<RevenueRecovery />} />

          <Route path="/recommendations/marketing" element={<RecommendationsMarketing />} />
          <Route path="/recommendations/operations" element={<RecommendationsOperations />} />
          <Route path="/recommendations/locations" element={<RecommendationsLocations />} />
          <Route path="/recommendations/menu" element={<RecommendationsMenu />} />

          <Route path="*" element={<div className="p-6"><h1 className="text-2xl font-bold">Welcome to Control Hub</h1></div>} />
        </Routes>
      </main>
    </div>
  );
};

export default SidebarLayout;
