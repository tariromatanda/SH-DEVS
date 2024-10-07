import React from 'react'
import about1 from '../she-devs-images/about1.png'
import about2 from '../she-devs-images/about2.png'
import about3 from '../she-devs-images/about3.png'


const About = () => {
  return (
    
    <section className="about">
        <div className="container">
      
        <h1>About Us</h1>
        <div className="row">
       <div className="col-md-6">
       At SheDevs, we're passionate about empowering women to succeed in the tech industry. Our community-driven organization is dedicated to bridging the gender gap in tech, providing a supportive network, resources, and opportunities for women to thrive. Founded on the principles of diversity, equity, and inclusion, we strive to create a welcoming environment where women can grow, learn, and connect.

       </div>
       <div className="col-md-3"><img src={about1} alt="" /></div>
       <div className="col-md-3"><img src={about2} alt="" /></div>
       <div className="col-md-12"><img src={about3} alt="" /></div>
    </div>
    </div>
    </section>
  )
}

export default About