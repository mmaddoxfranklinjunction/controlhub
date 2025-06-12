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
    },
    {
    brand: "Wing Zone",
    storeId: "DEN9677",
    address: "1838 Pullman Road, Moscow, ID 83843, USA",
    statusItems: [
      { channel: "DoorDash", status: "Accepting Orders", color: "green" },
      { channel: "Uber Eats", status: "Inactive",           color: "red"   }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "[Inventory Hold] Bennigan's On The Fly",
    storeId: "DEN6863",
    address: "72244 Varner Road, Thousand Palms, CA 92276, USA",
    statusItems: [
      { channel: "DoorDash", status: "Accepting Orders", color: "green" },
      { channel: "Uber Eats", status: "Inactive",           color: "red"   }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "Bennigan's On The Fly",
    storeId: "DEN7587",
    address: "1201 N Palm Canyon Dr, Palm Springs, CA 92262, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Inactive",   color: "red"  }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "Bennigan's On The Fly",
    storeId: "DEN7860",
    address: "14821 1st Avenue South, Burien, WA 98168, USA",
    statusItems: [
      { channel: "Uber Eats", status: "Inactive", color: "red" }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "Bennigan's On The Fly",
    storeId: "DEN7865",
    address: "18623 International Blvd, SeaTac, WA 98188, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Inactive",   color: "red"  }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "Breakfast Boy",
    storeId: "GAD1655",
    address: "1655 Pleasant Hill Rd Duluth GA 30096",
    statusItems: [
      { channel: "DoorDash", status: "Inactive", color: "red" }
    ],
    hours: "5:00 am - 4:39 am"
  },
  {
    brand: "Effin Egg",
    storeId: "GAD1655",
    address: "1655 Pleasant Hill Rd Duluth GA 30096",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" }
    ],
    hours: "7:00 am - 1:45 pm"
  },
  {
    brand: "Flametown",
    storeId: "GAD1655",
    address: "1655 Pleasant Hill Rd Duluth GA 30096",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" }
    ],
    hours: ""
  },
  {
    brand: "TOHC",
    storeId: "DEN6351",
    address: "2202 State Route 530 Northeast, Arlington, WA 98223, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Inactive",   color: "red"  }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "TOHC",
    storeId: "DEN6863",
    address: "72244 Varner Road, Thousand Palms, CA 92276, USA",
    statusItems: [
      { channel: "Uber Eats", status: "Inactive", color: "red" }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "TOHC",
    storeId: "DEN7587",
    address: "1201 N Palm Canyon Dr, Palm Springs, CA 92262, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Inactive",   color: "red"  }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "TOHC",
    storeId: "DEN7590",
    address: "69050 Hwy 111, Cathedral City, CA 92234, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Inactive",   color: "red"  }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "TOHC",
    storeId: "DEN7868",
    address: "132 128th St SW, Everett, WA 98204, USA",
    statusItems: [
      { channel: "Uber Eats", status: "Inactive", color: "red" }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "TOHC",
    storeId: "DEN8874",
    address: "8431 244th St SW, Edmonds, WA 98026, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Inactive",   color: "red"  }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "TOHC",
    storeId: "DEN9278",
    address: "3704 Fruitvale Blvd, Yakima, WA 98902, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Inactive",   color: "red"  }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "Tori-Yoshi Japanese Fried Chicken",
    storeId: "DEN7590",
    address: "69050 Hwy 111, Cathedral City, CA 92234, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Has Closed", color: "gray" }
    ],
    hours: ""
  },
  {
    brand: "Wing Zone",
    storeId: "DEN6773",
    address: "2511 North Ventura Road, Port Hueneme, CA 93041, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Inactive",   color: "red"  }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "Wing Zone",
    storeId: "DEN9644",
    address: "585 North 2nd East, Rexburg, ID 83440, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Inactive",   color: "red"  }
    ],
    hours: "12:00 am - 11:59 pm"
  }
    // ...additional listings (omitted for brevity)
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
      <div className="px-4 py-2">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          <div className="bg-[#f9fafb] border rounded-lg p-3 text-center">
            <p className="text-sm font-medium">✅ Open — As Expected</p>
            <p className="text-lg font-semibold text-green-600">
              {listings.flatMap(l => l.statusItems).filter(i => i.color === 'green').length}
            </p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-3 text-center">
            <p className="text-sm font-medium">⚠️ Open — Should Be Closed</p>
            <p className="text-lg font-semibold text-yellow-500">0</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-3 text-center">
            <p className="text-sm font-medium">❌ Closed — As Expected</p>
            <p className="text-lg font-semibold text-gray-700">
              {listings.flatMap(l => l.statusItems).filter(i => i.status === 'Has Closed').length}
            </p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-3 text-center">
            <p className="text-sm font-medium">🔥 Closed — Should Be Open</p>
            <p className="text-lg font-semibold text-orange-600">0</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-3 text-center">
            <p className="text-sm font-medium">🔴 Offline — Unexpected</p>
            <p className="text-lg font-semibold text-red-600">
              {listings.flatMap(l => l.statusItems).filter(i => i.status === 'Orders Unavailable').length}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-xl font-bold text-[#253847] font-sans mr-4 whitespace-nowrap">Live Status</h1>
          <div className="flex-1">
            <FilterBar onApply={() => {}} />
          </div>
        </div>

        {/* Listings */}
        <div className="space-y-3">
          {sorted.map((listing, idx) => (
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
                      onClick={() => setModalInfo({ ...listing, ...item })}
                      className={`w-[10px] h-[10px] rounded-full mr-2 ${item.color === 'red' ? 'bg-red-500' : item.color === 'green' ? 'bg-green-500' : 'bg-gray-400'}`}
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
