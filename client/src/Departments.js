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
      <p>
        We have three major departments at our school, which cater for the different courses offered. Take a tour around!
      </p>
      <Link to="/technology">
        <button>TECHNOLOGY</button>
      </Link>
      <Link to="/social-sciences">
        <button>SOCIAL SCIENCES</button>
      </Link>
      <Link to="/engineering">
        <button>ENGINEERING</button>
      </Link>
    </div>
  );
}

export default Departments;
