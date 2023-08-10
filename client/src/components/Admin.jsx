import React, { useState, useEffect } from 'react';

function Admin() {
    const[currentUser, setCurrentUser] = useState([])
    useEffect(() => {
    const getUser = async () => {
      try {
        const token = sessionStorage.getItem('token');
        console.log('Token used:', token);
        const response = await fetch(
          'https://academic-sphere-tables.onrender.com/admin_create',
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
      <div className="user-container" >
          <h3>First Name: {currentUser.first_name}</h3>
          <p>Last Name: {currentUser.last_name}</p>
          <p>Date of Birth: {currentUser.DOB}</p>
          <p>Phone Number: {currentUser.phone_number}</p>
          <p>Email: {currentUser.email}</p>
          <p>Address: {currentUser.address}</p>
          <p>Employment Date: {currentUser.employment_date}</p>
        </div>
    </div>
  )
}

export default Admin