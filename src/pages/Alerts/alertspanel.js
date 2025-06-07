// src/pages/AlertsPanel.js
import React from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import { alertsData } from '../../data/alertsData';

const AlertsPanel = () => {
  // 1. Total
  const totalAlerts = alertsData.length;

  // 2. By channel
  const alertsByChannel = alertsData.reduce((acc, alert) => {
    acc[alert.channel] = (acc[alert.channel] || 0) + 1;
    return acc;
  }, {});

  // 3. By type
  const alertsByType = alertsData.reduce((acc, alert) => {
    acc[alert.type] = (acc[alert.type] || 0) + 1;
    return acc;
  }, {});

  // Build a flat list of metrics
  const metrics = [
    { title: 'Total Alerts', value: totalAlerts },
    ...Object.entries(alertsByChannel).map(([channel, count]) => ({
      title: `${channel} Alerts`,
      value: count,
    })),
    ...Object.entries(alertsByType).map(([type, count]) => ({
      title: `${type} Alerts`,
      value: count,
    })),
  ];

  return (
    <PageWrapper>
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-[#253847] mb-6">
          Alerts Summary Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col justify-between"
            >
              <h2 className="text-sm font-medium text-[#253847]">
                {metric.title}
              </h2>
              <p className="mt-2 text-2xl font-bold text-[#B3282D]">
                {metric.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default AlertsPanel;
