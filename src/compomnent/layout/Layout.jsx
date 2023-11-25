import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../web/navbar/Navbar.jsx'
import Footer from '../web/footer/Footer.jsx'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}
