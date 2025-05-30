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
    <div className="relative mb-3">
      {/* Filter Toggle Button */}
      <button
        onClick={() => setShowFilters((show) => !show)}
        className="bg-[#A6B9C7] border border-[#A6B9C7] text-white px-4 py-1.5 rounded-[20px] font-semibold text-xs shadow-sm hover:bg-[#92a6b4] transition min-w-[110px]"
        style={{
          height: "38px",
          fontWeight: 600,
          fontSize: "1rem",
          letterSpacing: "0.01em",
        }}
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Dropdown Panel */}
      {showFilters && (
        <div className="absolute left-0 mt-2 z-10 bg-white py-3 px-4 rounded-[18px] shadow border border-gray-100 flex flex-wrap gap-3 items-end min-h-[50px] w-max">
          {filters.map((filter) => (
            <div key={filter.name} className="flex flex-col min-w-[120px]">
              <label className="text-xs text-gray-500 mb-1">{filter.label}</label>
              <input
                type={filter.type || "text"}
                value={values[filter.name] || ""}
                onChange={e => handleChange(filter.name, e.target.value)}
                className="border border-[#A6B9C7] rounded-[16px] px-3 py-1.5 text-sm bg-[#f9fafb] focus:border-[#6e8598] outline-none transition"
                placeholder={filter.placeholder}
                style={{
                  height: "38px",
                  fontSize: "1rem",
                }}
              />
            </div>
          ))}
          <button
            onClick={handleApply}
            className="ml-2 px-5 py-1.5 rounded-[20px] bg-[#A6B9C7] text-white font-semibold text-xs hover:bg-[#92a6b4] transition"
            style={{
              height: "38px",
              fontWeight: 600,
              fontSize: "1rem"
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
