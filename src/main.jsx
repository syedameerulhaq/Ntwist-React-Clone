import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Home from "./components/home.jsx"
import Ai from './components/ai-software.jsx'
import Blog from './components/blog.jsx'
import Contact from './components/contact.jsx'
import Industries from './components/industries.jsx'
import Metal from './components/metal-mining.jsx'
import Mine from './components/mine-to-mill-to-mine-optimization.jsx'
import Oil from './components/oil-gas.jsx'
import Sustainability from './components/sustainability.jsx'
import Layout from './layout.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element ={<Layout/>}>
      <Route path='' element ={<Home/>}/>
      <Route path='industries' element ={<Industries/>}/>
      <Route path='ai-software' element ={<Ai/>}/>
      <Route path='mine-to-mill-to-mine-optimization' element ={<Mine/>}/>
      <Route path='metal-mining' element ={<Metal/>}/>
      <Route path='sustainability' element ={<Sustainability/>}/>
      <Route path='oil-gas' element ={<Oil/>}/>
      <Route path='blog' element ={<Blog/>}/>
      {/* <Route path='Contact' element ={}/> */}

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
