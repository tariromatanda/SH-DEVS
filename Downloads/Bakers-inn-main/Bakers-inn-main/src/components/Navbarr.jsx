import React from 'react'
import { Link } from "react-router-dom"
import logo from '../bakers-inn-resourses/logo.png'
import {useState} from 'react'

const Navbarr = () => {

  const [activeHarmburger, setActiveHarmburger] = useState(false);
  return (
    <section className='navbar'>
      <div className="container rel">
        <div className="row">
          <div className="col-md-5">
            <Link to="/">
              <div className="logo"><img src={logo} alt="" /></div>
            </Link>
          </div>
          <div className="col-md-7">
            <div className="harmburger" 
            onClick = {()=> setActiveHarmburger(!activeHarmburger)}><span className="bar">
            </span><span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul  className={activeHarmburger ? 'menu-items show' : 'menu-items'  }
             onClick = {()=> setActiveHarmburger(!activeHarmburger)} >
              <Link to="/about"> <li>About Us</li></Link>

              <Link to='/product'> <li>Products</li></Link>
              <Link to='/recipe'><li>Recipes</li></Link>
              <Link to="/kids"><li>Kid's Corner</li></Link>
             <Link to="/contact" ><li><button className="btn button">CONTACT US</button></li></Link>
            </ul>
          </div>
        </div>
      </div>



    </section>
  )
}

export default Navbarr
