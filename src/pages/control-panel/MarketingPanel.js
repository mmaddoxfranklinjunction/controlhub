import { useState } from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../../components/shared/PageWrapper";
import FilterBar from "../../components/shared/FilterBar";

const adCampaigns = [
  { name: "Search Boost", type: "Sponsored", spend: "$1,200/week", active: true },
  { name: "Banner Ad: Summer BBQ", type: "Display", spend: "$750/week", active: true },
  { name: "Instagram Awareness", type: "Social", spend: "$400/week", active: false },
];

const promos = [
  { name: "BOGO Burgers", type: "BOGO", spend: "$520/week", active: true },
  { name: "Spend $20, Get $5", type: "Spend X Get Y", spend: "$360/week", active: true },
  { name: "Free Delivery", type: "Delivery", spend: "$610/week", active: true },
  { name: "Family Meal Combo", type: "Bundled", spend: "$200/week", active: false },
];

const MarketingPanel = () => {
  const [toggle, setToggle] = useState("insights");

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto py-8 font-[Futura,sans-serif]">
        {/* Top: FilterBar & Toggle */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-3">
          <FilterBar />
          {/* Pill Toggle */}
          <div className="flex-shrink-0">
            <div className="flex bg-gray-200 rounded-full w-52 h-10 shadow-inner cursor-pointer">
              <button
                className={`flex-1 text-sm font-bold px-3 py-2 rounded-full transition 
                  ${toggle === "insights" ? "bg-[#253847] text-white shadow" : "text-[#253847] bg-transparent"}`}
                onClick={() => setToggle("insights")}
              >
                Insights
              </button>
              <button
                className={`flex-1 text-sm font-bold px-3 py-2 rounded-full transition 
                  ${toggle === "controls" ? "bg-[#253847] text-white shadow" : "text-[#253847] bg-transparent"}`}
                onClick={() => setToggle("controls")}
              >
                Controls
              </button>
            </div>
          </div>
        </div>

        {/* Two-Column Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-3">
          {/* Left: Ad Campaigns */}
          <div className="bg-white p-6 rounded-2xl shadow border">
            <h2 className="text-lg font-semibold mb-4 text-[#253847] flex items-center gap-2">
              <span>📢</span> Ad Campaigns
            </h2>
            {toggle === "insights" ? (
              <ul className="space-y-4">
                {adCampaigns.filter(c => c.active).map((ad, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{ad.name}</span>
                      <span className="text-xs text-gray-400 ml-2">{ad.type}</span>
                    </div>
                    <span className="text-sm font-bold text-[#2679c8]">{ad.spend}</span>
                  </li>
                ))}
                {adCampaigns.every(c => !c.active) && <li className="text-gray-400 text-sm">No active ad campaigns</li>}
              </ul>
            ) : (
              <div>
                <div className="mb-2 font-medium text-[#B3282D]">Adjust Ad Campaigns</div>
                <div className="text-xs text-gray-500">Ad controls coming soon…</div>
              </div>
            )}
          </div>

          {/* Right: Promotions */}
          <div className="bg-white p-6 rounded-2xl shadow border">
            <h2 className="text-lg font-semibold mb-4 text-[#253847] flex items-center gap-2">
              <span>🎁</span> Promotions
            </h2>
            {toggle === "insights" ? (
              <ul className="space-y-4">
                {promos.filter(p => p.active).map((promo, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{promo.name}</span>
                      <span className="text-xs text-gray-400 ml-2">{promo.type}</span>
                    </div>
                    <span className="text-sm font-bold text-[#B3282D]">{promo.spend}</span>
                  </li>
                ))}
                {promos.every(p => !p.active) && <li className="text-gray-400 text-sm">No active promotions</li>}
              </ul>
            ) : (
              <div>
                <div className="mb-2 font-medium text-[#B3282D]">Adjust Promotions</div>
                <div className="text-xs text-gray-500">Promo controls coming soon…</div>
              </div>
            )}
          </div>
        </div>

        {/* Carousel Nav */}
        <div className="flex justify-between mt-10 text-sm">
          <Link to="/control-panel/operations" className="text-[#2679c8] hover:underline">← Operations</Link>
          <Link to="/control-panel/menu" className="text-[#2679c8] hover:underline">Menu →</Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default MarketingPanel;
