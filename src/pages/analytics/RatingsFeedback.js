import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

const RatingsFeedback = () => {
  const [view, setView] = useState('insights');
  const [filters, setFilters] = useState({});

  const handleApply = (vals) => setFilters(vals);

  const doordash = {
    average: 4.5,
    total: 8,
    fiveStar: 6,
    fivePct: '75.0%',
    oneStar: 0,
    onePct: '0.0%',
  };

  const ubereats = {
    average: 4.0,
    total: 2,
    fiveStar: 1,
    fivePct: '50.0%',
    oneStar: 0,
    onePct: '0.0%',
  };

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6 py-0">
        {/* Header */}
        <div className="flex items-center justify-between mt-0 mb-4">
          <h1 className="text-2xl font-bold text-[#253847]">Ratings & Feedback</h1>
          <div className="flex bg-[rgba(179,40,45,0.09)] rounded-full w-52 h-8 shadow-inner cursor-pointer text-xs border border-[#b3282d]">
            <button
              className={`flex-1 px-3 py-1 rounded-full transition font-bold ${view === "insights" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d]"}`}
              onClick={() => setView("insights")}
            >
              Insights
            </button>
            <button
              className={`flex-1 px-3 py-1 rounded-full transition font-bold ${view === "controls" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d]"}`}
              onClick={() => setView("controls")}
            >
              Controls
            </button>
          </div>
        </div>

        <div className="mb-4">
          <FilterBar onApply={handleApply} />
        </div>

        {/* Ratings Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[{ label: 'Doordash Rating', data: doordash }, { label: 'Uber Eats Rating', data: ubereats }].map((ch, idx) => (
            <div key={idx} className="border border-gray-300 rounded-xl p-6 bg-white">
              <h2 className="text-center font-semibold text-lg mb-4">{ch.label}</h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl font-bold">{ch.data.average.toFixed(2)}</span>
                <span className="text-yellow-500 text-xl">★★★★★</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center text-sm mt-4">
                <div className="border p-3">
                  <div>Total Ratings</div>
                  <div className="text-lg font-bold">{ch.data.total}</div>
                </div>
                <div className="border p-3">
                  <div>5 Star Rating%</div>
                  <div className="text-lg font-bold">{ch.data.fivePct}</div>
                </div>
                <div className="border p-3">
                  <div>Total 5 Star Rating</div>
                  <div className="text-lg font-bold">{ch.data.fiveStar}</div>
                </div>
                <div className="border p-3">
                  <div>1 Star Rating%</div>
                  <div className="text-lg font-bold">{ch.data.onePct}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ratings by Store */}
        <div className="mt-6">
          <h2 className="text-lg font-bold text-[#253847] mb-2">Ratings by Store</h2>
          <table className="w-full text-sm bg-white border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-[#b3282d] text-white text-left">
              <tr>
                <th className="p-3">Store Name</th>
                <th className="p-3">Channel</th>
                <th className="p-3">Brand</th>
                <th className="p-3">Total Rating Count DD</th>
                <th className="p-3">Average Rating DD</th>
                <th className="p-3">Total Rating Count UE</th>
                <th className="p-3">Average Rating UE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Nathan's Famous - CAT0002 (Roosevelt Blvd)</td>
                <td className="p-3">Doordash</td>
                <td className="p-3">Nathan's Famous</td>
                <td className="p-3">8</td>
                <td className="p-3">4.50</td>
                <td className="p-3">2</td>
                <td className="p-3">4.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PageWrapper>
  );
};

export default RatingsFeedback;
