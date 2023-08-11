import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ParentsPage() {
      const[currentUser, setCurrentUser] = useState([])
    useEffect(() => {
    const getUser = async () => {
      try {
        const token = sessionStorage.getItem('token');
        console.log('Token used:', token);
        const response = await fetch(
          'https://academic-sphere-tables.onrender.com/parent',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          console.error('Failed to fetch current user:', response.status);
          return;
        }

        const data = await response.json();
        setCurrentUser(data.parent);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    getUser();
  }, []);
  return (
    <div>
      {/* <div className="flex justify-evenly">
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
      </div> */}
        
          <div className="grid grid-cols-3 gap-4">
      <div className="user-container">
        <h3>First Name: {currentUser.first_name}</h3>
          <p>Last Name: {currentUser.last_name}</p>
          <p>Phone Number: {currentUser.phone_number}</p>
          <p>Email: {currentUser.email}</p>
          <p>Address: {currentUser.address}</p>
          
      </div>
      <div className="p-4 border bg-blue-800">
        <h3>Student Details</h3>
        <h4><b>First Name:</b> {currentUser?.student?.first_name}</h4>
        <h4><b>Last Name:</b> {currentUser?.student?.last_name}</h4>
        
        
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
