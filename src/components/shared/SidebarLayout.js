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

import RecommendationsMarketing from '../../pages/recommendations/RecommendationsMarketing';
import RecommendationsOperations from '../../pages/recommendations/RecommendationsOperations';
import RecommendationsLocations from '../../pages/recommendations/RecommendationsLocations';
import RecommendationsMenu from '../../pages/recommendations/RecommendationsMenu';

import StoreSearch from '../../pages/store-search/StoreSearch';
import Settings from '../../pages/settings/Settings';

const SidebarLayout = () => {
  const [openSections, setOpenSections] = useState({
    control: true,
    alerts: false,
    analytics: true,
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
    <div className="flex h-screen">
      <aside className="w-64 bg-[#253847] text-white p-4 space-y-2 overflow-y-auto flex flex-col">
        {/* Host Dropdown always at the very top */}
        <HostDropdown />

        <nav className="space-y-2 flex-1">
          {/* Control Panel Section */}
          <button
            onClick={() => toggleSection('control')}
            className="w-full text-left py-2 px-2 font-semibold text-base hover:bg-gray-700 rounded"
            style={{ fontSize: "1.05rem" }}
          >
            {`Control Panel${openSections.control ? ' ▼' : ' ▶'}`}
          </button>
          {openSections.control && (
            <div className="pl-4 space-y-1 text-sm">
              <Link to="/control-panel" className="block py-1 px-2 hover:bg-gray-700 rounded">Overview</Link>
              <Link to="/control-panel/marketing" className="block py-1 px-2 hover:bg-gray-700 rounded">Marketing</Link>
              <Link to="/control-panel/operations" className="block py-1 px-2 hover:bg-gray-700 rounded">Operations</Link>
              <Link to="/control-panel/locations" className="block py-1 px-2 hover:bg-gray-700 rounded">Locations</Link>
              <Link to="/control-panel/menu" className="block py-1 px-2 hover:bg-gray-700 rounded">Menu</Link>
            </div>
          )}

          {/* Alerts Section */}
          <button
            onClick={() => toggleSection('alerts')}
            className="w-full text-left py-2 px-2 font-semibold text-base hover:bg-gray-700 rounded"
            style={{ fontSize: "1.05rem" }}
          >
            {`Alerts${openSections.alerts ? ' ▼' : ' ▶'}`}
          </button>
          {openSections.alerts && (
            <div className="pl-4 space-y-1 text-sm">
              <span className="block py-1 px-2 text-gray-400">No active alerts</span>
            </div>
          )}

          {/* Analytics Section */}
          <button
            onClick={() => toggleSection('analytics')}
            className="w-full text-left py-2 px-2 font-semibold text-base hover:bg-gray-700 rounded"
            style={{ fontSize: "1.05rem" }}
          >
            {`Analytics${openSections.analytics ? ' ▼' : ' ▶'}`}
          </button>
          {openSections.analytics && (
            <div className="pl-4 space-y-1 text-sm">
              <Link to="/analytics/sales" className="block py-1 px-2 hover:bg-gray-700 rounded">Sales Overview</Link>
              <Link to="/analytics/operations" className="block py-1 px-2 hover:bg-gray-700 rounded">Operations Performance</Link>
              <Link to="/analytics/ratings" className="block py-1 px-2 hover:bg-gray-700 rounded">Ratings & Feedback</Link>
              <Link to="/analytics/reviews" className="block py-1 px-2 hover:bg-gray-700 rounded">Reviews</Link>
              <Link to="/analytics/promotions" className="block py-1 px-2 hover:bg-gray-700 rounded">Promotions</Link>
              <Link to="/analytics/sponsored" className="block py-1 px-2 hover:bg-gray-700 rounded">Sponsored Listing</Link>
              <Link to="/analytics/recovery" className="block py-1 px-2 hover:bg-gray-700 rounded">Revenue Recovery</Link>
            </div>
          )}

          {/* Store Search Section */}
          <button
            onClick={() => toggleSection('storeSearch')}
            className="w-full text-left py-2 px-2 font-semibold text-base hover:bg-gray-700 rounded"
            style={{ fontSize: "1.05rem" }}
          >
            {`Store Search${openSections.storeSearch ? ' ▼' : ' ▶'}`}
          </button>
          {openSections.storeSearch && (
            <div className="pl-4 space-y-1 text-sm">
              <Link to="/store-search" className="block py-1 px-2 hover:bg-gray-700 rounded">Search</Link>
            </div>
          )}

          {/* Settings Section */}
          <button
            onClick={() => toggleSection('settings')}
            className="w-full text-left py-2 px-2 font-semibold text-base hover:bg-gray-700 rounded"
            style={{ fontSize: "1.05rem" }}
          >
            {`Settings${openSections.settings ? ' ▼' : ' ▶'}`}
          </button>
          {openSections.settings && (
            <div className="pl-4 space-y-1 text-sm">
              <Link to="/settings" className="block py-1 px-2 hover:bg-gray-700 rounded">Settings</Link>
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
          <Route path="/analytics/reviews" element={<Reviews />} />
          <Route path="/analytics/promotions" element={<PromotionsReport />} />
          <Route path="/analytics/sponsored" element={<SponsoredListingReport />} />
          <Route path="/analytics/recovery" element={<RevenueRecovery />} />

          {/* Store Search */}
          <Route path="/store-search" element={<StoreSearch />} />

          {/* Settings */}
          <Route path="/settings" element={<Settings />} />

          {/* Recommendations */}
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
