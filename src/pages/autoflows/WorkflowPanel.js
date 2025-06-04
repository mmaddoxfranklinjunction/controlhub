import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';
import FilterBar from '../../components/shared/FilterBar';

const WorkflowPanel = () => {
  


  return (
    <PageWrapper>
      <div className="px-4 py-2">
        {/* Logo + Title + FilterBar Row */}
        <div className="flex items-center gap-3 mb-4">
          <img src="/fj-circle-logo.png" alt="Control Hub" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-[#253847] font-sans mr-4 whitespace-nowrap">Control Panel</h1>
          <div className="flex-1">
            <FilterBar onApply={() => {}} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         
        </div>
      </div>
    </PageWrapper>
  );
};

export default WorkflowPanel;
