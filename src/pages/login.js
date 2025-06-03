import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // Add login logic
    alert('Logging in...');
  };
  
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <img src="/homelogo.png" alt="Logo" className="w-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2 text-[#002147] text-center">Login to Your Account</h1>
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
            name="password"
            type="password"
            required
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#B3282D]"
          />
          <button
            type="submit"
            className="bg-[#B3282D] text-white py-2 rounded-full font-semibold text-lg hover:bg-[#8c1c24] transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-500">
          Don’t have an account?{' '}
          <Link to="/account-setup" className="text-[#B3282D] font-semibold hover:underline">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
