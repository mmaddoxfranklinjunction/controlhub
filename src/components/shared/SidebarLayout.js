// src/components/shared/SidebarLayout.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HostDropdown from './HostDropdown';

const ICON_PATH = '/icons';

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

  const toggleSection = section => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const linkClass = path =>
    `block py-1 px-3 rounded-lg ${
      location.pathname === path ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-white'
    }`;

  if (!isSidebarOpen) return null;

  return (
    <aside className="flex flex-col min-h-screen w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white overflow-y-auto">
      <div className="p-4">
        <HostDropdown />
      </div>
      <nav className="mt-6 space-y-4 text-sm">
        {/* Alerts Section */}
        <Section
          title="Alerts"
          icon="alert.svg"
          isOpen={openSections.alerts}
          onToggle={() => toggleSection('alerts')}
        >
          <NavLink to="/alerts/summary" path="/alerts/summary" linkClass={linkClass}>
            Alerts Summary
          </NavLink>
          <NavLink to="/alerts" path="/alerts" linkClass={linkClass}>
            Alerts Inbox
          </NavLink>
        </Section>

        {/* Auto Flows Section */}
        <Section
          title="Auto Flows"
          icon="flows.svg"
          isOpen={openSections.autoflows}
          onToggle={() => toggleSection('autoflows')}
        >
          <NavLink to="/autoflows/workflow" path="/autoflows/workflow" linkClass={linkClass}>Workflow</NavLink>
          <NavLink to="/autoflows/trended" path="/autoflows/trended" linkClass={linkClass}>Trended</NavLink>
          <NavLink to="/autoflows/flowsettings" path="/autoflows/flowsettings" linkClass={linkClass}>Flow Settings</NavLink>
        </Section>

        {/* Control Panel Section */}
        <Section
          title="Control Panel"
          icon="control.svg"
          isOpen={openSections.control}
          onToggle={() => toggleSection('control')}
        >
          <NavLink to="/control-panel" path="/control-panel" linkClass={linkClass}>Overview</NavLink>
          <NavLink to="/control-panel/marketing" path="/control-panel/marketing" linkClass={linkClass}>Marketing</NavLink>
          <NavLink to="/control-panel/operations" path="/control-panel/operations" linkClass={linkClass}>Operations</NavLink>
          <NavLink to="/control-panel/locations" path="/control-panel/locations" linkClass={linkClass}>Locations</NavLink>
          <NavLink to="/control-panel/menu" path="/control-panel/menu" linkClass={linkClass}>Menu</NavLink>
        </Section>

        {/* Analytics Section */}
        <Section
          title="Analytics"
          icon="analytics.svg"
          isOpen={openSections.analytics}
          onToggle={() => toggleSection('analytics')}
        >
          <NavLink to="/analytics/sales" path="/analytics/sales" linkClass={linkClass}>Sales Overview</NavLink>
          <NavLink to="/analytics/operations" path="/analytics/operations" linkClass={linkClass}>Operations</NavLink>
          <NavLink to="/analytics/ratings" path="/analytics/ratings" linkClass={linkClass}>Ratings & Feedback</NavLink>
          <NavLink to="/analytics/reviews" path="/analytics/reviews" linkClass={linkClass}>Reviews</NavLink>
          <NavLink to="/analytics/promotions" path="/analytics/promotions" linkClass={linkClass}>Promotions</NavLink>
          <NavLink to="/analytics/sponsored" path="/analytics/sponsored" linkClass={linkClass}>Sponsored Listing</NavLink>
          <NavLink to="/analytics/recovery" path="/analytics/recovery" linkClass={linkClass}>Revenue Recovery</NavLink>
        </Section>

        {/* Store Search Section */}
        <Section
          title="Store Search"
          icon="search.svg"
          isOpen={openSections.storeSearch}
          onToggle={() => toggleSection('storeSearch')}
        >
          <NavLink to="/store-search" path="/store-search" linkClass={linkClass}>Search</NavLink>
        </Section>

        {/* Settings Section */}
        <Section
          title="Settings"
          icon="settings.svg"
          isOpen={openSections.settings}
          onToggle={() => toggleSection('settings')}
        >
          <NavLink to="/settings" path="/settings" linkClass={linkClass}>Settings</NavLink>
        </Section>

        {/* Recommendations Section */}
        <Section
          title="Recommendations"
          icon="recommend.svg"
          isOpen={openSections.recommendations}
          onToggle={() => toggleSection('recommendations')}
        >
          <NavLink to="/recommendations/marketing" path="/recommendations/marketing" linkClass={linkClass}>Marketing</NavLink>
          <NavLink to="/recommendations/operations" path="/recommendations/operations" linkClass={linkClass}>Operations</NavLink>
          <NavLink to="/recommendations/locations" path="/recommendations/locations" linkClass={linkClass}>Locations</NavLink>
          <NavLink to="/recommendations/menu" path="/recommendations/menu" linkClass={linkClass}>Menu</NavLink>
        </Section>
      </nav>
    </aside>
  );
};

const Section = ({ title, icon, isOpen, onToggle, children }) => (
  <div>
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded"
    >
      <div className="flex items-center gap-2">
        <img src={`${ICON_PATH}/${icon}`} alt={title} className="h-5 w-5" />
        <span>{title}</span>
      </div>
      <span className="text-xs">{isOpen ? '▼' : '▶'}</span>
    </button>
    {isOpen && <div className="mt-1 pl-8 space-y-1">{children}</div>}
  </div>
);

const NavLink = ({ to, path, linkClass, children }) => (
  <Link to={to} className={linkClass(path)}>
    {children}
  </Link>
);

export default SidebarLayout;
