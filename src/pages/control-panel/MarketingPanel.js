// Enhanced MarketingPanel with full graph, restored cards, aligned FilterBar, axes, and tick marks
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
  { name: "Search Boost", type: "Sponsored", spend: "$1,200/week", trend: [8, 12, 11, 14, 17, 18], color: "#2679c8", active: true },
  { name: "Banner Ad: Summer BBQ", type: "Display", spend: "$750/week", trend: [3, 5, 8, 7, 11, 13], color: "#B3282D", active: true },
  { name: "Instagram Awareness", type: "Social", spend: "$400/week", trend: [6, 5, 6, 7, 6, 8], color: "#A5BAC9", active: false },
];

const promos = [
  { name: "BOGO Burgers", type: "BOGO", spend: "$520/week", trend: [10, 11, 9, 10, 13, 15], color: "#2679c8", active: true },
  { name: "Spend $20, Get $5", type: "Spend X Get Y", spend: "$360/week", trend: [6, 8, 7, 8, 7, 9], color: "#B3282D", active: true },
  { name: "Free Delivery", type: "Delivery", spend: "$610/week", trend: [7, 8, 7, 8, 10, 13], color: "#F9A602", active: false },
];

function MiniTrend({ trends, label }) {
  const w = 410, h = 90;
  return (
    <div className="w-full">
      <div className="flex justify-between px-1 pb-1 text-xs text-gray-400">
        <span>{label || "Trends"}</span>
        <span>Weeks</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="90" className="mb-1">
        <text x="0" y="20" fontSize="10" fill="#B3282D" fontWeight="bold">$1500</text>
        <text x="0" y="85" fontSize="10" fill="#253847">$0</text>
        <line x1="28" y1="8" x2="28" y2="82" stroke="#E5E7EB" strokeWidth="1"/>
        {[0,1,2,3,4,5].map(i => <text key={i} x={32 + i*74} y="88" fontSize="10" fill="#A5BAC9">{`W${i+1}`}</text>)}
        {trends.map((item, idx) => {
          const points = item.trend.map((v, i) => [28 + (i / 5) * 372, 80 - ((v - 3) / 15) * 65]);
          const path = points.map((pt, i) => `${i === 0 ? "M" : "L"}${pt[0]},${pt[1]}`).join(" ");
          return <path key={item.name} d={path} stroke={item.color} strokeWidth={3} fill="none" style={{ opacity: 0.93, filter: "drop-shadow(0 1px 3px #b6c6da44)" }} />;
        })}
      </svg>
    </div>
  );
}

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
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-[#253847]">Marketing Control Panel</h1>
          <div className="flex-1 ml-6"><FilterBar onApply={() => {}} /></div>
        </div>

        {/* Cost vs Revenue Graph */}
        <div className="bg-white border rounded-xl shadow-sm p-4 mb-6">
          <div className="text-sm font-semibold text-center text-[#253847] mb-1">Cost vs Revenue (Monthly)</div>
          <svg viewBox={`0 0 ${w} ${h + 30}`} width="100%" height="160" onMouseLeave={() => setHoverIndex(null)}>
            {chartData.map((d, i) => (
              <>
                <text key={`label-${i}`} x={i * gap} y={h + 20} fontSize="11" textAnchor="middle" fill="#5C6B7A">{d.month}</text>
                <line x1={i * gap} y1={0} x2={i * gap} y2={h} stroke="#EEE" strokeWidth="0.5" />
              </>
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

        {/* Ad Campaigns + Promotions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-2xl shadow border flex flex-col">
            <h2 className="text-base font-semibold mb-1 text-[#253847] text-center">Ad Campaigns</h2>
            <ul className="space-y-2 mb-2">
              {adCampaigns.map((ad, i) => (
                <li key={i} className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{ad.name}</span>
                    <span className="text-xs text-gray-400 ml-2">{ad.type}</span>
                    <span className={`ml-2 text-xs font-bold ${ad.active ? "text-green-600" : "text-gray-400"}`}>● {ad.active ? "Active" : "Inactive"}</span>
                  </div>
                  <span className="text-sm font-bold text-[#2679c8]">{ad.spend}</span>
                </li>
              ))}
            </ul>
            <MiniTrend trends={adCampaigns} label="Trends" />
          </div>

          <div className="bg-white p-5 rounded-2xl shadow border flex flex-col">
            <h2 className="text-base font-semibold mb-1 text-[#253847] text-center">Promotions</h2>
            <ul className="space-y-2 mb-2">
              {promos.map((promo, i) => (
                <li key={i} className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{promo.name}</span>
                    <span className="text-xs text-gray-400 ml-2">{promo.type}</span>
                    <span className={`ml-2 text-xs font-bold ${promo.active ? "text-green-600" : "text-gray-400"}`}>● {promo.active ? "Active" : "Inactive"}</span>
                  </div>
                  <span className="text-sm font-bold text-[#B3282D]">{promo.spend}</span>
                </li>
              ))}
            </ul>
            <MiniTrend trends={promos} label="Trends" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
