import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'


const MainLayout = () => {
  return (
    <>
    <Banner/>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default MainLayout