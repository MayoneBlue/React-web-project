import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Search from './Components/Search/Search'
import Mean from './Components/Mean/Mean'
import Footer from './Components/Footer/Footer'

const Layout = () => {
  return (
    <div>
         <Header/>
         <Search/>
         <Mean/>
         <Footer/>
      <Outlet/>
    </div>
  )
}

export default Layout
