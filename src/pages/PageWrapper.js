
import React from 'react';
import Header from './Header';
import SidebarLayout from './SidebarLayout';

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="layout">
        <SidebarLayout />
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageWrapper;
