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

// SVG line chart generator (6 data points, larger/focal)
function MiniTrend({ trends }) {
  return (
    <svg viewBox="0 0 400 90" width="100%" height="90" className="my-2">
      {trends.map((item, idx) => {
        // Normalize points to SVG height
        const points = item.trend.map((v, i) => [
          (i / 5) * 390 + 5,
          80 - ((v - 3) / 15) * 65, // scale/offset
        ]);
        const path = points.map((pt, i) => `${i === 0 ? "M" : "L"}${pt[0]},${pt[1]}`).join(" ");
        return (
          <path
            key={item.name}
            d={path}
            stroke={item.color}
            strokeWidth={3.5}
            fill="none"
            style={{ opacity: 0.93, filter: "drop-shadow(0 1px 3px #b6c6da44)" }}
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
      <div className="max-w-5xl mx-auto py-3 font-[Futura,sans-serif]">
        {/* Header Row: Title left, toggle right */}
        <div className="flex items-center justify-between mb-1 mt-2">
          <h1 className="text-xl font-bold text-[#253847]">Marketing Panel</h1>
          <div className="flex bg-gray-100 rounded-full w-32 h-7 shadow-inner cursor-pointer text-xs">
            <button
              className={`flex-1 px-2 py-1 rounded-full transition font-bold 
                ${toggle === "insights" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-transparent"}`}
              onClick={() => setToggle("insights")}
              style={{ transition: "all 0.15s" }}
            >
              Insights
            </button>
            <button
              className={`flex-1 px-2 py-1 rounded-full transition font-bold 
                ${toggle === "controls" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-transparent"}`}
              onClick={() => setToggle("controls")}
              style={{ transition: "all 0.15s" }}
            >
              Controls
            </button>
          </div>
        </div>
        {/* FilterBar */}
        <div className="mb-4">
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
                <MiniTrend trends={adCampaigns} />
              </>
            ) : (
              <div className="text-center">
                <div className="mb-2 font-medium text-[#B3282D]">Adjust Ad Campaigns</div>
                <div className="text-xs text-gray-500">Ad controls coming soon…</div>
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
                <MiniTrend trends={promos} />
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
