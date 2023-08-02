import React from 'react'
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Sidebar from './components/Sidebar';
// import SubMenu from './components/SubMenu';
import Login from './components/Login';
import Nav from './components/Nav';
import {  Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';
import Teachers from './components/Teachers';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
   <Route path= '/login' element={<Login/> }/>
   <Route path= '/teachers' element={<Teachers/> }/>


   </Routes>
      {/* <Navbar/>
      <Sidebar/>
      <Hero/>
      <SubMenu/> */}
    </>
  )
}

export default App;
