import React from 'react';
import { Link } from 'react-router-dom';

function ParentsData() {
  return (
    <div>
        <button className='mt-4'>
            <Link
              to="/superadmin"
              className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mr-4"
            >
              
              Back to Dashboard
            </Link>
            <h1>Parents Data Page</h1>
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
  )
}

export default ParentsData