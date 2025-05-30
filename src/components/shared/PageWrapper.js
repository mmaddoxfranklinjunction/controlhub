// src/components/shared/PageWrapper.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import SidebarLayout from './SidebarLayout';

const PageWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem('sidebarOpen');
    if (saved !== null) {
      setIsSidebarOpen(saved === 'true');
    }
  }, []);

  // Save preference
  useEffect(() => {
    localStorage.setItem('sidebarOpen', isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen flex bg-[#F9F9F9]">
      <SidebarLayout isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-col flex-1 min-h-screen">
        <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 px-6 py-2 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageWrapper;
