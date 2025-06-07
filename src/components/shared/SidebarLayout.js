// src/components/shared/SidebarLayout.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HostDropdown from './HostDropdown';

const SidebarLayout = ({ isSidebarOpen }) => {
  const [openSections, setOpenSections] = useState({
    alerts: true,
    control: true,
    analytics: true,
    autoflows: false,
    storeSearch: false,
    settings: true,
    recommendations: false,
  });
  const location = useLocation();

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const linkClass = (path) =>
    `block py-1 px-3 rounded-lg ${
      location.pathname === path ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-white'
    }`;

  if (!isSidebarOpen) return null;

  return (
    <aside className="flex flex-col h-screen w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white overflow-y-auto">
      <div className="p-4">
        <HostDropdown />
      </div>
      <nav className="mt-6 space-y-4 text-sm">
        {/* Alerts */}
        <div>
          <button
            onClick={() => toggleSection('alerts')}
            className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded"
          >
            <div className="flex items-center gap-2">
              <img
                src={`${process.env.PUBLIC_URL}/icons/alert.svg`}
                alt="Alerts"
                className="h-5 w-5"
              />
              <span>Alerts</span>
            </div>
            <span className="text-xs">{openSections.alerts ? '▼' : '▶'}</span>
          </button>
          {openSections.alerts && (
            <div className="mt-1 pl-8 space-y-1">
              <Link to="/alerts/summary" className={linkClass('/alerts/summary')}>
                Alerts Summary
              </Link>
              <Link to="/alerts" className={linkClass('/alerts')}>
                Alerts Inbox
              </Link>
            </div>
          )}
        </div>

        {/* Control Panel */}
        <div>
          <button
            onClick={() => toggleSection('control')}
            className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded"
          >
            <div className="flex items-center gap-2">
              <img
                src={`${process.env.PUBLIC_URL}/icons/control.svg`}
                alt="Control Panel"
                className="h-5 w-5"
              />
              <span>Control Panel</span>
            </div>
            <span className="text-xs">{openSections.control ? '▼' : '▶'}</span>
          </button>
          {openSections.control && (
            <div className="mt-1 pl-8 space-y-1">
              <Link to="/control-panel" className={linkClass('/control-panel')}>
                Overview
              </Link>
              <Link to="/control-panel/marketing" className={linkClass('/control-panel/marketing')}>
                Marketing
              </Link>
              <Link to="/control-panel/operations" className={linkClass('/control-panel/operations')}>
                Operations
              </Link>
              <Link to="/control-panel/locations" className={linkClass('/control-panel/locations')}>
                Locations
              </Link>
              <Link to="/control-panel/menu" className={linkClass('/control-panel/menu')}>
                Menu
              </Link>
            </div>
          )}
        </div>

        {/* Analytics */}
        <div>
          <button
            onClick={() => toggleSection('analytics')}
            className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded"
          >
            <div className="flex items-center gap-2">
              <img
                src={`${process.env.PUBLIC_URL}/icons/analytics.svg`}
                alt="Analytics"
                className="h-5 w-5"
              />
              <span>Analytics</span>
            </div>
            <span className="text-xs">{openSections.analytics ? '▼' : '▶'}</span>
          </button>
          {openSections.analytics && (
            <div className="mt-1 pl-8 space-y-1">
              <Link to="/analytics/sales" className={linkClass('/analytics/sales')}>
                Sales Overview
              </Link>
              <Link to="/analytics/operations" className={linkClass('/analytics/operations')}>
                Operations
              </Link>
              <Link to="/analytics/ratings" className={linkClass('/analytics/ratings')}>
                Ratings & Feedback
              </Link>
              <Link to="/analytics/reviews" className={linkClass('/analytics/reviews')}>
                Reviews
              </Link>
              <Link to="/analytics/promotions" className={linkClass('/analytics/promotions')}>
                Promotions
              </Link>
              <Link to="/analytics/sponsored" className={linkClass('/analytics/sponsored')}>
                Sponsored Listing
              </Link>
              <Link to="/analytics/recovery" className={linkClass('/analytics/recovery')}>
                Revenue Recovery
              </Link>
            </div>
          )}
        </div>

        {/* Auto Flows */}
        <div>
          <button
            onClick={() => toggleSection('autoflows')}
            className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded"
          >
            <div className="flex items-center gap-2">
              <img
                src={`${process.env.PUBLIC_URL}/icons/flows.svg`}
                alt="Auto Flows"
                className="h-5 w-5"
              />
              <span>Auto Flows</span>
            </div>
            <span className="text-xs">{openSections.autoflows ? '▼' : '▶'}</span>
          </button>
          {openSections.autoflows && (
            <div className="mt-1 pl-8 space-y-1">
              <Link to="/autoflows/workflow" className={linkClass('/autoflows/workflow')}>
                Workflow
              </Link>
              <Link to="/autoflows/trended" className={linkClass('/autoflows/trended')}>
                Trended
              </Link>
              <Link to="/autoflows/flowsettings" className={linkClass('/autoflows/flowsettings')}>
                Flow Settings
              </Link>
            </div>
          )}
        </div>

        {/* Store Search */}
        <div>
          <button
            onClick={() => toggleSection('storeSearch')}
            className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded"
          >
            <div className="flex items-center gap-2">
              <img
                src={`${process.env.PUBLIC_URL}/icons/search.svg`}
                alt="Store Search"
                className="h-5 w-5"
              />
              <span>Store Search</span>
            </div>
            <span className="text-xs">{openSections.storeSearch ? '▼' : '▶'}</span>
          </button>
          {openSections.storeSearch && (
            <div className="mt-1 pl-8">
              <Link to="/store-search" className={linkClass('/store-search')}>
                Search
              </Link>
            </div>
          )}
        </div>

        {/* Settings */}
        <div>
          <button
            onClick={() => toggleSection('settings')}
            className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded"
          >
            <div className="flex items-center gap-2">
              <img
                src={`${process.env.PUBLIC_URL}/icons/settings.svg`}
                alt="Settings"
                className="h-5 w-5"
              />
              <span>Settings</span>
            </div>
            <span className="text-xs">{openSections.settings ? '▼' : '▶'}</span>
          </button>
          {openSections.settings && (
            <div className="mt-1 pl-8">
              <Link to="/settings" className={linkClass('/settings')}>Settings</Link>
            </div>
          )}
        </div>

        {/* Recommendations */}
        <div>
          <button
            onClick={() => toggleSection('recommendations')}
            className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded"
          >
            <div className="flex items-center gap-2">
              <img
                src={`${process.env.PUBLIC_URL}/icons/recommend.svg`}
                alt="Recommendations"
                className="h-5 w-5"
              />
              <span>Recommendations</span>
            </div>
            <span className="text-xs">{openSections.recommendations ? '▼' : '▶'}</span>
          </button>
          {openSections.recommendations && (
            <div className="mt-1 pl-8 space-y-1">
              <Link to="/recommendations/marketing" className={linkClass('/recommendations/marketing')}>
                Marketing
              </Link>
              <Link to="/recommendations/operations" className={linkClass('/recommendations/operations')}>
                Operations
              </Link>
              <Link to="/recommendations/locations" className={linkClass('/recommendations/locations')}>
                Locations
              </Link>
              <Link to="/recommendations/menu" className={linkClass('/recommendations/menu')}>
                Menu
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default SidebarLayout;
