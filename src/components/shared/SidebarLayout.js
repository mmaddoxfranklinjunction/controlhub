// SidebarLayout.js – icons left of section titles, left-justified
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
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
    settings: true,
  });
  const location = useLocation();

  const toggleSection = (section) =>
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));

  const linkClass = (path) =>
    `block py-0.5 px-2 rounded-xl ${location.pathname === path ? 'bg-gray-600' : 'hover:bg-gray-700'} text-left`;

  return (
    <div className="flex h-screen font-[Futura,Arial,sans-serif] font-light">
      <aside
        className={`bg-gradient-to-b from-[#253847] via-[#2d4359] to-[#3a536e] text-white py-2 px-1 space-y-6 flex flex-col items-center transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'w-48' : 'w-0 overflow-hidden'}`}
      >
        <div className="w-full px-1 mb-1">
          <HostDropdown />
        </div>
        <hr className="border-t border-[#e4e7ee] mx-auto w-full" />

        <nav className="flex-1 w-full space-y-6 text-sm">
          {/* Control Panel */}
          <div>
            <button
              onClick={() => toggleSection('control')}
              className="w-full flex items-center gap-2 text-white font-medium hover:bg-gray-700 rounded text-sm text-left px-2"
            >
              <img src="/controls_icon.png" alt="Control Icon" className="h-5 w-5 mr-1" />
              <span>Control Panel</span>
              <span className="text-[10px] ml-auto">{openSections.control ? '▼' : '▶'}</span>
            </button>
            {openSections.control && (
              <div className="mt-1 space-y-0.5 pl-7">
                <Link to="/control-panel" className={linkClass('/control-panel')}>Overview</Link>
                <Link to="/control-panel/marketing" className={linkClass('/control-panel/marketing')}>Marketing</Link>
                <Link to="/control-panel/operations" className={linkClass('/control-panel/operations')}>Operations</Link>
                <Link to="/control-panel/locations" className={linkClass('/control-panel/locations')}>Locations</Link>
                <Link to="/control-panel/menu" className={linkClass('/control-panel/menu')}>Menu</Link>
              </div>
            )}
          </div>

          {/* Alerts */}
          <div>
            <button
              onClick={() => toggleSection('alerts')}
              className="w-full flex items-center gap-2 text-white font-medium hover:bg-gray-700 rounded text-sm text-left px-2"
            >
              <img src="/alerts_icon.png" alt="Alerts Icon" className="h-5 w-5 mr-1" />
              <span>Alerts</span>
              <span className="text-[10px] ml-auto">{openSections.alerts ? '▼' : '▶'}</span>
            </button>
            {openSections.alerts && (
              <div className="mt-1 space-y-0.5 pl-7">
                <Link to="/alerts" className={linkClass('/alerts')}>Alerts Inbox</Link>
              </div>
            )}
          </div>

          {/* Analytics */}
          <div>
            <button
              onClick={() => toggleSection('analytics')}
              className="w-full flex items-center gap-2 text-white font-medium hover:bg-gray-700 rounded text-sm text-left px-2"
            >
              <img src="/analytics_icon.png" alt="Analytics Icon" className="h-5 w-5 mr-1" />
              <span>Analytics</span>
              <span className="text-[10px] ml-auto">{openSections.analytics ? '▼' : '▶'}</span>
            </button>
            {openSections.analytics && (
              <div className="mt-1 space-y-0.5 pl-7">
                <Link to="/analytics/sales" className={linkClass('/analytics/sales')}>Sales Overview</Link>
                <Link to="/analytics/operations" className={linkClass('/analytics/operations')}>Operations</Link>
                <Link to="/analytics/ratings" className={linkClass('/analytics/ratings')}>Ratings & Feedback</Link>
                <Link to="/analytics/reviews" className={linkClass('/analytics/reviews')}>Reviews</Link>
                <Link to="/analytics/promotions" className={linkClass('/analytics/promotions')}>Promotions</Link>
                <Link to="/analytics/sponsored" className={linkClass('/analytics/sponsored')}>Sponsored Listing</Link>
                <Link to="/analytics/recovery" className={linkClass('/analytics/recovery')}>Revenue Recovery</Link>
              </div>
            )}
          </div>

          {/* Settings */}
          <div>
            <button
              onClick={() => toggleSection('settings')}
              className="w-full flex items-center gap-2 text-white font-medium hover:bg-gray-700 rounded text-sm text-left px-2"
            >
              <img src="/settings_icon.png" alt="Settings Icon" className="h-5 w-5 mr-1" />
              <span>Settings</span>
              <span className="text-[10px] ml-auto">{openSections.settings ? '▼' : '▶'}</span>
            </button>
            {openSections.settings && (
              <div className="mt-1 space-y-0.5 pl-7">
                <Link to="/settings" className={linkClass('/settings')}>Settings</Link>
              </div>
            )}
          </div>
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
