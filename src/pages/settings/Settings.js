import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [subscriptions, setSubscriptions] = useState({
    locations: [],
    brands: [],
  });

  const allLocations = ['Midtown', 'Uptown', 'Downtown'];
  const allBrands = ['BurgerBot', 'PizzaNext', 'TacoRush'];

  const toggleSubscription = (type, value) => {
    setSubscriptions(prev => {
      const list = prev[type];
      return {
        ...prev,
        [type]: list.includes(value)
          ? list.filter(item => item !== value)
          : [...list, value]
      };
    });
  };

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-[#253847]">Profile & Account Settings</h1>

        {/* Basic Info */}
        <div className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-[#253847]">User Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input type="text" defaultValue="jane.doe@example.com" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Organization</label>
              <input type="text" defaultValue="Franklin Junction" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input type="tel" defaultValue="+1 555-123-4567" className="w-full border rounded px-3 py-2" />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-[#253847]">Password</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="password" placeholder="Current Password" className="w-full border rounded px-3 py-2" />
            <input type="password" placeholder="New Password" className="w-full border rounded px-3 py-2" />
            <input type="password" placeholder="Confirm New Password" className="w-full border rounded px-3 py-2" />
          </div>
          <button className="mt-4 bg-[#b3282d] text-white px-4 py-2 rounded font-semibold hover:bg-[#8c1c24]">Reset Password</button>
        </div>

        {/* Notifications */}
        <div className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-[#253847]">Notifications</h2>
          <div className="flex items-center justify-between mb-3">
            <span>Email Alerts</span>
            <input type="checkbox" defaultChecked className="scale-125" />
          </div>
          <div className="flex items-center justify-between mb-3">
            <span>SMS Notifications</span>
            <input type="checkbox" defaultChecked className="scale-125" />
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-[#253847]">Appearance</h2>
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-1 rounded-full font-semibold border transition ${
                darkMode ? 'bg-[#253847] text-white' : 'bg-gray-100 text-[#253847]'
              }`}
            >
              {darkMode ? 'Enabled' : 'Disabled'}
            </button>
          </div>
        </div>

        {/* Subscriptions */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 text-[#253847]">Subscriptions</h2>
          <div className="mb-4">
            <p className="font-medium mb-2">Locations:</p>
            <div className="flex gap-4 flex-wrap">
              {allLocations.map(loc => (
                <label key={loc} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={subscriptions.locations.includes(loc)}
                    onChange={() => toggleSubscription('locations', loc)}
                  />
                  <span>{loc}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium mb-2">Brands:</p>
            <div className="flex gap-4 flex-wrap">
              {allBrands.map(brand => (
                <label key={brand} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={subscriptions.brands.includes(brand)}
                    onChange={() => toggleSubscription('brands', brand)}
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Settings;
