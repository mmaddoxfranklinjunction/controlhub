// src/components/shared/HostDropdown.js

import React, { useState } from "react";

const mockHosts = [
  { name: "All Hosts", selected: true },
  { name: "Denny's", selected: false },
  { name: "Georgia Diner", selected: false },
  { name: "Catappult", selected: false },
];

const HostDropdown = () => {
  const [open, setOpen] = useState(false);

  // Set small font size (75% smaller)
  const fontSize = "0.70rem"; // base is 1rem, so 25%

  return (
    <div className="relative mb-3" style={{ fontFamily: "Futura, sans-serif" }}>
      {/* Label */}
      <label
        htmlFor="host-dropdown"
        className="block text-[#A5BAC9] font-semibold mb-1"
        style={{
          fontSize: "0.80rem",
          letterSpacing: "0.04em",
        }}
      >
        Fetch Host
      </label>
      {/* Dropdown field */}
      <button
        id="host-dropdown"
        onClick={() => setOpen((v) => !v)}
        className="w-[92%] text-left border border-gray-300 bg-[#b0c2d0] px-4 py-2 shadow focus:outline-none flex items-center relative"
        style={{
          borderRadius: "0.6rem", // less rounded
          fontSize: fontSize,
          minHeight: "1.6rem",
          fontWeight: 600,
        }}
      >
        <span className="truncate text-[#253847] font-bold">
          {mockHosts.find((h) => h.selected)?.name || "All Hosts"}
        </span>
        <span className="absolute right-3 top-2 text-gray-500">
          <svg width={13} height={13}><path d="M4 5l2.5 2.5L9 5" stroke="#899BA8" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
        </span>
      </button>
      {/* Dropdown List */}
      {open && (
        <div
          className="absolute left-0 w-[92%] z-30 bg-white rounded-lg border border-gray-200 shadow-xl mt-1 py-1"
          style={{ fontSize: fontSize, minWidth: "150px" }}
        >
          {mockHosts.map((host, i) => (
            <div
              key={i}
              className="px-4 py-2 hover:bg-gray-100 border-b last:border-b-0 cursor-pointer"
            >
              <span className="font-bold text-[#253847]">
                {host.name}
                {host.selected && (
                  <span className="ml-1 text-[#b3282d] align-middle">✔</span>
                )}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HostDropdown;
