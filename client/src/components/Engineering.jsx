import React from 'react';
import { Link } from 'react-router-dom';

function Engineering() {
  return (
    <div>
        
          <h1 className="text-2xl font-bold" style={{ color: 'black' }}>Engineering</h1>
        <section>
        <p>Our department is not only focused on academic excellence but also on holistic development. We offer a range of extracurricular activities, clubs, and research opportunities, allowing students to apply their knowledge beyond the classroom and explore their passions.</p>
        <p>Through collaborative projects, real-world applications, and community engagement, we aim to equip our students with the skills and knowledge necessary to thrive in a dynamic and interconnected world. We encourage a culture of curiosity, inquiry, and intellectual growth, inspiring students to reach their highest potential.</p>
        </section>
        <section>
        <h2 className="text-2xl font-bold" style={{ color: 'black' }}>Courses Offered:</h2>
            <ol>
                <li>Electrical and electronic engineering</li>
                <li>Civil engineering</li>
                <li>Mechatronic engineering</li>
                <li>Agricultural engineering</li>
                <li>Architectural science</li>
            </ol>
        </section>
        <hr/>
        <button className="mt-4">
            <Link
              to="/departments"
              className="block bg-pri2 text-white py-2 px-4 rounded hover:bg-pri1 transition duration-300 w-full text-center"
            >
              Back to Departments
            </Link>
          </button>
    </div>
  );
}

export default Engineering;