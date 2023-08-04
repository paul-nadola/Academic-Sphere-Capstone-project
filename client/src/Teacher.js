import React from 'react'
import { Link } from 'react-router-dom';

function Teacher() {
  return (
    <div>
     
    <div className="flex justify-evenly">
    <div className="mt-4">
  <Link
    to="/"
    className='block bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center'
  >
    Home
  </Link>
</div>

        <button className='mt-4'>
            <Link
              to="/departments"
              className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mr-4"
            >
              Departments
            </Link>
        </button>
      <button className='mt-4'>
            <Link
              to="/about"
              className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              About
            </Link>
            </button>
            <div className='mb-5'>
        <button className='mt-4'>
            <Link
              to="/studentinfo"
              className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mr-4"
            >
              Students
            </Link>
        </button>
        </div>
            <div className="mt-4">
  <button
    className="block bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
  >
    <Link to="/signin">Sign Out</Link>
  </button>
</div>

          
          
      </div>
      <div className="grid grid-cols-2 gap-4">

      <div className="p-4 border bg-white-800">
  <h3 className="mb-2"><b>Teacher:</b> KAPLAN</h3>
  <h4 className="mb-2"><b>Last Name:</b> Dunphy</h4>
  <h4 className="mb-2"><b>Email:</b> kaplan@gmail.com</h4>
  <h4 className="mb-2"><b>Phone Number:</b> 0944744</h4>
  <h4 className="mb-2"><b>Department:</b> Technology</h4>
  <h4 className="mb-2"><b>Courses:</b> Software Engineering,<br/>UI/UX Design</h4>
  <h4 className="mb-2"><b>Role:</b> Instructor</h4>
</div>

     
    </div>
    </div>
    
  )
}

export default Teacher;