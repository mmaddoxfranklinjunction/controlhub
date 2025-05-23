import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  WrenchScrewdriverIcon,
  MegaphoneIcon,
  Cog6ToothIcon,
  BuildingStorefrontIcon,
  RectangleStackIcon,
  ChartBarIcon,
  BanknotesIcon,
  StarIcon,
  AdjustmentsHorizontalIcon,
  SpeakerWaveIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

import ControlPanel from './ControlPanel';
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
import RecommendationsLocations from './RecommendationsLocations';

const iconClass = "h-5 w-5 text-[#B22234] mr-2";

const SidebarLayout = () => {
  const [openSection, setOpenSection] = useState("control");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-2 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Control Hub</h2>
        <nav className="space-y-2">

          {/* Control Panel Section */}
          <div>
            <button
              onClick={() => toggleSection("control")}
              className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded flex items-center"
            >
              <WrenchScrewdriverIcon className={iconClass} />
              Control Panel
            </button>
            {openSection === "control" && (
              <div className="pl-4 space-y-1 transition-all duration-300 ease-in-out">
                <Link to="/control-panel" className="flex items-center py-1 px-2 hover:bg-gray-700 rounded">
                  <ChartBarIcon className={iconClass} /> Overview
                </Link>
                <Link to="/control-panel/marketing" className="flex items-center py-1 px-2 hover:bg-gray-700 rounded">
                  <MegaphoneIcon className={iconClass} /> Marketing
                </Link>
                <Link to="/control-panel/operations" className="flex items-center py-1 px-2 hover:bg-gray-700 rounded">
                  <Cog6ToothIcon className={iconClass} /> Operations
                </Link>
                <Link to="/control-panel/locations" className="flex items-center py-1 px-2 hover:bg-gray-700 rounded">
                  <BuildingStorefrontIcon className={iconClass} /> Locations
                </Link>
                <Link to="/control-panel/menu" className="flex items-center py-1 px-2 hover:bg-gray-700 rounded">
                  <RectangleStackIcon className={iconClass} /> Menu
                </Link>
              </div>
            )}
          </div>

          {/* Analytics Section */}
          <div>
            <button
              onClick={() => toggleSection("analytics")}
              className="w-full text-left py-2 px-2 font-semibold hover:bg-gray-700 rounded flex items-center"
            >
              <ChartBarIcon className={iconClass} />
              Analytics
            </button>
            {openSection === "analytics" && (
              <div className="pl-4 space-y-1 transition-all duration-300 ease-in-out">
                <Link to="/analytics/sales" className="flex items-center py-1 px-2 hover:bg-gray-700 rounded">
                  <BanknotesIcon className={iconClass} /> Sales Overview
                </Link>
                <Link to="/analytics/operations" className="flex items-center py-1 px-2 hover:bg-gray-700 rounded">
                  <Cog6ToothIcon className={iconClass} /> Operations Performance
                </Link>
                <Link to="/analytics/ratings" className="flex items-center py-1 px-2 hover:bg-gray-700 rounded">
                  <StarIcon className={iconClass} /> Ratings & Feedback
                </Link>
                <Link to="/analytics/promotions" className="flex items-center py-1 px-2 hover:bg-gray-700 rounded">
                  <AdjustmentsHorizontalIcon className={iconClass} /> Promotions
                </Link>
                <Link to="/analytics/sponsored" className="flex items-center py-1 px-2 hover:bg-gray-700 rounded">
                  <SpeakerWaveIcon className={iconClass} /> Sponsored Listing
                </Link>
                <Link to="/analytics/recovery" className="flex items-center py-1 px-2 hover:bg-gray-700 rounded">
                  <ArrowPathIcon className={iconClass} /> Revenue Recovery
                </Link>
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

          <Route path="/recommendations/locations" element={<RecommendationsLocations />} />
        </Routes>
      </main>
    </div>
  );
};

export default SidebarLayout;