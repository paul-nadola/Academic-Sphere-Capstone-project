// import React from "react";
import { Link } from 'react-router-dom';


function StudentInfo() {

  return (
    <div className="my-4">
        
      <h2 className="text-xl font-semibold mb-4">Student Information</h2>
      <table className="w-full border-collapse border border-gray-500">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-500">First Name</th>
            <th className="p-2 border border-gray-500">Last Name</th>
            <th className="p-2 border border-gray-500">Course</th>
            <th className="p-2 border border-gray-500">Units</th>
            <th className="p-2 border border-gray-500">Grade</th>
            <th className="p-2 border border-gray-500">Attendance Grade</th>
          </tr>
        </thead>
        <tbody>
          
            <tr className="bg-white">
              <td className="p-2 border border-gray-500"></td>
              <td className="p-2 border border-gray-500"></td>
              <td className="p-2 border border-gray-500"></td>
              <td className="p-2 border border-gray-500"></td>
              <td className="p-2 border border-gray-500"></td>
              <td className="p-2 border border-gray-500"></td>
            </tr>
          
        </tbody>
      </table>
      <button className='mt-4'>
            <Link
              to="/teachers"
              className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mr-4"
            >
              Back
            </Link>
        </button>
    </div>
  );
}

export default StudentInfo;