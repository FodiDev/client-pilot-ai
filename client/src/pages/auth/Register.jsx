import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Create your account</h1>

        <p className="mt-2 text-gray-600">
          Get started with your AI Client Portal.
        </p>

        <div className="mt-8">
          <p className="text-gray-500">
            Registration form coming in Sprint 2.6.
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
