import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function StudentsPage() {
  const [studentData, setStudentData] = useState(null);
  const [assessmentResults, setAssessmentResults] = useState([]);
  const [feeBalance, setFeeBalance] = useState({});
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetch('studentUrl')
      .then(response => response.json())
      .then(data => {
        setStudentData(data);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });

    fetch('assessmentResultsUrl')
      .then(response => response.json())
      .then(data => {
        setAssessmentResults(data);
      })
      .catch(error => {
        console.error('Error fetching assessment results:', error);
      });

    fetch('feeBalanceUrl')
      .then(response => response.json())
      .then(data => {
        setFeeBalance(data);
      })
      .catch(error => {
        console.error('Error fetching fee balance:', error);
      });

    fetch('attendanceDataUrl')
      .then(response => response.json())
      .then(data => {
        setAttendanceData(data);
      })
      .catch(error => {
        console.error('Error fetching attendance data:', error);
      });
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


      <div className="p-4">
        {studentData && (
          <div className="p-4 space-x-4">
            <div className="inline-block border rounded p-4 text-pri1">
              <h3><b>{studentData.name}</b></h3>
              <h4><b>Enrolled:</b> {studentData.enrollmentDate}</h4>
              <h4><b>Email:</b> {studentData.email}</h4>
              <h4><b>Department:</b> {studentData.department}</h4>
              <h4><b>Course:</b> {studentData.course}</h4>
              <h4><b>Grade:</b> {studentData.grade}</h4>
              <h4><b>Instructor:</b> {studentData.instructor}</h4>
              <h4><b>Parent:</b> {studentData.parent}</h4>
            </div>

            <div className="inline-block border rounded p-4 text-pri1">
              <div className='mb-5'>
                <h1><b>Attendance</b></h1>
                <ul>
                  {attendanceData.map((attendance, index) => (
                    <li key={index}>{attendance.date}: {attendance.status}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="inline-block border rounded p-4 text-pri1">
              <div className="mb-5">
                <h3><b>FEE BALANCE:</b> {feeBalance.balance}</h3>
                <h3>Fee Amount Paid: {feeBalance.paid}</h3>
              </div>
            </div>
          </div>
        )}
        <hr />
      </div>
      <hr />

      <div className="p-4 text-pri2">
        {studentData && (
          <h3><b>Assessment Results for {studentData.name}</b></h3>
        )}
        <table className="table-auto w-full mt-4 bg-white p-4 text-pri2">
          <thead>
            <tr>
              <th className="border px-4 py-2">Unit</th>
              <th className="border px-4 py-2">Marks</th>
              <th className="border px-4 py-2">Grade</th>
              <th className="border px-4 py-2">Instructor Comments</th>
            </tr>
          </thead>
          <tbody>
            {assessmentResults.map((result, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{result.unit}</td>
                <td className="border px-4 py-2">{result.marks}</td>
                <td className="border px-4 py-2">{result.grade}</td>
                <td className="border px-4 py-2">{result.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentsPage;
