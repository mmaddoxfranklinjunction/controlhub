// Updated version with dynamic control UX and AI-activated trend graph
import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

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

const uptimeTrend = [95, 94, 96, 97, 98, 99, 100];
const aiActivatedIndex = 3;

const FlowSettings = () => {
  const [selectedStore, setSelectedStore] = useState(storefrontSettings[0].id);
  const [controls, setControls] = useState({
    store1: {
      'preptime': 'AI Controlled',
      'tags': 'Insights Recommended',
      'pause or unpause': 'Manual Only',
      'reopen or reactivate': 'AI Controlled',
      'sync menu and republish': 'Insights Recommended',
      'optimize hours': 'Manual Only'
    },
    store2: {
      'pause or unpause': 'Insights Recommended',
      'sync menu and republish': 'Manual Only'
    }
  });
  const store = storefrontSettings.find(s => s.id === selectedStore);

  const updateControl = (storeId, setting, mode) => {
    setControls(prev => ({
      ...prev,
      [storeId]: {
        ...(prev[storeId] || {}),
        [setting]: mode,
      },
    }));
  };

  return (
    <PageWrapper>
      <div className="px-6 py-6 font-[Futura, sans-serif]">
        <h1 className="text-2xl font-bold text-[#253847] mb-4">Storefront Flow Settings</h1>

        {/* Store Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#253847] mb-1">Select Store</label>
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

        {/* Dynamic Mode Settings */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg mb-8">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 border-b text-[#253847]">Setting</th>
                <th className="text-left px-4 py-2 border-b text-[#253847]">Control Mode</th>
              </tr>
            </thead>
            <tbody>
              {store.settings.map(setting => (
                <tr key={setting} className="border-b">
                  <td className="px-4 py-2 capitalize text-[#253847]">
                    <span title={`Control for ${setting}`}>{setting}</span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex rounded-full bg-gray-100 w-fit px-1 py-1 gap-1">
                      {controlModes.map(mode => (
                        <button
                          key={mode}
                          className={`text-xs px-3 py-1 rounded-full font-medium transition ${
                            controls[store.id]?.[setting] === mode
                              ? 'bg-[#B3282D] text-white'
                              : 'text-[#253847] hover:bg-gray-200'
                          }`}
                          onClick={() => updateControl(store.id, setting, mode)}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Trended Results Section */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-[#253847] mb-4">Performance Trends</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-sm font-semibold text-[#253847] mb-2">Uptime Over Time</h3>
              <svg viewBox="0 0 300 100" className="w-full h-24">
                <polyline
                  fill="none"
                  stroke="#2B7A78"
                  strokeWidth="2"
                  points={uptimeTrend.map((val, idx) => `${idx * 40},${100 - val}`).join(' ')}
                />
                {uptimeTrend.map((val, idx) => (
                  <circle
                    key={idx}
                    cx={idx * 40}
                    cy={100 - val}
                    r={idx === aiActivatedIndex ? 5 : 3}
                    fill={idx === aiActivatedIndex ? '#B3282D' : '#2B7A78'}
                  />
                ))}
                <text x={aiActivatedIndex * 40 + 6} y={100 - uptimeTrend[aiActivatedIndex] - 6} fontSize="10" fill="#B3282D">
                  AI
                </text>
              </svg>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-sm font-semibold text-[#253847] mb-2">Visibility Score Over Time</h3>
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-400">
                (Graph Placeholder)
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FlowSettings;
