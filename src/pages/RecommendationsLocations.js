import React from 'react';

const RecommendationsLocations = () => {
  const recs = [
    {
      title: "Extend Saturday Hours",
      detail: "Top 3 stores by visibility rank have late demand spikes. Consider extending hours from 9 PM to 11 PM on Saturdays.",
    },
    {
      title: "Optimize Downtime Recovery",
      detail: "DEN7869 experienced 6% downtime last month. Enable automated alerting for inactivity >15 minutes.",
    },
    {
      title: "Improve Visibility Score",
      detail: "OHC0001 visibility rank dropped to 72. Add seasonal promo tags and verify holiday hours in marketplace config.",
    },
    {
      title: "Standardize Hours Across Brands",
      detail: "Locations with unified open/close hours perform 11% better on average. Consider aligning weekday hours regionally.",
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Chef’s Recommendations: Locations</h1>
      <p className="text-gray-600">Tactical actions to improve visibility, uptime, and customer access at the store level.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {recs.map((rec, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-primary mb-2">{rec.title}</h2>
            <p className="text-sm text-gray-700">{rec.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="/analytics/recovery"
          className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-red-700 transition"
        >
          View Related Report →
        </a>
      </div>
    </div>
  );
};

export default RecommendationsLocations;