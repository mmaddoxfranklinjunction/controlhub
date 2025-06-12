import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';



const storefrontSettings = [
  {
    id: 'store1',
    storeId: 'DEN7865',
    name: "South Seatac (New)",
    settings: [
      'preptime',
      'tags',
      'pause or unpause',
      'reopen or reactivate',
      'sync menu and republish',
      'optimize hours'
    ]
  },
  {
    id: 'store2',
    storeId: 'DEN7861',
    name: "Lakewood (New)",
    settings: [
      'pause or unpause',
      'sync menu and republish'
    ]
  }
];

const controlModes = ['Manual Only', 'Insights Recommended', 'AI Controlled'];

const FlowSettings = () => {
  const [selectedStore, setSelectedStore] = useState(storefrontSettings[0].id);
  const [controls, setControls] = useState({});

  const updateControl = (storeId, setting, mode) => {
    setControls(prev => ({
      ...prev,
      [storeId]: {
        ...(prev[storeId] || {}),
        [setting]: mode
      }
    }));
  };

  const store = storefrontSettings.find(s => s.id === selectedStore);

  return (
    <PageWrapper>
      <div className="px-4 py-6">
        <h1 className="text-xl font-bold text-[#253847] mb-4">Storefront Flow Settings</h1>

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
                      onChange={e => updateControl(store.id, setting, e.target.value)}
                    >
                      <option value="">Select</option>
                      {controlModes.map(mode => (
                        <option key={mode} value={mode}>{mode}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FlowSettings;
