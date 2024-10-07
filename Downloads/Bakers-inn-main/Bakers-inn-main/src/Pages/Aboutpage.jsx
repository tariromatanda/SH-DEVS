import React from 'react'
import bakers from '../bakers-inn-resourses/Rectangle 347.png'
import arrow from '../bakers-inn-resourses/Group 300.png'
import image1 from '../bakers-inn-resourses/flag-svgrepo-com 1.png'
import image2 from '../bakers-inn-resourses/view-vision-svgrepo-com 1.png'
import teamwork from '../bakers-inn-resourses/hans.png'
import respect from '../bakers-inn-resourses/respect.png'
import Integrity from '../bakers-inn-resourses/raised.png'
import Commitment from '../bakers-inn-resourses/food.png'

import Excellence from '../bakers-inn-resourses/Rectangle 15.png'
import ceo from '../bakers-inn-resourses/ceo.png'

const Aboutpage = () => {
    return (
        <div className='container'>

           <></>

            <div className="row">
                <section className="aboutus">
                    <div className="col-md-12">
                        <div className="overlays">
                            <div className="img">
                                <img src={bakers} alt="" />
                            </div>
                            <div className="overlay">
                                <h1>ABOUT US</h1>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="row mission">
                <div className="col-md-6">
                    <div className="text">
                        <div className="img">
                            <img src={image1} alt="" />
                        </div>
                        <div className="texts">
                            <h2>Our Mission</h2>
                            <p>To sharpen our edge in the manufacture and marketing of quality baked products.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text">
                        <div className="img">
                            <img src={image2} alt="" />
                        </div>
                        <div className="texts">
                            <h2>Our Vision</h2>
                            <p>To provide a nourishing, convenient and accessible answer to hunger’s call.</p>
                        </div>
                    </div>
                    </div>
            </section>
            <div className="corevalue">
                <div className="row core">
                    <div className="col-md-4">
                    <div className="text">
                        <div className="img">
                            <img src={teamwork} alt="" />
                        </div>
                        <h1>Teamwork</h1>
                        <p>We set inspiring goals that we pursue with passion, unity and focus. We support each other, build on our strengths and ensure that </p>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="text">
                        <div className="img">
                            <img src={respect} alt="" />
                            <h1>Respect</h1>
                            <p>We build self-esteem by treating each other fairly, communicating directly and respectfully. We have empathy, discipline and build on </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="text">
                        <div className="img">
                            <img src={Integrity} alt="" />
                            <h1>Integrity</h1>
                            <p>We uphold the highest professional and ethical standards. We guard the reputation of our brands. Our promises are bankable.</p>
                        </div>
                    </div>
                    </div>
                   
                  <div className="col-md-4">
                  <div className="text">
                        <div className="img">
                            <img src={Commitment} alt="" />
                            <h1>Commitment</h1>
                            <p>We are accountable to our stakeholders and commit to deliver what we promise. We translate plans into actions; strategies into achievements and tangible returns.</p>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div className="text">
                        <div className="img">
                            <img src={Excellence} alt="" />
                            <h1>Excellence</h1>
                            <p>We strive to be the best in our business. We improve all the time, in all aspects and passionately deliver at the highest level. We offer superior value and present our offering  </p>
                        </div>
                    </div>
                  </div>
                   
                  
                </div>
            </div>

            <section className="ceo">
                <div className="row">
                <div className="col-md-6"><div className="img">
                    <img src={ceo} alt="" />
                </div></div>
                <div className="col-md-6 text">
                <h1>PROMISE OF QUALITY</h1>
                    <p>Thank you for visiting our website. At Baker’s Inn, we are committed to delivering quality premium bread to our customers. We work with a team of over 1500 employees nationwide. Our aim is to uphold the highest ethical standards and perpetuate excellence in the delivery of our products. For us at Baker’s Inn, we aim to improve the accessibility of our bread. We are accountable to our stakeholders to deliver what we promise.</p><p>

                        We translate plans into actions; dreams into reality; strategies into achievements and tangible returns. We strive to be the best in our business and in our partnerships. We are committed to every retail outlet, tuckshop, vendor and consumer in Zimbabwe who stock or consume our nourishing bread throughout Zimbabwe. We have built our top-quality brand and continue to grow as a company because of you. Thank you for your continued support of our brand.</p><p>

                        We set inspiring goals that we pursue with passion, unity and focus. We support each other, build on our strengths and ensure that every player in our team contributes fully. We play to win and realise that synergy, communication and alignment bind us together.</p> 
                </div>
                </div>
            </section>

        </div>





    )
}

export default Aboutpage
