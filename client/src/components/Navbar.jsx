import React from 'react'
import logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

function Navbar() {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext()
  const displaySubmenu = (e) => {
    e.preventDefault();
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3

    openSubmenu(page, {center, bottom})

  }
  const handleClick = () =>{
    
  }
  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')) {
      setTimeout(()=>closeSubmenu(),10);
    }
  }
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
         {/* <img src={logo} className='nav-logo' alt='stripe'/> */}
         <button className='btn toggle-btn' onClick={openSidebar}>
          <FaBars />
         </button>
        </div>
        <ul className='nav-links'>
        <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              home
            </button>
            </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              admissions
            </button>
            </li>
          <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
              academics
            </button>
          </li>
          <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
              about
            </button>
            </li>           
        </ul>
        <button className='btn signin-btn' onClick={handleClick}>Sign In</button>
      </div>
      </nav>
  )
}

export default Navbar
