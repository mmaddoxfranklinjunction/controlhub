// src/pages/Alerts/LiveStatus.js
import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

const LiveStatus = () => {
  const [search, setSearch] = useState('');

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

  const filteredListings = listings.filter(l =>
    l.brand.toLowerCase().includes(search.toLowerCase()) ||
    l.address.toLowerCase().includes(search.toLowerCase())
  );

  const lastUpdated = new Date().toLocaleTimeString();

  return (
    <PageWrapper>
      <div className="px-6 py-4">
        {/* Header Row */}
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-xl font-bold text-[#253847] font-sans mr-4 whitespace-nowrap">Live Status</h1>
          <div className="flex-1">
            <FilterBar onApply={() => {}} />
          </div>
        </div>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#f9fafb] border rounded-lg p-4">
            <p className="text-sm text-gray-600">Total Down</p>
            <p className="text-2xl font-semibold text-red-600">2</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-4">
            <p className="text-sm text-gray-600">Total Open</p>
            <p className="text-2xl font-semibold text-green-500">120</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-4">
            <p className="text-sm text-gray-600">Total Closed</p>
            <p className="text-2xl font-semibold text-gray-800">19</p>
          </div>
        </div>

        {/* Search Row */}
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search places"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm w-full md:w-1/3"
          />
          <span className="text-xs text-gray-400 ml-4">Updated {lastUpdated}</span>
        </div>

        {/* Listings */}
        <div className="space-y-4">
          {filteredListings.map((listing, idx) => (
            <div key={idx} className="bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3">
              <div className="font-semibold text-[#253847] mb-1">
                {listing.brand} - {listing.storeId}
              </div>
              <div className="text-xs text-gray-500 mb-2">{listing.address}</div>

              {listing.statusItems.map((item, subIdx) => (
                <div key={subIdx} className="flex items-center gap-2 text-sm mb-1">
                  <span className={`w-2 h-2 rounded-full ${
                    item.color === 'red'
                      ? 'bg-red-500'
                      : item.color === 'green'
                      ? 'bg-green-500'
                      : 'bg-gray-400'
                  }`} />
                  <span>{item.channel}</span>
                  <span className="ml-2 text-gray-500">{item.status}</span>
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
