import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="mt-2 text-gray-600">
          Welcome to you ClientPilot AI Portal
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Active Projects</p>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Clients</p>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Tasks</p>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">AI Requests</p>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
