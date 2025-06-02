import React from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';


const SponsoredListingReport = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-[#002147]">Sponsored Listing Report</h1>
    <p className="text-gray-700 mt-2">Track visibility-driven spend and performance lift by listing.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      
        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Sponsored Sales</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">$15,667</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Sponsored Fees</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">$3,091</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Sponsored ROAS</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">5.1</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">% Sponsored Sales</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">17.8%</p>
        </div>
    </div>
  </div>
);

export default SponsoredListingReport;
