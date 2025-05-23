import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import SidebarLayout from './pages/SidebarLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <SidebarLayout />
  </Router>
);