import React from 'react';
import { Link } from 'react-router-dom';

function Departments() {
  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center">
      <div className="absolute top-0 right-0 p-4">
        <Link
          to="/home"
          className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Home
        </Link>
      </div>
      <h1 className="text-4xl font-bold">Departments</h1>
    </div>
  );
}

export default Departments;
