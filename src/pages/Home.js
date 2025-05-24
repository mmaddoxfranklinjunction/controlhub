import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fefaf7] text-center px-4">
      <img
        src={`${process.env.PUBLIC_URL}/control_hub_logo.png`}
        alt="Control Hub Logo"
        className="w-36 mb-6"
      />
      <h1 className="text-4xl font-bold text-[#002147] mb-2">The GM for your Digital Restaurant</h1>
     
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-12">
        {[
          {
            to: "/analytics/sales",
            emoji: "📈",
            title: "Analytics",
            desc: "View your sales and operational data"
          },
          {
            to: "/store-search",
            emoji: "🔍",
            title: "Store Search",
            desc: "Locate and manage your stores"
          },
          {
            to: "/control-panel",
            emoji: "☑️",
            title: "Control Panel",
            desc: "Adjust your online menu and settings"
          },
          {
            to: "/settings",
            emoji: "⚙️",
            title: "Settings",
            desc: "Manage your account and preferences"
          }
        ].map((card, i) => (
          <Link
            key={i}
            to={card.to}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition text-left"
          >
            <div className="text-3xl mb-2">{card.emoji}</div>
            <h2 className="font-semibold text-xl text-[#002147]">{card.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{card.desc}</p>
          </Link>
        ))}
      </div>

      <Link
        to="/control-panel"
        className="bg-[#B3282D] text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-[#8c1c24] transition"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;
