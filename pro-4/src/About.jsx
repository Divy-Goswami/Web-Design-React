import React from 'react'
import Common from './Common'
import web from "./Images/homepage1.jpg"

const About = () => {
  return (
    <div>
       <Common name="Welcome to about page" btnname="Contact" Visit="/contact" imgsrc={web}/>
    </div>
  )
}

export default About
