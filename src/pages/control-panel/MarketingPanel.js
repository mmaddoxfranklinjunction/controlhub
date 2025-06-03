import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';
import HostDropdown from '../../components/shared/HostDropdown';
import hostStoreList from '../../data/hostStoreList';
import FilterBar from '../../components/shared/FilterBar';

const ControlPanel = () => {
  const [selectedHost, setSelectedHost] = useState("All Locations");

  const chartData = [
    { month: 'Feb', cost: 5000, revenue: 30000 },
    { month: 'Mar', cost: 11000, revenue: 32000 },
    { month: 'Apr', cost: 10500, revenue: 34000 },
    { month: 'May', cost: 15000, revenue: 35000 },
    { month: 'Jun', cost: 14000, revenue: 20000 },
    { month: 'Jul', cost: 13000, revenue: 25000 },
    { month: 'Aug', cost: 12500, revenue: 28000 },
    { month: 'Sep', cost: 13500, revenue: 40000 },
    { month: 'Oct', cost: 17000, revenue: 95000 },
    { month: 'Nov', cost: 15000, revenue: 50000 },
    { month: 'Dec', cost: 12000, revenue: 48000 },
    { month: 'Jan', cost: 16000, revenue: 47000 },
  ];

  const uptimeData = [
    { date: '5/27', avg: 100, best: 100, worst: 100 },
    { date: '5/28', avg: 100, best: 100, worst: 98 },
    { date: '5/29', avg: 100, best: 100, worst: 97 },
    { date: '5/30', avg: 100, best: 100, worst: 95 },
    { date: '5/31', avg: 99, best: 100, worst: 93 },
    { date: '6/1', avg: 96, best: 99, worst: 85 },
    { date: '6/2', avg: 55, best: 90, worst: 45 },
  ];

  const maxValue = Math.max(...chartData.map(d => Math.max(d.cost, d.revenue)));
  const height = 100;
  const width = 280;
  const pointGap = width / (chartData.length - 1);
  const scaleY = value => height - (value / maxValue) * height;
  const getPath = (key) => chartData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${i * pointGap},${scaleY(d[key])}`).join(' ');

  const uptimeHeight = 100;
  const uptimeWidth = 280;
  const uptimePointGap = uptimeWidth / (uptimeData.length - 1);
  const scaleUptime = val => uptimeHeight - (val / 100) * uptimeHeight;
  const getUptimePath = key => uptimeData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${i * uptimePointGap},${scaleUptime(d[key])}`).join(' ');
  const getUptimeArea = () => uptimeData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${i * uptimePointGap},${scaleUptime(d.avg)}`).join(' ') + ` L ${uptimeWidth},${uptimeHeight} L 0,${uptimeHeight} Z`;

  return (
    <PageWrapper>
      <div className="px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <img src="/fj-circle-logo.png" alt="Franklin Junction" className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold text-[#253847] font-sans">Control Panel</h1>
              <div className="text-sm text-[#5C6B7A] mt-1">Location: <span className="font-semibold text-[#B3282D]">{selectedHost}</span></div>
            </div>
          </div>
          <div className="w-full md:w-72">
            <HostDropdown hosts={hostStoreList} onChange={setSelectedHost} />
          </div>
        </div>

        <div className="mb-4">
          <FilterBar onApply={() => {}} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Marketing",
              dataLink: "/analytics/promotions",
              controlsLink: "/control-panel/marketing",
              customContent: (
                <div className="h-full w-full">
                  <div className="text-xs text-[#5C6B7A] mb-1">COST VS REVENUE</div>
                  <svg viewBox={`0 0 ${width} ${height + 20}`} className="w-full h-full">
                    <text x="0" y="10" fontSize="10" fill="#5C6B7A">$</text>
                    <text x={width - 20} y={height + 15} fontSize="10" fill="#5C6B7A">Date</text>
                    <path d={getPath('cost')} fill="none" stroke="#2B7A78" strokeWidth="2" />
                    <path d={getPath('revenue')} fill="none" stroke="#B3282D" strokeWidth="2" />
                  </svg>
                  <div className="flex justify-between text-[10px] text-[#5C6B7A] mt-1">
                    <span>Spend</span>
                    <span>Revenue</span>
                  </div>
                </div>
              )
            },
            {
              title: "Operations",
              dataLink: "/analytics/operations",
              controlsLink: "/control-panel/operations"
            },
            {
              title: "Locations",
              dataLink: "/analytics/recovery",
              controlsLink: "/control-panel/locations",
              customContent: (
                <div className="h-full w-full">
                  <div className="text-xs text-[#5C6B7A] mb-1">UPTIME RATE</div>
                  <svg viewBox={`0 0 ${uptimeWidth} ${uptimeHeight + 20}`} className="w-full h-full">
                    <text x="0" y="10" fontSize="10" fill="#5C6B7A">%</text>
                    <text x={uptimeWidth - 28} y={uptimeHeight + 15} fontSize="10" fill="#5C6B7A">Date</text>
                    <path d={getUptimeArea()} fill="#2B7A7833" />
                    <path d={getUptimePath('avg')} stroke="#2B7A78" strokeWidth="2" fill="none" />
                    <path d={getUptimePath('best')} stroke="#7FB77E" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
                    <path d={getUptimePath('worst')} stroke="#B3282D" strokeWidth="1.5" fill="none" strokeDasharray="2 3" />
                  </svg>
                  <div className="flex justify-between text-[10px] text-[#5C6B7A] mt-1">
                    <span>Best Store</span>
                    <span>Worst Store</span>
                  </div>
                  <div className="mt-2">
                    <div className="text-sm font-semibold text-[#2B7A78]">Health Score</div>
                    <div className="flex items-center mt-1 relative h-3 bg-[#F0F4F8] rounded-xl overflow-hidden">
                      <div className="h-3 bg-[#C6D9CE]" style={{ width: '85%' }}></div>
                      <div className="absolute left-[85%] -top-2">
                        <span className="text-xs">▲</span>
                      </div>
                      <div className="absolute left-[72%] -top-2 text-[#B3282D]">
                        <span className="text-xs">▲</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            },
            {
              title: "Menu",
              dataLink: "/analytics/sales",
              controlsLink: "/control-panel/menu"
            }
          ].map(({ title, dataLink, controlsLink, customContent }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col justify-between h-64"
            >
              <h2 className="text-base font-semibold text-[#253847] font-sans mb-2">
                {title}
              </h2>
              {customContent ? (
                customContent
              ) : (
                <div className="text-center text-[#5C6B7A] text-sm">Metrics coming soon...</div>
              )}
              <div className="flex justify-between text-sm text-[#B3282D] font-medium mt-3">
                <Link to={dataLink} className="hover:underline">📊 Data</Link>
                <Link to={controlsLink} className="hover:underline">🎛️ Controls</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ControlPanel;
