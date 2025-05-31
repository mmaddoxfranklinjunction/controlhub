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
    <div className="relative mb-4">
      {/* Toggle Button */}
      <button
        onClick={() => setShowFilters((show) => !show)}
        className="bg-[#A6B9C7] border border-[#A6B9C7] text-white px-3 py-1 rounded-md font-semibold text-xs shadow-sm hover:bg-[#92a6b4] transition min-w-[90px]"
        style={{
          height: "34px",
          fontSize: "0.8rem",
          fontWeight: 600,
        }}
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Filter Fields */}
      {showFilters && (
        <div className="absolute left-0 mt-2 z-10 bg-white py-3 px-4 rounded-md shadow border border-gray-100 flex gap-4 items-end flex-wrap w-auto">
          {filters.map((filter) => (
            <div key={filter.name} className="flex flex-col">
              <label className="text-xs text-gray-500 mb-1">{filter.label}</label>
              <input
                type={filter.type || "text"}
                value={values[filter.name] || ""}
                onChange={(e) => handleChange(filter.name, e.target.value)}
                className="border border-[#A6B9C7] rounded-md px-3 py-1 text-sm bg-[#f9fafb] focus:border-[#6e8598] outline-none transition"
                placeholder={filter.placeholder}
                style={{
                  height: "34px",
                  fontSize: "0.875rem",
                }}
              />
            </div>
          ))}
          <button
            onClick={handleApply}
            className="ml-2 px-4 py-1 bg-[#A6B9C7] text-white rounded-md font-semibold text-xs hover:bg-[#92a6b4] transition"
            style={{
              height: "34px",
              fontSize: "0.875rem",
              fontWeight: 600
            }}
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
