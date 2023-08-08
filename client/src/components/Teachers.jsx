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
    <div className="create-teacheruser ">
      
      <div className="bg-sec4 text-pri1 inline-block border rounded p-8">
      <h1><b>CREATE A NEW TEACHER</b></h1>
      <form className="teacher-form" onSubmit={handleSubmit}>
        <label htmlFor="user_name">Enter User Name: </label>
        <input type="text" value={values.user_name} onChange={handleChange} name="user_name" /><br /><br />
        <label htmlFor="email">Enter Email: </label>
        <input type="email" value={values.email} onChange={handleChange} name="email" /><br /><br />
        <label htmlFor="password">Enter User Password: </label>
        <input type="text" value={values.password} onChange={handleChange} name="password" /><br /><br />
        <label htmlFor="first_name">Enter First Name: </label>
        <input type="text" value={values.first_name} onChange={handleChange} name="first_name" /><br /><br />
        <label htmlFor="last_name">Enter Last Name: </label>
        <input type="text" value={values.last_name} onChange={handleChange} name="last_name" /><br /><br />
        <label htmlFor="DOB">Enter Date Of Birth: </label>
        <input type="date" value={values.DOB} onChange={handleChange} name="DOB" /><br /><br />
        <label htmlFor="address">Enter User Address: </label>
        <input type="text" value={values.address} onChange={handleChange} name="address" /><br /><br />
        <label htmlFor="phone_number">Enter Phone Number: </label>
        <input type="number" value={values.phone_number} onChange={handleChange} name="phone_number" /><br /><br />
        <label htmlFor="employment_date">Enter Date of Employment: </label>
        <input type="date" value={values.employment_date} onChange={handleChange} name="employment_date" /><br /><br />
        <label htmlFor="appraisal">Enter User Appraisal : </label>
        <input type="number" value={values.appraisal} onChange={handleChange} name="appraisal" /><br /><br />
        <input className = "btn" type="submit" value="Create Teacher" /><br /><br />
      </form>
      </div>
      <div className="table-container">
  <h1><b>TEACHERS</b></h1>
  <table className="teacher-table table-auto w-full mt-4 bg-white p-4 text-pri2">
    <thead>
      <tr>
        <th className='border px-4 py-2'>First Name</th>
        <th className='border px-4 py-2'>Last Name</th>
        <th className='border px-4 py-2'>Phone Number</th>
        <th className='border px-4 py-2'>Email</th>
      </tr>
    </thead>
    <tbody>
      {teachers.map((teacher) => (
        <tr className="teacher-row table-auto w-full mt-4 bg-white p-4 text-pri2" key={teacher.teacher_id}>
          <td className='border px-4 py-2'>{teacher.first_name}</td>
          <td className='border px-4 py-2'>{teacher.last_name}</td>
          <td className='border px-4 py-2'>{teacher.phone_number}</td>
          <td className='border px-4 py-2'>{teacher.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  )
}

export default Teachers