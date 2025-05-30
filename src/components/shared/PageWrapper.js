// src/components/shared/PageWrapper.js
import React from 'react';
import Header from './Header';
import SidebarLayout from './SidebarLayout';

const PageWrapper = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-[#F9F9F9]">
    <Header />
    <div className="flex flex-1">
      <SidebarLayout />
      <main className="flex-1 px-6 py-8 overflow-y-auto">
        {children}
      </main>
    </div>
  </div>
);

export default PageWrapper;
