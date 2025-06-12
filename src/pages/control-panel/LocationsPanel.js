// Locations Panel with Health Score and Uptime Rate chart
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const uptimeData = [
  { date: '5/27', avg: 100, best: 100, worst: 100 },
  { date: '5/28', avg: 100, best: 100, worst: 98 },
  { date: '5/29', avg: 100, best: 100, worst: 97 },
  { date: '5/30', avg: 100, best: 100, worst: 95 },
  { date: '5/31', avg: 99, best: 100, worst: 93 },
  { date: '6/1', avg: 96, best: 99, worst: 85 },
  { date: '6/2', avg: 55, best: 90, worst: 45 },
];

const width = 320;
const height = 80;
const pointGap = width / (uptimeData.length - 1);
const scaleY = val => height - (val / 100) * height;
const getPath = key => uptimeData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${i * pointGap},${scaleY(d[key])}`).join(' ');
const getArea = () => uptimeData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${i * pointGap},${scaleY(d.avg)}`).join(' ') + ` L ${width},${height} L 0,${height} Z`;

const LocationsPanel = () => {
  const [toggle, setToggle] = useState("insights");

  const handleApply = (filters) => {
    console.log("Apply filters:", filters);
  };

  return (
    <PageWrapper>
      <div className="px-5 py-5">
        {/* Title + Toggle */}
        <div className="flex items-center justify-between mt-0 mb-4">
          <h1 className="text-xl font-bold text-[#253847]">Locations Control</h1>
         <div className="flex items-center bg-[rgba(179,40,45,0.09)] rounded-full w-52 h-8 shadow-inner cursor-pointer text-xs border border-[#b3282d]">
  <button
    className={`flex-1 h-full px-3 transition font-bold rounded-full
      ${toggle === "insights"
        ? "bg-[#b3282d] text-white shadow"
        : "bg-[rgba(179,40,45,0.09)] text-[#b3282d]"}`
    }
    style={{ fontSize: "12px", transition: "all 0.25s" }}
    onClick={() => setToggle("insights")}
  >
    Insights
  </button>
  <button
    className={`flex-1 h-full px-3 transition font-bold rounded-full
      ${toggle === "controls"
        ? "bg-[#b3282d] text-white shadow"
        : "bg-[rgba(179,40,45,0.09)] text-[#b3282d]"}`
    }
    style={{ fontSize: "12px", transition: "all 0.25s" }}
    onClick={() => setToggle("controls")}
  >
    Controls
  </button>
</div>

        </div>

        {/* Filter Bar */}
        <div className="mb-4">
          <FilterBar onApply={handleApply} />
        </div>

        {/* Health Score Meter */}
        <div className="mb-6">
          <div className="text-sm font-semibold text-[#2B7A78] mb-1">Health Score</div>
          <div className="flex items-center relative h-3 bg-[#F0F4F8] rounded-xl overflow-hidden">
            <div className="h-3 bg-[#C6D9CE]" style={{ width: '85%' }}></div>
            <div className="absolute left-[85%] -top-2">
              <span className="text-xs">▲</span>
            </div>
            <div className="absolute left-[72%] -top-2 text-[#B3282D]">
              <span className="text-xs">▲</span>
            </div>
          </div>
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

        {/* Uptime Rate Graph */}
        <div className="bg-white rounded-xl shadow p-4 mb-6">
          <div className="text-sm font-semibold text-[#253847] mb-2">UPTIME RATE</div>
          <svg viewBox={`0 0 ${width} ${height + 20}`} className="w-full h-20">
            <text x="0" y="10" fontSize="10" fill="#5C6B7A">%</text>
            <text x={width - 28} y={height + 15} fontSize="10" fill="#5C6B7A">Date</text>
            <path d={getArea()} fill="#2B7A7833" />
            <path d={getPath('avg')} stroke="#2B7A78" strokeWidth="2" fill="none" />
            <path d={getPath('best')} stroke="#7FB77E" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
            <path d={getPath('worst')} stroke="#B3282D" strokeWidth="1.5" fill="none" strokeDasharray="2 3" />
          </svg>
          <div className="flex justify-between text-[10px] text-[#5C6B7A] mt-1">
            <span>Best Store</span>
            <span>Worst Store</span>
          </div>
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
