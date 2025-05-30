// src/pages/Alerts/Alerts.js
import React from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import { alertsData } from '../../data/alertsData';


const Alerts = () => (
  <PageWrapper>
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold text-[#253847] mb-4">Alert Inbox</h1>
      <div className="bg-white rounded-xl shadow border overflow-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 w-6"><input type="checkbox" /></th>
              <th className="p-3">Ticket</th>
              <th className="p-3">Ticket ID</th>
              <th className="p-3">Submitted Date</th>
              <th className="p-3">Description</th>
              <th className="p-3">Channel</th>
              <th className="p-3">Locations</th>
              <th className="p-3">Status</th>
              <th className="p-3">Priority</th>
            </tr>
          </thead>
          <tbody>
            {alertsData.map((row, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-3"><input type="checkbox" /></td>
                <td className="p-3 truncate max-w-xs">{row.ticket}</td>
                <td className="p-3">{row.ticketId}</td>
                <td className="p-3">{row.date}</td>
                <td className="p-3 truncate max-w-sm">{row.description}</td>
                <td className="p-3">{row.channel}</td>
                <td className="p-3">{row.locations}</td>
                <td className="p-3">{row.status}</td>
                <td className="p-3">{row.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </PageWrapper>
);

export default Alerts;
