import { useState } from "react";
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

export default function MenuPanel() {
  const [showMissing, setShowMissing] = useState(true);

  return (
    <PageWrapper>
         <div className="max-w-5xl mx-auto px-6 py-0">
        {/* Title + Toggle */}
        <div className="flex items-center justify-between mt-0 mb-4">
          <h1 className="text-2xl font-bold text-[#253847]">Menu Conrol Panel</h1>
          <div className="flex bg-[rgba(179,40,45,0.09)] rounded-full w-52 h-8 shadow-inner cursor-pointer text-xs border border-[#b3282d]">
            <button
              className={`flex-1 px-3 py-1 rounded-full transition font-bold
                ${view === "insights" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-[rgba(179,40,45,0.09)]"}`}
              style={{ fontSize: "13px", height: "32px", transition: "all 0.15s" }}
              onClick={() => setView("insights")}
            >
              Insights
            </button>
            <button
              className={`flex-1 px-3 py-1 rounded-full transition font-bold
                ${view === "controls" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-[rgba(179,40,45,0.09)]"}`}
              style={{ fontSize: "13px", height: "32px", transition: "all 0.15s" }}
              onClick={() => setView("controls")}
            >
              Controls
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-4">
          <FilterBar onApply={handleApply} />
        </div>
        {/* Data Quick View */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white shadow p-4 rounded-2xl flex flex-col items-center">
            <span className="text-2xl font-bold">36</span>
            <span className="text-xs text-gray-500">Total Menu Items</span>
          </div>
          <div className="bg-white shadow p-4 rounded-2xl flex flex-col items-center">
            <span className="text-2xl font-bold">$12.90</span>
            <span className="text-xs text-gray-500">Avg Price</span>
          </div>
        </div>
        {/* Attribute Checks */}
        <div className="mb-6 bg-white shadow rounded-2xl p-4">
          <div className="font-medium mb-2">Attributes</div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center">
              <span className="font-bold text-red-500">3</span>
              <span className="text-xs text-gray-500">Missing Descriptions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-yellow-600">2</span>
              <span className="text-xs text-gray-500">Missing Photos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-blue-600">12</span>
              <span className="text-xs text-gray-500">Tagged 'Vegan'</span>
            </div>
          </div>
          <div className="flex items-center mt-4 gap-2">
            <input
              type="checkbox"
              checked={showMissing}
              onChange={() => setShowMissing(!showMissing)}
              className="accent-blue-500"
              id="missingToggle"
            />
            <label htmlFor="missingToggle" className="text-sm">Show only items missing info</label>
          </div>
        </div>
        {/* Price Comparisons */}
        <div className="mb-6 bg-white shadow rounded-2xl p-4">
          <div className="font-medium mb-2">Price Comparison</div>
          <div className="flex justify-between text-sm">
            <span>Burger</span>
            <span>$9.00 (You) / $9.50 (Avg)</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Pizza</span>
            <span>$13.00 (You) / $12.75 (Avg)</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Salad</span>
            <span>$8.00 (You) / $8.25 (Avg)</span>
          </div>
        </div>
        {/* Carousel Nav */}
        <div className="flex justify-between mt-8">
          <Link to="/control-panel/MarketingPanel" className="text-blue-500 hover:underline">← Marketing</Link>
          <Link to="/control-panel/LocationsPanel" className="text-blue-500 hover:underline">Locations →</Link>
        </div>
      </div>
    </PageWrapper>
  );
}
