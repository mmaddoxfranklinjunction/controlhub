import React from 'react';

const OperationsPerformance = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-[#002147]">Operations Performance</h1>
    <p className="text-gray-700 mt-2">Track operational quality, avoidable issues, and system uptime.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      
        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">% Cancellations</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">5.2%</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Avoidable Cancellations</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">3.8%</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Total Errors</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">189</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Downtime</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">424h 13m</p>
        </div>
    </div>
  </div>
);

export default OperationsPerformance;