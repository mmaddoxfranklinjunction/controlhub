import React from 'react';

const RatingsFeedback = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-[#002147]">Ratings & Feedback</h1>
    <p className="text-gray-700 mt-2">Analyze guest sentiment across platforms by store and channel.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      
        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Doordash Avg Rating</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">3.7</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">UberEats Avg Rating</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">4.1</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">Doordash 5-Star %</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">57.2%</p>
        </div>

        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-sm font-semibold text-gray-600">UberEats 5-Star %</h3>
          <p className="text-xl font-bold text-[#B22234] mt-1">65.7%</p>
        </div>
    </div>
  </div>
);

export default RatingsFeedback;