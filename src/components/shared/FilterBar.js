import React, { useState } from "react";
import { DatePicker } from "antd";
import "antd/dist/reset.css";
import { locationOptions, brandOptions, channelOptions } from "../../data/filterOptions";

const FilterBar = ({ onApply }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [toggle, setToggle] = useState("insights");
  const [values, setValues] = useState({
    location: "",
    brand: "",
    channel: "",
    date: ""
  });

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    onApply?.(values);
    setShowFilters(false);
  };

  return (
    <div className="w-full flex flex-col space-y-2 mb-4">
      {/* Row: Toggle and Filter Button */}
      <div className="flex justify-between items-center">
        {/* Pill Toggle */}
        <div className="flex bg-[rgba(179,40,45,0.09)] rounded-full w-52 h-8 shadow-inner text-xs border border-[#b3282d]">
          <button
            className={`flex-1 px-3 py-1 rounded-full transition font-bold ${
              toggle === "insights"
                ? "bg-[#b3282d] text-white shadow"
                : "text-[#b3282d] bg-[rgba(179,40,45,0.09)]"
            }`}
            style={{ fontSize: "13px", height: "32px" }}
            onClick={() => setToggle("insights")}
          >
            Insights
          </button>
          <button
            className={`flex-1 px-3 py-1 rounded-full transition font-bold ${
              toggle === "controls"
                ? "bg-[#b3282d] text-white shadow"
                : "text-[#b3282d] bg-[rgba(179,40,45,0.09)]"
            }`}
            style={{ fontSize: "13px", height: "32px" }}
            onClick={() => setToggle("controls")}
          >
            Controls
          </button>
        </div>

        {/* Toggle filter dropdown */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="ml-3 bg-[#A6B9C7] border border-[#A6B9C7] text-white px-4 py-1.5 rounded-[12px] text-xs font-semibold hover:bg-[#92a6b4] transition"
          style={{ height: "32px" }}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filters Section */}
      {showFilters && (
        <div className="flex flex-wrap gap-4 items-end mt-2 p-4 bg-white border border-gray-200 rounded-xl shadow">
          <div className="flex flex-col min-w-[140px]">
            <label className="text-xs text-gray-500 mb-1">Location</label>
            <select
              value={values.location}
              onChange={(e) => handleChange("location", e.target.value)}
              className="border border-[#A6B9C7] rounded-lg px-3 py-1 text-sm bg-[#f9fafb]"
            >
              <option value="">All</option>
              {locationOptions.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col min-w-[140px]">
            <label className="text-xs text-gray-500 mb-1">Brand</label>
            <select
              value={values.brand}
              onChange={(e) => handleChange("brand", e.target.value)}
              className="border border-[#A6B9C7] rounded-lg px-3 py-1 text-sm bg-[#f9fafb]"
            >
              <option value="">All</option>
              {brandOptions.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col min-w-[140px]">
            <label className="text-xs text-gray-500 mb-1">Channel</label>
            <select
              value={values.channel}
              onChange={(e) => handleChange("channel", e.target.value)}
              className="border border-[#A6B9C7] rounded-lg px-3 py-1 text-sm bg-[#f9fafb]"
            >
              <option value="">All</option>
              {channelOptions.map((ch) => (
                <option key={ch} value={ch}>{ch}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col min-w-[140px]">
            <label className="text-xs text-gray-500 mb-1">Date</label>
            <DatePicker
              onChange={(date, dateString) => handleChange("date", dateString)}
              className="rounded-lg px-2 py-1 text-sm border border-[#A6B9C7] bg-[#f9fafb]"
              style={{ height: "32px" }}
            />
          </div>

          <button
            onClick={handleApply}
            className="ml-2 px-4 py-1.5 rounded-md bg-[#A6B9C7] text-white font-semibold text-xs hover:bg-[#92a6b4] transition"
            style={{ height: "32px" }}
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
