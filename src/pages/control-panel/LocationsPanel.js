// src/pages/control-panel/LocationsPanel.js
import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

const KPI_CARDS = [
  { label: 'Downtime', value: '185h' },
  { label: 'Delivery Time', value: '15 min' },
  { label: 'Menu Audit', value: '98%' },
  { label: 'Rating', value: '4.4 ★★★★☆' },
];

const CHANNEL_BREAKDOWN = [
  { channel: 'DoorDash', downtime: '63h' },
  { channel: 'UberEats', downtime: '47h' },
  { channel: 'Grubhub', downtime: '58h' },
];

const LocationsPanel = () => {
  const [view, setView] = useState('insights');
  const [filters, setFilters] = useState({ dateRange: '5/22/2025 – 5/28/2025' });

  const handleApply = (vals) => setFilters(vals);

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 py-0">
        {/* Title + Toggle */}
        <div className="flex items-center justify-between mt-0 mb-4">
          <h1 className="text-2xl font-bold text-[#253847]">Location Analytics</h1>
           <div className="flex bg-[rgba(179,40,45,0.09)] rounded-full w-52 h-8 shadow-inner cursor-pointer text-xs border border-[#b3282d]">
            <button
              className={flex-1 px-3 py-1 rounded-full transition font-bold
                ${toggle === "insights" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-[rgba(179,40,45,0.09)]"}}
              style={{ fontSize: "13px", height: "32px", transition: "all 0.15s" }}
              onClick={() => setToggle("insights")}
            >
              Insights
            </button>
            <button
              className={flex-1 px-3 py-1 rounded-full transition font-bold
                ${toggle === "controls" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-[rgba(179,40,45,0.09)]"}}
              style={{ fontSize: "13px", height: "32px", transition: "all 0.15s" }}
              onClick={() => setToggle("controls")}
            >
              Controls
            </button>
          </div>
        </div>
        </div>

        {/* Filter Bar + Display */}
        <div className="mb-4">
         <FilterBar />
          </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {KPI_CARDS.map((c) => (
            <div key={c.label} className="bg-white rounded-xl shadow p-4 flex flex-col">
              <div className="text-sm text-gray-500">{c.label}</div>
              <div className="text-2xl font-semibold text-[#253847] mt-1">
                {c.value}
              </div>
            </div>
          ))}
        </div>

        {/* Trend Chart Placeholder */}
        <div className="bg-white rounded-xl shadow p-4 mb-6 h-48 flex items-center justify-center text-gray-400">
          {/* insert your chart here */}
          Trend chart goes here
        </div>

        {/* Breakdown by Channel */}
        <h2 className="text-lg font-semibold text-[#253847] mb-4">Breakdown by Channel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CHANNEL_BREAKDOWN.map((ch) => (
            <div key={ch.channel} className="bg-white rounded-xl shadow p-4 text-center">
              <div className="text-sm text-gray-500">{ch.channel}</div>
              <div className="text-xl font-semibold text-[#253847] mt-1">
                {ch.downtime}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default LocationsPanel;
