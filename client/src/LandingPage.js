import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1617372613217-0dd41ca2229c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')`,
        // filter: 'blur(5px)', // Apply a blur effect
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="h-full flex flex-col items-center justify-center relative z-10">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-6">Welcome to School Management System</h1>
          <div className="space-y-4">
            <Link
              to="/home"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              Home
            </Link>

            <Link
              to="/departments"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              Departments
            </Link>

            <Link
              to="/about"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              About
            </Link>
          </div>
          <button className="mt-4">
            <Link
              to="/signin"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              Sign In
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
