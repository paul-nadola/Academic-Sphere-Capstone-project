import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ParentsPage() {
  const [parentData, setParentData] = useState({});
  const [studentData, setStudentData] = useState({});
  const [feeData, setFeeData] = useState({});
  
  useEffect(() => {
    
    fetch('https://api.example.com/parentData')
      .then(response => response.json())
      .then(data => setParentData(data));

    fetch('https://api.example.com/studentData')
      .then(response => response.json())
      .then(data => setStudentData(data));

    fetch('https://api.example.com/feeData')
      .then(response => response.json())
      .then(data => setFeeData(data));
  }, []);

  return (
    <div>
      <div className="flex justify-evenly">
        <button className="mb-2">
          <Link
            to="/"
            className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
          >
            Home
          </Link>
        </button>
        <button className="mb-2">
          <Link
            to="/departments"
            className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
          >
            Academics
          </Link>
        </button>
        <button className="mt-4 mb-2">
          <Link
            to="/about"
            className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
          >
            About
          </Link>
        </button>
        <button className="mt-4 mb-2">
          <Link
            to="/signin"
            className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
          >
            Sign Out
          </Link>
        </button>
        </div>

      <div className="p-4 space-x-4">
        <div className="inline-block border rounded p-4 text-pri1">
          <h3>{parentData.name}</h3>
          <h4><b>Phone Number:</b> {parentData.phoneNumber}</h4>
          <h4><b>Email:</b> {parentData.email}</h4>
          <h4><b>Address:</b> {parentData.address}</h4>
        </div>
        <br/>
        <hr/>
        <br/>
        <div className="inline-block border rounded p-4 text-pri1">
          <h3>Student Details</h3>
          <h4><b>Name:</b> {studentData.name}</h4>
          <h4><b>Phone Number:</b> {studentData.phoneNumber}</h4>
          <h4><b>Email:</b> {studentData.email}</h4>
          <h4><b>Department:</b> {studentData.Engineering}</h4>
        <h4><b>Course:</b> {studentData.CivilEngineering}</h4>
        </div>
        <hr/>
        <div className="inline-block border rounded p-4 text-pri1">
          <h3>Fee Information</h3>
          <h4><b>Fee Balance:</b> {feeData.balance}</h4>
          <h4><b>Fee Paid:</b> {feeData.paid}</h4>
        </div>
        <div className="inline-block border rounded p-4 text-pri1 col-span-2">
          <h1>Inquiries</h1>
          {/* ... Inquiries ... */}
        </div>
        <hr/>
        <div className="inline-block border rounded p-4 text-pri1">
          <h1><b>NEWS AND UPDATES</b></h1>
          <ol className="list-decimal">
            <li>Mid-term break to start on 1st August and end on 8th August.</li>
            <li>Annual cultural day to take place on 10th October, kindly purpose to attend.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ParentsPage;


