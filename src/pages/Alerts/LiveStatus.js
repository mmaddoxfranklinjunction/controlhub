import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

const LiveStatus = () => {
  const navigate = useNavigate();
  const [channelFilter, setChannelFilter] = useState({ 'DoorDash': true, 'Uber Eats': true });
  const [statusFilter, setStatusFilter] = useState({ Online: true, Offline: true });
  const [sortKey, setSortKey] = useState('outageAsc');
  const [modalInfo, setModalInfo] = useState(null);
  const [listings, setListings] = useState([
    {
      brand: "Bennigan's On The Fly",
      storeId: "DEN6773",
      address: "2511 North Ventura Road, Port Hueneme, CA 93041, USA",
      statusItems: [
        { channel: "DoorDash", status: "Has Closed", color: "gray", outage: 6.2 },
        { channel: "Uber Eats", status: "Orders Unavailable", color: "red", outage: 8.1 }
      ],
      hours: "12:00 am - 11:59 pm"
    }
    // ... additional listings omitted for brevity
  ]);

  const getOutage = (item) => {
    if (item?.outage != null && typeof item.outage === 'number') return item.outage.toFixed(1);
    return null;
  };

  const labelType = (item) => {
    if (item.color === 'green') return '✅';
    if (item.status === 'Has Closed') return '❌';
    if (item.status === 'Orders Unavailable') return '🔴';
    if (item.color === 'gray') return '🔥';
    return '⚠️';
  };

  const labelFilter = ['✅', '⚠️', '❌', '🔥', '🔴'];
  const [activeLabel, setActiveLabel] = useState('All');

  const filtered = listings.filter(l => {
    return l.statusItems.some(i =>
      channelFilter[i.channel] &&
      (statusFilter.Online && i.color === 'green' || statusFilter.Offline && i.color !== 'green') &&
      (activeLabel === 'All' || labelType(i) === activeLabel)
    );
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortKey === 'outageAsc') return a.storeId.localeCompare(b.storeId);
    if (sortKey === 'outageDesc') return b.storeId.localeCompare(a.storeId);
    return 0;
  });

  return (
    <PageWrapper>
      <div className="px-4 py-2 font-[Futura, sans-serif]">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {[{
            label: '✅ Open — As Expected',
            value: listings.flatMap(l => l.statusItems).filter(i => i.color === 'green').length,
            color: 'text-green-600'
          }, {
            label: '⚠️ Open — Should Be Closed', value: 0, color: 'text-yellow-500'
          }, {
            label: '❌ Closed — As Expected',
            value: listings.flatMap(l => l.statusItems).filter(i => i.status === 'Has Closed').length,
            color: 'text-gray-700'
          }, {
            label: '🔥 Closed — Should Be Open', value: 0, color: 'text-orange-600'
          }, {
            label: '🔴 Offline — Unexpected',
            value: listings.flatMap(l => l.statusItems).filter(i => i.status === 'Orders Unavailable').length,
            color: 'text-red-600'
          }].map(({ label, value, color }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-center shadow-sm">
              <p className="text-sm font-medium text-[#5C6B7A]">{label}</p>
              <p className={`text-2xl font-bold ${color}`}>{value}</p>
            </div>
          ))}
        </div>

        {/* Title + Filter */}
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-xl font-bold text-[#253847] mr-4 whitespace-nowrap">Live Status</h1>
          <div className="flex-1">
            <FilterBar onApply={() => {}} />
          </div>
        </div>

        {/* Listings */}
        <div className="space-y-3 max-w-6xl mx-auto">
          {sorted.map((listing, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-md px-4 py-3 shadow-sm">
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
                  <div key={subIdx} className="flex items-center text-sm gap-2">
                    <button
                      onClick={() => setModalInfo({ ...listing, ...item })}
                      className={`w-[12px] h-[12px] rounded-full ${item.color === 'red' ? 'bg-red-500' : item.color === 'green' ? 'bg-green-500' : 'bg-gray-400'}`}
                    />
                    <span className="w-24">{item.channel}</span>
                    <span className="flex-1 text-gray-700">{item.status}</span>
                    {(item.color !== 'green') && (
                      <span className="text-xs text-red-500 w-28">Outage: {getOutage(item)} hrs</span>
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
                <button onClick={() => setModalInfo(null)} className="px-4 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">Cancel</button>
                <button
                  onClick={() => {
                    setListings(prev =>
                      prev.map(store =>
                        store.storeId === modalInfo.storeId
                          ? {
                              ...store,
                              statusItems: store.statusItems.map(item =>
                                item.channel === modalInfo.channel
                                  ? { ...item, color: 'green', status: 'Accepting Orders', outage: 0 }
                                  : item
                              )
                            }
                          : store
                      )
                    );
                    setModalInfo(null);
                  }}
                  className="px-4 py-1 text-sm bg-[#B3282D] text-white rounded hover:bg-[#a12227]"
                >Confirm</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default LiveStatus;
