import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';

const ControlPanel = () => {
  return (
    <PageWrapper>
      <div className="px-6 py-10">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-2">
            <img src="/fj-circle-logo.png" alt="Franklin Junction" className="w-12 h-12" />
            <h1 className="text-xl font-bold text-[#253847] font-sans">Control Panel</h1>
          </div>
          <p className="text-[#A5BAC9] text-base font-sans text-center">Control your digital restaurant</p>
        </div>
        <hr className="mt-6 border-t border-gray-300" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Card Template */}
          {[
            {
              title: "Marketing Promos",
              text: "Adjust ad spend, campaign timing, and promotional tags by platform.",
              reportLink: "/analytics/promotions"
            },
            {
              title: "Operations",
              text: "Throttle order flow, override prep times, and track training schedules.",
              reportLink: "/analytics/operations"
            },
            {
              title: "Locations",
              text: "Manage hours, rank visibility, and sync store settings across channels.",
              reportLink: "/analytics/recovery"
            },
            {
              title: "Menu",
              text: "Toggle availability, adjust pricing, and test new combinations.",
              reportLink: "/analytics/sales"
            }
          ].map(({ title, text, reportLink }) => (
            <div key={title} className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col justify-between min-h-[240px]">
              <div>
                <h2 className="text-lg font-semibold text-[#253847] font-sans mb-2">{title}</h2>
                <p className="text-sm text-[#5C6B7A]">{text}</p>
              </div>
              <div className="flex justify-between items-center mt-4 text-sm text-[#B3282D] font-medium">
                <Link to={reportLink} className="hover:underline">📊 View Report</Link>
                <Link to="/control-panel" className="hover:underline">⚙️ Controls</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ControlPanel;
