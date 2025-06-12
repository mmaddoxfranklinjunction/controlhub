import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

const LiveStatus = () => {
  const navigate = useNavigate();
  const [channelFilter, setChannelFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [modalInfo, setModalInfo] = useState(null);

  const listings = [
  {
    brand: "Bennigan's On The Fly",
    storeId: "DEN6773",
    address: "2511 North Ventura Road, Port Hueneme, CA 93041, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "Bennigan's On The Fly",
    storeId: "DEN7589",
    address: "82120 Hwy 111, Indio, CA 92201, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "Bennigan's On The Fly",
    storeId: "DEN8786",
    address: "611 North Overland Avenue, Burley, ID, USA",
    statusItems: [
      { channel: "DoorDash", status: "Accepting Orders", color: "green" },
      { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "Bennigan's On The Fly",
    storeId: "DEN8874",
    address: "8431 244th St SW, Edmonds, WA 98026, USA",
    statusItems: [
      { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "Bennigan's On The Fly",
    storeId: "DEN8878",
    address: "Pole Line Road, Filer, ID, USA",
    statusItems: [
      { channel: "DoorDash", status: "Accepting Orders", color: "green" },
      { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "Bennigan's On The Fly",
    storeId: "DEN9329",
    address: "4095 Telegraph Road, Ventura, CA 93003, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "Bennigan's On The Fly",
    storeId: "DEN9377",
    address: "42455 Washington St, Palm Desert, CA 92211, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "TOHC",
    storeId: "DEN6773",
    address: "2511 North Ventura Road, Port Hueneme, CA 93041, USA",
    statusItems: [
      { channel: "DoorDash", status: "Has Closed", color: "gray" },
      { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "TOHC",
    storeId: "DEN7589",
    address: "82120 Hwy 111, Indio, CA 92201, USA",
    statusItems: [
      { channel: "DoorDash", status: "Accepting Orders", color: "green" },
      { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
    ],
    hours: "12:00 am - 11:59 pm"
  },
  {
    brand: "TOHC",
    storeId: "DEN7860",
    address: "14821 1st Avenue South, Burien, WA 98168, USA",
    statusItems: [
      { channel: "DoorDash", status: "Accepting Orders", color: "green" },
      { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
    ],
    hours: "12:00 am - 11:59 pm"
  }
];

  const filteredListings = listings
    .filter(l => channelFilter === 'All' || l.statusItems.some(i => i.channel === channelFilter))
    .filter(l => statusFilter === 'All' || l.statusItems.some(i => i.status.includes(statusFilter)))
    .sort((a, b) => {
      const aOutage = a.statusItems.reduce((sum, i) => sum + i.outage, 0);
      const bOutage = b.statusItems.reduce((sum, i) => sum + i.outage, 0);
      return sortOrder === 'asc' ? aOutage - bOutage : bOutage - aOutage;
    });

  const allStores = listings.length;
  const totalOffline = listings.filter(l => l.statusItems.some(i => i.color === 'red' || i.color === 'gray')).length;
  const totalOnline = listings.filter(l => l.statusItems.every(i => i.color === 'green')).length;
  const totalDrift = listings.filter(l => l.statusItems.some(i => i.status === 'Has Closed')).length;

  const handleDotClick = (listing, item) => {
    setModalInfo({ ...listing, ...item });
  };

  const closeModal = () => setModalInfo(null);

  const filters = [
    {
      label: 'Channel',
      options: ['All', 'DoorDash', 'Uber Eats'],
      value: channelFilter,
      setter: setChannelFilter
    },
    {
      label: 'Status',
      options: ['All', 'Accepting Orders', 'Orders Unavailable', 'Has Closed'],
      value: statusFilter,
      setter: setStatusFilter
    },
    {
      label: 'Sort',
      options: ['asc', 'desc'],
      value: sortOrder,
      setter: setSortOrder
    }
  ];

  return (
    <PageWrapper>
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold text-[#253847] font-sans mb-4">Live Status</h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6 text-sm font-medium">
          {filters.map((group, i) => (
            <div key={i} className="flex gap-1">
              {group.options.map(opt => (
                <button
                  key={opt}
                  onClick={() => group.setter(opt)}
                  className={`px-4 py-1 rounded-full border ${group.value === opt ? 'bg-[#B3282D] text-white' : 'text-[#253847] border-gray-300'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 justify-items-center">
          <div className="bg-[#f9fafb] border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">Offline</p>
            <p className="text-2xl font-semibold text-red-600">{totalOffline}</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">Online</p>
            <p className="text-2xl font-semibold text-green-500">{totalOnline}</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">Drift</p>
            <p className="text-2xl font-semibold text-gray-800">{totalDrift}</p>
          </div>
          <div className="bg-[#f9fafb] border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">Total Stores</p>
            <p className="text-2xl font-semibold text-gray-800">{allStores}</p>
          </div>
        </div>

        {/* Listings */}
        <div className="space-y-4">
          {filteredListings.map((listing, idx) => (
            <div key={idx} className="bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3">
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
              <div className="mt-3 space-y-2">
                {listing.statusItems.map((item, subIdx) => (
                  <div key={subIdx} className="flex items-center text-sm">
                    <button
                      onClick={() => handleDotClick(listing, item)}
                      className={`w-[10px] h-[10px] rounded-full mr-2 focus:outline-none ${
                        item.color === 'red' ? 'bg-red-500' : item.color === 'green' ? 'bg-green-500' : 'bg-gray-400'
                      }`}
                    />
                    <span className="w-24">{item.channel}</span>
                    <span className="text-gray-700 flex-1">{item.status}</span>
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
