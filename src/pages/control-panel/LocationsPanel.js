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
  const [filters, setFilters] = useState({ dateRange: '5/22/2025 - 5/28/2025' });

  const handleApply = (vals) => {
    // vals.dateRange will be whatever the user typed – here we just echo it
    setFilters((prev) => ({ ...prev, ...vals }));
  };

  return (
    <PageWrapper>
      <div className="px-6 py-8 max-w-5xl mx-auto">

        {/* Title + Filter */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-[#253847]">Location Analytics</h1>
          <div className="flex items-center gap-4">
            <FilterBar
              filters={[{ name: 'dateRange', label: '', placeholder: 'Select date range' }]}
              onApply={handleApply}
            />
            <span className="text-sm text-gray-600">{filters.dateRange}</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {KPI_CARDS.map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-xl shadow p-4 flex flex-col justify-center"
            >
              <div className="text-sm text-gray-500">{card.label}</div>
              <div className="text-2xl font-semibold text-[#253847] mt-1">{card.value}</div>
            </div>
          ))}
        </div>

        {/* Trend Chart Placeholder */}
        <div className="bg-white rounded-xl shadow p-4 mb-6 h-48 flex items-center justify-center text-gray-400">
          {/* Replace this with your chart component */}
          Trend chart goes here
        </div>

        {/* Breakdown by Channel */}
        <h2 className="text-lg font-semibold text-[#253847] mb-4">Breakdown by Channel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CHANNEL_BREAKDOWN.map((ch) => (
            <div
              key={ch.channel}
              className="bg-white rounded-xl shadow p-4 text-center"
            >
              <div className="text-sm text-gray-500">{ch.channel}</div>
              <div className="text-xl font-semibold text-[#253847] mt-1">{ch.downtime}</div>
            </div>
          ))}
        </div>

      </div>
    </PageWrapper>
  );
};

export default LocationsPanel;
