import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1617372613217-0dd41ca2229c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col items-end absolute top-8 right-8 space-y-4">
        <Link
          to="/departments"
          className="block bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
        >
          Departments
        </Link>
        <Link
          to="/parents"
          className="block bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
        >
          Parents
        </Link>
        <Link
          to="/about"
          className="block bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
        >
          About
        </Link>
      </div>

      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="h-full flex flex-col items-start justify-center relative z-10 max-w-3xl px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-4xl font-bold mb-6">At Prudent Group of Schools, we believe that education is not merely about acquiring knowledge; it is a journey of nurturing young minds, fostering creativity, and building a strong foundation for a successful future. With a legacy of excellence in education, our institution has been empowering students to realize their full potential and become responsible global citizens.
          Our dedicated team of educators is committed to providing a nurturing and stimulating learning environment that encourages curiosity, critical thinking, and a passion for lifelong learning. We believe in a holistic approach to education, encompassing academics, arts, sports, and character development, to shape well-rounded individuals capable of facing the challenges of the ever-changing world.
          With state-of-the-art facilities and innovative teaching methodologies, we strive to create a student-centric atmosphere that fosters curiosity and creativity. Our comprehensive curriculum is designed to cater to the diverse learning needs of our students, ensuring that they excel academically and develop essential life skills.
          Beyond academics, we take pride in our inclusive school community, where students from various backgrounds come together to learn, collaborate, and grow. Our emphasis on values, respect, and empathy nurtures a culture of mutual understanding and appreciation.</p>
          <button className="mt-4">
            <Link
              to="/signin"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              Sign In
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
