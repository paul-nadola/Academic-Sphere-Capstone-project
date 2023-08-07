import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Departments from "./components/Departments";
import Technology from "./components/Technology";
import SocialSciences from "./components/SocialSciences";
import Engineering from "./components/Engineering";
import About from "./components/About";
import SignIn from "./components/SignIn";
import ParentsPage from "./components/ParentsPage";
import StudentsPage from "./components/StudentsPage";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Teachers from "./components/Teachers";
import Header from "./components/Header";
import SuperAdmin from "./admins/SuperAdmin/SuperAdminHome";
import ParentsData from "./admins/SuperAdmin/SA_Pages/ParentsData";
import StudentsData from "./admins/SuperAdmin/SA_Pages/StudentsData";
import TeachersData from "./admins/SuperAdmin/SA_Pages/TeachersData";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="sticky top-0">
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/social-sciences" element={<SocialSciences />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/superadmin" element={<SuperAdmin />} />
          <Route exact path='/superadmin/parents_data' element={<ParentsData />} />
          <Route exact path='/superadmin/teachers_data' element={<TeachersData />} />
          <Route exact path='/superadmin/students_data' element={<StudentsData />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
