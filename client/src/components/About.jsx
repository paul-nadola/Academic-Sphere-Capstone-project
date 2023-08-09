import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
    <div className="flex justify-evenly">
      <button className="mb-2">
        <Link to="/" className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center">
        <button>Home</button>
      </Link>
        </button>
      <button className="mb-2">
      <Link to="/departments" className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center">
        <button>Academics</button>
      </Link>
      </button>
        
      <button className='mt-4 mb-2'>
      <Link to="/about" className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center">
        <button>About</button>
      </Link>
      </button>
      
      <button className="mt-4 mb-2">
            <Link
              to="/signin"
              className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
            >
              Sign Out
            </Link>
          </button>
      </div>
    <div
      className=" bg-cover bg-center flex flex-col items-start justify-start p-8"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <img
        src="url"
        alt="Prudent Group of Schools Logo"
        className="h-16 w-16 absolute top-4 left-4"
      />
      <div className="bg-opacity-75 bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <section className="text-left">
          <p>
            Welcome to Prudent Group of Schools, where we believe that education is the foundation for shaping young minds<br/> and empowering future leaders. With a legacy of excellence in education, our institution is dedicated to providing a<br/> nurturing and stimulating environment for students to discover their potential, embrace their curiosity, and achieve<br/> academic excellence.
            
          </p>
          <p>
            <span style={{ color: '#3B82F6' }}><b>Our Vision:</b></span> At Prudent Group of Schools, our vision is to be a leading institution of academic excellence, fostering an<br/> inclusive and innovative learning community that inspires students to become lifelong learners and compassionate global citizens.
          </p>
          <p>
            <span style={{ color: '#3B82F6' }}><b>Our Mission:</b></span> Our mission is to provide a holistic and learner-centric education that fosters creativity, critical thinking, and ethical<br/> values. We strive to cultivate an atmosphere of mutual respect and collaboration among students, staff, and parents, working together<br/> to unlock the full potential of every individual.
          </p>
          <p>
            <span style={{ color: '#3B82F6' }}><b>Our Commitment to Quality Education:</b></span> Prudent Group of Schools is committed to delivering the highest standards of<br/> education through a comprehensive and progressive curriculum. We offer a broad range of academic programs and extracurricular<br/> activities, encouraging students to explore their interests and passions beyond the classroom.
          </p>
          <p>At Prudent Group of Schools, we are dedicated to nurturing well-rounded individuals who possess a strong moral compass and<br/> a thirst for knowledge. Together, as a community, we embrace diversity, promote academic excellence, and celebrate the<br/> achievements of every student.

We invite you to join us on this inspiring journey of learning, growth, and discovery.<br/> Together, we will shape a brighter future for our students and the world they will lead.

Welcome to Prudent Group of Schools!</p><br/>
        </section>
      </div>
      <button>
        <Link
          to="/"
          className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
        >
          Back to Homepage
        </Link>
      </button>
    </div>
    </>
    
  );
}

export default About;
