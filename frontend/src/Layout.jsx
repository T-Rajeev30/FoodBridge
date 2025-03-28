import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import NGODashBoard from './pages/NGODashBoard'
import RestaurantDashboard from './pages/RestaurantDashboard'

function Layout() {
  return (
    <>  
        {/* <RestaurantDashboard/> */}
        {/* <NGODashBoard/> */}
        <Header/>
        <Outlet/>
        <Footer/>
        
    </>
    
  )
}

export default Layout