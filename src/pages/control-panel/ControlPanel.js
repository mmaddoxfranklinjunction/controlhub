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
            <p className="text-[#A5BAC9] text-base font-sans text-center">
              Control your digital restaurant
            </p>
          </div>
          <hr className="mt-6 border-t border-gray-300" />
     

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Marketing Promos */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📈</span>
                <h2 className="text-lg font-semibold text-[#253847] font-sans">Marketing Promos</h2>
              </div>
              <div className="flex gap-3 text-sm text-[#B3282D] font-medium">
                <Link to="/analytics/promotions" className="hover:underline">📊 View Report</Link>
                <Link to="/recommendations/marketing" className="hover:underline">👨‍🍳 Chef’s Recommendations</Link>
              </div>
            </div>
            <p className="text-sm text-[#5C6B7A]">Adjust ad spend, campaign timing, and promotional tags by platform.</p>
          </div>

          {/* Operations */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🕒</span>
                <h2 className="text-lg font-semibold text-[#253847] font-sans">Operations</h2>
              </div>
              <div className="flex gap-3 text-sm text-[#B3282D] font-medium">
                <Link to="/analytics/operations" className="hover:underline">📊 View Report</Link>
                <Link to="/recommendations/operations" className="hover:underline">👨‍🍳 Chef’s Recommendations</Link>
              </div>
            </div>
            <p className="text-sm text-[#5C6B7A]">Throttle order flow, override prep times, and track training schedules.</p>
          </div>

          {/* Locations */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏪</span>
                <h2 className="text-lg font-semibold text-[#253847] font-sans">Locations</h2>
              </div>
              <div className="flex gap-3 text-sm text-[#B3282D] font-medium">
                <Link to="/analytics/recovery" className="hover:underline">📊 View Report</Link>
                <Link to="/recommendations/locations" className="hover:underline">👨‍🍳 Chef’s Recommendations</Link>
              </div>
            </div>
            <p className="text-sm text-[#5C6B7A]">Manage hours, rank visibility, and sync store settings across channels.</p>
          </div>

          {/* Menu */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍽</span>
                <h2 className="text-lg font-semibold text-[#253847] font-sans">Menu</h2>
              </div>
              <div className="flex gap-3 text-sm text-[#B3282D] font-medium">
                <Link to="/analytics/sales" className="hover:underline">📊 View Report</Link>
                <Link to="/recommendations/menu" className="hover:underline">👨‍🍳 Chef’s Recommendations</Link>
              </div>
            </div>
            <p className="text-sm text-[#5C6B7A]">Toggle availability, adjust pricing, and test new combinations.</p>
          </div>
        </div>
      </div>
            </PageWrapper>
  );
};

export default ControlPanel;
