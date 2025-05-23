import React from 'react';
import Header from './shared/Header';

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <div className="p-6">
        {children}
      </div>
    </>
  );
};

export default PageWrapper;