import React from 'react';
import { Link } from 'react-router-dom';

function SocialSciences() {
  return (
    <div className="h-screen flex flex-col bg-cover bg-center bg-no-repeat" >
      <div className="flex justify-evenly">
        <button className="mt-4">
          <Link
            to="/departments"
            className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
          >
            Back To Departments
          </Link>
        </button>

        <button className="mt-4">
          <Link
            to="/about"
            className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
          >
            About
          </Link>
        </button>

        <button className="mt-4">
          <Link
            to="/signin"
            className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
          >
            Sign Out
          </Link>
        </button>
      </div>
      <h1 className="text-4xl mx-10 font-bold mt-4">Social Sciences</h1>
      <section className="p-4 my-4">
        <p className="mx-10 leading-10 ">
          At the heart of our department lies a diverse range of disciplines, each contributing unique perspectives to our exploration of the human experience. From sociology to anthropology, psychology to political science, economics to geography, our comprehensive curriculum encompasses a wide array of subjects that provide a holistic understanding of human societies.
        </p>
        <p className="mx-10 leading-10 ">
          Our team of dedicated and passionate educators are at the forefront of their respective fields, bringing a wealth of expertise and research experience to the classroom. They are committed to nurturing the intellectual growth of our students, guiding them on a journey of discovery and introspection.
        </p>
      </section>
      <section className="p-4 my-4">
        <h2 className="text-2xl mx-14 font-bold mb-2">Courses Offered:</h2>
        <ol className='mx-14'>
          <li>Economics</li>
          <li>Pyschology</li>
          <li>Criminology</li>
          <li>Sociology</li>
          <li>International relations</li>
        </ol>
      </section>
    </div>
  );
}

export default SocialSciences;
