import React from 'react'
import { Link } from 'react-router-dom';

function ParentsPage() {
  return (
    <div>
      <div className="flex justify-end">
      {/* <button className="mb-2">
        <Link to="/" className='block bg-gray-200 text-blue-600 py-2 px-4 rounded hover:bg-gray-300 transition duration-300 w-full text-center'>
        <button>Home</button>
      </Link>
        </button> */}
      {/* <button className="mb-2">
      <Link to="/departments" className='block bg-gray-200 text-blue-600 py-2 px-4 rounded hover:bg-gray-300 transition duration-300 w-full text-center'>
        <button>Academics</button>
      </Link>
      </button> */}
        
      {/* <button className='mt-4 mb-2'>
      <Link to="/about" className='block bg-gray-200 text-blue-600 py-2 px-4 rounded hover:bg-gray-300 transition duration-300 w-full text-center'>
        <button>About</button>
      </Link>
      </button> */}
      
      <button className="mt-4 mb-2">
            <Link
              to="/signin"
              className="hover:bg-pri2 hover:text-white p-2 rounded-md"
            >
              Sign Out
            </Link>
          </button>
      </div>
        
          <div className="grid grid-cols-3 gap-4">
      <div className="p-4 border bg-red-800">
        <h3>DAVID JACKSON</h3>
        <h4><b>Phone Number:</b> 0944244</h4>
        <h4><b>Email:</b> djackson@gmail.com</h4>
        <h4><b>Address:</b> P.O Box 464 Tokyo, Japan</h4>
      </div>
      <div className="p-4 border bg-blue-800">
        <h3>Student Details</h3>
        <h4><b>Name:</b> Nicolas Jackson</h4>
        <h4><b>Phone Number:</b> 0944244</h4>
        <h4><b>Email:</b> nicolas@student.school.com</h4>
        
        <h4><b>Department:</b> Engineering</h4>
        <h4><b>Course:</b> Civil Engineering</h4>
        <br/>
        <hr/>
        <h4><b>Units: Year 1, Semester 1</b>
        <table className="table-auto w-full mt-4">
          <tr>
            <th className="border px-4 py-2">Unit Name</th>
            <th className="border px-4 py-2">Grade Scored</th>
          </tr>
          <tr>
            <td className="border px-4 py-2">Foundations in Engineering</td>
            <td className="border px-4 py-2">A, 81pts</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Design Patterns</td>
            <td className="border px-4 py-2">B, 68pts</td>
          </tr>
        </table>
        </h4>
      </div>
      <div className="p-4 border bg-green-800">
        <h3>Fee Information</h3>
        <h4><b>Fee Balance:</b> -5435</h4>
        <h4><b>Fee Paid:</b> 54000</h4>
      </div>
      <div className="p-4 border bg-purple-800 col-span-2">
        <h1>Inquiries</h1>
      </div>
      <div className="p-4 border bg-pink-800">
        <h1>NEWS AND UPDATES</h1>
        <ol className="list-decimal">
          <li>Mid-term break to start on 
     1st August and end on 8th 
     August.</li>
     <li>Annual cultural day to take place on 10th October, kindly purpose to attend.</li>
        </ol>
      </div>
    </div>
    </div>
  )
}

export default ParentsPage;
