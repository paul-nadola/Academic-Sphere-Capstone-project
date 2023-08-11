import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom';

function StudentsPage() {
        const[currentUser, setCurrentUser] = useState([])
    useEffect(() => {
    const getUser = async () => {
      try {
        const token = sessionStorage.getItem('token');
        console.log('Token used:', token);
        const response = await fetch(
          'https://academic-sphere-tables.onrender.com/student',
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
        setCurrentUser(data.student);
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
      <div className="grid grid-cols-2 gap-4">

      <div className="p-4 space-x-4">
            <div className="inline-block border rounded p-4 text-pri1">
        <h3><b>First Name:</b> {currentUser.first_name}</h3>
        <h3><b>Last Name:</b> {currentUser.last_name}</h3>
        <h3><b>Date of Birth:</b> {currentUser.DOB}</h3>
        <h3><b>Email:</b> {currentUser.email}</h3>
        <h3><b>Phone Number:</b> {currentUser.phone_number}</h3>
        <h4><b>Enrolled:</b>  {currentUser.enrollment_date}</h4>
        <h4><b>Department:</b> Technology</h4>
        <h4><b>Course:</b> Cyber Security</h4>
        <h4><b>Grade:</b> A, 81pts</h4>
        <h4><b>Instructor:</b> Kaplan Dunphy</h4>
        <h4><b>Parent:</b> David Jackson</h4>
      </div>
      </div>

      <div className="p-4 space-x-4">
            <div className="inline-block border rounded p-4 text-pri1">
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

      <div className="p-4 space-x-4">
            <div className="inline-block border rounded p-4 text-pri1">
        <h3>Assessment Results for Christopher Jackson</h3>
        <h4><b>Units: Year 1, Semester 1</b>
       <table className="table-auto w-full mt-4 bg-white p-4 text-pri2">
          <tr>
            <th className="border px-4 py-2">Unit</th>
            <th className="border px-4 py-2">Marks</th>
            <th className="border px-4 py-2">Grade</th>
            <th className="border px-4 py-2">Instructor Comments</th>
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
    </div>
    
  )
}

export default StudentsPage