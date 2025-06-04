// Updated SidebarLayout.js with settings icon, persistent active links, spacing tweaks
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
      <aside className="w-48 bg-[#253847] text-white py-2 px-1 space-y-6 flex flex-col items-center">
        <div className="w-full px-1 mb-1">
  
          <HostDropdown />
        </div>

        <nav className="flex-1 w-full space-y-6 text-sm">
          {/* Control Panel */}
          <div className="text-center">
            <img src="/controls_icon.png" alt="Control Icon" className="h-6 mx-auto mb-1" />
            <button onClick={() => toggleSection('control')} className="w-full text-white font-medium hover:bg-gray-700 rounded text-sm">
              Control Panel <span className="text-[10px]">{openSections.control ? '▼' : '▶'}</span>
            </button>
            {openSections.control && (
              <div className="mt-1 space-y-0.5">
                <Link to="/control-panel" className={linkClass('/control-panel')}>Overview</Link>
                <Link to="/control-panel/marketing" className={linkClass('/control-panel/marketing')}>Marketing</Link>
                <Link to="/control-panel/operations" className={linkClass('/control-panel/operations')}>Operations</Link>
                <Link to="/control-panel/locations" className={linkClass('/control-panel/locations')}>Locations</Link>
                <Link to="/control-panel/menu" className={linkClass('/control-panel/menu')}>Menu</Link>
              </div>
            )}
          </div>

          {/* Alerts */}
          <div className="text-center">
            <img src="/alerts_icon.png" alt="Alerts Icon" className="h-6 mx-auto mb-1" />
            <button onClick={() => toggleSection('alerts')} className="w-full text-white font-medium hover:bg-gray-700 rounded text-sm">
              Alerts <span className="text-[10px]">{openSections.alerts ? '▼' : '▶'}</span>
            </button>
            {openSections.alerts && (
              <div className="mt-1 space-y-0.5">
                <Link to="/alerts" className={linkClass('/alerts')}>Alerts Inbox</Link>
              </div>
            )}
          </div>

          {/* Analytics */}
          <div className="text-center">
            <img src="/analytics_icon.png" alt="Analytics Icon" className="h-6 mx-auto mb-1" />
            <button onClick={() => toggleSection('analytics')} className="w-full text-white font-medium hover:bg-gray-700 rounded text-sm">
              Analytics <span className="text-[10px]">{openSections.analytics ? '▼' : '▶'}</span>
            </button>
            {openSections.analytics && (
              <div className="mt-1 space-y-0.5">
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
          <div className="text-center">
            <img src="/settings_icon.png" alt="Settings Icon" className="h-6 mx-auto mb-1" />
            <button onClick={() => toggleSection('settings')} className="w-full text-white font-medium hover:bg-gray-700 rounded text-sm">
              Settings <span className="text-[10px]">{openSections.settings ? '▼' : '▶'}</span>
            </button>
            {openSections.settings && (
              <div className="mt-1 space-y-0.5">
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
