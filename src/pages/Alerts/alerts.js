// src/pages/alerts/Alerts.js
import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';

const sampleAlerts = [
  {
    ticket: "You've a new MDM Alert",
    ticketId: "9244047644",
    date: "Tue, May 27, 2025",
    description: "MDM certificate expiring soon",
    channel: "Email",
    locations: "-",
    status: "New",
    priority: "Low"
  },
  {
    ticket: "Your Uber Eats report is ready",
    ticketId: "9245113846",
    date: "Wed, May 28, 2025",
    description: "Daily performance PDF available",
    channel: "Email",
    locations: "-",
    status: "New",
    priority: "Low"
  },
  // …more rows
];

const Alerts = () => {
  const [alerts] = useState(sampleAlerts);

  return (
    <PageWrapper>
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-[#253847] mb-4">
          Alert Inbox
        </h1>
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
              {alerts.map((row, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
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
};

export default Alerts;
