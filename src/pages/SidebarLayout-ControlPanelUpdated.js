import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ControlPanel from './ControlPanel';
import RecommendationsLocations from './RecommendationsLocations';
// Placeholder imports – update with actual files when available
const Placeholder = ({ title }) => <div className="p-6"><h1 className="text-2xl font-bold">{title}</h1></div>;

const SidebarLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-2 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Control Hub</h2>
        <nav className="space-y-1">
          <Link to="/control-panel" className="block py-2 hover:bg-gray-700 rounded px-2">Control Panel</Link>
          <Link to="/control-panel/marketing" className="block py-2 hover:bg-gray-700 rounded px-2">Marketing</Link>
          <Link to="/control-panel/operations" className="block py-2 hover:bg-gray-700 rounded px-2">Operations</Link>
          <Link to="/control-panel/locations" className="block py-2 hover:bg-gray-700 rounded px-2">Locations</Link>
          <Link to="/control-panel/menu" className="block py-2 hover:bg-gray-700 rounded px-2">Menu</Link>

          <hr className="my-4 border-gray-600" />

          <Link to="/analytics/sales" className="block py-2 hover:bg-gray-700 rounded px-2">Sales Overview</Link>
          <Link to="/analytics/operations" className="block py-2 hover:bg-gray-700 rounded px-2">Operations Performance</Link>
          <Link to="/analytics/ratings" className="block py-2 hover:bg-gray-700 rounded px-2">Ratings & Feedback</Link>
          <Link to="/analytics/promotions" className="block py-2 hover:bg-gray-700 rounded px-2">Promotions</Link>
          <Link to="/analytics/sponsored" className="block py-2 hover:bg-gray-700 rounded px-2">Sponsored Listing</Link>
          <Link to="/analytics/recovery" className="block py-2 hover:bg-gray-700 rounded px-2">Revenue Recovery</Link>

          <hr className="my-4 border-gray-600" />

          <Link to="/recommendations/marketing" className="block py-2 hover:bg-gray-700 rounded px-2">Chef’s: Marketing</Link>
          <Link to="/recommendations/operations" className="block py-2 hover:bg-gray-700 rounded px-2">Chef’s: Operations</Link>
          <Link to="/recommendations/locations" className="block py-2 hover:bg-gray-700 rounded px-2">Chef’s: Locations</Link>
          <Link to="/recommendations/menu" className="block py-2 hover:bg-gray-700 rounded px-2">Chef’s: Menu</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route path="/control-panel" element={<ControlPanel />} />
          <Route path="/control-panel/marketing" element={<Placeholder title="Marketing Panel" />} />
          <Route path="/control-panel/operations" element={<Placeholder title="Operations Panel" />} />
          <Route path="/control-panel/locations" element={<Placeholder title="Locations Panel" />} />
          <Route path="/control-panel/menu" element={<Placeholder title="Menu Panel" />} />

          <Route path="/analytics/sales" element={<Placeholder title="Sales Overview" />} />
          <Route path="/analytics/operations" element={<Placeholder title="Operations Performance" />} />
          <Route path="/analytics/ratings" element={<Placeholder title="Ratings & Feedback" />} />
          <Route path="/analytics/promotions" element={<Placeholder title="Promotions Report" />} />
          <Route path="/analytics/sponsored" element={<Placeholder title="Sponsored Listing Report" />} />
          <Route path="/analytics/recovery" element={<Placeholder title="Revenue Recovery" />} />

          <Route path="/recommendations/marketing" element={<Placeholder title="Chef’s Recommendations: Marketing" />} />
          <Route path="/recommendations/operations" element={<Placeholder title="Chef’s Recommendations: Operations" />} />
          <Route path="/recommendations/locations" element={<RecommendationsLocations />} />
          <Route path="/recommendations/menu" element={<Placeholder title="Chef’s Recommendations: Menu" />} />

          <Route path="*" element={<Placeholder title="Welcome to Control Hub" />} />
        </Routes>
      </main>
    </div>
  );
};

export default SidebarLayout;