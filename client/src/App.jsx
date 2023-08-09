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
import SuperAdmin from "./components/SuperAdmin";
import AdminsGet from "./components/AdminsGet";
import Teachers from "./components/Teachers";
// import Nav from "./components/Nav";
import Header from "./components/Header";
import TeachersPage from "./components/Teachers";
// import Teachers from "./components/Teachers";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="sticky top-0">
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/social-sciences" element={<SocialSciences />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/superadmin" element={<SuperAdmin />} />
          <Route path="/superadmin/admins_data" element={<AdminsGet />} />
          <Route path="/superadmin/teachers_data" element={<Teachers />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/teacher" element={<Teachers />} />
          <Route path="/parents" element={<ParentsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
