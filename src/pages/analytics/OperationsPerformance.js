import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

import {
  summaryMetrics,
  avoidableCancellations,
  errorRateDetails,
  downtimeDetails
} from './data/OperationsPerformanceFullData';

const OperationsPerformance = () => {
  
  const [view, setView] = useState('insights');
  const [filters, setFilters] = useState({});

  const handleApply = (vals) => setFilters(vals);
 

  // Filtering logic can be added here if your row data supports it
  // For now, tables show all data

  return (
    <PageWrapper>
         <div className="px-4 py-2">
        {/* Logo + Title + FilterBar Row */}
        <div className="flex items-center gap-3 mb-4">
        
          <h1 className="text-xl font-bold text-[#253847] font-sans mr-4 whitespace-nowrap">Operations Performance</h1>
          <div className="flex-1">
            <FilterBar onApply={() => {}} />
          </div>
        </div>

     

        {/* Summary Bar */}
        <div className="grid grid-cols-5 gap-2 mb-6">
          <div className="bg-[#f4f7fa] border rounded-xl p-2 text-center">
            <div className="text-xs text-[#5C6B7A]">% Cancellations</div>
            <div className="text-2xl font-bold">{summaryMetrics.percentCancellations}%</div>
          </div>
          <div className="bg-[#f4f7fa] border rounded-xl p-2 text-center">
            <div className="text-xs text-[#5C6B7A]">Cancellations</div>
            <div className="text-2xl font-bold">{summaryMetrics.cancellations}</div>
          </div>
          <div className="bg-[#f4f7fa] border rounded-xl p-2 text-center">
            <div className="text-xs text-[#5C6B7A]">% Avoidable Cancellation</div>
            <div className="text-2xl font-bold">{summaryMetrics.percentAvoidableCancellations}%</div>
          </div>
          <div className="bg-[#f4f7fa] border rounded-xl p-2 text-center">
            <div className="text-xs text-[#5C6B7A]">Avoidable Cancellations</div>
            <div className="text-2xl font-bold">{summaryMetrics.avoidableCancellations}</div>
          </div>
          <div className="bg-[#f4f7fa] border rounded-xl p-2 text-center">
            <div className="text-xs text-[#5C6B7A]">Downtime %</div>
            <div className="text-2xl font-bold">{summaryMetrics.downtimePercent}%</div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 mb-6">
          <div className="bg-[#f4f7fa] border rounded-xl p-2 text-center">
            <div className="text-xs text-[#5C6B7A]">Total Errors</div>
            <div className="text-2xl font-bold">{summaryMetrics.totalErrors}</div>
          </div>
          <div className="bg-[#f4f7fa] border rounded-xl p-2 text-center">
            <div className="text-xs text-[#5C6B7A]">Error Rate</div>
            <div className="text-2xl font-bold">{summaryMetrics.errorRate}%</div>
          </div>
          <div className="bg-[#f4f7fa] border rounded-xl p-2 text-center">
            <div className="text-xs text-[#5C6B7A]">Error Charges</div>
            <div className="text-2xl font-bold">${summaryMetrics.errorCharges.toLocaleString()}</div>
          </div>
          <div className="bg-[#f4f7fa] border rounded-xl p-2 text-center">
            <div className="text-xs text-[#5C6B7A]">Error Charges %</div>
            <div className="text-2xl font-bold">{summaryMetrics.errorChargesPercent}%</div>
          </div>
          <div className="bg-[#f4f7fa] border rounded-xl p-2 text-center">
            <div className="text-xs text-[#5C6B7A]">Downtime</div>
            <div className="text-2xl font-bold">{summaryMetrics.downtime}</div>
          </div>
        </div>

        {/* Data Tables */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Avoidable Cancellation Rate Details */}
          <div className="bg-white rounded-xl border shadow p-4">
            <h2 className="text-lg font-bold mb-2">Avoidable Cancellation Rate Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b text-[#5C6B7A]">
                  <tr>
                    <th className="text-left py-2">Merchant Store ID</th>
                    <th className="text-left py-2">Cancel</th>
                    <th className="text-left py-2">%</th>
                  </tr>
                </thead>
                <tbody>
                  {avoidableCancellations.map((row, i) => (
                    <tr key={i} className="border-b hover:bg-[#f4f7fa]">
                      <td className="py-1">{row.merchantStoreId}</td>
                      <td>{row.cancel}</td>
                      <td>{row.percent}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Error Rate Details */}
          <div className="bg-white rounded-xl border shadow p-4">
            <h2 className="text-lg font-bold mb-2">Error Rate Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b text-[#5C6B7A]">
                  <tr>
                    <th className="text-left py-2">Merchant Store ID</th>
                    <th className="text-left py-2">Total Errors</th>
                    <th className="text-left py-2">%</th>
                  </tr>
                </thead>
                <tbody>
                  {errorRateDetails.map((row, i) => (
                    <tr key={i} className="border-b hover:bg-[#f4f7fa]">
                      <td className="py-1">{row.merchantStoreId}</td>
                      <td>{row.totalErrors}</td>
                      <td>{row.percent}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Downtime Details */}
        <div className="bg-white rounded-xl border shadow p-4">
          <h2 className="text-lg font-bold mb-2">Downtime by Store Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b text-[#5C6B7A]">
                <tr>
                  <th className="text-left py-2">Store Name</th>
                  <th className="text-left py-2">Downtime %</th>
                </tr>
              </thead>
              <tbody>
                {downtimeDetails.map((row, i) => (
                  <tr key={i} className="border-b hover:bg-[#f4f7fa]">
                    <td className="py-1">{row.storeName}</td>
                    <td>{row.downtimePercent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default OperationsPerformance;
