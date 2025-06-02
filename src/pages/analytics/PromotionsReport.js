// src/pages/analytics/PromotionsReport.js
import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

// --- Static promo data ---
const doordashSummary = {
  promoSales: 53558,
  promoFees: 11875,
  promoROAS: 4.5,
  pctSalesPromoted: 48.1,
  promoPctOfSales: 10.7
};

const ubereatsSummary = {
  promoSales: 24486,
  promoFees: 6182,
  promoROAS: 4.0,
  pctSalesPromoted: 83.6,
  promoPctOfSales: 21.1
};

const doordashDetails = [
  { brand: "Bennigan's", merchantStoreId: 'CAT0001', promoFees: 4, promoSales: 16, roas: 4.0, pctSalesPromoted: 100.0 },
  // ... more data
];

const ubereatsDetails = [
  { brand: "Bennigan's", merchantStoreId: 'CAT0004', promoFees: 3, promoSales: 46, roas: 15.3, pctSalesPromoted: 100.0 },
  // ... more data
];
// --- End data section ---

const PromotionsReport = () => {
  const [view, setView] = useState('insights');
  const [filters, setFilters] = useState({});
  const handleApply = (vals) => setFilters(vals);

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 py-0">
        {/* Title + Toggle */}
        <div className="flex items-center justify-between mt-0 mb-4">
          <h1 className="text-2xl font-bold text-[#253847]">Marketing & Promotions</h1>
          <div className="flex bg-[rgba(179,40,45,0.09)] rounded-full w-52 h-8 shadow-inner cursor-pointer text-xs border border-[#b3282d]">
            <button
              className={`flex-1 px-3 py-1 rounded-full transition font-bold
                ${view === "insights" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-transparent"}`}
              style={{ fontSize: "13px", height: "32px" }}
              onClick={() => setView("insights")}
            >
              Insights
            </button>
            <button
              className={`flex-1 px-3 py-1 rounded-full transition font-bold
                ${view === "controls" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-transparent"}`}
              style={{ fontSize: "13px", height: "32px" }}
              onClick={() => setView("controls")}
            >
              Controls
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-4">
          <FilterBar onApply={handleApply} />
        </div>

        {/* Summary */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* DoorDash Summary */}
          <div className="bg-white border rounded-xl shadow p-4">
            <h2 className="text-lg font-bold mb-2">Doordash Promotion Summary</h2>
            <div className="grid grid-cols-5 gap-2 text-center">
              {Object.entries(doordashSummary).map(([key, val], i) => (
                <div key={i}>
                  <div className="text-xs text-[#5C6B7A]">{key.replace(/([A-Z])/g, ' $1')}</div>
                  <div className="text-2xl font-bold">{typeof val === 'number' && !key.includes('ROAS') ? `$${val}` : val}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* UberEats Summary */}
          <div className="bg-white border rounded-xl shadow p-4">
            <h2 className="text-lg font-bold mb-2">UberEats Promotion Summary</h2>
            <div className="grid grid-cols-5 gap-2 text-center">
              {Object.entries(ubereatsSummary).map(([key, val], i) => (
                <div key={i}>
                  <div className="text-xs text-[#5C6B7A]">{key.replace(/([A-Z])/g, ' $1')}</div>
                  <div className="text-2xl font-bold">{typeof val === 'number' && !key.includes('ROAS') ? `$${val}` : val}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-4">
          {[{ name: "Doordash", rows: doordashDetails }, { name: "UberEats", rows: ubereatsDetails }].map(({ name, rows }) => (
            <div key={name} className="bg-white border rounded-xl shadow p-4">
              <h2 className="text-lg font-bold mb-2">{name} Details</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b text-[#5C6B7A]">
                    <tr>
                      <th className="text-left py-2">Brand</th>
                      <th className="text-left py-2">Store ID</th>
                      <th className="text-right py-2">Fees</th>
                      <th className="text-right py-2">Sales</th>
                      <th className="text-right py-2">ROAS</th>
                      <th className="text-right py-2">% Promoted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, idx) => (
                      <tr key={idx} className="border-b hover:bg-[#f4f7fa]">
                        <td className="py-1">{r.brand}</td>
                        <td>{r.merchantStoreId}</td>
                        <td className="text-right">${r.promoFees}</td>
                        <td className="text-right">${r.promoSales}</td>
                        <td className="text-right">{r.roas}</td>
                        <td className="text-right">{r.pctSalesPromoted}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default PromotionsReport;
