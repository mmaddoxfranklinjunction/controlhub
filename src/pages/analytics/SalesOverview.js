import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';
import {
  salesCurrent,
  salesPrevious,
  summaryByLocation,
  summaryTotals
} from './data/SalesOverviewFullData';

const SalesOverview = () => {
  const [filters, setFilters] = useState({
    location: 'All',
    brand: 'All',
    channel: 'All',
    date: 'Current Month',
    search: ''
  });

  // Optional: filter table data here if your row data supports it

  return (
    <PageWrapper>
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">Sales Overview Analytics</h1>
        <FilterBar
          data={summaryByLocation.map(row => ({ location: row.location }))}
          onFilterChange={setFilters}
          showChannel={false}
          showDate={true}
        />

        {/* Sales Performance Current Period */}
        <div className="bg-white border rounded-xl shadow p-4 mb-6">
          <h2 className="text-lg font-bold mb-2">Sales Performance - Current Period (01 May - 31 May)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b text-[#5C6B7A]">
                <tr>
                  <th className="text-left py-2">Date</th>
                  <th className="text-right py-2">Sales</th>
                </tr>
              </thead>
              <tbody>
                {salesCurrent.map((row, i) => (
                  <tr key={i} className="border-b hover:bg-[#f4f7fa]">
                    <td className="py-1">{row.date}</td>
                    <td className="text-right">${row.sales.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sales Performance Previous Month */}
        <div className="bg-white border rounded-xl shadow p-4 mb-6">
          <h2 className="text-lg font-bold mb-2">Sales Performance - Previous Month (01 Apr - 30 Apr)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b text-[#5C6B7A]">
                <tr>
                  <th className="text-left py-2">Date</th>
                  <th className="text-right py-2">Sales</th>
                </tr>
              </thead>
              <tbody>
                {salesPrevious.map((row, i) => (
                  <tr key={i} className="border-b hover:bg-[#f4f7fa]">
                    <td className="py-1">{row.date}</td>
                    <td className="text-right">${row.sales.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary by Location Table */}
        <div className="bg-white border rounded-xl shadow p-4 mb-6">
          <h2 className="text-lg font-bold mb-2">Summary by Location</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b text-[#5C6B7A]">
                <tr>
                  <th className="text-left py-2">Location</th>
                  <th className="text-right py-2">$ Sales</th>
                  <th className="text-right py-2">Orders</th>
                  <th className="text-right py-2">% Sales</th>
                  <th className="text-right py-2">AOV</th>
                </tr>
              </thead>
              <tbody>
                {summaryByLocation.map((row, i) => (
                  <tr key={i} className="border-b hover:bg-[#f4f7fa]">
                    <td className="py-1">{row.location}</td>
                    <td className="text-right">${row.sales.toLocaleString()}</td>
                    <td className="text-right">{row.orders}</td>
                    <td className="text-right">{row.pct}%</td>
                    <td className="text-right">${row.aov}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold border-t">
                  <td className="py-1 text-right">Total</td>
                  <td className="text-right">${summaryTotals.sales.toLocaleString()}</td>
                  <td className="text-right">{summaryTotals.orders}</td>
                  <td className="text-right">{summaryTotals.pct}%</td>
                  <td className="text-right">${summaryTotals.aov}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SalesOverview;
