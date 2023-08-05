import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // redirect to a new page on successful login.
      console.log('Response:', data);
    } catch (error) {
      // display an error message to the user.
      console.error('Error:', error);
    }
  };

  return (
    <div
      className=" bg-cover bg-center flex justify-center items-center">
      <div className="bg-white p-11 h-[60vh] w-[100vw] ">
        <h1 className="text-4xl font-bold mb-6">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="flex flex-col items-center">
            <label htmlFor="email" className="block font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
          >
            Sign In
          </button>
          <p className="text-center mt-2">
              <Link to="/resetpassword" className="text-blue-500 hover:underline">
                Reset Password
              </Link>
            </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;