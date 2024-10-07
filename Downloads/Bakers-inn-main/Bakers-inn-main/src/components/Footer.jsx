import React from 'react'
import { Link } from "react-router-dom"
import log from '../bakers-inn-resourses/Group 13.png'
import img1 from '../bakers-inn-resourses/img1.png'
import img2 from '../bakers-inn-resourses/img3.png'
import img3 from '../bakers-inn-resourses/img3.png'
import icon1 from '../bakers-inn-resourses/icon1.png'
import icon2 from '../bakers-inn-resourses/icon2.png'
import icon3 from '../bakers-inn-resourses/icon3.png'
import icon4 from '../bakers-inn-resourses/icon4.png'
import icon5 from '../bakers-inn-resourses/icon5.png'

import log2 from '../bakers-inn-resourses/inscor_logo@2x 1.png'




const Footer = () => {
  return (
    <div className='footer'>



      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="line"></div>
          </div>
          <div className="col-md-2">
            <div className="log">
              <img src={log} alt="" />
            </div>
          </div>
          <div className="col-md-5"><div className="line"></div></div>

          <div className="row ">
          <div className="col-lg-5 col-md-6 ">
            <h4>Instagram Feed</h4>
            <div className="img">

              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
            <div className="imge">

              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <h4>Our Location</h4>
            <p>1 Shepperton Road,</p><p> Graniteside,</p><p>
              Harare,</p><p>
              Zimbabwe.</p>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <h4>Get In Touch With Us</h4>
            <p><span><img src={icon4} alt="" /></span>08080151 </p>
            <p>08080152</p>
            <p>+263 242 751 481</p>
            <p>+263 242 710 334</p>
            <p><span><img src={icon5} alt="" /></span>marketing@bakersinnzim.com</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h4>Sitemap</h4>
            <Link to='/'><p>Home</p></Link>
            <p>About Us</p>
            <p>Products</p>
            <p>Recipes</p>
            <p>Kids Corner</p>
          </div>
          <div className="col-md-12 ">
            <div className="p1 d-flex justify-content-between">
              <p>Subsidiary of <span><img src={log2} alt="" /></span></p>
              <p>Copyright © 2022 Bakers Inn. All rights reserved. Site by <span>NoWalls Pan Africa</span></p>
            </div>
</div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Footer
