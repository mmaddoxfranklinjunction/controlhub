import React from 'react';

const RevenueRecovery = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-[#002147]">Revenue Recovery</h1>
    <p className="text-gray-700 mt-2">Monitor loss events and recapture performance across stores.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      
        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Total Error Charges</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">$29,519</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Recaptured Revenue</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">$16,087</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Recovery Rate</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">54.5%</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Avg Error Rate</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">6.2%</p>
        </div>
    </div>
  </div>
);

export default RevenueRecovery;