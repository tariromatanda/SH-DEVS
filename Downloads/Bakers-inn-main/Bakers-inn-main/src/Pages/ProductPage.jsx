
// import shortbread from "../assets/images/recipe2.png";
// import chips from "../assets/images/recipe3.png";
import producthero from "../bakers-inn-resourses/Rectangle 347.png"
import React, { useState } from "react";
import ProductsBread from "../components/ProductsBread";
import Productsmeat from "../components/Productsmeat";
import Scones from "../components/Scones";
import Donut from "../components/Donut";
const ProductPage = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div className="products-hero">
        <img src={producthero} alt="" />
        <h1>Our Product Range</h1>
      </div>
      <div className="ourProducts">
        <h2>Our Products</h2>

        <div className="bloc-tabs pb-5">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <li>Bread</li>
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <li className="overlay">Meat Pies</li>
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <li className="overlay">Scones</li>
          </div>
          <div
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            <li className="overlay">Donuts</li>
          </div>
        </div>
        <div className="content-tabs container">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <ProductsBread />
          </div>
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Productsmeat />
           

            
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <Scones/>
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
          <Donut/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductPage;
