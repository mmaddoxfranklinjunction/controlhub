import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

const LiveStatus = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('brand');
  const [modalInfo, setModalInfo] = useState(null);

  const listings = [
    {
      brand: "Bennigan's On The Fly",
      storeId: 'DEN8874',
      address: '8431 244th St SW, Edmonds, WA 98026, USA',
      hours: '12:00 am – 11:59 pm',
      statusItems: [
        { channel: 'DoorDash', status: 'Accepting Orders', color: 'green' },
        { channel: 'Uber Eats', status: 'Orders Unavailable', color: 'red' }
      ]
    },
    {
      brand: 'TOHC',
      storeId: 'DEN7587',
      address: '1201 N Palm Canyon Dr, Palm Springs, CA 92262, USA',
      hours: '12:00 am – 11:59 pm',
      statusItems: [
        { channel: 'DoorDash', status: 'Has Closed', color: 'gray' },
        { channel: 'Uber Eats', status: 'Orders Unavailable', color: 'red' }
      ]
    },
    {
      brand: "Bennigan's On The Fly",
      storeId: 'DEN6773',
      address: '2511 North Ventura Road, Port Hueneme, CA 93041, USA',
      hours: '12:00 am – 11:59 pm',
      statusItems: [
        { channel: 'DoorDash', status: 'Has Closed', color: 'gray' },
        { channel: 'Uber Eats', status: 'Accepting Orders', color: 'green' }
      ]
    }
  ];

  const lastUpdated = new Date().toLocaleTimeString();

  const filteredListings = listings
    .filter(l =>
      l.brand.toLowerCase().includes(search.toLowerCase()) ||
      l.address.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortKey === 'brand') return a.brand.localeCompare(b.brand);
      if (sortKey === 'store') return a.storeId.localeCompare(b.storeId);
      if (sortKey === 'channel') return (a.statusItems[0]?.channel || '').localeCompare(b.statusItems[0]?.channel || '');
      return 0;
    });

  const handleDotClick = (listing, item) => {
    setModalInfo({ ...listing, ...item });
  };

  const closeModal = () => setModalInfo(null);

  return (
    <PageWrapper>
      <div className="px-6 py-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-xl font-bold text-[#253847] font-sans mr-4 whitespace-nowrap">Live Status</h1>
          <div className="flex-1">
            <FilterBar onApply={() => {}} />
          </div>
        </div>

        {/* Summary Cards */}
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

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
          <input
            type="text"
            placeholder="Search places"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm w-full md:w-1/3"
          />
          <select
            value={sortKey}
            onChange={e => setSortKey(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded text-sm"
          >
            <option value="brand">Sort by Brand</option>
            <option value="store">Sort by Store ID</option>
            <option value="channel">Sort by Channel</option>
          </select>
          <span className="text-xs text-gray-400">Updated {lastUpdated}</span>
        </div>

        {/* Listings */}
        <div className="space-y-4">
          {filteredListings.map((listing, idx) => (
            <div key={idx} className="bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3">
              {/* Top Row */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-[#253847]">
                    {listing.brand} - {listing.storeId}
                  </div>
                  <div className="text-xs text-gray-500">{listing.address}</div>
                </div>
                <button
                  onClick={() => navigate('/autoflows/flowsettings')}
                  className="bg-blue-100 text-blue-700 font-semibold text-xs px-3 py-1 rounded hover:bg-blue-200"
                >
                  Auto Flows
                </button>
              </div>

              {/* Status Rows */}
              <div className="mt-3 space-y-2">
                {listing.statusItems.map((item, subIdx) => (
                  <div key={subIdx} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDotClick(listing, item)}
                        className={`w-[10px] h-[10px] rounded-full focus:outline-none ${
                          item.color === 'red'
                            ? 'bg-red-500'
                            : item.color === 'green'
                            ? 'bg-green-500'
                            : 'bg-gray-400'
                        }`}
                      />
                      <span>{item.channel}</span>
                      <span className="text-gray-400 ml-2 flex gap-1">
                        <i className="fa fa-store" />
                        <i className="fa fa-building" />
                      </span>
                    </div>
                    <div className="text-gray-700">{item.status}</div>
                    <div className="text-xs text-gray-400 whitespace-nowrap">Hours: {listing.hours}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalInfo && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 text-sm">
              <h2 className="text-lg font-semibold text-[#253847] mb-2">Confirm Store Action</h2>
              <p className="mb-1"><strong>Brand:</strong> {modalInfo.brand}</p>
              <p className="mb-1"><strong>Store ID:</strong> {modalInfo.storeId}</p>
              <p className="mb-1"><strong>Address:</strong> {modalInfo.address}</p>
              <p className="mb-4"><strong>Hours:</strong> {modalInfo.hours}</p>
              <p className="mb-4 text-[#5C6B7A]">
                You are attempting to <strong>{modalInfo.status.includes('Accepting') ? 'close' : 'open'}</strong> this store on <strong>{modalInfo.channel}</strong>.
              </p>
              <div className="flex justify-end gap-3">
                <button onClick={closeModal} className="px-4 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">Cancel</button>
                <button onClick={closeModal} className="px-4 py-1 text-sm bg-[#B3282D] text-white rounded hover:bg-[#a12227]">Confirm</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default LiveStatus;

