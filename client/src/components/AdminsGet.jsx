import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';


function AdminsGet() {
    const[admin, setAdmin] = useState([])
    useEffect(() => {
    const getAdmins = async () => {
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
          console.error('Failed to fetch admin:', response.status);
          return;
        }

        const data = await response.json();
        setAdmin(data.admins);
      } catch (error) {
        console.error('Error fetching admin:', error);
      }
    };

    getAdmins();
  }, []);

    function createAdmin(user) {
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
      createAdmin();
    });
  }
        console.log(admin)

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
    user_name: "",
    email: "",
    password: "",
    user_type: "admin",
    first_name: "",
    last_name: "",
    DOB: "",
    address: "",
    phone_number: "",
    employment_date: "",
    appraisal: "",
    
    },
    onSubmit: (values) => {
      createAdmin(values);
    },
  });
  return (
    <div className="create-adminuser">
      <h1>CREATE A NEW ADMIN</h1>
      <form className="admin-form" onSubmit={handleSubmit}>
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
        <input className = "btn" type="submit" value="Create Admin" /><br />
      </form>
      <h1>ADMINS</h1>
        {admin.map((adm) => (
        <div className="admin-container" key={adm.admin_id}>
          <h3>First Name: {adm.first_name}</h3>
          <p>Last Name: {adm.last_name}</p>
          <p>Phone Number: {adm.phone_number}</p>
          <p>Email: {adm.email}</p>
        </div>
      ))}
    </div>
  )
}

export default AdminsGet
// import React, { useState, useEffect } from 'react';
// import { useFormik } from 'formik';

// function AdminsGet() {
//   const [admins, setAdmins] = useState([]);

//   useEffect(() => {
//     const getAdmins = async () => {
//       try {
//         const token = sessionStorage.getItem('token');
//         console.log('Token used:', token);
//         const response = await fetch(
//           'https://academic-sphere-tables.onrender.com/superadmin_create',
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           console.error('Failed to fetch admins:', response.status);
//           return;
//         }

//         const data = await response.json();
//         setAdmins(data.teachers);
//       } catch (error) {
//         console.error('Error fetching admins:', error);
//       }
//     };

//     getAdmins();
//   }, []);

//   const createAdmin = async (user) => {
//     try {
//       const token = sessionStorage.getItem('token');
//       const response = await fetch(
//         'https://academic-sphere-tables.onrender.com/superadmin_create',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(user),
//         }
//       );

//       if (!response.ok) {
//         console.error('Failed to create admin:', response.status);
//         return;
//       }

//       getAdmins(); // Refresh admin list
//     } catch (error) {
//       console.error('Error creating admin:', error);
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       user_name: '',
//       email: '',
//       password: '',
//       user_type: '', // Default to 'admin'
//       first_name: '',
//       last_name: '',
//       DOB: '',
//       address: '',
//       phone_number: '',
//       employment_date: '',
//       appraisal: '',
//     },
//     onSubmit: (values) => {
//       createAdmin(values);
//     },
//   });
//   const { values, handleChange, handleSubmit } = useFormik({
//     initialValues: {
//     user_name: "",
//     email: "",
//     password: "",
//     user_type: "",
//     first_name: "",
//     last_name: "",
//     DOB: "",
//     address: "",
//     phone_number: "",
//     employment_date: "",
//     appraisal: "",
    
//     },
//     onSubmit: (values) => {
//       createAdmin(values);
//     },
//   });

//   return (
//     <div className="create-adminuser">
//       <h1>CREATE A NEW USER</h1>
//       <form className="admin-form" onSubmit={handleSubmit}>
//         <label htmlFor="user_name">Enter User Name: </label>
//         <input type="text" value={values.user_name} onChange={handleChange} name="user_name" /><br />
//         <label htmlFor="email">Enter Email: </label>
//         <input type="email" value={values.email} onChange={handleChange} name="email" /><br />
//         <label htmlFor="password">Enter User Password: </label>
//         <input type="text" value={values.password} onChange={handleChange} name="password" /><br />
//         <label htmlFor="user_type">Choose a user</label>
//       <select name="user_type" className="user_type" value={values.user_type} onChange={handleChange}>
//         <option value="admin" >admin</option>
//         <option value="teacher">teacher</option>
//       </select>
//       <br />
//         <label htmlFor="first_name">Enter First Name: </label>
//         <input type="text" value={values.first_name} onChange={handleChange} name="first_name" /><br />
//         <label htmlFor="last_name">Enter Last Name: </label>
//         <input type="text" value={values.last_name} onChange={handleChange} name="last_name" /><br />
//         <label htmlFor="DOB">Enter Date Of Birth: </label>
//         <input type="date" value={values.DOB} onChange={handleChange} name="DOB" /><br />
//         <label htmlFor="address">Enter User Address: </label>
//         <input type="text" value={values.address} onChange={handleChange} name="address" /><br />
//         <label htmlFor="phone_number">Enter Phone Number: </label>
//         <input type="number" value={values.phone_number} onChange={handleChange} name="phone_number" /><br />
//         <label htmlFor="employment_date">Enter Date of Employment: </label>
//         <input type="date" value={values.employment_date} onChange={handleChange} name="employment_date" /><br />
//         <label htmlFor="appraisal">Enter User Appraisal : </label>
//         <input type="number" value={values.appraisal} onChange={handleChange} name="appraisal" /><br />
//         <input className = "btn" type="submit" value="Create Driver" /><br />
//       </form>
//       {admins.map((admin) => (
//         <div className="admin-container" key={admin.admin_id}>
//           <h3>Admin Name: {admin.first_name}</h3>
//           <p>Last Name: {admin.last_name}</p>
//           <p>Phone Number: {admin.phone_number}</p>
//           <p>Email: {admin.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AdminsGet;
