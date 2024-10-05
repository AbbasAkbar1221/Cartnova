import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/Admin_Assets/bag.png'
import navProfile from '../../assets/Admin_Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='logo'>
     <img src={navlogo} alt="" className="nav-logo" />
     <div>
     <h1>Cartnova</h1>
     <p>Admin Panel</p>
     </div>
     </div>
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar
