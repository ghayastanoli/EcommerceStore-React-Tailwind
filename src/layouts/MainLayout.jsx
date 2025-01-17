import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'


const MainLayout = () => {
  return (
    <>
    <Banner/>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout