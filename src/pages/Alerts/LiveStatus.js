import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';

const LiveStatus = () => {
  const navigate = useNavigate();
  const [channelFilter, setChannelFilter] = useState(true);
  const [statusFilter, setStatusFilter] = useState(true);
  const [sortAsc, setSortAsc] = useState(true);
  const [modalInfo, setModalInfo] = useState(null);

  const listings = [
    {
      brand: "Bennigan's On The Fly",
      storeId: 'DEN8874',
      address: '8431 244th St SW, Edmonds, WA 98026, USA',
      hours: '12:00 am – 11:59 pm',
      statusItems: [
        { channel: 'DoorDash', status: 'Accepting Orders', color: 'green', outage: 0 },
        { channel: 'Uber Eats', status: 'Orders Unavailable', color: 'red', outage: 5.5 }
      ]
    },
    {
      brand: 'TOHC',
      storeId: 'DEN7587',
      address: '1201 N Palm Canyon Dr, Palm Springs, CA 92262, USA',
      hours: '12:00 am – 11:59 pm',
      statusItems: [
        { channel: 'DoorDash', status: 'Has Closed', color: 'gray', outage: 3.2 },
        { channel: 'Uber Eats', status: 'Orders Unavailable', color: 'red', outage: 7.1 }
      ]
    }
  ];

  const allStores = listings.length;
  const totalOffline = listings.filter(l => l.statusItems.some(i => i.color === 'red')).length;
  const totalOnline = listings.filter(l => l.statusItems.every(i => i.color === 'green')).length;
  const totalDrift = listings.filter(l => l.statusItems.some(i => i.status === 'Has Closed')).length;

  const filteredListings = listings
    .filter(l => channelFilter || l.statusItems.some(i => i.channel))
    .filter(l => statusFilter || l.statusItems.some(i => i.status))
    .sort((a, b) => {
      const getOutage = store => store.statusItems.reduce((sum, i) => sum + i.outage, 0);
      return sortAsc ? getOutage(a) - getOutage(b) : getOutage(b) - getOutage(a);
    });

  const handleDotClick = (listing, item) => {
    setModalInfo({ ...listing, ...item });
  };

  const closeModal = () => setModalInfo(null);

  return (
    <PageWrapper>
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-[#253847] font-sans mb-4">Live Status</h1>

        {/* Toggle Filters */}
        <div className="flex gap-6 items-center mb-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={channelFilter} onChange={() => setChannelFilter(!channelFilter)} />
            Channel
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={statusFilter} onChange={() => setStatusFilter(!statusFilter)} />
            Status
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={sortAsc} onChange={() => setSortAsc(!sortAsc)} />
            Outage Time {sortAsc ? '(asc)' : '(desc)'}
          </label>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4 text-center">
          <div className="bg-[#f9fafb] border rounded-lg p-2">
            <p className="text-sm text-gray-600">Total Stores</p>
            <p className="text-xl font-semibold text-gray-800">{allStores}</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-2">
            <p className="text-sm text-gray-600">Online</p>
            <p className="text-xl font-semibold text-green-600">{totalOnline}</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-2">
            <p className="text-sm text-gray-600">Drift</p>
            <p className="text-xl font-semibold text-yellow-500">{totalDrift}</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-2">
            <p className="text-sm text-gray-600">Offline</p>
            <p className="text-xl font-semibold text-red-500">{totalOffline}</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-2">
            <p className="text-sm text-gray-600">Reserved</p>
            <p className="text-xl font-semibold text-gray-600">—</p>
          </div>
        </div>

        {/* Listings */}
        <div className="space-y-3">
          {filteredListings.map((listing, idx) => (
            <div key={idx} className="bg-[#f9fafb] border border-gray-200 rounded-md px-3 py-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-[#253847]">{listing.brand} - {listing.storeId}</div>
                  <div className="text-xs text-gray-500">{listing.address}</div>
                </div>
                <button
                  onClick={() => navigate('/autoflows/flowsettings')}
                  className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded hover:bg-blue-200"
                >Auto Flows</button>
              </div>
              <div className="mt-2 space-y-1">
                {listing.statusItems.map((item, subIdx) => (
                  <div key={subIdx} className="flex items-center text-sm">
                    <button
                      onClick={() => handleDotClick(listing, item)}
                      className={`w-[10px] h-[10px] rounded-full mr-2 focus:outline-none ${item.color === 'red' ? 'bg-red-500' : item.color === 'green' ? 'bg-green-500' : 'bg-gray-400'}`}
                    />
                    <span className="w-24">{item.channel}</span>
                    <span className="flex-1 text-gray-700">{item.status}</span>
                    {(item.color === 'red' || item.color === 'gray') && (
                      <span className="text-xs text-red-500 w-28">Outage: {item.outage.toFixed(1)} hrs</span>
                    )}
                    <span className="text-xs text-gray-400 ml-auto">Hours: {listing.hours}</span>
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
