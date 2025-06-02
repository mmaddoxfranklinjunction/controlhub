import React, { useState } from "react";
import { locations, brands, channels } from '../../data/filterOptions';

const FilterBar = ({ onApply }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [values, setValues] = useState({});
  const [toggle, setToggle] = useState("insights");

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    onApply && onApply(values);
    setShowFilters(false);
  };

  const filters = [
    { name: "location", label: "Location", placeholder: "Select location", type: "select", options: locations },
    { name: "brand", label: "Brand", placeholder: "Select brand", type: "select", options: brands },
    { name: "channel", label: "Channel", placeholder: "Select channel", type: "select", options: channels },
    { name: "date", label: "Date", placeholder: "", type: "date" },
  ];

  return (
    <div className="w-full mb-3">
      {/* Top Row: Pill toggle + Filter button */}
      <div className="flex items-center gap-4">
        {/* Toggle */}
        <div className="flex bg-[rgba(179,40,45,0.09)] rounded-full w-52 h-8 shadow-inner cursor-pointer text-xs border border-[#b3282d]">
          <button
            className={\`flex-1 px-3 py-1 rounded-full transition font-bold \${toggle === "insights" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-[rgba(179,40,45,0.09)]"}\`}
            style={{ fontSize: "13px", height: "32px" }}
            onClick={() => setToggle("insights")}
          >
            Insights
          </button>
          <button
            className={\`flex-1 px-3 py-1 rounded-full transition font-bold \${toggle === "controls" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-[rgba(179,40,45,0.09)]"}\`}
            style={{ fontSize: "13px", height: "32px" }}
            onClick={() => setToggle("controls")}
          >
            Controls
          </button>
        </div>

        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilters((show) => !show)}
          className="bg-[#A6B9C7] border border-[#A6B9C7] text-white px-3 py-1 rounded-md font-semibold text-xs shadow-sm hover:bg-[#92a6b4] transition"
          style={{ fontWeight: 600 }}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filters Dropdown */}
      {showFilters && (
        <div className="mt-3 flex flex-wrap gap-4 items-end">
          {filters.map((filter) => (
            <div key={filter.name} className="flex flex-col min-w-[140px]">
              <label className="text-xs text-gray-500 mb-1">{filter.label}</label>
              {filter.type === "select" ? (
                <select
                  value={values[filter.name] || ""}
                  onChange={e => handleChange(filter.name, e.target.value)}
                  className="border border-[#A6B9C7] rounded-md px-3 py-1.5 text-sm bg-[#f9fafb] focus:border-[#6e8598] outline-none transition"
                >
                  <option value="">All</option>
                  {filter.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={filter.type}
                  value={values[filter.name] || ""}
                  onChange={e => handleChange(filter.name, e.target.value)}
                  className="border border-[#A6B9C7] rounded-md px-3 py-1.5 text-sm bg-[#f9fafb] focus:border-[#6e8598] outline-none transition"
                />
              )}
            </div>
          ))}
          <button
            onClick={handleApply}
            className="px-5 py-1.5 rounded-md bg-[#A6B9C7] text-white font-semibold text-xs hover:bg-[#92a6b4] transition"
            style={{ fontWeight: 600 }}
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;