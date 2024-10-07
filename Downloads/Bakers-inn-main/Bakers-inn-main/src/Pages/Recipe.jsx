import React from 'react'

import arrow from '../bakers-inn-resourses/Group 300.png'
import imgages from '../bakers-inn-resourses/BAKERY.png'
import Recipes from '../components/Recipes.jsx'

const Recipe = () => {
  return (



    <div className='container'>
    <div className="row">
      <section className="contact">
        <div className="col-md-12">
          <div className="overlays">
            <div className="img">
              <img src={imgages} alt="" />
            </div>
            <div className="overlay">
              <h1>RECIPES</h1>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>

<Recipes/>

       
      
    </div>
  )
}

export default Recipe
