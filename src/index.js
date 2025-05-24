import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Home and Layout
import Home from './pages/Home';
import SidebarLayout from './pages/SidebarLayout';

// Control Panel Pages
import ControlPanel from './pages/control-panel/ControlPanel';
import LocationsPanel from './pages/control-panel/LocationsPanel';
import MarketingPanel from './pages/control-panel/MarketingPanel';
import MenuPanel from './pages/control-panel/MenuPanel';
import OperationsPanel from './pages/control-panel/OperationsPanel';

// Analytics Pages
import SalesOverview from './pages/analytics/SalesOverview';
import OperationsPerformance from './pages/analytics/OperationsPerformance';
import RatingsFeedback from './pages/analytics/RatingsFeedback';
import PromotionsReport from './pages/analytics/PromotionsReport';
import SponsoredListingReport from './pages/analytics/SponsoredListingReport';
import RevenueRecovery from './pages/analytics/RevenueRecovery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      {/* Home page (no sidebar) */}
      <Route path="/" element={<Home />} />

      {/* All other pages wrapped in sidebar layout */}
      <Route element={<SidebarLayout />}>
        <Route path="/control-panel" element={<ControlPanel />} />
        <Route path="/control-panel/locations" element={<LocationsPanel />} />
        <Route path="/control-panel/marketing" element={<MarketingPanel />} />
        <Route path="/control-panel/menu" element={<MenuPanel />} />
        <Route path="/control-panel/operations" element={<OperationsPanel />} />

        <Route path="/analytics/sales" element={<SalesOverview />} />
        <Route path="/analytics/operations" element={<OperationsPerformance />} />
        <Route path="/analytics/ratings" element={<RatingsFeedback />} />
        <Route path="/analytics/promotions" element={<PromotionsReport />} />
        <Route path="/analytics/sponsored" element={<SponsoredListingReport />} />
        <Route path="/analytics/revenue" element={<RevenueRecovery />} />
      </Route>
    </Routes>
  </Router>
);
