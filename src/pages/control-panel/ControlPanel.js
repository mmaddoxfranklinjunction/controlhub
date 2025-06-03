import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';
import HostDropdown from '../../components/shared/HostDropdown';
import hostStoreList from '../../data/hostStoreList';

const ControlPanel = () => {
  const [selectedHost, setSelectedHost] = useState("All Locations");

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

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Template */}
          {[
            {
              title: "Marketing Promos",
              dataLink: "/analytics/promotions",
              controlsLink: "/control-panel#marketing",
              metrics: [
                { label: "Sponsored ROAS", value: "5.1x" },
                { label: "Promo Spend", value: "$3,091" }
              ]
            },
            {
              title: "Operations",
              dataLink: "/analytics/operations",
              controlsLink: "/control-panel#operations",
              metrics: [
                { label: "Error Rate", value: "5.5%" },
                { label: "Downtime", value: "1.4 hrs" }
              ]
            },
            {
              title: "Locations",
              dataLink: "/analytics/recovery",
              controlsLink: "/control-panel#locations",
              metrics: [
                { label: "Active Stores", value: "28" },
                { label: "Visibility A+", value: "76%" }
              ]
            },
            {
              title: "Menu",
              dataLink: "/analytics/sales",
              controlsLink: "/control-panel#menu",
              metrics: [
                { label: "Top Seller", value: "BBQ Combo" },
                { label: "Menu Items", value: "134" }
              ]
            }
          ].map(({ title, dataLink, controlsLink, metrics }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col justify-between h-64"
            >
              <h2 className="text-lg font-semibold text-center text-[#253847] font-sans mb-4">
                {title}
              </h2>
              <div className="flex flex-col gap-2 text-center text-[#5C6B7A] text-sm">
                {metrics.map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-xs">{label}</div>
                    <div className="text-base font-bold text-[#002147]">{value}</div>
                  </div>
                ))}
              </div>
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
