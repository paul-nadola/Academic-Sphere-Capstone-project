import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import SubMenu from './components/SubMenu';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <SubMenu/>
    </>
  )
}

export default App;
