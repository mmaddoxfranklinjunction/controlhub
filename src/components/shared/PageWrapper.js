// src/components/shared/PageWrapper.js
import React, { useState } from 'react';
import Header from './Header';
import SidebarLayout from './SidebarLayout';
import { Menu } from 'lucide-react'; // icon library assumed installed

const PageWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex bg-[#F9F9F9]">
      {/* Sidebar shown/hidden */}
      {isSidebarOpen && <SidebarLayout />}

      <div className="flex flex-col flex-1 min-h-screen">
        {/* Header with toggle */}
        <div className="flex items-center justify-between px-4 py-2 border-b bg-white shadow-sm">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <Menu size={20} />
          </button>
          <Header />
        </div>

        <main className="flex-1 px-6 py-2 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageWrapper;
