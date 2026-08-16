import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="miin-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="flex h-16 items-center justify-between px-6">
          <h1 className="text-x1 font-bold">ClientPilot AI</h1>
          <div className="text-sm text-gray-600">User</div>
        </div>
      </header>
      <div className="flex">
        <aside className="hidden min-h-[calc(100vh-4rem)] w-64 border-r bg-white p-6 md:block">
          <nav className="space-y-3">
            <p className="font-medium">Dashboard</p>
            <p className="text-gray-600">Clients</p>
            <p className="text-gray-600">Projects</p>
            <p className="text-gray-600">Tasks</p>
            <p className="text-gray-600">AI Assistant</p>
            <p className="text-gray-600">Settings</p>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
