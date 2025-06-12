// Updated LocationsPanel with Controls toggle
import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

const KPI_CARDS = [
  { label: 'Downtime', value: '185h' },
  { label: 'Delivery Time', value: '15 min' },
  { label: 'Menu Audit', value: '98%' },
  { label: 'Rating', value: '4.4 ★★★★☆' },
];

const CHANNEL_BREAKDOWN = [
  { channel: 'DoorDash', downtime: '63h' },
  { channel: 'UberEats', downtime: '47h' },
  { channel: 'Grubhub', downtime: '58h' },
];

const storefrontSettings = [
  {
    id: 'store1',
    storeId: 'DEN7865',
    name: 'South Seatac (New)',
    settings: [
      'preptime',
      'tags',
      'pause or unpause',
      'reopen or reactivate',
      'sync menu and republish',
      'optimize hours',
    ],
  },
  {
    id: 'store2',
    storeId: 'DEN7861',
    name: 'Lakewood (New)',
    settings: [
      'pause or unpause',
      'sync menu and republish',
    ],
  },
];

const controlModes = ['Manual Only', 'Insights Recommended', 'AI Controlled'];

const LocationsPanel = () => {
  const [toggle, setToggle] = useState('insights');
  const [selectedStore, setSelectedStore] = useState(storefrontSettings[0].id);
  const [controls, setControls] = useState({});

  const handleApply = filters => {
    console.log('Apply filters:', filters);
  };

  const store = storefrontSettings.find(s => s.id === selectedStore);

  return (
    <PageWrapper>
      <div className="px-5 py-5">
        {/* Title + Toggle */}
        <div className="flex items-center justify-between mt-0 mb-4">
          <h1 className="text-xl font-bold text-[#253847]">Locations Control</h1>
          <div className="flex items-center bg-[rgba(179,40,45,0.09)] rounded-full w-52 h-8 shadow-inner cursor-pointer text-xs border border-[#b3282d]">
            <button
              className={`flex-1 h-full px-3 transition font-bold rounded-full ${
                toggle === 'insights'
                  ? 'bg-[#b3282d] text-white shadow'
                  : 'bg-[rgba(179,40,45,0.09)] text-[#b3282d]'
              }`}
              style={{ fontSize: '12px' }}
              onClick={() => setToggle('insights')}
            >
              Insights
            </button>
            <button
              className={`flex-1 h-full px-3 transition font-bold rounded-full ${
                toggle === 'controls'
                  ? 'bg-[#b3282d] text-white shadow'
                  : 'bg-[rgba(179,40,45,0.09)] text-[#b3282d]'
              }`}
              style={{ fontSize: '12px' }}
              onClick={() => setToggle('controls')}
            >
              Controls
            </button>
          </div>
        </div>

        <div className="mb-4">
          <FilterBar onApply={handleApply} />
        </div>

        {toggle === 'insights' ? (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {KPI_CARDS.map(c => (
                <div key={c.label} className="bg-white rounded-xl shadow p-4 flex flex-col">
                  <div className="text-sm text-gray-500">{c.label}</div>
                  <div className="text-2xl font-semibold text-[#253847] mt-1">{c.value}</div>
                </div>
              ))}
            </div>

            {/* Uptime Graph */}
            <div className="bg-white rounded-xl shadow p-4 mb-6">
              <div className="text-sm font-semibold text-[#253847] mb-2">UPTIME RATE</div>
              <div className="h-20 bg-gray-100 rounded"></div>
            </div>

            {/* Channel Breakdown */}
            <h2 className="text-lg font-semibold text-[#253847] mb-4">Breakdown by Channel</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CHANNEL_BREAKDOWN.map(ch => (
                <div key={ch.channel} className="bg-white rounded-xl shadow p-4 text-center">
                  <div className="text-sm text-gray-500">{ch.channel}</div>
                  <div className="text-xl font-semibold text-[#253847] mt-1">{ch.downtime}</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Store Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Store</label>
              <select
                className="border border-gray-300 rounded px-3 py-2 w-full max-w-md"
                value={selectedStore}
                onChange={e => setSelectedStore(e.target.value)}
              >
                {storefrontSettings.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.storeId} — {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Settings Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 border-b">Setting</th>
                    <th className="text-left px-4 py-2 border-b">Control Mode</th>
                  </tr>
                </thead>
                <tbody>
                  {store.settings.map(setting => (
                    <tr key={setting} className="border-b">
                      <td className="px-4 py-2 capitalize text-[#253847]">{setting}</td>
                      <td className="px-4 py-2">
                        <select
                          className="border border-gray-300 rounded px-2 py-1"
                          value={controls[store.id]?.[setting] || ''}
                          onChange={e =>
                            setControls(prev => ({
                              ...prev,
                              [store.id]: {
                                ...(prev[store.id] || {}),
                                [setting]: e.target.value,
                              },
                            }))
                          }
                        >
                          <option value="">Select</option>
                          {controlModes.map(mode => (
                            <option key={mode} value={mode}>
                              {mode}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </PageWrapper>
  );
};

export default LocationsPanel;
