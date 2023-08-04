import React from 'react'
import { Link } from 'react-router-dom';

function StudentsPage() {
  return (
    <div>
     
    <div className="flex justify-evenly">
      <button className="mb-2">
        <Link to="/" className='block bg-gray-200 text-blue-600 py-2 px-4 rounded hover:bg-gray-300 transition duration-300 w-full text-center'>
        <button>Home</button>
      </Link>
        </button>
      <button className="mb-2">
      <Link to="/departments" className='block bg-gray-200 text-blue-600 py-2 px-4 rounded hover:bg-gray-300 transition duration-300 w-full text-center'>
        <button>Academics</button>
      </Link>
      </button>
        
      <button className='mt-4 mb-2'>
      <Link to="/about" className='block bg-gray-200 text-blue-600 py-2 px-4 rounded hover:bg-gray-300 transition duration-300 w-full text-center'>
        <button>About</button>
      </Link>
      </button>
      
      <button className="mt-4 mb-2">
            <Link
              to="/signin"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              Sign Out
            </Link>
          </button>
          
          
      </div>
      <div className="grid grid-cols-2 gap-4">

      <div className="p-4 border bg-red-800">
        <h3>CHRISTOPHER JACKSON</h3>
        <h4><b>Enrolled:</b>  April, 17 2023</h4>
        <h4><b>Email:</b> chrisj@gmail.com</h4>
        <h4><b>Department:</b> Technology</h4>
        <h4><b>Course:</b> Cyber Security</h4>
        <h4><b>Grade:</b> A, 81pts</h4>
        <h4><b>Instructor:</b> Kaplan Dunphy</h4>
        <h4><b>Parent:</b> David Jackson</h4>
      </div>

      <div className="p-4 border bg-purple-800">
        <div className='mb-5'>
        <h1>Attendance</h1>
        <h4><b>Grade for Attendance:</b>  80%</h4>
        <h4><b>Days Present:</b> 3</h4>
        <h4><b>Days Absent:</b> 2</h4>
        <h4><b>Teacher Informed:</b> Yes</h4>
        </div>
        <hr/>
        <div className='mt-7'>
            <h3><b>FEE BALANCE:</b>-5670</h3>
            <h3>Fee Amount Paid: 54000</h3>
        </div>
      </div>

      <div className="p-4 border bg-blue-800 col-span-2">
        <h3>Assessment Results for Christopher Jackson</h3>
        <h4><b>Units: Year 1, Semester 1</b>
        <table className="table-auto w-full mt-4">
          <tr>
            <th className="border px-4 py-2">Unit</th>
            <th className="border px-4 py-2">Marks</th>
            <th className="border px-4 py-2">Grade</th>
            <th className="border px-4 py-2">Instructor's Comments</th>
          </tr>
          <tr>
            <td className="border px-4 py-2">Digital threats</td>
            <td className="border px-4 py-2">83</td>
            <td className="border px-4 py-2">A</td>
            <td className="border px-4 py-2">Great work, keep it up</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Ethical hacking</td>
            <td className="border px-4 py-2">87</td>
            <td className="border px-4 py-2">A</td>
            <td className="border px-4 py-2">Very impressive</td>
          </tr>
        </table>
        </h4>
      </div>

      
     
    </div>
    </div>
    
  )
}

export default StudentsPage