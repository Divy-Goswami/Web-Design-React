import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-10 mx-auto nav-bg'>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" id='head'>ReactWeb</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to="/" id="home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink  className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/about">About</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
