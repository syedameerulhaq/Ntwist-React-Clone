import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom' //used to reuse code <outlet/> code can be change
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
