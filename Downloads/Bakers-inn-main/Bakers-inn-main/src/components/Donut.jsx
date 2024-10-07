import React from 'react'
import { useState } from "react";
import donut from '../bakers-inn-resourses/Rectangle 26.png'

const Donut = () => {

    const [breadCards] = useState([
        {
          breadImage:donut,
          breadTitle: "Chocolate Donut",
          breadSecTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium et quas! Numquam perferendis cupiditate modi fugiat id doloremque, officiis nemo fuga dolor ducimus ipsam alias enim voluptate distinctio veniam odio ab qui.`,
          id: 1,
        },
        {
          breadImage:donut,
          breadTitle: "Chocolate Donut",
          breadSecTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium et quas! Numquam perferendis cupiditate modi fugiat id doloremque, officiis nemo fuga dolor ducimus ipsam alias enim voluptate distinctio veniam odio ab qui.`,
          id: 2,
        },
        {
          breadImage:donut,
          breadTitle: "Chocolate Donut",
          breadSecTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium et quas! Numquam perferendis cupiditate modi fugiat id doloremque, officiis nemo fuga dolor ducimus ipsam alias enim voluptate distinctio veniam odio ab qui.`,
          id: 3,
        },
       
        
        
      ]);
  return (
    <section>
    <div className="container-fluid outerBread">
      <div className="d-flex innerBread">
        {breadCards.map((bread) => (
          <div
            key={bread.id}
            className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4"
          >
            <div className="card">
              <img
                src={bread.breadImage}
                alt={bread.breadTitle}
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">{bread.breadTitle}</h5>
                <p className="card-text mt-3">{bread.breadSecTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Donut