import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ParentsPage() {
  const [parentData, setParentData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [feeData, setFeeData] = useState([]);
  
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
        <div>
          {parentData.map((parent, index) => (
            <div key={index} className="inline-block border rounded p-4 text-pri1">
              <h3>{parent.name}</h3>
              <h4><b>Phone Number:</b> {parent.phoneNumber}</h4>
              <h4><b>Email:</b> {parent.email}</h4>
              <h4><b>Address:</b> {parent.address}</h4>
            </div>
          ))}
        </div>
        <br/>
        <hr/>
        <br/>
        <div>
      {studentData.map((student, index) => (
        <div key={index} className="inline-block border rounded p-4 text-pri1">
          <h3>Student Details</h3>
          <h4><b>Name:</b> {student.name}</h4>
          <h4><b>Phone Number:</b> {student.phoneNumber}</h4>
          <h4><b>Email:</b> {student.email}</h4>
          <h4><b>Department:</b> {student.Engineering}</h4>
          <h4><b>Course:</b> {student.CivilEngineering}</h4>
        </div>
      ))}

      <hr />

      {feeData.map((fee, index) => (
        <div key={index} className="inline-block border rounded p-4 text-pri1">
          <h3>Fee Information</h3>
          <h4><b>Fee Balance:</b> {fee.balance}</h4>
          <h4><b>Fee Paid:</b> {fee.paid}</h4>
        </div>
      ))}
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


