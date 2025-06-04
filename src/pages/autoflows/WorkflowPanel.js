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
          <h1 className="text-xl font-bold text-[#253847] font-sans mr-4 whitespace-nowrap">WorkFlow Panel</h1>
          <div className="flex-1">
            <FilterBar onApply={() => {}} />
          </div>
        </div>

        {/* Subway Stop Progress Bar */}
        <div className="w-full flex items-center justify-center my-8">
          {/* Line (behind circles) */}
          <div className="absolute left-0 right-0 h-2 bg-gray-200 rounded-full z-0 mx-12" style={{top: '50%'}} />
          <div className="flex w-full max-w-2xl mx-auto justify-between items-center relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-7 h-7 rounded-full bg-[#253847] border-4 border-white flex items-center justify-center z-10" />
              <span className="mt-2 text-sm font-medium text-[#253847]">Integrate</span>
            </div>
            {/* Connector */}
            <div className="flex-1 h-2 -mx-2 bg-gray-200 z-0" />
            {/* Step 2 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-7 h-7 rounded-full bg-[#253847] border-4 border-white flex items-center justify-center z-10" />
              <span className="mt-2 text-sm font-medium text-[#253847]">Insights</span>
            </div>
            {/* Connector */}
            <div className="flex-1 h-2 -mx-2 bg-gray-200 z-0" />
            {/* Step 3 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-7 h-7 rounded-full bg-[#253847] border-4 border-white flex items-center justify-center z-10" />
              <span className="mt-2 text-sm font-medium text-[#253847]">Auto Config</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Your content here */}
        </div>
      </div>
    </PageWrapper>
  );
};

export default WorkflowPanel;
