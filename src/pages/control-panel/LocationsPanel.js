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
          <div className="flex items-center bg-[rgba(179,40,45,0.1)] border border-[#b3282d] rounded-full h-8 text-xs">
            <button
              onClick={() => setView('insights')}
              className={
                `px-3 transition ${view === 'insights'
                  ? 'bg-[#b3282d] text-white rounded-full'
                  : 'text-[#b3282d]'}`
              }
            >
              Insights
            </button>
            <button
              onClick={() => setView('controls')}
              className={
                `px-3 transition ${view === 'controls'
                  ? 'bg-[#b3282d] text-white rounded-full'
                  : 'text-[#b3282d]'}`
              }
            >
              Controls
            </button>
          </div>
        </div>

        {/* Filter Bar + Display */}
        <div className="mb-4">
          <FilterBar
            filters={[{ name: 'dateRange', placeholder: 'Select date range' }]}
            onApply={handleApply}
          />
        </div>
        <div className="text-sm text-gray-600 mb-6">{filters.dateRange}</div>

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
