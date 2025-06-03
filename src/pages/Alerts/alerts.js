import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import { alertsData } from '../../data/alertsData';

const Alerts = () => {
  const [channelFilter, setChannelFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredData = alertsData.filter(alert =>
    (channelFilter === "All" || alert.channel === channelFilter) &&
    (priorityFilter === "All" || alert.priority === priorityFilter) &&
    (statusFilter === "All" || alert.status === statusFilter)
  );

  return (
    <PageWrapper>
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-[#253847] mb-4">Alert Inbox</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm font-medium">
          {/* Channel */}
          <div className="flex gap-2">
            {["All", "DoorDash", "Uber Eats"].map(ch => (
              <button
                key={ch}
                onClick={() => setChannelFilter(ch)}
                className={`px-4 py-1 rounded-full border ${
                  channelFilter === ch
                    ? "bg-[#B3282D] text-white"
                    : "text-[#253847] border-gray-300"
                }`}
              >
                {ch}
              </button>
            ))}
          </div>

          {/* Priority */}
          <div className="flex gap-2">
            {["All", "High", "Medium", "Low"].map(pr => (
              <button
                key={pr}
                onClick={() => setPriorityFilter(pr)}
                className={`px-4 py-1 rounded-full border ${
                  priorityFilter === pr
                    ? "bg-[#B3282D] text-white"
                    : "text-[#253847] border-gray-300"
                }`}
              >
                {pr}
              </button>
            ))}
          </div>

          {/* Status */}
          <div className="flex gap-2">
            {["All", "Inbound", "Working", "Resolved"].map(st => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-4 py-1 rounded-full border ${
                  statusFilter === st
                    ? "bg-[#B3282D] text-white"
                    : "text-[#253847] border-gray-300"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Order ID or customer name..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>

        {/* List */}
        <div className="space-y-3">
          {filteredData.map((alert, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-3 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="flex items-center gap-4 mb-2 md:mb-0">
                <img
                  src={
                    alert.channel === "DoorDash"
                      ? "/doordash-logo.png"
                      : "/uber-eats-logo.png"
                  }
                  alt={alert.channel}
                  className="w-8 h-8 rounded"
                />
                <div>
                  <div className="font-semibold text-[#253847]">{alert.ticket}</div>
                  <div className="text-xs text-gray-400">{alert.ticketId} • {alert.date}</div>
                </div>
              </div>

              <div className="text-sm text-[#5C6B7A] flex-1 md:ml-4 mb-2 md:mb-0">
                {alert.description}
              </div>

              <div className="flex flex-col md:items-end gap-1 text-sm whitespace-nowrap">
                <span className="text-gray-400">{alert.locations}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  alert.status === "Resolved"
                    ? "bg-green-100 text-green-700"
                    : alert.status === "Working"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-700"
                }`}>
                  {alert.status}
                </span>
                <span className="text-xs text-[#B3282D]">{alert.priority} Priority</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Alerts;
