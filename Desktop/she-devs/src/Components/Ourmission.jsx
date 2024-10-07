import React from 'react'
import mission from '../she-devs-images/our mission.png'

const Ourmission = () => {
  return (
    <div className="container">
        <section className="mission">
            <div className="row">
            <div className="col-md-6">
                <img src={mission} alt="" />
            </div>
            <div className="col-md-6">
                <h2>Our Mission</h2>
                <p>Our mission is to equip women with the skills, confidence, and connections needed to excel in tech careers. We achieve this through mentorship programs, workshops, training sessions, and networking events. Our community is built on the values of collaboration, innovation, and empowerment, fostering a culture where women can share experiences, knowledge, and ideas. By joining SheDevs, members become part of a vibrant network of like-minded individuals committed to shaping the future of tech.

</p>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Ourmission