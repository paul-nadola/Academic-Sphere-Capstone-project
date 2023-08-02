import React from 'react';
import { Link } from 'react-router-dom';

function Departments() {
  return (
    <>
    <div className="flex justify-evenly">
            <button className='mt-4'>
            <Link
              to="/departments"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-center"
            >
              Departments
            </Link>
            </button>
            
            <button className='mt-4'>
            <Link
              to="/parents"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-center"
            >
              Parent Page
            </Link>
            </button>
            
            <button className='mt-4'>
            <Link
              to="/about"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-center"
            >
              About
            </Link>
            </button>
            
            <button className="mt-4">
            <Link
              to="/signin"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              Sign In
            </Link>
          </button>
          </div>
    <div className="h-screen flex justify-start bg-gray-500 w-90vw">
      <div className='bg-red-400 h-70vh w-90vw flex flex-col items-center'>
      <h1 className="text-4xl font-bold">Departments</h1>
      <p>
        We have three major departments at our school, which cater for the different courses offered. Take a tour around!
      </p>
      
      <button className="mt-4">
            <Link
              to="/technology"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              TECHNOLOGY
            </Link>
          </button>
          <button className="mt-4">
            <Link
              to="/social-sciences"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              SOCIAL SCIENCES
            </Link>
          </button>
         <button className="mt-4">
            <Link
              to="/engineering"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              ENGINEERING
            </Link>
          </button>
      </div>
      
    </div>
    </>
    
  );
}

export default Departments;
