import React, { useState } from "react";

// Static filter options (from storelist data)
const locationOptions = [
  "GAD1655 - Duluth",
  "CAVA - Atlanta",
  "TOHC - Nashville",
  "Franklin Grille - Raleigh"
];
const brandOptions = ["CAVA", "TOHC", "Franklin Grille"];
const channelOptions = ["DoorDash", "Uber Eats"];

const FilterBar = ({ onApply, toggle, setToggle }) => {
  const [showFilters, setShowFilters] = useState(true);
  const [values, setValues] = useState({
    location: "",
    brand: "",
    channel: "",
    startDate: "",
    endDate: ""
  });

  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    onApply && onApply(values);
  };

  return (
    <div className="w-full mb-3">
      {/* Top Row: Toggle and Filters */}
      <div className="flex items-end flex-wrap gap-3 justify-start">
        {/* Toggle */}
        <div className="flex bg-[rgba(179,40,45,0.09)] rounded-full h-8 shadow-inner cursor-pointer text-xs border border-[#b3282d] overflow-hidden">
          <button
            className={`flex-1 px-3 py-1 rounded-full font-bold transition 
              ${toggle === "insights" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d]"}`}
            style={{ fontSize: "13px", height: "32px" }}
            onClick={() => setToggle("insights")}
          >
            Insights
          </button>
          <button
            className={`flex-1 px-3 py-1 rounded-full font-bold transition 
              ${toggle === "controls" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d]"}`}
            style={{ fontSize: "13px", height: "32px" }}
            onClick={() => setToggle("controls")}
          >
            Controls
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-end gap-4">
          <DropdownFilter
            label="Location"
            name="location"
            options={locationOptions}
            value={values.location}
            onChange={handleChange}
          />
          <DropdownFilter
            label="Brand"
            name="brand"
            options={brandOptions}
            value={values.brand}
            onChange={handleChange}
          />
          <DropdownFilter
            label="Channel"
            name="channel"
            options={channelOptions}
            value={values.channel}
            onChange={handleChange}
          />
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Start Date</label>
            <input
              type="date"
              value={values.startDate}
              onChange={e => handleChange("startDate", e.target.value)}
              className="border border-[#A6B9C7] rounded-md px-3 py-1.5 text-sm bg-[#f9fafb] focus:border-[#6e8598] outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">End Date</label>
            <input
              type="date"
              value={values.endDate}
              onChange={e => handleChange("endDate", e.target.value)}
              className="border border-[#A6B9C7] rounded-md px-3 py-1.5 text-sm bg-[#f9fafb] focus:border-[#6e8598] outline-none"
            />
          </div>

          {/* Apply Button */}
          <button
            onClick={handleApply}
            className="ml-1 px-4 py-2 rounded-md bg-[#A6B9C7] text-white font-semibold text-xs hover:bg-[#92a6b4] transition"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable dropdown filter
const DropdownFilter = ({ label, name, options, value, onChange }) => (
  <div className="flex flex-col min-w-[130px]">
    <label className="text-xs text-gray-500 mb-1">{label}</label>
    <select
      value={value}
      onChange={e => onChange(name, e.target.value)}
      className="border border-[#A6B9C7] rounded-md px-3 py-1.5 text-sm bg-[#f9fafb] focus:border-[#6e8598] outline-none"
    >
      <option value="">All</option>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default FilterBar;
