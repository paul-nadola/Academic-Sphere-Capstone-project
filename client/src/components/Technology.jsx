import React from 'react';
import { Link } from 'react-router-dom';

function Technology() {
  return (
    <div>
        <button className="mt-4">
            <Link
              to="/signin"
              className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
            >
              Sign Out
            </Link>
          </button>
        <section>
        <h1>Technology</h1>
        <p>Our department is dedicated to fostering a vibrant and enriching learning environment, where students are encouraged to explore their interests, unleash their potential, and achieve academic excellence. As an integral part of Prudent Group of schools, our department plays a pivotal role in shaping the educational journey of our students.</p>

        <p >
          With a rigorous and engaging curriculum, we strive to provide students with a solid foundation in the technological field while encouraging
          critical thinking, problem-solving, and creativity. We believe in a student-centric approach, tailoring our teaching methods to accommodate various
          learning styles and abilities.
        </p>
      </section>
      <section className="p-8">
        <h2 className="text-2xl font-bold" style={{ color: 'black' }}>
          Courses Offered:
        </h2>
        <ol className="list-decimal ml-8" style={{ color: 'black' }}>
          <li>Software Engineering</li>
          <li>UI/UX Design</li>
          <li>Data Science</li>
          <li>Cyber Security</li>
          <li>Networking</li>
        </ol>
      </section>
      <button className="mt-4">
        <Link
          to="/departments"
          className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center">
          Back to Departments
        </Link>
      </button>
    </div>
  );
}

export default Technology;