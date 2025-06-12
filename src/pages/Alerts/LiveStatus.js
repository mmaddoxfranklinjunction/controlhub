// src/pages/Alerts/LiveStatus.js
import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

const LiveStatus = () => {
  const [search, setSearch] = useState('');

  const lastUpdated = new Date().toLocaleTimeString();

  const downStats = {
    totalDown: 2,
    totalOpen: 120,
    totalClosed: 19
  };

  const channelDetails = {
    'Uber Eats': [
      { storeId: 'DEN8874', status: 'Orders Unavailable' },
      { storeId: 'DEN7587', status: 'Orders Unavailable' }
    ],
    DoorDash: [
      { storeId: 'DEN7587', status: 'Has Closed' },
      { storeId: 'DEN6773', status: 'Has Closed' }
    ]
  };

  const storeDowntime = [
    { name: "Bennigan's On The Fly (Edmonds, WA)", percent: 96.8 },
    { name: "TOHC (Palm Springs, CA)", percent: 94.3 },
    { name: "Bennigan's On The Fly (Port Hueneme, CA)", percent: 91.9 }
  ];

  return (
    <PageWrapper>
      <div className="px-6 py-4">
        {/* Title + Filters */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-[#253847] font-sans">Live Status</h1>
          <div className="flex-1 ml-6">
            <FilterBar onApply={() => {}} />
          </div>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#f9fafb] border rounded-lg p-4">
            <p className="text-sm text-gray-500">Total Down</p>
            <p className="text-2xl font-semibold text-red-600">{downStats.totalDown}</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-4">
            <p className="text-sm text-gray-500">Total Open</p>
            <p className="text-2xl font-semibold text-green-500">{downStats.totalOpen}</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-4">
            <p className="text-sm text-gray-500">Total Closed</p>
            <p className="text-2xl font-semibold text-gray-800">{downStats.totalClosed}</p>
          </div>
        </div>

        {/* Dual Table Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Uber Eats Table */}
          <div className="bg-white border rounded-lg p-4">
            <h2 className="text-md font-semibold text-[#253847] mb-2">Uber Eats Status</h2>
            <table className="w-full text-sm text-left">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th className="py-1">Store ID</th>
                  <th className="py-1">Status</th>
                </tr>
              </thead>
              <tbody>
                {channelDetails['Uber Eats'].map((row, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-1">{row.storeId}</td>
                    <td className="py-1 text-red-600">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* DoorDash Table */}
          <div className="bg-white border rounded-lg p-4">
            <h2 className="text-md font-semibold text-[#253847] mb-2">DoorDash Status</h2>
            <table className="w-full text-sm text-left">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th className="py-1">Store ID</th>
                  <th className="py-1">Status</th>
                </tr>
              </thead>
              <tbody>
                {channelDetails['DoorDash'].map((row, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-1">{row.storeId}</td>
                    <td className="py-1 text-gray-700">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Store Downtime Table */}
        <div className="bg-white border rounded-lg p-4">
          <h2 className="text-md font-semibold text-[#253847] mb-2">Downtime by Store</h2>
          <table className="w-full text-sm text-left">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="py-1">Store Name</th>
                <th className="py-1 text-right">Downtime %</th>
              </tr>
            </thead>
            <tbody>
              {storeDowntime.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-1">{row.name}</td>
                  <td className="py-1 text-right">{row.percent.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-xs text-gray-400 mt-2">Last updated {lastUpdated}</div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default LiveStatus;
