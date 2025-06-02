import React from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

const RatingsFeedback = () => (
  <div className="p-6">
       <div className="max-w-5xl mx-auto px-6 py-0">
        {/* Title + Toggle */}
        <div className="flex items-center justify-between mt-0 mb-4">
          <h1 className="text-2xl font-bold text-[#253847]">Ratings & Feedback</h1>
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

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      
        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Doordash Avg Rating</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">3.7</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">UberEats Avg Rating</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">4.1</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Doordash 5-Star %</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">57.2%</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">UberEats 5-Star %</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">65.7%</p>
        </div>
    </div>
  </div>
);

export default RatingsFeedback;
