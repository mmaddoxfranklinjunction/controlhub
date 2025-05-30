// src/components/shared/SidebarLayout.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HostDropdown from './HostDropdown';
import './SidebarLayout.css'; // optional, for additional animation control

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
  <span className="inline-block w-4 h-4 mr-2 align-text-bottom">{children}</span>
);

const SidebarLayout = ({ isSidebarOpen }) => {
  const [openSections, setOpenSections] = useState({
    control: true,
    alerts: true,
    analytics: true,
    storeSearch: false,
    settings: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="flex h-screen">
      <aside
        className={`bg-[#253847] text-white p-4 space-y-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-0 overflow-hidden'
        }`}
        style={{ minWidth: isSidebarOpen ? '16rem' : '0px' }}
      >
        <HostDropdown />

        <nav className="flex-1 space-y-1 text-sm">
          {/* Sections (example: Control Panel) */}
          <SidebarSection
            label="Control Panel"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h16" />
              </svg>
            }
            isOpen={openSections.control}
            toggle={() => toggleSection('control')}
            links={[
              ['Overview', '/control-panel'],
              ['Marketing', '/control-panel/marketing'],
              ['Operations', '/control-panel/operations'],
              ['Locations', '/control-panel/locations'],
              ['Menu', '/control-panel/menu'],
            ]}
          />

          <SidebarSection
            label="Alerts"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14h-1v-1a6 6 0 10-12 0v1H4a2 2 0 001.732 1.995L6 17h5m4-5V9m0 0a2 2 0 10-4 0v3"
                />
              </svg>
            }
            isOpen={openSections.alerts}
            toggle={() => toggleSection('alerts')}
            links={[['Alerts Inbox', '/alerts']]}
          />

          <SidebarSection
            label="Analytics"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M9 17V9m6 8v-6" />
              </svg>
            }
            isOpen={openSections.analytics}
            toggle={() => toggleSection('analytics')}
            links={[
              ['Sales Overview', '/analytics/sales'],
              ['Operations Performance', '/analytics/operations'],
              ['Ratings & Feedback', '/analytics/ratings'],
              ['Reviews', '/analytics/reviews'],
              ['Promotions', '/analytics/promotions'],
              ['Sponsored Listing', '/analytics/sponsored'],
              ['Revenue Recovery', '/analytics/recovery'],
            ]}
          />

          <SidebarSection
            label="Store Search"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
            isOpen={openSections.storeSearch}
            toggle={() => toggleSection('storeSearch')}
            links={[['Search', '/store-search']]}
          />

          <SidebarSection
            label="Settings"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.82 2.82"
                />
              </svg>
            }
            isOpen={openSections.settings}
            toggle={() => toggleSection('settings')}
            links={[['Settings', '/settings']]}
          />
        </nav>
      </aside>

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

const SidebarSection = ({ label, icon, isOpen, toggle, links }) => (
  <>
    <button onClick={toggle} className="w-full text-left py-2 font-semibold hover:bg-gray-700 rounded text-base flex items-center">
      <Icon>{icon}</Icon>
      {label} {isOpen ? '▼' : '▶'}
    </button>
    {isOpen && (
      <div className="pl-4 text-sm space-y-1">
        {links.map(([text, to]) => (
          <Link key={to} to={to} className="block py-1 hover:bg-gray-700 rounded">{text}</Link>
        ))}
      </div>
    )}
  </>
);

export default SidebarLayout;
