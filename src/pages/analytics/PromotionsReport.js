import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

// --- Static promo data based on your screenshot ---

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
  { brand: "Bennigan's", merchantStoreId: 'CAT0004', promoFees: 0, promoSales: 0, roas: 0.0, pctSalesPromoted: 0.0 },
  { brand: "Bennigan's", merchantStoreId: 'DEN6773', promoFees: 0, promoSales: 0, roas: 0.0, pctSalesPromoted: 0.0 },
  { brand: "Bennigan's", merchantStoreId: 'DEN6863', promoFees: 4, promoSales: 7, roas: 1.8, pctSalesPromoted: 100.0 },
  { brand: "Bennigan's", merchantStoreId: 'DEN7587', promoFees: 12, promoSales: 130, roas: 10.8, pctSalesPromoted: 27.5 },
  { brand: "Bennigan's", merchantStoreId: 'DEN7589', promoFees: 4, promoSales: 16, roas: 4.0, pctSalesPromoted: 53.3 },
  { brand: "Bennigan's", merchantStoreId: 'DEN7865', promoFees: 0, promoSales: 0, roas: 0.0, pctSalesPromoted: 0.0 },
  { brand: "Bennigan's", merchantStoreId: 'DEN8786', promoFees: 4, promoSales: 45, roas: 11.3, pctSalesPromoted: 46.4 },
  { brand: "Bennigan's", merchantStoreId: 'DEN8878', promoFees: 0, promoSales: 0, roas: 0.0, pctSalesPromoted: 0.0 }
];

const ubereatsDetails = [
  { brand: "Bennigan's", merchantStoreId: 'CAT0004', promoFees: 3, promoSales: 46, roas: 15.3, pctSalesPromoted: 100.0 },
  { brand: "Bennigan's", merchantStoreId: 'DEN6773', promoFees: 0, promoSales: 0, roas: 0.0, pctSalesPromoted: 0.0 },
  { brand: "Bennigan's", merchantStoreId: 'DEN6863', promoFees: 0, promoSales: 0, roas: 0.0, pctSalesPromoted: 0.0 },
  { brand: "Bennigan's", merchantStoreId: 'DEN7587', promoFees: 5, promoSales: 15, roas: 3.0, pctSalesPromoted: 2.8 },
  { brand: "Bennigan's", merchantStoreId: 'DEN7589', promoFees: 0, promoSales: 0, roas: 0.0, pctSalesPromoted: 0.0 },
  { brand: "Bennigan's", merchantStoreId: 'DEN7865', promoFees: 5, promoSales: 27, roas: 5.4, pctSalesPromoted: 44.1 },
  { brand: "Bennigan's", merchantStoreId: 'DEN8786', promoFees: 0, promoSales: 0, roas: 0.0, pctSalesPromoted: 0.0 },
  { brand: "Bennigan's", merchantStoreId: 'DEN9329', promoFees: 0, promoSales: 0, roas: 0.0, pctSalesPromoted: 0.0 },
  { brand: "Bennigan's", merchantStoreId: 'GCP0001', promoFees: 0, promoSales: 0, roas: 0.0, pctSalesPromoted: 0.0 }
];

// -- End data section --

const PromotionsReport = () => {
  const [filters, setFilters] = useState({
    location: 'All',
    brand: 'All',
    channel: 'All',
    date: 'Current Month',
    search: ''
  });

  return (
    <PageWrapper>
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">Marketing & Promotions Analytics</h1>
        <FilterBar
          data={[
            ...doordashDetails,
            ...ubereatsDetails,
          ]}
          onFilterChange={setFilters}
        />

        {/* Summary bar */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* DoorDash */}
          <div className="bg-white border rounded-xl shadow p-4">
            <h2 className="text-lg font-bold mb-2">Doordash Promotion Summary</h2>
            <div className="grid grid-cols-5 gap-2 text-center mb-2">
              <div>
                <div className="text-xs text-[#5C6B7A]">Promo $ Sales</div>
                <div className="text-2xl font-bold">${doordashSummary.promoSales.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs text-[#5C6B7A]">Promo Fees</div>
                <div className="text-2xl font-bold">{doordashSummary.promoFees.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs text-[#5C6B7A]">Promo ROAS</div>
                <div className="text-2xl font-bold">{doordashSummary.promoROAS}</div>
              </div>
              <div>
                <div className="text-xs text-[#5C6B7A]">% of Sales Promoted</div>
                <div className="text-2xl font-bold">{doordashSummary.pctSalesPromoted}%</div>
              </div>
              <div>
                <div className="text-xs text-[#5C6B7A]">Promo as % of Sales</div>
                <div className="text-2xl font-bold">{doordashSummary.promoPctOfSales}%</div>
              </div>
            </div>
          </div>
          {/* UberEats */}
          <div className="bg-white border rounded-xl shadow p-4">
            <h2 className="text-lg font-bold mb-2">UberEats Promotion Summary</h2>
            <div className="grid grid-cols-5 gap-2 text-center mb-2">
              <div>
                <div className="text-xs text-[#5C6B7A]">Promo $ Sales</div>
                <div className="text-2xl font-bold">${ubereatsSummary.promoSales.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs text-[#5C6B7A]">Promo Fees</div>
                <div className="text-2xl font-bold">{ubereatsSummary.promoFees.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs text-[#5C6B7A]">Promo ROAS</div>
                <div className="text-2xl font-bold">{ubereatsSummary.promoROAS}</div>
              </div>
              <div>
                <div className="text-xs text-[#5C6B7A]">% of Sales Promoted</div>
                <div className="text-2xl font-bold">{ubereatsSummary.pctSalesPromoted}%</div>
              </div>
              <div>
                <div className="text-xs text-[#5C6B7A]">Promo as % of Sales</div>
                <div className="text-2xl font-bold">{ubereatsSummary.promoPctOfSales}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Details tables */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* DoorDash Details */}
          <div className="bg-white border rounded-xl shadow p-4">
            <h2 className="text-lg font-bold mb-2">Doordash Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b text-[#5C6B7A]">
                  <tr>
                    <th className="text-left py-2">Brand</th>
                    <th className="text-left py-2">Merchant Store ID</th>
                    <th className="text-right py-2">Total Promo Fees</th>
                    <th className="text-right py-2">Total Promo Sales</th>
                    <th className="text-right py-2">ROAS</th>
                    <th className="text-right py-2">% Sales Promoted</th>
                  </tr>
                </thead>
                <tbody>
                  {doordashDetails.map((row, i) => (
                    <tr key={i} className="border-b hover:bg-[#f4f7fa]">
                      <td className="py-1">{row.brand}</td>
                      <td>{row.merchantStoreId}</td>
                      <td className="text-right">{row.promoFees}</td>
                      <td className="text-right">${row.promoSales}</td>
                      <td className="text-right">{row.roas}</td>
                      <td className="text-right">{row.pctSalesPromoted}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* UberEats Details */}
          <div className="bg-white border rounded-xl shadow p-4">
            <h2 className="text-lg font-bold mb-2">UberEats Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b text-[#5C6B7A]">
                  <tr>
                    <th className="text-left py-2">Brand</th>
                    <th className="text-left py-2">Merchant Store ID</th>
                    <th className="text-right py-2">Total Promo Fees</th>
                    <th className="text-right py-2">Total Promo Sales</th>
                    <th className="text-right py-2">ROAS</th>
                    <th className="text-right py-2">% Sales Promoted</th>
                  </tr>
                </thead>
                <tbody>
                  {ubereatsDetails.map((row, i) => (
                    <tr key={i} className="border-b hover:bg-[#f4f7fa]">
                      <td className="py-1">{row.brand}</td>
                      <td>{row.merchantStoreId}</td>
                      <td className="text-right">{row.promoFees}</td>
                      <td className="text-right">${row.promoSales}</td>
                      <td className="text-right">{row.roas}</td>
                      <td className="text-right">{row.pctSalesPromoted}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};


export default PromotionsReport;
