import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Loading from './Pages/Loading/Loading'
import Layout from './Layout'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Abstract from './Pages/Abstract/Abstract'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout/>} children={[
          <Route path='/' element={<Abstract/>}/>
          // <Route path='/' element={<Home/>}/>
        ]}/>
        {/* <Route path='/' element={<Loading/>} /> */}
        
        
        
       
      </Routes>
    </HashRouter>
  )
}

export default App
