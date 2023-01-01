import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <>
           <section className='d-flex align-items-center mt-5'>
       <div className='container-fluid mt-5'>
        <div className='row mt-5 mb-5'>
          <div className='col-10 mx-auto'>
            <div className='row pt-5'>
                <div className='col-md-6 pt-5 d-flex justify-content-center flex-column'>
                   <h1 className='display-6'>{props.name}<br></br><strong id='head'>ReactWeb</strong></h1>
                   <p class="fs-4">We are the team of talented<br></br> developer making websites</p>

                    <div className='mt-3'>
                   <NavLink to={props.Visit}  className="btn btn-outline-primary p-2">{props.btnname}</NavLink>
                   </div>
                </div>
                <div className='col-md-6 pt-5' id='header'>
                 <img src={props.imgsrc} className='animated img-fluid rounded opacity-80'></img> 

                </div>
            </div>

          </div>
        </div>
       </div>
       </section>
      
    </>
  )
}

export default Common
