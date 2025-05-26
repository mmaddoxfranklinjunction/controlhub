
import React, { useState } from 'react';
import { doordashData, uberData } from './data/RevenueRecoveryFullData';

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
