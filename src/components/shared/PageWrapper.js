import React from 'react';
import SidebarLayout from './SidebarLayout';

const PageWrapper = ({ children }) => (
  <SidebarLayout>
    {children}
  </SidebarLayout>
);

export default PageWrapper;
