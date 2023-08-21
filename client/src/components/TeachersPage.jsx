import React, { useState, useEffect } from 'react';

function TeachersPage() {
          const[currentUser, setCurrentUser] = useState([])
    useEffect(() => {
    const getUser = async () => {
      try {
        const token = sessionStorage.getItem('token');
        console.log('Token used:', token);
        const response = await fetch(
          'https://academic-sphere-tables.onrender.com/teacher',
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
        setCurrentUser(data.current);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    getUser();
  }, []);
    const[students, setStudents] = useState([])
    useEffect(() => {
    const getStudents = async () => {
      try {
        const token = sessionStorage.getItem('token');
        console.log('Token used:', token);
        const response = await fetch(
          'https://academic-sphere-tables.onrender.com/teacher',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          console.error('Failed to fetch teachers:', response.status);
          return;
        }

        const data = await response.json();
        setStudents(data.students);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    getStudents();
  }, []);
  return (
    <div >
      <div className="p-4 space-x-4 flex flex-col items-center">
        <h1 className="font text-5xl">Welcome, {currentUser.first_name}!</h1>
      <div className="p-4 border bg-white col-span-2">
        <h3><b>First Name: </b>{currentUser.first_name}</h3>
          <p><b>Last Name: </b>{currentUser.last_name}</p>
          <p><b>Phone Number: </b>{currentUser.phone_number}</p>
          <p><b>Email: </b>{currentUser.email}</p>
          <p><b>Address: </b>{currentUser.address}</p>
          </div>
      </div>
            <div className="p-4 border  space-x-4 mx-auto max-w-7xl">
      {/* <div className="p-4 space-x-4 mx-auto max-w-7xl"> */}
            <div className="inline-block border rounded p-4 text-pri1 w-full">
              
            {students.map(student => (
      <div key={student.student_id} className="flex flex-row space-x-4">
        
        <div className="w-1/2">
          <h2>STUDENT DETAILS</h2>
          <h1>Name: {student.first_name} {student.last_name}</h1>
          <p>Date of Birth: {student.DOB}</p>
          <p>Email: {student.email}</p>
          <p>Address: {student.address}</p>
          <p>Phone Number: {student.phone_number}</p>
          <p>Enrollment Date: {student.enrollment_date}</p>
          <br/>
          <br/>
          <br/>
        </div>
        <div className="w-1/2 mt-4 flex-grow">
          <hr />
          <h3>PARENT DETAILS</h3>
          <p>Name: {student?.parent?.first_name} {student?.parent?.last_name}</p>
          <p>Email: {student?.parent?.email}</p>
          <p>Address: {student?.parent?.address}</p>
          <p>Phone Number: {student?.parent?.phone_number}</p>
        </div>
      </div>
    ))}
        </div>
        {/* </div> */}
        <br/>
        <hr/>
        {/* <h4><b>Units: Year 1, Semester 1</b>
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
        </h4> */}
      </div>
      <div className="p-4 border bg-sec3-800">
        {/* <h3>Fee Information</h3>
        <h4><b>Fee Balance:</b> -5435</h4>
        <h4><b>Fee Paid:</b> 54000</h4> */}
      </div>
    </div>
  )
}

export default TeachersPage