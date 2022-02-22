import React from 'react'
import { NavLink } from 'react-router-dom'

 const Career = ()=>{
   return(
     <>
     <div className="my-5">
     <h1 className='text-center'>Join Our Team</h1>
     </div>
     <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
      <h4 className='text-center'>Send your resume on 
        <NavLink to="mailto: hr@gmail.com"> hr@vktechnical.com</NavLink>
      </h4>
     </div>

     </>
   )
 };
 export default Career;