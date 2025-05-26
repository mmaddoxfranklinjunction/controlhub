

import React, { useState } from 'react';

const doordashData = [
  { id: "BDP0001", errorRate: "13.75%", errorCharges: "$123", recapture: "$101", recapturePercent: "82.0%" },
  { id: "BDP0002", errorRate: "4.00%", errorCharges: "$101", recapture: "$72", recapturePercent: "71.4%" },
  { id: "BDP0003", errorRate: "12.00%", errorCharges: "$238", recapture: "$149", recapturePercent: "62.6%" },
  { id: "BDP0004", errorRate: "13.51%", errorCharges: "$82", recapture: "$70", recapturePercent: "85.4%" },
  { id: "DEN7869", errorRate: "3.23%", errorCharges: "$16", recapture: "$33", recapturePercent: "200.0%" },
  { id: "DEN7868", errorRate: "6.34%", errorCharges: "$108", recapture: "$53", recapturePercent: "49.3%" },
  // Add more rows if desired...
];

const uberData = [
  { id: "BDP0003", errorRate: "2.74%", errorCharges: "$70", recapture: "$64", recapturePercent: "92.0%" },
  { id: "DEN6351", errorRate: "12.50%", errorCharges: "$18", recapture: "$18", recapturePercent: "100.0%" },
  { id: "DEN7871", errorRate: "6.06%", errorCharges: "$18", recapture: "$14", recapturePercent: "81.2%" },
  { id: "DEN7876", errorRate: "17.24%", errorCharges: "$79", recapture: "$75", recapturePercent: "95.2%" },
  { id: "DEN9254", errorRate: "25.00%", errorCharges: "$24", recapture: "$24", recapturePercent: "100.0%" },
  { id: "FRS0005", errorRate: "11.67%", errorCharges: "$66", recapture: "$14", recapturePercent: "21.2%" },
  // Add more rows if desired...
];

const RevenueRecovery = () => {
  const [search, setSearch] = useState('');

  const filterData = (data) => {
    return data.filter(row => row.id.toLowerCase().includes(search.toLowerCase()));
  };

  return (
    <div className="px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-[#253847] mb-2">Revenue Recovery</h1>
        <input
          type="text"
          placeholder="Search Merchant Store ID"
          className="px-4 py-2 border rounded w-full md:w-1/2 text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Doordash Table */}
        <div className="bg-white rounded-xl border shadow-sm p-6 overflow-x-auto">
          <h2 className="text-lg font-semibold text-[#253847] mb-4">Doordash</h2>
          <table className="w-full text-sm text-left border-separate border-spacing-y-2">
            <thead className="text-[#5C6B7A]">
              <tr>
                <th>Store ID</th>
                <th>Error Rate</th>
                <th>Charges</th>
                <th>Recapture</th>
                <th>Recapture %</th>
              </tr>
            </thead>
            <tbody>
              {filterData(doordashData).map((row, i) => (
                <tr key={i} className="bg-[#f9f9f9] rounded">
                  <td className="py-2 px-2">{row.id}</td>
                  <td>{row.errorRate}</td>
                  <td>{row.errorCharges}</td>
                  <td>{row.recapture}</td>
                  <td>{row.recapturePercent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* UberEats Table */}
        <div className="bg-white rounded-xl border shadow-sm p-6 overflow-x-auto">
          <h2 className="text-lg font-semibold text-[#253847] mb-4">UberEats</h2>
          <table className="w-full text-sm text-left border-separate border-spacing-y-2">
            <thead className="text-[#5C6B7A]">
              <tr>
                <th>Store ID</th>
                <th>Error Rate</th>
                <th>Charges</th>
                <th>Recapture</th>
                <th>Recapture %</th>
              </tr>
            </thead>
            <tbody>
              {filterData(uberData).map((row, i) => (
                <tr key={i} className="bg-[#f9f9f9] rounded">
                  <td className="py-2 px-2">{row.id}</td>
                  <td>{row.errorRate}</td>
                  <td>{row.errorCharges}</td>
                  <td>{row.recapture}</td>
                  <td>{row.recapturePercent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RevenueRecovery;

