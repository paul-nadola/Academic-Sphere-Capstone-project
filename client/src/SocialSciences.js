import React from 'react'
import { Link } from 'react-router-dom';

function SocialSciences() {
  return (
    <div>
      <div className="flex justify-evenly">
            <button className='mt-4'>
            <Link
              to="/departments"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-center"
            >
              Back To Departments
            </Link>
            </button>
            
            <button className='mt-4'>
            <Link
              to="/parents"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-center"
            >
              Parent Page
            </Link>
            </button>
            
            <button className='mt-4'>
            <Link
              to="/about"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-center"
            >
              About
            </Link>
            </button>
            
            <button className="mt-4">
            <Link
              to="/"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              Sign Out
            </Link>
          </button>
          </div>
         <h1>Social Sciences Page</h1>
        <section>
        <p>At the heart of our department lies a diverse range of disciplines, each contributing unique perspectives to our exploration of the human experience. From sociology to anthropology, psychology to political science, economics to geography, our comprehensive curriculum encompasses a wide array of subjects that provide a holistic understanding of human societies.</p>
        <p>Our team of dedicated and passionate educators are at the forefront of their respective fields, bringing a wealth of expertise and research experience to the classroom. They are committed to nurturing the intellectual growth of our students, guiding them on a journey of discovery and introspection.</p>
        </section>
        <section>
            <h2>Courses Offered:</h2>
            <ol>
                <li>Economics</li>
                <li>Pyschology</li>
                <li>Criminology</li>
                <li>Sociology</li>
                <li>International relations</li>
            </ol>
        </section>
    </div>
  )
}

export default SocialSciences