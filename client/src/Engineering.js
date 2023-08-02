import React from 'react';
import { Link } from 'react-router-dom';

function Engineering() {
  return (
    <div
      className="bg-cover bg-center min-h-screen text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',}}
    >
      <h1 className="text-4xl font-bold text-center" style={{ color: 'white' }}>ENGINEERING</h1>
      <section>
        <p style={{ color: 'white' }}>
          Our department is not only focused on academic excellence but also on holistic development. We offer a range of extracurricular activities, clubs, and
          research opportunities, allowing students to apply their knowledge beyond the classroom and explore their passions.
        </p>
        <p style={{ color: 'white' }}>
          Through collaborative projects, real-world applications, and community engagement, we aim to equip our students with the skills and knowledge necessary to
          thrive in a dynamic and interconnected world. We encourage a culture of curiosity, inquiry, and intellectual growth, inspiring students to reach their
          highest potential.
        </p>
      </section>
      <section>
        <h2 style={{ color: 'white' }}>Courses Offered:</h2>
        <ol style={{ color: 'white' }}>
          <li>Electrical and electronic engineering</li>
          <li>Civil engineering</li>
          <li>Mechatronic engineering</li>
          <li>Agricultural engineering</li>
          <li>Architectural science</li>
        </ol>
      </section>
      <button className="mt-4">
        <Link to="/" className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center">
          Back to Homepage
        </Link>
      </button>
    </div>
  );
}

export default Engineering;