import { useState } from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../../components/shared/PageWrapper";
import FilterBar from "../../components/shared/FilterBar";

// Sample ad campaigns and promo data
const adCampaigns = [
  { name: "Search Boost", type: "Sponsored", spend: "$1,200/week", trend: [8, 12, 11, 14, 17, 18], color: "#2679c8", active: true },
  { name: "Banner Ad: Summer BBQ", type: "Display", spend: "$750/week", trend: [3, 5, 8, 7, 11, 13], color: "#B3282D", active: true },
];

const promos = [
  { name: "BOGO Burgers", type: "BOGO", spend: "$520/week", trend: [10, 11, 9, 10, 13, 15], color: "#2679c8", active: true },
  { name: "Spend $20, Get $5", type: "Spend X Get Y", spend: "$360/week", trend: [6, 8, 7, 8, 7, 9], color: "#B3282D", active: true },
  { name: "Free Delivery", type: "Delivery", spend: "$610/week", trend: [7, 8, 7, 8, 10, 13], color: "#F9A602", active: true },
];

// SVG line chart generator (6 data points)
function MiniTrend({ trends }) {
  return (
    <svg viewBox="0 0 64 36" width={140} height={36} style={{ display: "block" }}>
      {trends.map((item, idx) => {
        // Normalize points to SVG height
        const points = item.trend.map((v, i) => [
          (i / 5) * 62 + 1,
          32 - ((v - 3) / 15) * 28, // scale/offset for prettiness
        ]);
        const path = points.map((pt, i) => `${i === 0 ? "M" : "L"}${pt[0]},${pt[1]}`).join(" ");
        return (
          <path
            key={item.name}
            d={path}
            stroke={item.color}
            strokeWidth={2.5}
            fill="none"
            style={{ opacity: 0.93 }}
          />
        );
      })}
    </svg>
  );
}

const MarketingPanel = () => {
  const [toggle, setToggle] = useState("insights");

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto py-4 font-[Futura,sans-serif]">
        {/* Title & Toggle */}
        <div className="flex flex-col items-center mb-3 mt-2 gap-0">
          <h1 className="text-3xl font-bold mb-1 text-[#253847]">Marketing Dashboard</h1>
          <div className="flex bg-gray-100 rounded-full w-60 h-10 shadow-inner cursor-pointer mt-1 mb-2">
            <button
              className={`flex-1 text-sm font-bold px-3 py-2 rounded-full transition 
                ${toggle === "insights" ? "bg-[#B3282D] text-white shadow" : "text-[#B3282D] bg-transparent"}`}
              onClick={() => setToggle("insights")}
              style={{ transition: "all 0.15s" }}
            >
              Insights
            </button>
            <button
              className={`flex-1 text-sm font-bold px-3 py-2 rounded-full transition 
                ${toggle === "controls" ? "bg-[#B3282D] text-white shadow" : "text-[#B3282D] bg-transparent"}`}
              onClick={() => setToggle("controls")}
              style={{ transition: "all 0.15s" }}
            >
              Controls
            </button>
          </div>
        </div>
        {/* Filters */}
        <div className="mb-4">
          <FilterBar />
        </div>

        {/* Two-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1">
          {/* Ad Campaigns */}
          <div className="bg-white p-5 rounded-2xl shadow border">
            <h2 className="text-lg font-semibold mb-2 text-[#253847] text-center">Ad Campaigns</h2>
            {toggle === "insights" ? (
              <>
                <ul className="space-y-2 mb-2">
                  {adCampaigns.filter(a => a.active).map((ad, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{ad.name}</span>
                        <span className="text-xs text-gray-400 ml-2">{ad.type}</span>
                      </div>
                      <span className="text-sm font-bold text-[#2679c8]">{ad.spend}</span>
                    </li>
                  ))}
                </ul>
                <MiniTrend trends={adCampaigns.filter(a => a.active)} />
              </>
            ) : (
              <div className="text-center">
                <div className="mb-2 font-medium text-[#B3282D]">Adjust Ad Campaigns</div>
                <div className="text-xs text-gray-500">Ad controls coming soon…</div>
              </div>
            )}
          </div>
          {/* Promotions */}
          <div className="bg-white p-5 rounded-2xl shadow border">
            <h2 className="text-lg font-semibold mb-2 text-[#253847] text-center">Promotions</h2>
            {toggle === "insights" ? (
              <>
                <ul className="space-y-2 mb-2">
                  {promos.filter(p => p.active).map((promo, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{promo.name}</span>
                        <span className="text-xs text-gray-400 ml-2">{promo.type}</span>
                      </div>
                      <span className="text-sm font-bold text-[#B3282D]">{promo.spend}</span>
                    </li>
                  ))}
                </ul>
                <MiniTrend trends={promos.filter(p => p.active)} />
              </>
            ) : (
              <div className="text-center">
                <div className="mb-2 font-medium text-[#B3282D]">Adjust Promotions</div>
                <div className="text-xs text-gray-500">Promo controls coming soon…</div>
              </div>
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
