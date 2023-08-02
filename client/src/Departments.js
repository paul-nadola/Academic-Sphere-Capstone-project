import React from 'react';
import { Link } from 'react-router-dom';

function Departments() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
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
    </>
    
  );
}

export default Departments;
