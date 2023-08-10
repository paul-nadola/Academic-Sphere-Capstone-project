import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Teachers from './Teachers'
// import AdminsGet from './AdminsGet'


function SuperAdmin() {
      const[currentUser, setCurrentUser] = useState([])
    useEffect(() => {
    const getUser = async () => {
      try {
        const token = sessionStorage.getItem('token');
        console.log('Token used:', token);
        const response = await fetch(
          'https://academic-sphere-tables.onrender.com/superadmin_create',
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
  return (
    <div>
      <div className="flex justify-evenly">
      <button className='mt-4'>
            <Link
              to="/superadmin/teachers_data"
              className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
            >
              
              Teachers Data
            </Link>
            </button>
            <button className='mt-4'>
            <Link
              to="/superadmin/admins_data"
              className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
            >
              
              Admins Data
            </Link>
            </button>
      </div>
      
        <div className="user-container" >
          <h2>SUPER ADMIN PROFILE</h2>
          <h3>First Name: {currentUser.first_name}</h3>
          <p>Last Name: {currentUser.last_name}</p>
          <p>Date of Birth: {currentUser.DOB}</p>
          <p>Phone Number: {currentUser.phone_number}</p>
          <p>Email: {currentUser.email}</p>
          <p>Address: {currentUser.address}</p>
          <p>Employment Date: {currentUser.employment_date}</p>
        </div>
      {/* <AdminsGet/> */}
      {/* <Teachers/> */}
    </div>
  )
}

export default Admin