import React, { useState } from 'react';
import { doordashData, uberData } from './data/RevenueRecoveryFullData';
import PageWrapper from '../../components/shared/PageWrapper';

// Helper to extract unique sorted values from data
const getUniqueSorted = (data, key) => {
  const set = new Set();
  data.forEach(row => {
    if (row[key]) set.add(row[key]);
  });
  return Array.from(set).sort();
};

const RevenueRecovery = () => {
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Gather all data for dropdown options
  const allData = [...doordashData, ...uberData];
  const locations = ['All', ...getUniqueSorted(allData, 'location')];
  const brands = ['All', ...getUniqueSorted(allData, 'brand')];

  // Filter state
  const [location, setLocation] = useState('All');
  const [brand, setBrand] = useState('All');
  const [channel, setChannel] = useState('All');
  const [date, setDate] = useState('Current Week');

  // Channel options
  const channelOptions = ['All', 'Doordash', 'UberEats'];
  const dateOptions = ['Current Month', 'Current Week', 'Previous Week', 'Custom'];

  // Filter logic
  const filterData = (data) => {
    let filtered = data;
    if (location !== 'All') filtered = filtered.filter(row => row.location === location);
    if (brand !== 'All') filtered = filtered.filter(row => row.brand === brand);
    if (search) filtered = filtered.filter(row => row.id.toLowerCase().includes(search.toLowerCase()));
    return filtered;
  };

  // Filtered data per channel
  const doordashFiltered = channel === 'All' || channel === 'Doordash' ? filterData(doordashData) : [];
  const uberFiltered = channel === 'All' || channel === 'UberEats' ? filterData(uberData) : [];

  // Summary based on all filtered data
  const summaryData = [...doordashFiltered, ...uberFiltered];
  const errorRate = summaryData.length
    ? (summaryData.reduce((sum, r) => sum + parseFloat(r.errorRate || 0), 0) / summaryData.length).toFixed(1)
    : '0.0';
  const errorCharges = summaryData.length
    ? summaryData.reduce((sum, r) => sum + parseFloat(r.errorCharges || 0), 0)
    : 0;
  const recapture = summaryData.length
    ? summaryData.reduce((sum, r) => sum + parseFloat(r.recapture || 0), 0)
    : 0;
  const recapturePercent = summaryData.length
    ? (summaryData.reduce((sum, r) => sum + parseFloat(r.recapturePercent || 0), 0) / summaryData.length).toFixed(1)
    : '0.0';

  return (
    <PageWrapper>
      <div className="px-4 py-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-[#253847] mb-2">Revenue Recovery</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
            <input
              type="text"
              placeholder="Search Merchant Store ID"
              className="px-4 py-2 border rounded w-full md:w-1/2 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white rounded px-4 py-2 font-semibold text-sm"
              onClick={() => setShowFilters((v) => !v)}
              type="button"
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
          {showFilters && (
            <div className="bg-[#f4f7fa] border rounded-xl px-4 py-3 flex flex-wrap gap-3 mb-3">
              <div>
                <label className="block text-xs mb-1">Location</label>
                <select
                  className="border rounded px-2 py-1 text-sm"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  {locations.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Brand</label>
                <select
                  className="border rounded px-2 py-1 text-sm"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  {brands.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Channel</label>
                <select
                  className="border rounded px-2 py-1 text-sm"
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                >
                  {channelOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Date</label>
                <select
                  className="border rounded px-2 py-1 text-sm"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                >
                  {dateOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
          {/* Data Summary Row */}
          <div className="grid grid-cols-4 border rounded mb-4 text-center text-[#253847] font-semibold overflow-hidden">
            <div className="py-2 border-r bg-[#f4f7fa]">
              <div className="text-xs text-[#5C6B7A]">Error Rate</div>
              <div className="text-xl">{errorRate}%</div>
            </div>
            <div className="py-2 border-r bg-[#f4f7fa]">
              <div className="text-xs text-[#5C6B7A]">Error Charges</div>
              <div className="text-xl">${errorCharges}</div>
            </div>
            <div className="py-2 border-r bg-[#f4f7fa]">
              <div className="text-xs text-[#5C6B7A]">Recapture</div>
              <div className="text-xl">{recapture === 0 ? "(Blank)" : `$${recapture}`}</div>
            </div>
            <div className="py-2 bg-[#f4f7fa]">
              <div className="text-xs text-[#5C6B7A]">Recapture %</div>
              <div className="text-xl">{recapturePercent}%</div>
            </div>
          </div>
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
                {doordashFiltered.map((row, i) => (
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
                {uberFiltered.map((row, i) => (
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
    </PageWrapper>
  );
};

export default RevenueRecovery;
