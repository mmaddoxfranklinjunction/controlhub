import { useState } from "react";
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';


const OperationsPanel = () => {
  const [autoTraining, setAutoTraining] = useState(true);
  const [alertLevel, setAlertLevel] = useState("moderate");
  const [view, setView] = useState("insights");

  const handleApply = () => {
    console.log("Apply filters:", filters);
  };
  
  return (
    <PageWrapper>
        <div className="max-w-5xl mx-auto px-6 py-0">
        {/* Title + Toggle */}
        <div className="flex items-center justify-between mt-0 mb-4">
          <h1 className="text-2xl font-bold text-[#253847]">Operations Conrol Panel</h1>
          <div className="flex bg-[rgba(179,40,45,0.09)] rounded-full w-52 h-8 shadow-inner cursor-pointer text-xs border border-[#b3282d]">
            <button
              className={`flex-1 px-3 py-1 rounded-full transition font-bold
                ${view === "insights" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-[rgba(179,40,45,0.09)]"}`}
              style={{ fontSize: "13px", height: "32px", transition: "all 0.15s" }}
              onClick={() => setView("insights")}
            >
              Insights
            </button>
            <button
              className={`flex-1 px-3 py-1 rounded-full transition font-bold
                ${view === "controls" ? "bg-[#b3282d] text-white shadow" : "text-[#b3282d] bg-[rgba(179,40,45,0.09)]"}`}
              style={{ fontSize: "13px", height: "32px", transition: "all 0.15s" }}
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
        <div className="mb-6 bg-white shadow rounded-2xl p-4">
          <div className="font-medium mb-2">Performance</div>
          <div className="flex justify-between items-center">
            <span>Best: <span className="font-bold text-green-700">Store #2</span></span>
            <span>Worst: <span className="font-bold text-red-600">Store #5</span></span>
          </div>
        </div>
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
        <div className="flex justify-between mt-8">
          <Link to="/control-panel/LocationsPanel" className="text-blue-500 hover:underline">← Locations</Link>
          <Link to="/control-panel/MarketingPanel" className="text-blue-500 hover:underline">Marketing →</Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default OperationsPanel;
