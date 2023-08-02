import React from 'react';
import { Link } from 'react-router-dom';

function SocialSciences() {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1685581496715-1d1732874efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center', }}
      
    >
      <div className="text-white text-center p-8">
        <h1 className="text-4xl font-bold">SOCIAL SCIENCES</h1>
        <section>
          <p>
            At the heart of our department lies a diverse range of disciplines, each contributing unique perspectives to our exploration of the human
            experience. From sociology to anthropology, psychology to political science, economics to geography, our comprehensive curriculum encompasses a
            wide array of subjects that provide a holistic understanding of human societies.
          </p>
          <p>
            Our team of dedicated and passionate educators are at the forefront of their respective fields, bringing a wealth of expertise and research
            experience to the classroom. They are committed to nurturing the intellectual growth of our students, guiding them on a journey of discovery and
            introspection.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Courses Offered:</h2>
          <ol className="list-decimal ml-8 text-white">
            <li>Economics</li>
            <li>Psychology</li>
            <li>Criminology</li>
            <li>Sociology</li>
            <li>International Relations</li>
          </ol>
        </section>
        <button>
        <Link
          to="/"
          className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center mt-4"
        >
          Back to Homepage
        </Link>
        </button>
      </div>
    </div>
  );
}

export default SocialSciences;