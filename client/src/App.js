import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Departments from './Departments';
import Technology from './Technology';
import SocialSciences from './SocialSciences';
import Engineering from './Engineering';
import About from './About';
import SignIn from './SignIn';
import ParentsPage from './ParentsPage';
import StudentsPage from './StudentsPage';
import Teacher from './Teacher';
import StudentInfo from './StudentInfo';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/teachers" element={<Teacher/>}  />
          <Route path="/technology" element={<Technology />} />
          <Route path="/social-sciences" element={<SocialSciences />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/studentinfo" element={<StudentInfo />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
