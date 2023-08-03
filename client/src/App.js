import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './generalPages/HomePage';
import Departments from './departments/DepartmentsHomePage';
import Technology from './departments/Technology';
import SocialSciences from './departments/SocialSciences';
import Engineering from './departments/Engineering';
import About from './generalPages/AboutPage';
import SignIn from './generalPages/SignIn';
import ParentsPage from './parents/ParentsHomePage';
import StudentsPage from './students/StudentsHomePage';
import SuperAdmin from './admins/superAdmin/SuperAdminHome';
import TeachersData from './admins/superAdmin/SA_Pages/TeachersData';
import StudentsData from './admins/superAdmin/SA_Pages/StudentsData';
import ParentsData from './admins/superAdmin/SA_Pages/ParentsData';

function App() {
  return (
    <Router>
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
          <Route path="/superadmin" element={<SuperAdmin />} />
          <Route exact path='/superadmin/teachers_data' element={<TeachersData />} />
          <Route exact path='/superadmin/students_data' element={<StudentsData />} />
          <Route exact path='/superadmin/parents_data' element={<ParentsData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
