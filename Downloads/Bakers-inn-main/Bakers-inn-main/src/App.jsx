import React from 'react'
import Navbarr from './components/Navbarr'
import HomePage from './Pages/HomePage'
import Aboutpage from './Pages/Aboutpage'
import Kidspage from './Pages/Kidspage'
import ProductPage from './Pages/ProductPage'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Recipe from './Pages/Recipe'
import ContactPage from './Pages/ContactPage'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
   <Router> 
    <Navbarr/>
    <Routes>
      <Route exact path="/" element = {<HomePage />}/>
      <Route exact path="/about" element = {<Aboutpage />}/>
      <Route exact path="/product" element = {<ProductPage/>}/>
      <Route exact path="/kids" element = {<Kidspage/>}/>
      <Route exact path="/recipe" element = {<Recipe/>}/>
      <Route exact path="/contact" element = {<ContactPage/>}/>
    </Routes>
    <Footer/>
</Router>
    
     
      
    </>
  )
}

export default App

