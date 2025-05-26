import React, { useState, useMemo } from 'react';

const getUniqueSorted = (data, key) => {
  const set = new Set();
  data.forEach(row => {
    if (row[key]) set.add(row[key]);
  });
  return Array.from(set).sort();
};

const FilterBar = ({
  data = [],
  onFilterChange = () => {},
  showChannel = true,
  showDate = true,
  showSearch = true,
  className = ''
}) => {
  // Extract dropdown options
  const locations = useMemo(() => ['All', ...getUniqueSorted(data, 'location')], [data]);
  const brands = useMemo(() => ['All', ...getUniqueSorted(data, 'brand')], [data]);
  const channelOptions = ['All', 'Doordash', 'UberEats'];
  const dateOptions = ['Current Month', 'Current Week', 'Previous Week', 'Custom'];

  // Local state
  const [showFilters, setShowFilters] = useState(false);
  const [location, setLocation] = useState('All');
  const [brand, setBrand] = useState('All');
  const [channel, setChannel] = useState('All');
  const [date, setDate] = useState('Current Week');
  const [search, setSearch] = useState('');

  // Call back on any filter change
  React.useEffect(() => {
    onFilterChange({ location, brand, channel, date, search });
    // eslint-disable-next-line
  }, [location, brand, channel, date, search]);

  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
        {showSearch && (
          <input
            type="text"
            placeholder="Search Merchant Store ID"
            className="px-4 py-2 border rounded w-full md:w-1/2 text-sm"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        )}
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 font-semibold text-sm"
          onClick={() => setShowFilters(v => !v)}
          type="button"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      {showFilters && (
        <div className="bg-[#f4f7fa] border rounded-xl px-4 py-3 flex flex-wrap gap-3 mb-3">
          <div>
            <label className="block text-xs mb-1">Location</label>
            <select
              className="border rounded px-2 py-1 text-sm"
              value={location}
              onChange={e => setLocation(e.target.value)}
            >
              {locations.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs mb-1">Brand</label>
            <select
              className="border rounded px-2 py-1 text-sm"
              value={brand}
              onChange={e => setBrand(e.target.value)}
            >
              {brands.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          {showChannel && (
            <div>
              <label className="block text-xs mb-1">Channel</label>
              <select
                className="border rounded px-2 py-1 text-sm"
                value={channel}
                onChange={e => setChannel(e.target.value)}
              >
                {channelOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          )}
          {showDate && (
            <div>
              <label className="block text-xs mb-1">Date</label>
              <select
                className="border rounded px-2 py-1 text-sm"
                value={date}
                onChange={e => setDate(e.target.value)}
              >
                {dateOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterBar;
