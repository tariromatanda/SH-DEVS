import React from 'react'
import b1 from '../bakers-inn-resourses/Rectangle 5.png'
import b2 from '../bakers-inn-resourses/Rectangle 7.png'
import b3 from '../bakers-inn-resourses/Rectangle 8.png'
import b4 from '../bakers-inn-resourses/Rectangle 345.png'
import bread from "../bakers-inn-resourses/Group 309.png"
import sandwitch from "../bakers-inn-resourses/Rectangle 12.png"
import pie from "../bakers-inn-resourses/Rectangle 14 (2).png"
import bun from "../bakers-inn-resourses/Rectangle 15.png"
import bread2 from "../bakers-inn-resourses/Rectangle 16.png"
import bread3 from "../bakers-inn-resourses/Rectangle 16.png"
import scone from "../bakers-inn-resourses/Rectangle 26.png"
import donut from "../bakers-inn-resourses/Rectangle 28.png"
import bread4 from "../bakers-inn-resourses/Rectangle 32.png"
import people from "../bakers-inn-resourses/people.png"
import green from "../bakers-inn-resourses/green.png"
import toy2 from "../bakers-inn-resourses/toy2.png"
import toy from "../bakers-inn-resourses/toy.png"
import shwarma from '../bakers-inn-resourses/Rectangle 14 (1).png'
import shortbread from '../bakers-inn-resourses/Rectangle 28.png'
import chips from '../bakers-inn-resourses/text2.png'

import Productsmeat from '../components/Productsmeat'
import Scones from '../components/Scones'
import Donut from '../components/Donut'

import text from '../bakers-inn-resourses/toy2.png'
import { Link } from 'react-router-dom'

import mario2 from '../bakers-inn-resourses/Mario.png'
import { useState } from 'react'
import Recipes from '../components/Recipes.jsx'



const HomePage = () => {


  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (





    <div className="container">
      <section className="row hero">

        <div className="col-md-6 col-lg-4">
          <h1>Bringing you the</h1>
          <h1><span>best value </span>at the</h1>           <h1> <span> best prices.</span></h1>
          <p>The freshest sandwiches you can make are<br />
            with Baker's inn soft white loaf.</p>
          <button className='btn button'>READMORE</button>
        </div>
        <div className="col-md-6 col-lg-8">
          <div className="images">
            <div className="img"><img src={b1} alt="" /></div>
            <div className="img"><img src={b2} alt="" /></div>
            <div className="img"><img src={b3} alt="" /></div>
            <div className="img"><img src={b4} alt="" /></div>
          </div>
        </div>

      </section>

      <section className="about">
        <div className="row">
          <div className="col-md-6">
            <h2>ABOUT BAKER'S INN</h2>
          </div>
          <div className="col-md-6">
            <p> It all started back in the eighties when Baker's Inn was just a small confectionery company that employed 40 people and produced about 30,000 loaves a day. We now aim to provide a nourishing, convenient and accessible answer to hunger’s call.</p>
            <button className='btn button'>READMORE</button>
          </div>

          <div className="row gy-3 image">

            <div className="col-md-3"><img src={bread2} alt="" /></div>
            <div className="col-md-3"><img src={pie} alt="" /></div>
            <div className="col-md-3"><img src={scone} alt="" /></div>
            <div className="col-md-3"><img src={donut} alt="" /></div>
          </div>

        </div>
      </section>

      <section className="product">
        <h2>Our Product Range</h2>
        <div className="row gy-3 image">

          <div className="col-md-3 "><div className="overlays"><img src={bread2} alt="" />
            <div className="overlay"><p>Donut</p></div></div></div>
          <div className="col-md-3 "><div className="overlays"><img src={pie} alt="" />
            <div className="overlay"><p>Donut</p></div></div></div>
          <div className="col-md-3 "><div className="overlays"><img src={donut} alt="" />
            <div className="overlay"><p>Donut</p></div></div></div>
          <div className="col-md-3 "><div className="overlays"><img src={scone} alt="" />
            <div className="overlay"><p>Donut</p></div></div></div>

        </div>

        <button className='btn button'>VIEW COMPLETE RANGE</button>
      </section>


{/* FACTORY */}
      <section className="factory">
        <div className="row">
          <div className="col-md-6">
            <h2>Book A Factory Tour</h2>
            <p>Keen on seeing how Baker’s inn products are made? Are you interested in a field trip day for your school’s class? Get in touch with us to book a tour of our factory that is closest to you. Fill in the booking form and we will get back to you.</p>
            <button className='btn button'>BOOK FACTORY TOUR</button>
          </div>
          <div className="col-md-6">
            <img src={bread4} alt="" />
          </div>
        </div>

      </section>

      {/* DONATIONS */}

      <section className="donation">
        <div className="row">
          <div className="col-md-6">
            <div className="img">
              <img src={people} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <h1>REQUEST A DONATION</h1>
            <p>If you are holding an event that you wish to have us donate to, we’re more than glad to help. Fill in the donation request form for us to best understand how we can increase your event’s impact in the local community</p>
            <button className='btn button'>REQUEST A DONATION</button>
          </div>
        </div>
      </section>

{/* KIDS CORNER */}

<section className="kidscorner">
  <div className="row">
    <div className="col-md-6">
      <div className="images">
        <img src={green} alt="" /><img src={mario2} alt="" /><img src={toy} alt="" /><img src={toy2} alt="" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="kidsinner">
      <p>Let your children join the fun. Explore a place with exciting games and the top winners stand a chance to win exciting monthly prizes!</p>
      <button className='btn button'>PLAY GAMES</button>
    </div>
    </div>
  </div>
</section>

      {/* tabs */}

      <Recipes/>

      {/* form */}

      <section className="form">
        <div className="row">
          <div className="col-md-6"> <h1>Get Notified about promotions we offer</h1>
              <form action="">
              <input type="text" placeholder='your email' />
               <button className="btn button">SUBMIT</button></form></div >
          <div className="col-md-6"><div className='images'><div className="image"><img src={b2} alt={b2} /></div>
            <div className="image"><img src={b1} alt="" /></div>
            <div className="image"><img src={b3} alt="" /></div></div></div></div>
    </section>
   
    </div >

    

  );
}




export default HomePage
