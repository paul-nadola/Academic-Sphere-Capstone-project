import React from 'react';
import { Link } from 'react-router-dom';

function Departments() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-4xl font-bold text-white">Departments</h1>
      <p className="text-white">
        At Prudent Group of Schools, we take pride in our diverse and well-structured departments, each dedicated to fostering<br/> a dynamic learning environment for students. Our Technology Department equips students with the latest technological skills,<br/> our Social Sciences Department offers a deeper understanding of human societies, and our Engineering Department prepares<br/> future innovators and problem solvers in various engineering fields. Our comprehensive curriculum and passionate educators<br/> ensure that students are well-prepared for a successful future in their chosen fields. Take a tour of each department to discover<br/> the exciting opportunities that await our students. Take a tour around!
      </p>
      <div className="space-y-4 mt-4">
        <Link to="/technology">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            TECHNOLOGY
          </button>
        </Link>
        <Link to="/social-sciences">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            SOCIAL SCIENCES
          </button>
        </Link>
        <Link to="/engineering">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            ENGINEERING
          </button>
        </Link>
      </div>
      <Link
        to="/"
        className="mt-4 text-white underline"
      >
        Back to Homepage
      </Link>
    </div>
  );
}

export default Departments;
