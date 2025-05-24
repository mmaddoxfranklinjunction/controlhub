import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import SidebarLayout from './components/shared/SidebarLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* ✅ Home page NOT inside SidebarLayout */}
        <Route path="/" element={<Home />} />

        {/* ✅ Everything else gets SidebarLayout */}
        <Route path="/*" element={<SidebarLayout />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
