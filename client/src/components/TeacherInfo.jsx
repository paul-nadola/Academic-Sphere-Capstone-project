import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TeacherInfo() {
  const [teachersData, setTeachersData] = useState([]);

  useEffect(() => {
    fetch('teachersUrl')
      .then(response => response.json())
      .then(data => {
        setTeachersData(data);
      })
      .catch(error => {
        console.error('Error fetching teachers data:', error);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-evenly">
        <div className="mt-4">
          <Link
            to="/"
            className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
          >
            Home
          </Link>
        </div>
        <div className="mt-4">
          <Link
            to="/departments"
            className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
          >
            Departments
          </Link>
        </div>
        <div className="mt-4">
          <Link
            to="/about"
            className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
          >
            About
          </Link>
        </div>
        <div className="mb-5">
          <Link
            to="/studentinfo"
            className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
          >
            Students
          </Link>
        </div>
        <div className="mt-4">
          <button
            className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
          >
            <Link to="/signin">Sign Out</Link>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {teachersData.map((teacher, index) => (
          <div key={index} className="p-4 border bg-white-800">
            <h3 className="mb-2"><b>Teacher:</b> {teacher.teacherName}</h3>
            <h4 className="mb-2"><b>Last Name:</b> {teacher.lastName}</h4>
            <h4 className="mb-2"><b>Email:</b> {teacher.email}</h4>
            <h4 className="mb-2"><b>Phone Number:</b> {teacher.phoneNumber}</h4>
            <h4 className="mb-2"><b>Department:</b> {teacher.department}</h4>
            <h4 className="mb-2"><b>Courses:</b> {teacher.courses.join(', ')}</h4>
            <h4 className="mb-2"><b>Role:</b> {teacher.role}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherInfo;
