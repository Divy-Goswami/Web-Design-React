import React from 'react'
import { useState } from 'react';


const Contact = () => {
  const [data,setData]= useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  })
  const inputvalue = (event)=>{
    const {name,value}= event.target;
    setData((preval)=>{
      return{
        ...preval,
        [name]:value,
      }
    })

  }
  const formsubmit =(e)=>{
    e.preventDefault();
    alert(`Name: ${data.fullname}, 
         Mobile number: ${data.phone},
         Email: ${data.email},
         Message: ${data.msg}`);
  }
  return (
   <>
        <div className='my-5'>
          <h1 className='text-center display-6'>Contact Us</h1>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              <form onSubmit={formsubmit}>
            <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputvalue} placeholder="Enter Full Name"/>
           </div>
           <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Phone</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputvalue} placeholder="Enter Mobile Nummber"/>
           </div>
            <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputvalue} placeholder="name@example.com"/>
           </div>
           <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={inputvalue} rows="3"></textarea>
              </div>
              <div className='mt-3'>
                   <button to=""  type='submit'className='btn btn-outline-primary p-2'>Submit</button>
                   </div>
                   </form>
                        </div>
                        
          </div>
        </div>
   </>
  )
}

export default Contact
