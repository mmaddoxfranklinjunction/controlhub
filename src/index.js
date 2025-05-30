import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import AccountSetup from './pages/account-setup';
import Login from './pages/login';

// The full sidebar+header layout
import SidebarLayout from './components/shared/SidebarLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Public pages, no sidebar/header */}
        <Route path="/" element={<Home />} />
        <Route path="/account-setup" element={<AccountSetup />} />
        <Route path="/login" element={<Login />} />

        {/* All dashboard/analytics pages inside SidebarLayout */}
        <Route path="/*" element={<SidebarLayout />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
