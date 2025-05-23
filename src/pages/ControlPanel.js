import React from 'react';
import { Link } from 'react-router-dom';

const panels = [
  {
    title: "Marketing Promos",
    toReport: "/analytics/promotions",
    toChef: "/recommendations/marketing",
    description: "Adjust ad spend, campaign timing, and promotional tags by platform.",
  },
  {
    title: "Operations",
    toReport: "/analytics/operations",
    toChef: "/recommendations/operations",
    description: "Throttle order flow, control prep time, and view performance insights.",
  },
  {
    title: "Locations",
    toReport: "/analytics/recovery",
    toChef: "/recommendations/locations",
    description: "Manage hours, visibility rank, and downtime by store or region.",
  },
  {
    title: "Menu",
    toReport: "/analytics/sales",
    toChef: "/recommendations/menu",
    description: "Edit item availability, pricing, and test new menu combinations.",
  }
];

const ControlPanel = () => {
  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#002147]">Control Panel</h1>
        <p className="text-gray-600 mt-2">Control your digital restaurant like you do your physical one.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {panels.map((panel, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition p-6">
            <h2 className="text-xl font-semibold text-[#B22234] mb-2">{panel.title}</h2>
            <p className="text-sm text-gray-700 mb-4">{panel.description}</p>
            <div className="flex justify-between">
              <Link
                to={panel.toReport}
                className="text-sm text-[#002147] font-medium hover:underline"
              >
                View Report →
              </Link>
              <Link
                to={panel.toChef}
                className="text-sm text-[#002147] font-medium hover:underline"
              >
                Chef’s Recommendations →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;