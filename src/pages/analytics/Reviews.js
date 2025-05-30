import React from "react";
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

// --- Sample Data ---
const summary = {
  positivePct: 92,
  negativePct: 8,
  neutral: 2,
  positive: 23,
  negative: 0
};
const overallRating = {
  value: 4.7,
  count: 25,
  dist: [20, 3, 2, 0, 0], // 5★, 4★, 3★, 2★, 1★
};
const channels = [
  {
    logo: "/doordash-logo.png",
    name: "DoorDash",
    rating: 4.72,
    ratings: 25,
    reviews: 0,
    change: 6.7
  }
];
const storeRankings = [
  { name: "GAD1655 - Duluth", sentiment: 96, reviews: 24, rating: 4.8, issues: 0 },
  { name: "GAD1655 - Duluth", sentiment: 0, reviews: 1, rating: 3.0, issues: 0 }
];

// --- Component ---
const Reviews = () => (

  <PageWrapper>
  <div className="max-w-[1400px] mx-auto px-4 py-8">
   {/* Filter Bar (just under title) */}
    <div className="mb-6">
      <FilterBar />
    </div>

    {/* Top Row */}
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {/* Sentiment Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-2 shadow-sm">
        <div className="font-semibold text-[#253847] text-base mb-2">
          Overall sentiment: <span className="text-green-700">positive</span>
          <span title="Info" className="text-gray-400 ml-1 cursor-pointer">ⓘ</span>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <span className="text-gray-600 font-semibold">{summary.negativePct}%</span>
          <div className="flex-1 bg-gray-100 h-3 rounded-full overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full bg-green-500" style={{ width: `${summary.positivePct}%` }} />
          </div>
          <span className="text-green-700 font-semibold">{summary.positivePct}%</span>
        </div>
        <div className="flex items-center gap-8 mt-2">
          <div className="flex items-center gap-1 text-sm">
            <span className="text-[#B3282D]">😞</span>
            <span className="font-medium text-gray-500">{summary.negative}</span> Negative
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-gray-400">😐</span>
            <span className="font-medium text-gray-500">{summary.neutral}</span> Neutral
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-green-700">😊</span>
            <span className="font-medium">{summary.positive}</span> Positive
          </div>
        </div>
      </div>
      {/* Ratings Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="font-semibold text-[#253847] text-base mb-2">
          Your overall rating: {overallRating.value} <span className="text-sm text-gray-400">({overallRating.count} reviews)</span>
        </div>
        <div className="flex flex-col gap-1">
          {[5,4,3,2,1].map((star, idx) => (
            <div key={star} className="flex items-center gap-2">
              <span className="text-green-700 text-lg">★</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-green-600"
                  style={{ width: `${(overallRating.dist[idx]/overallRating.count)*100 || 0}%` }}
                />
              </div>
              <span className="w-8 text-gray-500 text-sm">{Math.round((overallRating.dist[idx]/overallRating.count)*100) || 0}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Breakdown by channel */}
    <div className="mb-6">
      <h2 className="text-xl font-bold text-[#253847] mb-4">Breakdown by channel</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {channels.map(channel => (
          <div key={channel.name} className="bg-white rounded-xl border border-gray-200 p-6 flex items-center gap-6 shadow-sm">
            <img src={channel.logo} alt={channel.name} className="w-16 h-16 object-contain rounded-md bg-gray-100" />
            <div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">{channel.rating.toFixed(2)}</span>
                <span className="text-yellow-400 text-xl">★</span>
                <span className="text-gray-500 text-sm">{channel.ratings} ratings</span>
                <span className="text-gray-400 text-sm">{channel.reviews} reviews</span>
                <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 ml-2 text-xs font-semibold">
                  +{channel.change}%
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-1">{channel.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Store rankings and Top issues */}
    <div className="grid md:grid-cols-3 gap-6">
      {/* Store rankings - Sentiment */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="font-bold mb-2 text-[#253847]">Store rankings</div>
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="font-semibold">Overall sentiment</span>
          <span className="text-[#2679c8] font-semibold cursor-pointer">Highest to lowest ▼</span>
        </div>
        {storeRankings.map((store, idx) => (
          <div key={idx} className="flex items-center gap-2 border-b border-gray-100 py-2 last:border-0">
            <span className="text-[#B3282D] text-xl">🛒</span>
            <span className="flex-1">{store.name}</span>
            <span className="text-green-700 font-semibold">{store.sentiment}%</span>
            <span className="text-gray-400 text-xs">({store.reviews})</span>
          </div>
        ))}
      </div>
      {/* Store rankings - Ratings */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="font-bold mb-2 text-[#253847]">Ratings</div>
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="font-semibold">Ratings</span>
          <span className="text-[#2679c8] font-semibold cursor-pointer">Highest to lowest ▼</span>
        </div>
        {storeRankings.map((store, idx) => (
          <div key={idx} className="flex items-center gap-2 border-b border-gray-100 py-2 last:border-0">
            <span className="text-[#B3282D] text-xl">🛒</span>
            <span className="flex-1">{store.name}</span>
            <span className="text-yellow-400 font-semibold">{store.rating} ★</span>
            <span className="text-gray-400 text-xs">({store.reviews})</span>
          </div>
        ))}
      </div>
      {/* Store rankings - Issues */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="font-bold mb-2 text-[#253847]">Top issues</div>
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="font-semibold">Top issues</span>
          <span className="text-[#2679c8] font-semibold cursor-pointer">Highest to lowest ▼</span>
        </div>
        {/* Replace with real issues if available */}
        <div className="text-gray-400 text-center py-6">No issues found.</div>
      </div>
    </div>
  </div>
          </PageWrapper>
);

export default Reviews;
