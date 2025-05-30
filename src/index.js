import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import AccountSetup from './pages/account-setup';
import Login from './pages/login';

// Layout (wraps all dashboard pages)
import SidebarLayout from './components/shared/SidebarLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Public Home/Login/Signup pages */}
        <Route path="/" element={<Home />} />
        <Route path="/account-setup" element={<AccountSetup />} />
        <Route path="/login" element={<Login />} />

        {/* All other dashboard pages are handled by SidebarLayout! */}
        <Route path="/*" element={<SidebarLayout />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
