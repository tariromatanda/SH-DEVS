import React from 'react'
import logo from '../she-devs-images/WhatsApp Image 2024-10-05 at 16.01.22_bafa1dd4 1@2x.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo"><img src={logo} alt="" /></div>
        <ul>
            <li>Our Story</li>
            <li>Our Mission</li>
            <li>Contact Us</li>
        </ul>
        <div className="button">
        <button>Sponser Us</button>
        </div>
    </div>
  )
}

export default Navbar