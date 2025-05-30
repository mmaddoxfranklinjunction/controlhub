// src/components/shared/FilterBar.js
import React, { useState } from "react";

const FilterBar = ({ filters = [], onApply }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [values, setValues] = useState({});

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    onApply && onApply(values);
    setShowFilters(false);
  };

  return (
    <div className="w-full mb-3 flex items-center justify-between">
      {/* Main filter toggle button */}
      <button
        onClick={() => setShowFilters((show) => !show)}
        className="bg-[#A6B9C7] border border-[#A6B9C7] text-white px-3 py-1 rounded-full font-semibold text-xs shadow hover:bg-[#92a6b4] transition"
        style={{ minWidth: 0 }}
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {showFilters && (
        <div className="ml-4 flex flex-wrap gap-3 items-center bg-white p-3 rounded-xl shadow border border-gray-100">
          {filters.map((filter) => (
            <div key={filter.name} className="flex flex-col">
              <label className="text-xs text-gray-500 mb-1">{filter.label}</label>
              <input
                type={filter.type || "text"}
                value={values[filter.name] || ""}
                onChange={e => handleChange(filter.name, e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-xs"
                placeholder={filter.placeholder}
              />
            </div>
          ))}
          <button
            onClick={handleApply}
            className="ml-2 px-3 py-1 rounded-full bg-[#A6B9C7] text-white font-semibold text-xs hover:bg-[#92a6b4] transition"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
