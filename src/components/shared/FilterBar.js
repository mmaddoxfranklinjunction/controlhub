
// src/components/shared/FilterBar.js
import React, { useState } from "react";

const FilterBar = ({ filters = [], onApply }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [values, setValues] = useState({});
  const [toggle, setToggle] = useState("insights");

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    onApply && onApply({ ...values, toggle });
    setShowFilters(false);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Row with pill toggle + filter button */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* Pill Toggle */}
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

        {/* Toggle Filter Visibility Button */}
        <button
          onClick={() => setShowFilters((show) => !show)}
          className="bg-[#A6B9C7] border border-[#A6B9C7] text-white px-3 py-1 rounded font-semibold text-xs shadow-sm hover:bg-[#92a6b4] transition"
          style={{ height: "32px", fontSize: "13px" }}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Dropdown Filter Panel */}
      {showFilters && (
        <div className="mt-2 z-10 bg-white py-3 px-4 rounded-[18px] shadow border border-gray-100 flex flex-wrap gap-4 items-end w-full">
          {filters.map((filter) => (
            <div key={filter.name} className="flex flex-col min-w-[120px]">
              <label className="text-xs text-gray-500 mb-1">{filter.label}</label>
              <input
                type={filter.type || "text"}
                value={values[filter.name] || ""}
                onChange={(e) => handleChange(filter.name, e.target.value)}
                className="border border-[#A6B9C7] rounded-[16px] px-3 py-1 text-sm bg-[#f9fafb] focus:border-[#6e8598] outline-none transition"
                placeholder={filter.placeholder}
                style={{ height: "32px", fontSize: "13px" }}
              />
            </div>
          ))}
          <button
            onClick={handleApply}
            className="px-4 py-1 rounded-[16px] bg-[#A6B9C7] text-white font-semibold text-xs hover:bg-[#92a6b4] transition"
            style={{ height: "32px", fontSize: "13px" }}
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
