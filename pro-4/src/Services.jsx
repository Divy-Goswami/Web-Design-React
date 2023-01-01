import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

const Services = () => {
  return (
    <>
       <div className='col-12 text-center'>
        <h1 className='display-6'>Our Services</h1>
       </div>
       <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto mt-5'>
            <div className='row gy-4'>
              {
                Sdata.map((val,index)=>{
                  return <Card
                     key={index}
                    imgsrc = {val.imgsrc}
                    title ={val.title}/>
                })
              }
            </div>
          </div>
          </div>
       </div>
    </>
  )
}

export default Services
