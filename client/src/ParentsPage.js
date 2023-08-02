import React from 'react'
import { Link } from 'react-router-dom';

function ParentsPage() {
  return (
    <div>
        <Link to="/">
        <button>Home</button>
      </Link>
        <Link to="/departments">
        <button>Academics</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <button className="mt-4">
            <Link
              to="/"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              Sign Out
            </Link>
          </button>
    </div>
  )
}

export default ParentsPage;
