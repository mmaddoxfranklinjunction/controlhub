import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ControlPanel from '../ControlPanel';
import MarketingPanel from './MarketingPanel';
import OperationsPanel from './OperationsPanel';
import LocationsPanel from './LocationsPanel';
import MenuPanel from './MenuPanel';
import SalesOverview from './SalesOverview';
import OperationsPerformance from './OperationsPerformance';
import RatingsFeedback from './RatingsFeedback';
import PromotionsReport from './PromotionsReport';
import SponsoredListingReport from './SponsoredListingReport';
import RevenueRecovery from './RevenueRecovery';
import RecommendationsLocations from './RecommendationsLocations';

const SidebarLayout = () => {
  const [openSection, setOpenSection] = useState("control");

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-2 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Control Hub</h2>
        <nav className="space-y-2">
          <button onClick={() => setOpenSection(openSection === 'control' ? null : 'control')} className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded">Control Panel</button>
          {openSection === "control" && (
            <div className="pl-4 space-y-1">
              <Link to="/control-panel" className="block py-1 px-2 hover:bg-gray-700 rounded">Overview</Link>
              <Link to="/control-panel/marketing" className="block py-1 px-2 hover:bg-gray-700 rounded">Marketing</Link>
              <Link to="/control-panel/operations" className="block py-1 px-2 hover:bg-gray-700 rounded">Operations</Link>
              <Link to="/control-panel/locations" className="block py-1 px-2 hover:bg-gray-700 rounded">Locations</Link>
              <Link to="/control-panel/menu" className="block py-1 px-2 hover:bg-gray-700 rounded">Menu</Link>
            </div>
          )}
          <button onClick={() => setOpenSection(openSection === 'analytics' ? null : 'analytics')} className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded">Analytics</button>
          {openSection === "analytics" && (
            <div className="pl-4 space-y-1">
              <Link to="/analytics/sales" className="block py-1 px-2 hover:bg-gray-700 rounded">Sales Overview</Link>
              <Link to="/analytics/operations" className="block py-1 px-2 hover:bg-gray-700 rounded">Operations Performance</Link>
              <Link to="/analytics/ratings" className="block py-1 px-2 hover:bg-gray-700 rounded">Ratings & Feedback</Link>
              <Link to="/analytics/promotions" className="block py-1 px-2 hover:bg-gray-700 rounded">Promotions</Link>
              <Link to="/analytics/sponsored" className="block py-1 px-2 hover:bg-gray-700 rounded">Sponsored Listing</Link>
              <Link to="/analytics/recovery" className="block py-1 px-2 hover:bg-gray-700 rounded">Revenue Recovery</Link>
            </div>
          )}
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
          <Route path="/recommendations/locations" element={<RecommendationsLocations />} />
        </Routes>
      </main>
    </div>
  );
};

export default SidebarLayout;