import React from 'react';
import { Link } from 'react-router-dom';

function Departments() {
  return (
    <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center bg-gray-100" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', }}>
      <h1 className="text-4xl font-bold text-white">Departments</h1>
      <p className="text-white">
        We have three major departments at our school, which cater for the different courses offered. Take a tour around!
      </p>
      <div className="space-y-4 mt-4">
        <Link to="/technology">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            TECHNOLOGY
          </button>
        </Link><br/>
        <Link to="/social-sciences">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            SOCIAL SCIENCES
          </button>
        </Link><br/>
        <Link to="/engineering">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            ENGINEERING
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Departments;
