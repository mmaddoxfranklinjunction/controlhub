// src/components/shared/PageWrapper.js
import React, { useState } from 'react';
import Header from './Header';
import SidebarLayout from './SidebarLayout';

const PageWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <SidebarLayout isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-col flex-1">
        <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 px-6 py-2 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageWrapper;
