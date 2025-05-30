// src/pages/alerts/Alerts.js
import React from "react";

// Sample data; replace with your real data import when ready
const sampleAlerts = [
  {
    ticket: "You've a new MDM Alert",
    ticketId: "9244047644",
    date: "Tue, May 27, 2025",
    description: "[https://business.mosyle.com/images/main.png]",
    channel: "support@franklinjunction.com",
    locations: "-",
    status: "New",
    priority: "Low"
  },
  {
    ticket: "Your Uber Eats report is ready...",
    ticketId: "9245113846",
    date: "Tue, May 27, 2025",
    description: "[https://d1a3f4spazzrp4.cloudfront.net/eats.pdf]",
    channel: "support@franklinjunction.com",
    locations: "-",
    status: "New",
    priority: "Low"
  },
  // Add more rows as needed
];

const header = [
  { key: "select", label: "" },
  { key: "ticket", label: "Ticket" },
  { key: "ticketId", label: "Ticket ID" },
  { key: "date", label: "Submitted Date" },
  { key: "description", label: "Description" },
  { key: "channel", label: "Channel" },
  { key: "locations", label: "LOCATIONS" },
  { key: "status", label: "Status" },
  { key: "priority", label: "Priority" }
];

const Alerts = () => {
  return (
    <div className="w-full h-full bg-[#242942] text-white p-4 rounded-xl shadow-md overflow-x-auto" style={{ fontFamily: "Futura, sans-serif" }}>
      <table className="min-w-full text-xs table-fixed">
        <thead>
          <tr className="bg-[#232742]">
            {header.map(col => (
              <th
                key={col.key}
                className={`py-2 px-3 border-b border-[#383e5a] font-semibold text-[#A6B9C7] text-left ${col.key === 'select' ? 'w-6' : ''}`}
                style={{ whiteSpace: 'nowrap' }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sampleAlerts.map((alert, i) => (
            <tr
              key={i}
              className={`border-b border-[#383e5a] hover:bg-[#26304c] transition`}
            >
              <td className="px-2 py-2"><input type="checkbox" /></td>
              <td className="px-3 py-2 max-w-[250px] truncate">{alert.ticket}</td>
              <td className="px-3 py-2">{alert.ticketId}</td>
              <td className="px-3 py-2">{alert.date}</td>
              <td className="px-3 py-2 max-w-[280px] truncate">{alert.description}</td>
              <td className="px-3 py-2">{alert.channel}</td>
              <td className="px-3 py-2 text-center">{alert.locations}</td>
              <td className="px-3 py-2">{alert.status}</td>
              <td className="px-3 py-2">{alert.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Scrollbar styling for overflow-x on table */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
          background: #383e5a;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #2e3754;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Alerts;
