// Modified SidebarLayout.js
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
    <div className="flex h-screen">
      <aside className="w-48 bg-[#253847] text-white p-2 space-y-1 flex flex-col items-center">
        {/* Logo or Title Image */}
        <img
          src="/assets/sidebar-logo.png"
          alt="Panel Title"
          className="h-10 mb-4 mt-2"
        />

        <HostDropdown />

        <nav className="flex-1 w-full space-y-1">
          {/* Reuse existing sections below */}
          {/* Only code for section titles shown here; rest unchanged */}
          <button onClick={() => toggleSection('control')} className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded text-sm">
            Control Panel {openSections.control ? '▼' : '▶'}
          </button>
          {openSections.control && (
            <div className="pl-4 text-xs space-y-1">
              <Link to="/control-panel" className="block py-1 hover:bg-gray-700 rounded">Overview</Link>
              <Link to="/control-panel/marketing" className="block py-1 hover:bg-gray-700 rounded">Marketing</Link>
              <Link to="/control-panel/operations" className="block py-1 hover:bg-gray-700 rounded">Operations</Link>
              <Link to="/control-panel/locations" className="block py-1 hover:bg-gray-700 rounded">Locations</Link>
              <Link to="/control-panel/menu" className="block py-1 hover:bg-gray-700 rounded">Menu</Link>
            </div>
          )}
          {/* Repeat similar refactoring for Alerts, Analytics, etc. */}
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
