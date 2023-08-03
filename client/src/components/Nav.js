import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='navbar'>
        <Link to="/login">Login</Link>
        {/* <Link to="/">Home</Link> */}
        <Link to="/logout">Logout</Link>
        <Link to="/teachers">Signup</Link>
        

    </div>
  )
}

export default Nav