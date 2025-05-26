import { useState } from "react";
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';

export default function MarketingPanel() {
  const [spend, setSpend] = useState(60); // out of 100
  const aiRecommended = 70;

  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Marketing Settings</h1>
        {/* Promo Spend Meter & Dial */}
        <div className="mb-6 p-4 rounded-2xl shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Promotional Spend</span>
            <span className="text-xs text-gray-500">Adjust spend strategy</span>
          </div>
          <div className="flex items-center gap-3">
            <span>None</span>
            <input
              type="range"
              min="0"
              max="100"
              value={spend}
              onChange={e => setSpend(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <span className="font-bold">Aggressive</span>
          </div>
          {/* Meter/AI mark */}
          <div className="relative h-2 w-full bg-gray-100 rounded-full mt-2">
            <div
              className="absolute top-0 h-2 bg-blue-400 rounded-full"
              style={{ width: `${spend}%` }}
            />
            <div
              className="absolute top-0 h-4 w-1 bg-green-500 left-0 -translate-y-1"
              style={{ left: `calc(${aiRecommended}% - 1px)` }}
              title="AI Recommended"
            />
          </div>
          <div className="mt-2 text-xs text-green-500">
            AI Recommended Spend: {aiRecommended}%
          </div>
        </div>
        {/* Results Stat */}
        <div className="mb-6 p-4 rounded-2xl shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Spend to Result (12w trend)</span>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col items-center flex-1">
              <span className="text-2xl font-bold text-blue-600">+22%</span>
              <span className="text-xs text-gray-500">Order Uplift</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <span className="text-2xl font-bold text-green-600">$1,250</span>
              <span className="text-xs text-gray-500">Avg Weekly Promo Spend</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <span className="text-2xl font-bold text-orange-500">8.5</span>
              <span className="text-xs text-gray-500">Promo ROI</span>
            </div>
          </div>
        </div>
        {/* Carousel Nav */}
        <div className="flex justify-between mt-8">
          <Link to="/control-panel/OperationsPanel" className="text-blue-500 hover:underline">← Operations</Link>
          <Link to="/control-panel/MenuPanel" className="text-blue-500 hover:underline">Menu →</Link>
        </div>
      </div>
    </PageWrapper>
  );
}
