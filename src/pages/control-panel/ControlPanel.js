import React from 'react';
import { Link } from 'react-router-dom';

const panels = [
  {
    title: "Marketing Promos",
    icon: "📈",
    toReport: "/analytics/promotions",
    toChef: "/recommendations/marketing",
    description: "Adjust ad spend, campaign timing, and promotional tags by platform.",
  },
  {
    title: "Operations",
    icon: "🕒",
    toReport: "/analytics/operations",
    toChef: "/recommendations/operations",
    description: "Throttle order flow, override prep times, and track training schedules.",
  },
  {
    title: "Locations",
    icon: "🏪",
    toReport: "/analytics/recovery",
    toChef: "/recommendations/locations",
    description: "Manage hours, rank visibility, and sync store settings across channels.",
  },
  {
    title: "Menu",
    icon: "🍽",
    toReport: "/analytics/sales",
    toChef: "/recommendations/menu",
    description: "Toggle availability, adjust pricing, and test new combinations.",
  }
];

const ControlPanel = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8 bg-[#F9F9F9] min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#253847] font-sans">Control Panel</h1>
        <p className="text-[#A5BAC9] text-base mt-1 font-sans">Control your digital restaurant like you do your physical one.</p>
        <hr className="mt-4 border-t border-gray-300" />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {panels.map((panel, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{panel.icon}</span>
              <h2 className="text-xl font-semibold text-[#253847] font-sans">{panel.title}</h2>
            </div>
            <p className="text-sm text-[#5C6B7A] mb-4">{panel.description}</p>
            <div className="flex justify-between text-sm text-[#B3282D] font-medium">
              <Link to={panel.toReport} className="hover:underline">📊 View Report</Link>
              <Link to={panel.toChef} className="hover:underline">👨‍🍳 Chef’s Recommendations</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
