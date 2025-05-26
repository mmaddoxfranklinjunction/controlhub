import { useState } from "react";
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';

export default function LocationsPanel() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Location Details</h1>
        {/* Storefront Status */}
        <div className="bg-white shadow p-4 rounded-2xl mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Storefront Uptime</span>
            <span className="text-green-600 font-bold">99.95%</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span>Current Hours:</span>
            <span className="font-bold text-gray-700">10am – 10pm</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Storefront Visible:</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-12 h-6 rounded-full ${isOpen ? 'bg-green-400' : 'bg-gray-300'} flex items-center transition-colors duration-200`}
              aria-pressed={isOpen}
            >
              <span
                className={`h-5 w-5 bg-white rounded-full shadow transform transition-transform duration-200 ${isOpen ? 'translate-x-6' : ''}`}
              />
            </button>
            <span className="ml-2 text-xs">{isOpen ? "Open" : "Closed"}</span>
          </div>
        </div>
        {/* Storefront Visibility Score */}
        <div className="bg-white shadow p-4 rounded-2xl mb-6">
          <div className="flex justify-between">
            <span className="font-medium">Visibility Score</span>
            <span className="text-blue-600 font-bold">8.7 / 10</span>
          </div>
          <div className="mt-2 text-xs text-gray-500">Trending up (+0.3 this week)</div>
        </div>
        {/* Carousel Nav */}
        <div className="flex justify-between mt-8">
          <Link to="/control-panel/MenuPanel" className="text-blue-500 hover:underline">← Menu</Link>
          <Link to="/control-panel/OperationsPanel" className="text-blue-500 hover:underline">Operations →</Link>
        </div>
      </div>
    </PageWrapper>
  );
}
