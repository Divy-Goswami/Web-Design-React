import React from 'react'
import web from "./Images/aboutpage.jpg"
import "./Home.css"
import Common from './Common'

const Home = () => {
  return (
    <div>
      <Common name="Get Your Business with" btnname="Get Start" Visit="/services" imgsrc={web}/>
    </div>
  )
}

export default Home
