import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountSetup = () => {
  const [form, setForm] = useState({
    email: '',
    phone: '',
    password: '',
    confirm: '',
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // Add account creation logic
    alert('Account created!');
  };

    const [view, setView] = useState("insights");

  const handleApply = () => {
    console.log("Apply filters:", filters);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <img src="/homelogo.png" alt="Logo" className="w-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2 text-[#002147] text-center">Create Your Account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#B3282D]"
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#B3282D]"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#B3282D]"
          />
          <input
            name="confirm"
            type="password"
            required
            placeholder="Confirm Password"
            value={form.confirm}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#B3282D]"
          />
          <button
            type="submit"
            className="bg-[#B3282D] text-white py-2 rounded-full font-semibold text-lg hover:bg-[#8c1c24] transition"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-[#B3282D] font-semibold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
