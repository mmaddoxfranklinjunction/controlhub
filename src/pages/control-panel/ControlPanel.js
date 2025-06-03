import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PageWrapper from '../../components/shared/PageWrapper';
import HostDropdown from '../../components/shared/HostDropdown';
import hostStoreList from '../../data/hostStoreList';
import FilterBar from '../../components/shared/FilterBar';

const ControlPanel = () => {
  const [selectedHost, setSelectedHost] = useState("All Locations");

  const chartData = [
    { month: 'Feb', cost: 5000, revenue: 30000 },
    { month: 'Mar', cost: 11000, revenue: 32000 },
    { month: 'Apr', cost: 10500, revenue: 34000 },
    { month: 'May', cost: 15000, revenue: 35000 },
    { month: 'Jun', cost: 14000, revenue: 20000 },
    { month: 'Jul', cost: 13000, revenue: 25000 },
    { month: 'Aug', cost: 12500, revenue: 28000 },
    { month: 'Sep', cost: 13500, revenue: 40000 },
    { month: 'Oct', cost: 17000, revenue: 95000 },
    { month: 'Nov', cost: 15000, revenue: 50000 },
    { month: 'Dec', cost: 12000, revenue: 48000 },
    { month: 'Jan', cost: 16000, revenue: 47000 },
  ];

  const activeCampaigns = ["BOGO Tuesday", "Summer Deals", "Free Delivery Week"];

  return (
    <PageWrapper>
      <div className="px-5 py-5">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <img src="/fj-circle-logo.png" alt="Franklin Junction" className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold text-[#253847] font-sans">Control Panel</h1>
              <div className="text-sm text-[#5C6B7A] mt-1">Location: <span className="font-semibold text-[#B3282D]">{selectedHost}</span></div>
            </div>
          </div>
          <div className="w-full md:w-72">
            <HostDropdown hosts={hostStoreList} onChange={setSelectedHost} />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-6">
          <FilterBar onApply={() => {}} />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Marketing Promos",
              dataLink: "/analytics/promotions",
              controlsLink: "/control-panel/marketing",
              customContent: (
                <>
                  <div className="mb-2 text-left">
                    <div className="text-xs text-[#5C6B7A] mb-1">Active Campaigns</div>
                    <ul className="list-disc ml-4 text-sm text-[#002147]">
                      {activeCampaigns.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-28">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                        <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                        <YAxis yAxisId="left" orientation="left" tick={{ fontSize: 10 }} />
                        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10 }} />
                        <Tooltip />
                        <Line yAxisId="left" type="monotone" dataKey="cost" stroke="#2B7A78" strokeWidth={2} dot={{ r: 3 }} />
                        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#B3282D" strokeWidth={2} dot={{ r: 3 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </>
              )
            },
            {
              title: "Operations",
              dataLink: "/analytics/operations",
              controlsLink: "/control-panel/operations"
            },
            {
              title: "Locations",
              dataLink: "/analytics/recovery",
              controlsLink: "/control-panel/locations"
            },
            {
              title: "Menu",
              dataLink: "/analytics/sales",
              controlsLink: "/control-panel/menu"
            }
          ].map(({ title, dataLink, controlsLink, customContent }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col justify-between h-64"
            >
              <h2 className="text-lg font-semibold text-center text-[#253847] font-sans mb-4">
                {title}
              </h2>
              {customContent ? (
                customContent
              ) : (
                <div className="text-center text-[#5C6B7A] text-sm">Metrics coming soon...</div>
              )}
              <div className="flex justify-between text-sm text-[#B3282D] font-medium mt-4">
                <Link to={dataLink} className="hover:underline">📊 Data</Link>
                <Link to={controlsLink} className="hover:underline">🎛️ Controls</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ControlPanel;
