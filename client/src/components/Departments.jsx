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
              Sign Out
            </Link>
          </button>
          </div>
    <div className="h-screen flex justify-start bg-gray-500 w-90vw" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className='h-70vh w-90vw flex flex-col items-center'>
      <h1 className="text-4xl font-bold">Departments</h1>
      <p>
        We have three major departments at our school, which cater for the different courses offered. Take a tour around!
      </p>
      
      <div className="h-70vh w-90vw flex flex-col items-start justify-end">
          <button className="mt-4">
            <Link
              to="/technology"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              TECHNOLOGY
            </Link>
          </button>
        </div>
        <div className="h-70vh w-90vw flex flex-col items-center justify-center">
          <button className="mt-4">
            <Link
              to="/social-sciences"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              SOCIAL SCIENCES
            </Link>
          </button>
        </div>
        <div className="h-70vh w-90vw flex flex-col items-end justify-start">
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
      
    </div>
    </>
    
  );
}

export default Departments;
