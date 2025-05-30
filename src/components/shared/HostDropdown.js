// src/components/shared/HostDropdown.js

import React, { useState } from "react";

const mockHosts = [
  { name: "689 W SOUTH JORDAN PKWY", selected: true },
  { name: "BDP0006 TQ27 - Downtown", selected: false },
  { name: "BDP0008 TQ27 - Holladay", selected: false },
];

const HostDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mb-6" style={{ fontFamily: "Futura, sans-serif" }}>
      {/* Selected Host */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left rounded-2xl border border-gray-300 bg-[#b0c2d0] px-5 py-3 shadow focus:outline-none flex flex-col relative"
        style={{
          boxShadow: "0 1px 6px 0 rgba(10,40,60,0.08)",
        }}
      >
        <span className="font-bold text-lg text-[#253847] truncate">
          {mockHosts.find((h) => h.selected)?.name || "Select a host"}
        </span>
        <span className="absolute right-5 top-5 text-gray-500">
          <svg width={18} height={18}><path d="M6 8l3 3 3-3" stroke="#899BA8" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
        </span>
      </button>

      {/* Dropdown List */}
      {open && (
        <div
          className="absolute left-0 w-full z-30 bg-white rounded-2xl border border-gray-200 shadow-xl mt-2 py-3"
        >
          <div className="flex items-center px-5 pb-2">
            <svg width={18} height={18} className="mr-2 text-gray-400">
              <circle cx="9" cy="9" r="8" stroke="#B0C2D0" strokeWidth="2" fill="none" />
              <rect x="8" y="4" width="2" height="6" rx="1" fill="#B0C2D0"/>
              <rect x="8" y="12" width="2" height="2" rx="1" fill="#B0C2D0"/>
            </svg>
            <input
              className="w-full border-2 border-[#b3282d] rounded-xl px-3 py-2 text-base font-medium text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Select a host"
              disabled
              style={{ background: "#f9fbfd" }}
            />
          </div>
          <div>
            {mockHosts.map((host, i) => (
              <div key={i} className="px-5 py-2 hover:bg-gray-100 border-b last:border-b-0 cursor-pointer flex flex-col">
                <span className="font-bold text-lg text-[#253847] leading-5">
                  {host.name}
                  {host.selected && (
                    <span className="ml-2 text-[#b3282d] align-middle">✔</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HostDropdown;
