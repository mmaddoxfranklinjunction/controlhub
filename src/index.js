import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';

import ControlPanel from './pages/control-panel/ControlPanel';
import MarketingPanel from './pages/control-panel/MarketingPanel';
import OperationsPanel from './pages/control-panel/OperationsPanel';
import LocationsPanel from './pages/control-panel/LocationsPanel';
import MenuPanel from './pages/control-panel/MenuPanel';

import SalesOverview from './pages/analytics/SalesOverview';
import RevenueRecovery from './pages/analytics/RevenueRecovery';
import PromotionsReport from './pages/analytics/PromotionsReport';
import RatingsFeedback from './pages/analytics/RatingsFeedback';
import SponsoredListingReport from './pages/analytics/SponsoredListingReport';
import OperationsPerformance from './pages/analytics/OperationsPerformance';
import Reviews from './pages/analytics/Reviews';

import Alerts from './pages/Alerts/alerts';
import AlertsPanel from './pages/Alerts/AlertsPanel';
import LiveStatus from './pages/Alerts/LiveStatus';

import StoreSearch from './pages/store-search/StoreSearch';
import Settings from './pages/settings/Settings';

import RecommendationsMarketing from './pages/recommendations/RecommendationsMarketing';
import RecommendationsOperations from './pages/recommendations/RecommendationsOperations';
import RecommendationsLocations from './pages/recommendations/RecommendationsLocations';
import RecommendationsMenu from './pages/recommendations/RecommendationsMenu';

import WorkflowPanel from './pages/autoflows/WorkflowPanel';
import Trended from './pages/autoflows/Trended';
import FlowSettings from './pages/autoflows/FlowSettings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Public Home */}
        <Route path="/" element={<Home />} />

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

        {/* Alerts */}
        <Route path="/alerts/summary" element={<AlertsPanel />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/alerts/livestatus" element={<LiveStatus />} />

        {/* Store Search */}
        <Route path="/store-search" element={<StoreSearch />} />

        {/* Settings */}
        <Route path="/settings" element={<Settings />} />

        {/* Recommendations */}
        <Route path="/recommendations/marketing" element={<RecommendationsMarketing />} />
        <Route path="/recommendations/operations" element={<RecommendationsOperations />} />
        <Route path="/recommendations/locations" element={<RecommendationsLocations />} />
        <Route path="/recommendations/menu" element={<RecommendationsMenu />} />

        {/* Auto Flows */}
        <Route path="/autoflows/workflow" element={<WorkflowPanel />} />
        <Route path="/autoflows/trended" element={<Trended />} />
        <Route path="/autoflows/flowsettings" element={<FlowSettings />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
