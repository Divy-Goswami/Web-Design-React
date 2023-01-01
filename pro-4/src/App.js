import React from 'react'
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import {Routes,Route } from 'react-router-dom'
import Footer from './Footer'



const App = () => {
  return (
    <>
      <Navbar/>
    <Routes>
     <Route exact path='/' element={<Home/>}></Route>
     <Route exact path='/services' element={<Services/>}></Route> 
     <Route exact path='/contact' element={<Contact/>}></Route>
     <Route exact path='/about' element={<About/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
