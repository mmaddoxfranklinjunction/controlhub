// src/components/shared/PageWrapper.js
import React from 'react';
import Header from './Header';
import SidebarLayout from './SidebarLayout';

const PageWrapper = ({ children }) => (
  <div className="min-h-screen flex bg-[#F9F9F9]">
    {/* Sidebar always on the far left, full height */}
    <SidebarLayout />
    <div className="flex flex-col flex-1 min-h-screen">
      {/* Header only over the main content, not above sidebar */}
      <Header />
      <main className="flex-1 px-6 py-8 overflow-y-auto">
        {children}
      </main>
    </div>
  </div>
);

export default PageWrapper;
