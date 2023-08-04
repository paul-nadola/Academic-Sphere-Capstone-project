
import React, { useState, useEffect } from 'react';

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const getTeachers = async () => {
      try {
        const token = localStorage.getItem('token');
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
          console.error('Failed to fetch teachers:', response.status);
          return;
        }

        const data = await response.json();
        setTeachers(data.teachers);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    getTeachers();
  }, []);

  return (
    <div>
      {teachers.map((teacher) => (
        <div className="teacher-container" key={teacher.teacher_id}>
          <h3>Teacher Name: {teacher.first_name}</h3>
          <p>Last Name: {teacher.last_name}</p>
          <p>Phone Number: {teacher.phone_number}</p>
          <p>Email: {teacher.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Teachers;
