import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const pages = [
  "control-panel", "analytics/sales", "analytics/operations", "analytics/ratings",
  "analytics/promotions", "analytics/sponsored", "analytics/recovery",
  "recommendations/marketing", "recommendations/operations", "recommendations/locations", "recommendations/menu"
];

const SidebarLayout = () => (
  <div className="flex h-screen">
    <aside className="w-64 bg-gray-800 text-white p-4 space-y-2">
      {pages.map((page) => (
        <Link key={page} to={`/${page}`} className="block py-2 hover:bg-gray-700 rounded">{page}</Link>
      ))}
    </aside>
    <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
      <Routes>
        {pages.map((page) => (
          <Route key={page} path={`/${page}`} element={<div><h1 className="text-2xl font-bold">{page.replace('/', ' → ')}</h1></div>} />
        ))}
        <Route path="*" element={<div>Welcome to Control Hub</div>} />
      </Routes>
    </main>
  </div>
);

export default SidebarLayout;