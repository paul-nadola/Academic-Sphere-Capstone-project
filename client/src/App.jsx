import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Departments from "./components/Departments";
import Technology from "./components/Technology";
import SocialSciences from "./components/SocialSciences";
import Engineering from "./components/Engineering";
import About from "./components/About";
import SignIn from "./components/SignIn";
import ParentsPage from "./components/ParentsPage";
import StudentsPage from "./components/StudentsPage";
import Login from './components/Login';
import Nav from './components/Nav';
import Teachers from './components/Teachers';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
