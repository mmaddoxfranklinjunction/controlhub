import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

// Example data for demonstration
const hostData = [
  {
    id: 'host1',
    name: "Denny's - Franklin Junction",
    locations: [
      {
        id: 'loc1',
        name: 'DEN7865 - South Seatac (New)',
        brands: [
          'DeliverBee - Tori-Yoshi',
          "DeliverBee - Nathan's Famous",
          'Deliverbee - Wing Zone',
          'Deliverbee - The Original Hot Chicken',
          "DeliverBee - Bennigan's On The Fly",
          'DeliverBee - Wing Depo'
        ]
      },
      {
        id: 'loc2',
        name: 'DEN7861 - Lakewood (New)',
        brands: ['DeliverBee - Tori-Yoshi', "DeliverBee - Nathan's Famous"]
      }
    ]
  },
  {
    id: 'host2',
    name: "Exp Brands - Revel - Franklin Junction",
    locations: [
      {
        id: 'loc3',
        name: 'REV9001 - Downtown (New)',
        brands: ['DeliverBee - Exp Brand A']
      }
    ]
  }
];

const FlowSettings = () => {
  const [selectedHost, setSelectedHost] = useState(hostData[0].id);
  const [expandedHosts, setExpandedHosts] = useState({ [hostData[0].id]: true });
  const [selectedLocation, setSelectedLocation] = useState(hostData[0].locations[0].id);

  // Find currently selected host and location
  const host = hostData.find(h => h.id === selectedHost);
  const location = host.locations.find(l => l.id === selectedLocation);

  const toggleHost = (id) => {
    setExpandedHosts(prev => ({ ...prev, [id]: !prev[id] }));
    setSelectedHost(id);
    // auto-select first location if present
    const h = hostData.find(hh => hh.id === id);
    if (h && h.locations.length) setSelectedLocation(h.locations[0].id);
  };

  return (
    <PageWrapper>
      <div className="px-4 py-2">
        {/* Logo + Title + FilterBar Row */}
        <div className="flex items-center gap-3 mb-4">
          <img src="/fj-circle-logo.png" alt="Control Hub" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-[#253847] font-sans mr-4 whitespace-nowrap">Flow Settings</h1>
          <div className="flex-1">
            <FilterBar onApply={() => {}} />
          </div>
        </div>

        {/* Subway Stop Progress Bar */}
        <div className="w-full flex items-center justify-center my-8">
          <div className="absolute left-0 right-0 h-2 bg-gray-200 rounded-full z-0 mx-12" style={{top: '50%'}} />
          <div className="flex w-full max-w-2xl mx-auto justify-between items-center relative z-10">
            <div className="flex flex-col items-center flex-1">
              <div className="w-7 h-7 rounded-full bg-[#253847] border-4 border-white flex items-center justify-center z-10" />
              <span className="mt-2 text-sm font-medium text-[#253847]">Integrate</span>
            </div>
            <div className="flex-1 h-2 -mx-2 bg-gray-200 z-0" />
            <div className="flex flex-col items-center flex-1">
              <div className="w-7 h-7 rounded-full bg-[#253847] border-4 border-white flex items-center justify-center z-10" />
              <span className="mt-2 text-sm font-medium text-[#253847]">Insights</span>
            </div>
            <div className="flex-1 h-2 -mx-2 bg-gray-200 z-0" />
            <div className="flex flex-col items-center flex-1">
              <div className="w-7 h-7 rounded-full bg-[#253847] border-4 border-white flex items-center justify-center z-10" />
              <span className="mt-2 text-sm font-medium text-[#253847]">Auto Config</span>
            </div>
          </div>
        </div>

        {/* Drilldown List */}
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto mt-8">
          {/* Hosts */}
          <div className="flex-1 min-w-[220px] bg-gray-50 rounded-lg shadow border border-gray-200 p-3">
            <div className="font-bold mb-2 text-[#253847]">Hosts</div>
            {hostData.map(h => (
              <div key={h.id}>
                <button
                  className={`flex items-center w-full px-2 py-1 rounded hover:bg-gray-200 ${
                    selectedHost === h.id ? 'bg-blue-100 text-[#253847] font-semibold' : ''
                  }`}
                  onClick={() => toggleHost(h.id)}
                >
                  <span className="mr-2">{expandedHosts[h.id] ? '▼' : '▶'}</span>
                  {h.name}
                </button>
                {expandedHosts[h.id] && (
                  <div className="ml-6 mt-1">
                    {h.locations.map(loc => (
                      <button
                        key={loc.id}
                        className={`flex items-center w-full px-2 py-1 rounded hover:bg-gray-100 ${
                          selectedLocation === loc.id ? 'bg-blue-50 text-[#253847] font-semibold' : ''
                        }`}
                        onClick={() => setSelectedLocation(loc.id)}
                      >
                        <span className="text-xs mr-2">📍</span>
                        {loc.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Brands (for selected location) */}
          <div className="flex-1 min-w-[220px] bg-gray-50 rounded-lg shadow border border-gray-200 p-3">
            <div className="font-bold mb-2 text-[#253847]">Brands</div>
            {location?.brands?.length ? (
              <ul>
                {location.brands.map(brand => (
                  <li key={brand} className="flex items-center gap-2 py-1 pl-2">
                    <input type="checkbox" className="mr-2" />
                    <span>{brand}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-gray-400 pl-2">No brands</div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FlowSettings;
