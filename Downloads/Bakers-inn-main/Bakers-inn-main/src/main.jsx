import React from 'react';
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './Homepage.scss'
import './products1.scss'
import './About.scss'
import './KidsCorner.scss'
import './contact.scss'
import './Products.scss'
import './recipes.scss'
// import './RecipePage.scss'
import './footer.scss'


import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
const router = createBrowserRouter([
  {
  path: '/',
  element:<App/>
  }
])

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

