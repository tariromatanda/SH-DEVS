import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Ourmission from '../Components/Ourmission'

const Homepage = () => {
  return (
    <>
   <div className="hero">
    <Navbar/>
    <h1>EMPOWERING WOMEN IN TECH WORLD</h1>
    
   </div>
   <About/>
   <Ourmission/>
   </>
  )
}

export default Homepage