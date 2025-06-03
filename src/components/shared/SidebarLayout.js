// Updated SidebarLayout.js with icon spacing, typography, and layout refinements
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HostDropdown from './HostDropdown';

import ControlPanel from '../../pages/control-panel/ControlPanel';
import MarketingPanel from '../../pages/control-panel/MarketingPanel';
import OperationsPanel from '../../pages/control-panel/OperationsPanel';
import LocationsPanel from '../../pages/control-panel/LocationsPanel';
import MenuPanel from '../../pages/control-panel/MenuPanel';

import SalesOverview from '../../pages/analytics/SalesOverview';
import RevenueRecovery from '../../pages/analytics/RevenueRecovery';
import PromotionsReport from '../../pages/analytics/PromotionsReport';
import RatingsFeedback from '../../pages/analytics/RatingsFeedback';
import SponsoredListingReport from '../../pages/analytics/SponsoredListingReport';
import OperationsPerformance from '../../pages/analytics/OperationsPerformance';
import Reviews from '../../pages/analytics/Reviews';

import Alerts from '../../pages/Alerts/alerts';

import RecommendationsMarketing from '../../pages/recommendations/RecommendationsMarketing';
import RecommendationsOperations from '../../pages/recommendations/RecommendationsOperations';
import RecommendationsLocations from '../../pages/recommendations/RecommendationsLocations';
import RecommendationsMenu from '../../pages/recommendations/RecommendationsMenu';

import StoreSearch from '../../pages/store-search/StoreSearch';
import Settings from '../../pages/settings/Settings';

const SidebarLayout = ({ isSidebarOpen }) => {
  const [openSections, setOpenSections] = useState({
    control: true,
    alerts: true,
    analytics: true,
    storeSearch: false,
    settings: false,
  });

  const toggleSection = (section) =>
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));

  return (
    <div className="flex h-screen font-[Futura,Arial,sans-serif]">
      <aside className="w-48 bg-[#253847] text-white py-4 px-3 space-y-1 flex flex-col items-center">
        <div className="w-full px-1.5 mb-4">
          <HostDropdown />
        </div>

        <nav className="flex-1 w-full space-y-4 text-sm">
          {/* Control Panel */}
          <div className="text-center">
            <img src="/controls_icon.png" alt="Control Icon" className="h-6 mx-auto mb-1" />
            <button onClick={() => toggleSection('control')} className="w-full text-white font-semibold hover:bg-gray-700 rounded text-base">
              Control Panel <span className="text-xs">{openSections.control ? '▼' : '▶'}</span>
            </button>
            {openSections.control && (
              <div className="mt-1 pl-4 space-y-0.5 text-left text-sm">
                <Link to="/control-panel" className="block py-0.5 hover:bg-gray-700 rounded">Overview</Link>
                <Link to="/control-panel/marketing" className="block py-0.5 hover:bg-gray-700 rounded">Marketing</Link>
                <Link to="/control-panel/operations" className="block py-0.5 hover:bg-gray-700 rounded">Operations</Link>
                <Link to="/control-panel/locations" className="block py-0.5 hover:bg-gray-700 rounded">Locations</Link>
                <Link to="/control-panel/menu" className="block py-0.5 hover:bg-gray-700 rounded">Menu</Link>
              </div>
            )}
          </div>

          {/* Alerts */}
          <div className="text-center">
            <img src="/alerts_icon.png" alt="Alerts Icon" className="h-6 mx-auto mb-1" />
            <button onClick={() => toggleSection('alerts')} className="w-full text-white font-semibold hover:bg-gray-700 rounded text-base">
              Alerts <span className="text-xs">{openSections.alerts ? '▼' : '▶'}</span>
            </button>
            {openSections.alerts && (
              <div className="mt-1 pl-4 space-y-0.5 text-left text-sm">
                <Link to="/alerts" className="block py-0.5 hover:bg-gray-700 rounded">Alerts Inbox</Link>
              </div>
            )}
          </div>

          {/* Analytics */}
          <div className="text-center">
            <img src="/analytics_icon.png" alt="Analytics Icon" className="h-6 mx-auto mb-1" />
            <button onClick={() => toggleSection('analytics')} className="w-full text-white font-semibold hover:bg-gray-700 rounded text-base">
              Analytics <span className="text-xs">{openSections.analytics ? '▼' : '▶'}</span>
            </button>
            {openSections.analytics && (
              <div className="mt-1 pl-4 space-y-0.5 text-left text-sm">
                <Link to="/analytics/sales" className="block py-0.5 hover:bg-gray-700 rounded">Sales Overview</Link>
                <Link to="/analytics/operations" className="block py-0.5 hover:bg-gray-700 rounded">Operations Performance</Link>
                <Link to="/analytics/ratings" className="block py-0.5 hover:bg-gray-700 rounded">Ratings & Feedback</Link>
                <Link to="/analytics/reviews" className="block py-0.5 hover:bg-gray-700 rounded">Reviews</Link>
                <Link to="/analytics/promotions" className="block py-0.5 hover:bg-gray-700 rounded">Promotions</Link>
                <Link to="/analytics/sponsored" className="block py-0.5 hover:bg-gray-700 rounded">Sponsored Listing</Link>
                <Link to="/analytics/recovery" className="block py-0.5 hover:bg-gray-700 rounded">Revenue Recovery</Link>
              </div>
            )}
          </div>

          {/* Additional sections would follow the same pattern */}
        </nav>
      </aside>

      <Routes>
        <Route path="/control-panel" element={<ControlPanel />} />
        <Route path="/control-panel/marketing" element={<MarketingPanel />} />
        <Route path="/control-panel/operations" element={<OperationsPanel />} />
        <Route path="/control-panel/locations" element={<LocationsPanel />} />
        <Route path="/control-panel/menu" element={<MenuPanel />} />

        <Route path="/alerts" element={<Alerts />} />

        <Route path="/analytics/sales" element={<SalesOverview />} />
        <Route path="/analytics/operations" element={<OperationsPerformance />} />
        <Route path="/analytics/ratings" element={<RatingsFeedback />} />
        <Route path="/analytics/reviews" element={<Reviews />} />
        <Route path="/analytics/promotions" element={<PromotionsReport />} />
        <Route path="/analytics/sponsored" element={<SponsoredListingReport />} />
        <Route path="/analytics/recovery" element={<RevenueRecovery />} />

        <Route path="/store-search" element={<StoreSearch />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/recommendations/marketing" element={<RecommendationsMarketing />} />
        <Route path="/recommendations/operations" element={<RecommendationsOperations />} />
        <Route path="/recommendations/menu" element={<RecommendationsMenu />} />
        <Route path="/recommendations/locations" element={<RecommendationsLocations />} />
      </Routes>
    </div>
  );
};

export default SidebarLayout;
