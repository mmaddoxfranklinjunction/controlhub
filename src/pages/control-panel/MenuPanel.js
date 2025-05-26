import { useState } from "react";
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';

export default function MenuPanel() {
  const [showMissing, setShowMissing] = useState(true);

  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Menu Overview</h1>
        {/* Data Quick View */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white shadow p-4 rounded-2xl flex flex-col items-center">
            <span className="text-2xl font-bold">36</span>
            <span className="text-xs text-gray-500">Total Menu Items</span>
          </div>
          <div className="bg-white shadow p-4 rounded-2xl flex flex-col items-center">
            <span className="text-2xl font-bold">$12.90</span>
            <span className="text-xs text-gray-500">Avg Price</span>
          </div>
        </div>
        {/* Attribute Checks */}
        <div className="mb-6 bg-white shadow rounded-2xl p-4">
          <div className="font-medium mb-2">Attributes</div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center">
              <span className="font-bold text-red-500">3</span>
              <span className="text-xs text-gray-500">Missing Descriptions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-yellow-600">2</span>
              <span className="text-xs text-gray-500">Missing Photos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-blue-600">12</span>
              <span className="text-xs text-gray-500">Tagged 'Vegan'</span>
            </div>
          </div>
          <div className="flex items-center mt-4 gap-2">
            <input
              type="checkbox"
              checked={showMissing}
              onChange={() => setShowMissing(!showMissing)}
              className="accent-blue-500"
              id="missingToggle"
            />
            <label htmlFor="missingToggle" className="text-sm">Show only items missing info</label>
          </div>
        </div>
        {/* Price Comparisons */}
        <div className="mb-6 bg-white shadow rounded-2xl p-4">
          <div className="font-medium mb-2">Price Comparison</div>
          <div className="flex justify-between text-sm">
            <span>Burger</span>
            <span>$9.00 (You) / $9.50 (Avg)</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Pizza</span>
            <span>$13.00 (You) / $12.75 (Avg)</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Salad</span>
            <span>$8.00 (You) / $8.25 (Avg)</span>
          </div>
        </div>
        {/* Carousel Nav */}
        <div className="flex justify-between mt-8">
          <Link to="/control-panel/MarketingPanel" className="text-blue-500 hover:underline">← Marketing</Link>
          <Link to="/control-panel/LocationsPanel" className="text-blue-500 hover:underline">Locations →</Link>
        </div>
      </div>
    </PageWrapper>
  );
}
