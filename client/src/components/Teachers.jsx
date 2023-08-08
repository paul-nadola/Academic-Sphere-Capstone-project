import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';


function Teachers() {
    const[teachers, setTeachers] = useState([])
    useEffect(() => {
    const getTeachers = async () => {
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

    function createTeacher(user) {
    const token = sessionStorage.getItem('token');
    fetch('https://academic-sphere-tables.onrender.com/superadmin_create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    }).then(() => {
      createTeacher();
    });
  }

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
    user_name: "",
    email: "",
    password: "",
    user_type: "teacher",
    first_name: "",
    last_name: "",
    DOB: "",
    address: "",
    phone_number: "",
    employment_date: "",
    appraisal: "",
    
    },
    onSubmit: (values) => {
      createTeacher(values);
    },
  });
  return (
    <div className="create-teacheruser">
      <h1>CREATE A NEW TEACHER</h1>
      <form className="teacher-form" onSubmit={handleSubmit}>
        <label htmlFor="user_name">Enter User Name: </label>
        <input type="text" value={values.user_name} onChange={handleChange} name="user_name" /><br />
        <label htmlFor="email">Enter Email: </label>
        <input type="email" value={values.email} onChange={handleChange} name="email" /><br />
        <label htmlFor="password">Enter User Password: </label>
        <input type="text" value={values.password} onChange={handleChange} name="password" /><br />
        <label htmlFor="first_name">Enter First Name: </label>
        <input type="text" value={values.first_name} onChange={handleChange} name="first_name" /><br />
        <label htmlFor="last_name">Enter Last Name: </label>
        <input type="text" value={values.last_name} onChange={handleChange} name="last_name" /><br />
        <label htmlFor="DOB">Enter Date Of Birth: </label>
        <input type="date" value={values.DOB} onChange={handleChange} name="DOB" /><br />
        <label htmlFor="address">Enter User Address: </label>
        <input type="text" value={values.address} onChange={handleChange} name="address" /><br />
        <label htmlFor="phone_number">Enter Phone Number: </label>
        <input type="number" value={values.phone_number} onChange={handleChange} name="phone_number" /><br />
        <label htmlFor="employment_date">Enter Date of Employment: </label>
        <input type="date" value={values.employment_date} onChange={handleChange} name="employment_date" /><br />
        <label htmlFor="appraisal">Enter User Appraisal : </label>
        <input type="number" value={values.appraisal} onChange={handleChange} name="appraisal" /><br />
        <input className = "btn" type="submit" value="Create Teacher" /><br />
      </form>
      <h1>TEACHERS</h1>
        {teachers.map((teacher) => (
        <div className="teacher-container" key={teacher.teacher_id}>
          <h3>First Name: {teacher.first_name}</h3>
          <p>Last Name: {teacher.last_name}</p>
          <p>Phone Number: {teacher.phone_number}</p>
          <p>Email: {teacher.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Teachers