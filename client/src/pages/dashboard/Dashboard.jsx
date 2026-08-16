import React from 'react';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500">Welcome back</p>

        <h2 className="mt-1 text-3xl font-bold">{user?.name}</h2>

        <p className="mt-2 text-gray-600">
          Here's what's happening with your client portal.
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
