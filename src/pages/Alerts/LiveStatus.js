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
      brand: "Nathan's Famous",
      storeId: "DEN8786",
      address: "611 North Overland Avenue, Burley, ID, USA",
      statusItems: [
        { channel: "DoorDash", status: "Accepting Orders", color: "green" },
        { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
      ],
      hours: "12:00 am - 11:59 pm"
    },
    {
      brand: "Nathan's Famous",
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
      brand: "The Original Hot Chicken",
      storeId: "DEN6773",
      address: "2511 North Ventura Road, Port Hueneme, CA 93041, USA",
      statusItems: [
        { channel: "DoorDash", status: "Has Closed", color: "gray" },
        { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
      ],
      hours: "12:00 am - 11:59 pm"
    },
    {
      brand: "Nathan's Famous",
      storeId: "DEN7589",
      address: "82120 Hwy 111, Indio, CA 92201, USA",
      statusItems: [
        { channel: "DoorDash", status: "Accepting Orders", color: "green" },
        { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
      ],
      hours: "12:00 am - 11:59 pm"
    },
    {
      brand: "Nathan's Famous",
      storeId: "DEN7860",
      address: "14821 1st Avenue South, Burien, WA 98168, USA",
      statusItems: [
        { channel: "DoorDash", status: "Accepting Orders", color: "green" },
        { channel: "Uber Eats", status: "Orders Unavailable", color: "red" }
      ],
      hours: "12:00 am - 11:59 pm"
    }
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

