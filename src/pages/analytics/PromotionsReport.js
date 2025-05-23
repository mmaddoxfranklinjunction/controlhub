import React from 'react';

const PromotionsReport = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-[#002147]">Promotions Report</h1>
    <p className="text-gray-700 mt-2">Evaluate promotion ROI, fee structure, and sales impact.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      
        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Doordash Promo Sales</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">$10,166</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">UberEats Promo Sales</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">$7,432</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Promo ROAS</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">2.5</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">% of Sales Promoted</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">16.2%</p>
        </div>
    </div>
  </div>
);

export default PromotionsReport;