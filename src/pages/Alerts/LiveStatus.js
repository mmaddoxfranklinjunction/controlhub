import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';

const LiveStatus = () => {
  const navigate = useNavigate();
  const [channelFilter, setChannelFilter] = useState({ DoorDash: true, 'Uber Eats': true });
  const [statusFilter, setStatusFilter] = useState({ Online: true, Offline: true });
  const [sortKey, setSortKey] = useState('outageAsc');
  const [modalInfo, setModalInfo] = useState(null);

  const listings = [
    // ... existing listings unchanged ...
  ];

  const allStores = listings.length;
  const openExpected = listings.filter(l => l.statusItems.some(i => i.status === 'Accepting Orders')).length;
  const openShouldBeClosed = 1;
  const closedExpected = listings.filter(l => l.statusItems.some(i => i.status === 'Has Closed')).length;
  const closedShouldBeOpen = 1;
  const offlineUnexpected = listings.filter(l => l.statusItems.some(i => i.status === 'Orders Unavailable')).length;

  return (
    <PageWrapper>
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-[#253847] font-sans mb-4">Live Status</h1>

        {/* Summary Legend Cards with Tooltip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-4 text-sm text-left">
          <div className="bg-[#f9fafb] border rounded-lg p-3" title="Store is open and should be open">
            <p className="font-medium">✅ Open — As Expected</p>
            <p className="text-right font-semibold text-green-600">{openExpected}</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-3" title="Open unintentionally (e.g., staff not present)">
            <p className="font-medium">⚠️ Open — Should Be Closed</p>
            <p className="text-right font-semibold text-yellow-500">{openShouldBeClosed}</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-3" title="Closed intentionally (e.g., scheduled downtime)">
            <p className="font-medium">❌ Closed — As Expected</p>
            <p className="text-right font-semibold text-gray-500">{closedExpected}</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-3" title="Unexpected closure (error, forgot to toggle open)">
            <p className="font-medium">🔥 Closed — Should Be Open</p>
            <p className="text-right font-semibold text-orange-500">{closedShouldBeOpen}</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-3" title="Tech/API issue; store isn’t functioning at all">
            <p className="font-medium">🔴 Offline — Unexpected</p>
            <p className="text-right font-semibold text-red-500">{offlineUnexpected}</p>
          </div>
        </div>

        {/* Filter Toggles */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm font-medium">
          {/* Channel Toggles */}
          <div className="flex items-center gap-2">
            {['DoorDash', 'Uber Eats'].map(ch => (
              <button
                key={ch}
                onClick={() => setChannelFilter(prev => ({ ...prev, [ch]: !prev[ch] }))}
                className={`px-4 py-1 rounded-full border ${channelFilter[ch] ? 'bg-[#B3282D] text-white' : 'text-[#253847] border-gray-300'}`}
              >
                {ch}
              </button>
            ))}
          </div>

          {/* Status Toggles */}
          <div className="flex items-center gap-2">
            {['Online', 'Offline'].map(st => (
              <button
                key={st}
                onClick={() => setStatusFilter(prev => ({ ...prev, [st]: !prev[st] }))}
                className={`px-4 py-1 rounded-full border ${statusFilter[st] ? 'bg-[#B3282D] text-white' : 'text-[#253847] border-gray-300'}`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Sort Radio */}
          <div className="flex items-center gap-2">
            {['outageAsc', 'outageDesc', 'storeAsc', 'storeDesc'].map(opt => (
              <label key={opt} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="sortKey"
                  checked={sortKey === opt}
                  onChange={() => setSortKey(opt)}
                />
                {opt === 'outageAsc' && 'Outage ↑'}
                {opt === 'outageDesc' && 'Outage ↓'}
                {opt === 'storeAsc' && 'Store ↑'}
                {opt === 'storeDesc' && 'Store ↓'}
              </label>
            ))}
          </div>
        </div>

        {/* ... listings and modal rendering logic ... */}
      </div>
    </PageWrapper>
  );
};

export default LiveStatus;
