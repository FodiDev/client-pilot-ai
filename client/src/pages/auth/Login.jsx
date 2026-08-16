import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="mt-2 text-gray-600">
          Log in to your ClientPilot AI account.
        </p>
        <div className="mt-8">
          <p className="text-gray-500">Login form coming in Sprint 2.5</p>
        </div>
        <p className="mt-6 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium underline">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
