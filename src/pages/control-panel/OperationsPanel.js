import { useState } from "react";
import PageWrapper from '.../components/shared/PageWrapper';
import Link from 'next/link';

export default function OperationsPanel() {
  const [autoTraining, setAutoTraining] = useState(true);
  const [alertLevel, setAlertLevel] = useState("moderate");

  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Operations</h1>
        {/* M&I and Ratings */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white shadow p-4 rounded-2xl flex flex-col items-center">
            <span className="text-2xl font-bold">4.7</span>
            <span className="text-xs text-gray-500">Avg Store Rating</span>
          </div>
          <div className="bg-white shadow p-4 rounded-2xl flex flex-col items-center">
            <span className="text-2xl font-bold text-green-600">99.8%</span>
            <span className="text-xs text-gray-500">Overall Uptime</span>
          </div>
        </div>
        {/* Best/Worst Performing */}
        <div className="mb-6 bg-white shadow rounded-2xl p-4">
          <div className="font-medium mb-2">Performance</div>
          <div className="flex justify-between items-center">
            <span>Best: <span className="font-bold text-green-700">Store #2</span></span>
            <span>Worst: <span className="font-bold text-red-600">Store #5</span></span>
          </div>
        </div>
        {/* Config Toggles */}
        <div className="mb-6 bg-white shadow rounded-2xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Auto-Training Enabled</span>
            <button
              onClick={() => setAutoTraining(!autoTraining)}
              className={`w-12 h-6 rounded-full ${autoTraining ? 'bg-blue-500' : 'bg-gray-300'} flex items-center transition-colors duration-200`}
              aria-pressed={autoTraining}
            >
              <span
                className={`h-5 w-5 bg-white rounded-full shadow transform transition-transform duration-200 ${autoTraining ? 'translate-x-6' : ''}`}
              />
            </button>
            <span className="ml-2 text-xs">{autoTraining ? "Yes" : "No"}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="font-medium">Alert Preferences</span>
            <select
              className="border rounded p-1 ml-2 text-xs"
              value={alertLevel}
              onChange={e => setAlertLevel(e.target.value)}
            >
              <option value="none">None</option>
              <option value="moderate">Moderate</option>
              <option value="urgent">Urgent</option>
            </select>
            <span className="ml-2 text-xs capitalize">{alertLevel}</span>
          </div>
        </div>
        {/* Carousel Nav */}
        <div className="flex justify-between mt-8">
          <Link href="/control-panel/LocationsPanel" className="text-blue-500 hover:underline">← Locations</Link>
          <Link href="/control-panel/MarketingPanel" className="text-blue-500 hover:underline">Marketing →</Link>
        </div>
      </div>
    </PageWrapper>
  );
}
