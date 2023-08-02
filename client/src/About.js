import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
    <div className="flex justify-evenly">
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
      </div>
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-left max-w-lg mx-auto p-4">
          Welcome to Prudent Group of Schools, where we believe that education is the foundation for shaping young minds and empowering future leaders. With a legacy of excellence in education, our institution is dedicated to providing a nurturing and stimulating environment for students to discover their potential, embrace their curiosity, and achieve academic excellence.

          Our Vision:
          At Prudent Group of Schools, our vision is to be a leading institution of academic excellence, fostering an inclusive and innovative learning community that inspires students to become lifelong learners and compassionate global citizens.

          Our Mission:
          Our mission is to provide a holistic and learner-centric education that fosters creativity, critical thinking, and ethical values. We strive to cultivate an atmosphere of mutual respect and collaboration among students, staff, and parents, working together to unlock the full potential of every individual.

          Our Commitment to Quality Education:
          Prudent Group of Schools is committed to delivering the highest standards of education through a comprehensive and progressive curriculum. We offer a broad range of academic programs and extracurricular activities, encouraging students to explore their interests and passions beyond the classroom.
        </p>
      </div>
    </div>
    </>
    
  );
}

export default About;
