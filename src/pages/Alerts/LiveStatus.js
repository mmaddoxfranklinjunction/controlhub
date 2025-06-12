// src/pages/Alerts/LiveStatus.js
import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';

const LiveStatus = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const listings = [
    {
      brand: "Bennigan's On The Fly",
      storeId: 'DEN8874',
      address: '8431 244th St SW, Edmonds, WA 98026, USA',
      statusItems: [
        { channel: 'Uber Eats', status: 'Orders Unavailable', color: 'red' }
      ]
    },
    {
      brand: 'TOHC',
      storeId: 'DEN7587',
      address: '1201 N Palm Canyon Dr, Palm Springs, CA 92262, USA',
      statusItems: [
        { channel: 'DoorDash', status: 'Has Closed', color: 'gray' },
        { channel: 'Uber Eats', status: 'Orders Unavailable', color: 'red' }
      ]
    },
    {
      brand: "Bennigan's On The Fly",
      storeId: 'DEN6773',
      address: '2511 North Ventura Road, Port Hueneme, CA 93041, USA',
      statusItems: [
        { channel: 'DoorDash', status: 'Has Closed', color: 'gray' },
        { channel: 'Uber Eats', status: 'Accepting Orders', color: 'green' }
      ]
    }
  ];

  const filtered = listings.filter(l =>
    l.brand.toLowerCase().includes(search.toLowerCase()) ||
    l.address.toLowerCase().includes(search.toLowerCase())
  );

  const lastUpdated = new Date().toLocaleTimeString();

  return (
    <PageWrapper>
      <div className="px-4 py-6">
        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded p-4">
            <p className="text-sm text-gray-600">Total Down</p>
            <p className="text-2xl text-red-500 font-semibold">2</p>
          </div>
          <div className="border rounded p-4">
            <p className="text-sm text-gray-600">Total Open</p>
            <p className="text-2xl text-green-500 font-semibold">120</p>
          </div>
          <div className="border rounded p-4">
            <p className="text-sm text-gray-600">Total Closed</p>
            <p className="text-2xl text-gray-700 font-semibold">19</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
          <input
            type="text"
            placeholder="Search places"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded w-full md:w-1/3 text-sm"
          />
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="border px-3 py-2 rounded text-sm"
          >
            <option value="All Statuses">All Statuses</option>
          </select>
          <span className="text-xs text-gray-500 ml-2">
            Updated {lastUpdated}
          </span>
        </div>

        {/* Listings */}
        <div className="space-y-6">
          {filtered.map((listing, idx) => (
            <div key={idx} className="bg-[#f9fafb] rounded-md px-4 py-3 space-y-2">
              <div className="text-sm font-semibold text-[#253847]">
                {listing.brand} - {listing.storeId}
              </div>
              <div className="text-xs text-gray-500">{listing.address}</div>

              {listing.statusItems.map((item, subIdx) => (
                <div
                  key={subIdx}
                  className="flex items-center text-sm gap-2 text-[#253847] pl-2"
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.color === 'red'
                        ? 'bg-red-500'
                        : item.color === 'green'
                        ? 'bg-green-400'
                        : 'bg-gray-400'
                    }`}
                  />
                  <span>{item.channel}</span>
                  <span className="ml-1 text-gray-400">
                    <i className="fa fa-store" /> {/* placeholder icon */}
                  </span>
                  <span className="ml-1 text-gray-400">
                    <i className="fa fa-building" /> {/* placeholder icon */}
                  </span>
                  <span className="text-sm text-[#5C6B7A] ml-2">{item.status}</span>
                  <span className="ml-auto text-xs text-gray-400">Hours: 12:00 am - 11:59 pm</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default LiveStatus;
