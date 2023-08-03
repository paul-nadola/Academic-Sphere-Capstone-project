import React from 'react';
import { Link } from 'react-router-dom';

function SuperAdmin() {
  return (
    <div>
        <button className='mt-4'>
            <Link
              to="/superadmin/teachers_data"
              className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mr-4"
            >
              
              Teachers Data
            </Link>
            </button>

            <button className='mt-4'>
            <Link
              to="/superadmin/students_data"
              className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mr-4"
            >
              
              Students Data
            </Link>
            </button>

            <button className='mt-4'>
            <Link
              to="/superadmin/parents_data"
              className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mr-4"
            >
              
              Parents Data
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
        <h1>Super Admin Page</h1>
    </div>
  )
}

export default SuperAdmin