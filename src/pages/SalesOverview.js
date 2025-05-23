import React from 'react';

const SalesOverview = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-[#002147]">Sales Overview</h1>
    <p className="text-gray-700 mt-2">Top-line sales metrics with order volume and performance trends.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      
        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Total Sales</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">$92,672</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Orders (Completed)</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">3,416</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Orders (Incl. Cancelled)</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">3,603</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">AOV</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">$27</p>
        </div>
    </div>
  </div>
);

export default SalesOverview;