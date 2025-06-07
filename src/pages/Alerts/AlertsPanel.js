// src/pages/Alerts/AlertsPanel.js

import React from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import { alertsData } from '../../data/alertsData';

const AlertsPanel = () => {
  // total count
  const totalAlerts = alertsData.length;

  // grouped by channel
  const alertsByChannel = alertsData.reduce((acc, a) => {
    acc[a.channel] = (acc[a.channel] || 0) + 1;
    return acc;
  }, {});

  // grouped by type
  const alertsByType = alertsData.reduce((acc, a) => {
    acc[a.type] = (acc[a.type] || 0) + 1;
    return acc;
  }, {});

  const metrics = [
    { title: 'Total Alerts', value: totalAlerts },
    ...Object.entries(alertsByChannel).map(([ch, cnt]) => ({
      title: `${ch} Alerts`,
      value: cnt,
    })),
    ...Object.entries(alertsByType).map(([type, cnt]) => ({
      title: `${type} Alerts`,
      value: cnt,
    })),
  ];

  return (
    <PageWrapper>
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-[#253847] mb-6">
          Alerts Summary Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col justify-between"
            >
              <h2 className="text-sm font-medium text-[#253847]">{m.title}</h2>
              <p className="mt-2 text-2xl font-bold text-[#B3282D]">
                {m.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default AlertsPanel;
