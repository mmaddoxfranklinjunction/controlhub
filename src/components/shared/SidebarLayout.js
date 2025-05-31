// src/components/shared/SidebarLayout.js
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

const Icon = ({ children }) => (
  <span className="inline-block w-4 h-4 mr-2 align-text-bottom">
    {children}
  </span>
);

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
    
        <aside className="w-64 bg-[#253847] text-white p-4 space-y-1 flex flex-col">
          <HostDropdown />
          <nav className="flex-1 space-y-1">
            {/* Control Panel Section */}
            <button onClick={() => toggleSection('control')} className="w-full text-left py-2 font-semibold hover:bg-gray-700 rounded text-base">
              <Icon><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h16"/></svg></Icon>
              Control Panel {openSections.control ? '▼' : '▶'}
            </button>
            {openSections.control && (
              <div className="pl-4 text-sm space-y-1">
                <Link to="/control-panel" className="block py-1 hover:bg-gray-700 rounded">Overview</Link>
                <Link to="/control-panel/marketing" className="block py-1 hover:bg-gray-700 rounded">Marketing</Link>
                <Link to="/control-panel/operations" className="block py-1 hover:bg-gray-700 rounded">Operations</Link>
                <Link to="/control-panel/locations" className="block py-1 hover:bg-gray-700 rounded">Locations</Link>
                <Link to="/control-panel/menu" className="block py-1 hover:bg-gray-700 rounded">Menu</Link>
              </div>
            )}

            {/* Alerts */}
            <button onClick={() => toggleSection('alerts')} className="w-full text-left py-2 font-semibold hover:bg-gray-700 rounded text-base">
              <Icon><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14h-1v-1a6 6 0 10-12 0v1H4a2 2 0 001.732 1.995L6 17h5m4-5V9m0 0a2 2 0 10-4 0v3"/></svg></Icon>
              Alerts {openSections.alerts ? '▼' : '▶'}
            </button>
            {openSections.alerts && (
              <div className="pl-4 text-sm space-y-1">
                <Link to="/alerts" className="block py-1 hover:bg-gray-700 rounded">Alerts Inbox</Link>
              </div>
            )}

            {/* Analytics */}
            <button onClick={() => toggleSection('analytics')} className="w-full text-left py-2 font-semibold hover:bg-gray-700 rounded text-base">
              <Icon><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M9 17V9m6 8v-6m-6 6v-2"/></svg></Icon>
              Analytics {openSections.analytics ? '▼' : '▶'}
            </button>
            {openSections.analytics && (
              <div className="pl-4 text-sm space-y-1">
                <Link to="/analytics/sales" className="block py-1 hover:bg-gray-700 rounded">Sales Overview</Link>
                <Link to="/analytics/operations" className="block py-1 hover:bg-gray-700 rounded">Operations Performance</Link>
                <Link to="/analytics/ratings" className="block py-1 hover:bg-gray-700 rounded">Ratings & Feedback</Link>
                <Link to="/analytics/reviews" className="block py-1 hover:bg-gray-700 rounded">Reviews</Link>
                <Link to="/analytics/promotions" className="block py-1 hover:bg-gray-700 rounded">Promotions</Link>
                <Link to="/analytics/sponsored" className="block py-1 hover:bg-gray-700 rounded">Sponsored Listing</Link>
                <Link to="/analytics/recovery" className="block py-1 hover:bg-gray-700 rounded">Revenue Recovery</Link>
              </div>
            )}

            {/* Store Search */}
            <button onClick={() => toggleSection('storeSearch')} className="w-full text-left py-2 font-semibold hover:bg-gray-700 rounded text-base">
              <Icon><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg></Icon>
              Store Search {openSections.storeSearch ? '▼' : '▶'}
            </button>
            {openSections.storeSearch && (
              <div className="pl-4 text-sm space-y-1">
                <Link to="/store-search" className="block py-1 hover:bg-gray-700 rounded">Search</Link>
              </div>
            )}

            {/* Settings */}
            <button onClick={() => toggleSection('settings')} className="w-full text-left py-2 font-semibold hover:bg-gray-700 rounded text-base">
              <Icon><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.82 2.82l-.06-.06a1.65 1.65 0 00-1.82-.33h0a1.65 1.65 0 00-1 .47l-.09.09a2 2 0 11-2.83-2.83l.09-.09a1.65 1.65 0 00.47-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.82-2.82l.06.06a1.65 1.65 0 001.82.33h0a1.65 1.65 0 001-.47l.09-.09a2 2 0 012.83 2.83l-.09.09a1.65 1.65 0 00-.47 1z" /></svg></Icon>
              Settings {openSections.settings ? '▼' : '▶'}
            </button>
            {openSections.settings && (
              <div className="pl-4 text-sm space-y-1">
                <Link to="/settings" className="block py-1 hover:bg-gray-700 rounded">Settings</Link>
              </div>
            )}
          </nav>
        </aside>
      )

      <main className="flex-1 p-6 overflow-y-auto">
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
      </main>
    </div>
  );
};

export default SidebarLayout;
