import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';

// Example store data (replace with real data or import from a file)
const stores = [
  {
    storeId: 'CAT0001',
    name: "Bennigan's - Dallas",
    address: '123 Main St, Dallas, TX',
    phone: '214-555-1234',
    brand: "Bennigan's",
    account: 'ACCT-101'
  },
  {
    storeId: 'DEN7587',
    name: "Bennigan's - Denver",
    address: '555 Colfax Ave, Denver, CO',
    phone: '303-555-9876',
    brand: "Bennigan's",
    account: 'ACCT-102'
  },
  {
    storeId: 'OH001',
    name: "Effin Egg - Woodstock",
    address: '421 N Main St, Woodstock, GA',
    phone: '770-555-4321',
    brand: "Effin Egg",
    account: 'ACCT-103'
  },
  // ...add more stores as needed
];

const StoreSearch = () => {
  const [search, setSearch] = useState('');

  // Returns stores matching any of the search criteria
  const filteredStores = stores.filter(store =>
    [store.storeId, store.name, store.address, store.phone, store.brand, store.account]
      .some(val => val && val.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <PageWrapper>
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Store Search</h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-full md:w-1/2 px-4 py-2 border rounded text-sm"
            placeholder="Search by Store ID, Name, Address, Phone, Brand, or Account"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="bg-white border rounded-xl shadow p-4">
          <table className="w-full text-sm">
            <thead className="border-b text-[#5C6B7A]">
              <tr>
                <th className="text-left py-2">Store ID</th>
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Address</th>
                <th className="text-left py-2">Phone</th>
                <th className="text-left py-2">Brand</th>
                <th className="text-left py-2">Account</th>
              </tr>
            </thead>
            <tbody>
              {filteredStores.length ? filteredStores.map((store, i) => (
                <tr key={i} className="border-b hover:bg-[#f4f7fa]">
                  <td className="py-1">{store.storeId}</td>
                  <td>{store.name}</td>
                  <td>{store.address}</td>
                  <td>{store.phone}</td>
                  <td>{store.brand}</td>
                  <td>{store.account}</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={6} className="py-4 text-center text-gray-400">No stores found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </PageWrapper>
  );
};

export default StoreSearch;
