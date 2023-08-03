import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText((prevShowFullText) => !prevShowFullText);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center relative" // Add 'relative' class here
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1617372613217-0dd41ca2229c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="h-full flex flex-col items-center justify-center relative z-10">
        <div>
          <div className="flex justify-evenly">
            {/* ... (buttons and links) ... */}
            <button className='mt-4'>
            <Link
              to="/departments"
              className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mr-4"
            >
              Departments
            </Link>
            <Link
              to="/parents"
              className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mr-4"
            >
              Parent Page
            </Link>
            </button>

            <button className='mt-4'>
            <Link
              to="/students"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-center"
            >
              Student Page
            </Link>
            </button>
            
            <button className='mt-4'>
            <Link
              to="/about"
              className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              About
            </Link>
            </button>
          </div>
          <h1 className="text-6xl font-bold text-navy mb-8">Welcome to Prudent<br/> Group Of Schools</h1>
          <p className="text-xl mb-3">At Prudent Group of Schools, we believe that education is not merely about acquiring knowledge; it is a journey of nurturing young minds, fostering creativity, and building a strong foundation for a successful future. With a legacy of excellence in education, our institution has been empowering students to realize their full potential and become responsible global citizens.
            Our dedicated team of educators is committed to providing a nurturing and stimulating learning environment that encourages curiosity, critical thinking, and a passion for lifelong learning. We believe in a holistic approach to education, encompassing academics, arts, sports, and character development, to shape well-rounded individuals capable of facing the challenges of the ever-changing world.
            With state-of-the-art facilities and innovative teaching methodologies, we strive to create a student-centric atmosphere that fosters curiosity and creativity. Our comprehensive curriculum is designed to cater to the diverse learning needs of our students, ensuring that they excel academically and develop essential life skills.
            Beyond academics, we take pride in our inclusive school community, where students from various backgrounds come together to learn, collaborate, and grow. Our emphasis on values, respect, and empathy nurtures a culture of mutual understanding and appreciation.</p>
          <div className="mt-4">
            <button className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center">
              <Link to="/signin">Sign In</Link>
            </button>
            
          </div>
          <div className='items-center justify-center'>
          <h2 className="text-blue-700 text-4xl font-bold text-center">Welcome To Prudent Group Of Schools</h2>
          <p className="w-4/5 mx-auto text-4xl font-bold mb-6">
            {/* Toggle between full text and truncated text based on 'showFullText' state */}
            {showFullText ? (
              <>
                At Prudent Group of Schools, we believe that education is not merely about acquiring knowledge; it is a
                journey of nurturing young minds, fostering creativity, and building a strong foundation for a successful
                future. With a legacy of excellence in education, our institution has been empowering students to realize
                their full potential and become responsible global citizens.
                <br />
                <br />
                Our dedicated team of educators is committed to providing a nurturing and stimulating learning environment
                that encourages curiosity, critical thinking, and a passion for lifelong learning. We believe in a holistic
                approach to education, encompassing academics, arts, sports, and character development, to shape well-rounded
                individuals capable of facing the challenges of the ever-changing world.
                <br />
                <br />
                With state-of-the-art facilities and innovative teaching methodologies, we strive to create a student-centric
                atmosphere that fosters curiosity and creativity. Our comprehensive curriculum is designed to cater to the diverse
                learning needs of our students, ensuring that they excel academically and develop essential life skills.
                <br />
                <br />
                Beyond academics, we take pride in our inclusive school community, where students from various backgrounds come
                together to learn, collaborate, and grow. Our emphasis on values, respect, and empathy nurtures a culture of mutual
                understanding and appreciation.
              </>
            ) : (
              // Show the truncated version of the paragraph with a "Show More" button
              <>
                At Prudent Group of Schools, we believe that education is not merely about acquiring knowledge; it is a journey of
                nurturing young minds, fostering creativity, and building a strong foundation for a successful future. With a legacy
                of excellence in education, our institution has been empowering students to realize their full potential and become
                responsible global citizens.
                <br />
                {/* Add an ellipsis and "Show More" button */}
                <button className="text-blue-500 underline mt-2" onClick={toggleText}>
                  Show More
                </button>
              </>
            )}
          </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
