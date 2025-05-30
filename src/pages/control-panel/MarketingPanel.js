import { useState } from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../../components/shared/PageWrapper";
import FilterBar from "../../components/shared/FilterBar";

// Sample ad campaigns and promo data
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
  // X: 0..5, Y: 3..18
  return (
    <div className="w-full">
      <div className="flex justify-between px-1 pb-1 text-[11px] text-gray-400">
        <span className="">{label || "Trends"}</span>
        <span>Weeks</span>
      </div>
      <svg viewBox="0 0 410 90" width="100%" height="90" className="mb-1">
        {/* Y axis (Spend) */}
        <text x="0" y="20" fontSize="10" fill="#B3282D" fontWeight="bold">$1500</text>
        <text x="0" y="85" fontSize="10" fill="#253847">$0</text>
        <line x1="28" y1="8" x2="28" y2="82" stroke="#E5E7EB" strokeWidth="1"/>
        {/* X axis (weeks) */}
        {[0,1,2,3,4,5].map(i =>
          <text key={i} x={32 + i*74} y="88" fontSize="10" fill="#A5BAC9">{`W${i+1}`}</text>
        )}
        {/* Trend Lines */}
        {trends.map((item, idx) => {
          // Normalize points
          const points = item.trend.map((v, i) => [
            28 + (i / 5) * 372,
            80 - ((v - 3) / 15) * 65,
          ]);
          const path = points.map((pt, i) => `${i === 0 ? "M" : "L"}${pt[0]},${pt[1]}`).join(" ");
          return (
            <path
              key={item.name}
              d={path}
              stroke={item.color}
              strokeWidth={3}
              fill="none"
              style={{ opacity: 0.93, filter: "drop-shadow(0 1px 3px #b6c6da44)" }}
            />
          );
        })}
      </svg>
    </div>
  );
}

const MarketingPanel = () => {
  const [toggle, setToggle] = useState("insights");
  const [spend, setSpend] = useState(60);
  const aiRecommended = 70;

  return (
    <PageWrapper>
    <div className="w-full px-0 py-2 font-[Futura,sans-serif]">
     
        {/* Header Row: Title left, toggle right */}
        <div className="flex items-center justify-between mb-1 mt-2">
          <h1 className="text-2xl font-bold mb-2 text-[#253847]">Marketing Panel</h1>
          <div className="flex bg-[rgba(179,40,45,0.09)] rounded-full w-52 h-8 shadow-inner cursor-pointer text-xs border border-[#b3282d]">
            <button
              className={`flex-1 px-3 py-1 rounded-full transition font-bold
                ${toggle === "insights" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-[rgba(179,40,45,0.09)]"}`}
              style={{ fontSize: "13px", height: "32px", transition: "all 0.15s" }}
              onClick={() => setToggle("insights")}
            >
              Insights
            </button>
            <button
              className={`flex-1 px-3 py-1 rounded-full transition font-bold
                ${toggle === "controls" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-[rgba(179,40,45,0.09)]"}`}
              style={{ fontSize: "13px", height: "32px", transition: "all 0.15s" }}
              onClick={() => setToggle("controls")}
            >
              Controls
            </button>
          </div>
        </div>
        {/* FilterBar */}
        <div className="mb-3">
          <FilterBar />
        </div>
        {/* Two-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-0">
          {/* Ad Campaigns */}
          <div className="bg-white p-5 rounded-2xl shadow border flex flex-col">
            <h2 className="text-base font-semibold mb-1 text-[#253847] text-center">Ad Campaigns</h2>
            {toggle === "insights" ? (
              <>
                <ul className="space-y-2 mb-2">
                  {adCampaigns.map((ad, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{ad.name}</span>
                        <span className="text-xs text-gray-400 ml-2">{ad.type}</span>
                        <span className={`ml-2 text-xs font-bold ${ad.active ? "text-green-600" : "text-gray-400"}`}>
                          ● {ad.active ? "Active" : "Inactive"}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-[#2679c8]">{ad.spend}</span>
                    </li>
                  ))}
                </ul>
                <MiniTrend trends={adCampaigns} label="Trends" />
              </>
            ) : (
              <div>
                {/* Controls content (original) */}
                <div className="mb-6 p-2 rounded-2xl bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Promotional Spend</span>
                    <span className="text-xs text-gray-500">Adjust spend strategy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>None</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={spend}
                      onChange={e => setSpend(Number(e.target.value))}
                      className="w-full accent-blue-500"
                    />
                    <span className="font-bold">Aggressive</span>
                  </div>
                  <div className="relative h-2 w-full bg-gray-100 rounded-full mt-2">
                    <div
                      className="absolute top-0 h-2 bg-blue-400 rounded-full"
                      style={{ width: `${spend}%` }}
                    />
                    <div
                      className="absolute top-0 h-4 w-1 bg-green-500 left-0 -translate-y-1"
                      style={{ left: `calc(${aiRecommended}% - 1px)` }}
                      title="AI Recommended"
                    />
                  </div>
                  <div className="mt-2 text-xs text-green-500">
                    AI Recommended Spend: {aiRecommended}%
                  </div>
                </div>
                <div className="mb-6 p-2 rounded-2xl bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Spend to Result (12w trend)</span>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center flex-1">
                      <span className="text-2xl font-bold text-blue-600">+22%</span>
                      <span className="text-xs text-gray-500">Order Uplift</span>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <span className="text-2xl font-bold text-green-600">$1,250</span>
                      <span className="text-xs text-gray-500">Avg Weekly Promo Spend</span>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <span className="text-2xl font-bold text-orange-500">8.5</span>
                      <span className="text-xs text-gray-500">Promo ROI</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Promotions */}
          <div className="bg-white p-5 rounded-2xl shadow border flex flex-col">
            <h2 className="text-base font-semibold mb-1 text-[#253847] text-center">Promotions</h2>
            {toggle === "insights" ? (
              <>
                <ul className="space-y-2 mb-2">
                  {promos.map((promo, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{promo.name}</span>
                        <span className="text-xs text-gray-400 ml-2">{promo.type}</span>
                        <span className={`ml-2 text-xs font-bold ${promo.active ? "text-green-600" : "text-gray-400"}`}>
                          ● {promo.active ? "Active" : "Inactive"}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-[#B3282D]">{promo.spend}</span>
                    </li>
                  ))}
                </ul>
                <MiniTrend trends={promos} label="Trends" />
              </>
            ) : (
              <div className="text-center mt-2 text-xs text-gray-500">Promo controls coming soon…</div>
            )}
          </div>
        </div>
        {/* Carousel Nav */}
        <div className="flex justify-between mt-8 text-sm">
          <Link to="/control-panel/operations" className="text-[#2679c8] hover:underline">← Operations</Link>
          <Link to="/control-panel/menu" className="text-[#2679c8] hover:underline">Menu →</Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default MarketingPanel;
