import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';


function Students() {
    const[students, setStudents] = useState([])
    useEffect(() => {
    const getStudents = async () => {
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
          console.error('Failed to fetch students:', response.status);
          return;
        }

        const data = await response.json();
        setStudents(data.students);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    getStudents();
  }, []);

    function createStudent(user) {
    const token = sessionStorage.getItem('token');
    fetch('https://academic-sphere-tables.onrender.com/admin_create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    }).then(() => {
      createStudent();
    });
  }

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
    user_name: "",
    email: "",
    password: "",
    user_type: "student",
    first_name: "",
    last_name: "",
    DOB: "",
    address: "",
    phone_number: "",
    enrollment_date: "",
    department_id: "",
    course_id: "",
    payment_id: "",
    teacher_id: "",
    },
    onSubmit: (values) => {
      createStudent(values);
    },
  });
  return (
    <>
    <button className='mt-4'>
            <Link
              to="/admin"
              className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
            >
              
              Back To Dashboard
            </Link>
            </button>
    <div className="create-teacheruser">
      <h1>CREATE A NEW STUDENT</h1>
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
        <label htmlFor="enrollment_date">Enter Date of Enrollment: </label>
        <input type="date" value={values.enrollment_date} onChange={handleChange} name="enrollment_date" /><br />
        <label htmlFor="department_id">Enter Department ID : </label>
        <input type="number" value={values.department_id} onChange={handleChange} name="department_id" /><br />
        <label htmlFor="course_id">Enter Course ID : </label>
        <input type="number" value={values.course_id} onChange={handleChange} name="course_id" /><br />
        <label htmlFor="teacher_id">Enter Teacher ID : </label>
        <input type="number" value={values.teacher_id} onChange={handleChange} name="teacher_id" /><br />
        <input className = "btn" type="submit" value="Create Teacher" /><br />
      </form>
      <h1>STUDENTS</h1>
        {students.map((student) => (
        <div className="teacher-container" key={student.student_id}>
          <h3>First Name: {student.first_name}</h3>
          <p>Last Name: {student.last_name}</p>
          <p>Phone Number: {student.phone_number}</p>
          <p>Email: {student.email}</p>
        </div>
      ))}
    </div>
    </>
    
  )
}

export default Students