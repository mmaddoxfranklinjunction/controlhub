import React, { useState, useEffect } from "react";
import filterOptions from "../../data/filterOptions"; // must export location, brand, channel arrays

const FilterBar = ({ onApply }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [values, setValues] = useState({
    location: "",
    brand: "",
    channel: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    onApply && onApply(values);
    setShowFilters(false);
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-4 mb-2">
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="bg-[#A6B9C7] border border-[#A6B9C7] text-white px-4 py-1.5 rounded-[12px] font-semibold text-xs hover:bg-[#92a6b4] transition"
          style={{ height: "34px" }}
        >
          {showFilters ? "Apply & Hide" : "Show Filters"}
        </button>
        {showFilters && (
          <div className="flex flex-wrap items-end gap-4">
            {/* Location */}
            <div className="flex flex-col min-w-[120px]">
              <label className="text-xs text-gray-500 mb-1">Location</label>
              <select
                name="location"
                value={values.location}
                onChange={handleChange}
                className="border border-[#A6B9C7] rounded-md px-2 py-1.5 text-sm"
              >
                <option value="">All</option>
                {filterOptions.locations.map((loc, i) => (
                  <option key={i} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Brand */}
            <div className="flex flex-col min-w-[120px]">
              <label className="text-xs text-gray-500 mb-1">Brand</label>
              <select
                name="brand"
                value={values.brand}
                onChange={handleChange}
                className="border border-[#A6B9C7] rounded-md px-2 py-1.5 text-sm"
              >
                <option value="">All</option>
                {filterOptions.brands.map((brand, i) => (
                  <option key={i} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Channel */}
            <div className="flex flex-col min-w-[120px]">
              <label className="text-xs text-gray-500 mb-1">Channel</label>
              <select
                name="channel"
                value={values.channel}
                onChange={handleChange}
                className="border border-[#A6B9C7] rounded-md px-2 py-1.5 text-sm"
              >
                <option value="">All</option>
                {filterOptions.channels.map((channel, i) => (
                  <option key={i} value={channel}>{channel}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col min-w-[120px]">
              <label className="text-xs text-gray-500 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={values.date}
                onChange={handleChange}
                className="border border-[#A6B9C7] rounded-md px-2 py-1.5 text-sm"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
