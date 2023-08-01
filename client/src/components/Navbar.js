import React from 'react'
import { FaBars } from 'react-icons/fa'


function Navbar() {
  
  

  
  return (
    <nav className='nav' >
      <div className='nav-center'>
        <div className='nav-header'>
         {/* <img src={logo} className='nav-logo' alt='stripe'/> */}
         <button className='btn toggle-btn' >
          <FaBars />
         </button>
        </div>
        <ul className='nav-links'>
        <li>
            <button className='link-btn' >
              home
            </button>
            </li>
          <li>
            <button className='link-btn' >
              admissions
            </button>
            </li>
          <li>
          <button className='link-btn' >
              academics
            </button>
          </li>
          <li>
          <button className='link-btn' >
              about
            </button>
            </li>           
        </ul>
        <button className='btn signin-btn'>Sign In</button>
      </div>
      </nav>
  )
}

export default Navbar
