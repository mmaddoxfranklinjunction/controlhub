// Work-in-progress version of the enhanced MarketingPanel
// Will include: full-width cost vs revenue SVG graph, labeled interactive campaign list
// Existing cards (Ad Campaigns & Promotions) will be preserved

import { useState } from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../../components/shared/PageWrapper";
import FilterBar from "../../components/shared/FilterBar";

const chartData = [
  { month: 'Feb', cost: 5000, revenue: 30000 },
  { month: 'Mar', cost: 11000, revenue: 32000 },
  { month: 'Apr', cost: 10500, revenue: 34000 },
  { month: 'May', cost: 15000, revenue: 35000 },
  { month: 'Jun', cost: 14000, revenue: 20000 },
  { month: 'Jul', cost: 13000, revenue: 25000 },
  { month: 'Aug', cost: 12500, revenue: 28000 },
  { month: 'Sep', cost: 13500, revenue: 40000 },
  { month: 'Oct', cost: 17000, revenue: 95000 },
  { month: 'Nov', cost: 15000, revenue: 50000 },
  { month: 'Dec', cost: 12000, revenue: 48000 },
  { month: 'Jan', cost: 16000, revenue: 47000 },
];

const adCampaigns = [
  { name: "Search Boost", type: "Sponsored", spend: "$1,200/week", marketplace: "Uber Eats", active: true, start: "May 1", end: "Ongoing", result: "+12% orders" },
  { name: "Banner Ad: Summer BBQ", type: "Display", spend: "$750/week", marketplace: "DoorDash", active: true, start: "May 10", end: "Jul 10", result: "+9% ROAS" },
  { name: "Instagram Awareness", type: "Social", spend: "$400/week", marketplace: "Meta", active: false, start: "Apr 1", end: "Apr 30", result: "+4% reach" },
];

export default function MarketingPanel() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const max = Math.max(...chartData.map(d => Math.max(d.cost, d.revenue)));
  const w = 600;
  const h = 120;
  const gap = w / (chartData.length - 1);
  const sy = val => h - (val / max) * h;
  const line = key => chartData.map((d, i) => `${i === 0 ? 'M' : 'L'}${i * gap},${sy(d[key])}`).join(' ');

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-[#253847]">Marketing Control Panel</h1>
          <div className="w-72">
            <FilterBar onApply={() => {}} />
          </div>
        </div>

        {/* SVG GRAPH */}
        <div className="bg-white border rounded-xl shadow-sm p-4 mb-6">
          <div className="text-sm text-[#5C6B7A] mb-2 font-semibold">Cost vs Revenue</div>
          <svg viewBox={`0 0 ${w} ${h + 30}`} width="100%" height="160"
            onMouseLeave={() => setHoverIndex(null)}>
            {chartData.map((d, i) => (
              <text
                key={d.month}
                x={i * gap}
                y={h + 20}
                fontSize="10"
                textAnchor="middle"
                fill="#5C6B7A"
              >{d.month}</text>
            ))}
            <text x="0" y="10" fontSize="10" fill="#5C6B7A">$</text>
            <path d={line('cost')} stroke="#2B7A78" strokeWidth="2" fill="none" />
            <path d={line('revenue')} stroke="#B3282D" strokeWidth="2" fill="none" />
            {hoverIndex !== null && (
              <>
                <line x1={hoverIndex * gap} x2={hoverIndex * gap} y1="0" y2={h} stroke="#ccc" strokeDasharray="2 2" />
                <circle cx={hoverIndex * gap} cy={sy(chartData[hoverIndex].cost)} r="3" fill="#2B7A78" />
                <circle cx={hoverIndex * gap} cy={sy(chartData[hoverIndex].revenue)} r="3" fill="#B3282D" />
              </>
            )}
            <rect x="0" y="0" width={w} height={h} fill="transparent" onMouseMove={e => {
              const bounds = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - bounds.left;
              const i = Math.round(x / gap);
              if (i >= 0 && i < chartData.length) setHoverIndex(i);
            }} />
          </svg>
          {hoverIndex !== null && (
            <div className="mt-2 text-sm text-[#253847]">
              <strong>{chartData[hoverIndex].month}</strong>: Cost ${chartData[hoverIndex].cost.toLocaleString()}, Revenue ${chartData[hoverIndex].revenue.toLocaleString()}
            </div>
          )}
        </div>

        {/* Existing Cards Placeholder (Keep your current Ad Campaigns / Promotions cards here) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ad Campaigns + Promo Cards stay unchanged */}
        </div>

        {/* Extended Campaign List */}
        <div className="bg-white border rounded-xl shadow-sm p-4 mt-6">
          <div className="text-sm font-semibold text-[#253847] mb-3">Campaign Summary</div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-[#5C6B7A] border-b">
                <th className="py-1">Name</th>
                <th className="py-1">Marketplace</th>
                <th className="py-1">Start</th>
                <th className="py-1">End</th>
                <th className="py-1">Status</th>
                <th className="py-1">Results</th>
              </tr>
            </thead>
            <tbody>
              {adCampaigns.map((c, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-2 font-medium">{c.name}</td>
                  <td>{c.marketplace}</td>
                  <td>{c.start}</td>
                  <td>{c.end}</td>
                  <td className={"font-semibold " + (c.active ? "text-green-600" : "text-gray-400")}>{c.active ? "Active" : "Inactive"}</td>
                  <td>{c.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageWrapper>
  );
}
