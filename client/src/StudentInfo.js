// import React, { useEffect, useState } from "react";

// function StudentInfo() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     // Function to fetch data from the backend
//     const fetchStudentsData = async () => {
//       try {
//         const response = await fetch("url");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data from the backend");
//         }
//         const data = await response.json();
//         setStudents(data); // Assuming the data returned is an array of students
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchStudentsData();
//   }, []); // Empty dependency array to run the effect only once

//   return (
//     <div>
//       <h2>Student Information</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Course</th>
//             <th>Units</th>
//             <th>Grade</th>
//             <th>Attendance Grade</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id}>
//               <td>{student.firstName}</td>
//               <td>{student.lastName}</td>
//               <td>{student.course}</td>
//               <td>{student.units}</td>
//               <td>{student.grade}</td>
//               <td>{student.attendanceGrade}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default StudentInfo;


import React from "react";
import { Link } from 'react-router-dom';


function StudentInfo() {
  // Dummy data for the table
  const students = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      course: "Cyber Security",
      units: 'Digital threats',
      grade: "A",
      attendanceGrade: "Present",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      course: "Networking",
      units: 'Network topologies',
      grade: "B",
      attendanceGrade: "Absent",
    },
    // Add more dummy data as needed
  ];

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
          {students.map((student) => (
            <tr key={student.id} className="bg-white">
              <td className="p-2 border border-gray-500">{student.firstName}</td>
              <td className="p-2 border border-gray-500">{student.lastName}</td>
              <td className="p-2 border border-gray-500">{student.course}</td>
              <td className="p-2 border border-gray-500">{student.units}</td>
              <td className="p-2 border border-gray-500">{student.grade}</td>
              <td className="p-2 border border-gray-500">{student.attendanceGrade}</td>
            </tr>
          ))}
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
