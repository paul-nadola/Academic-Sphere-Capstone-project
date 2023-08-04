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
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Sidebar from './components/Sidebar';
// import SubMenu from './components/SubMenu';
// import Login from './components/Login';
// import Nav from './components/Nav';
// import './App.css';
// import Teachers from './components/Teachers';

function App() {
  return (
    <div>
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/social-sciences" element={<SocialSciences />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/students" element={<StudentsPage />} />
        </Routes>
    {/* </Router> */}
      </div>
  );
}

export default App;
