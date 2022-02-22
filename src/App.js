 import React from 'react'
 import  { Route, Routes } from 'react-router-dom'
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
 import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
 import Navbar from './Navbar'
 import Home from './Home'
 import Aboutus from './Aboutus'
 import Services from './Services'
 import Project from './Project'
 import Team from './Team'
 import Career from './Career'
 import Contactus from './Contactus'
 import Footer from './Footer'
 
 const App = ()=>{
   return(
     <>
     <Navbar/> 
     <Routes>
       <Route exact path='/' element={<Home/>} />
       <Route exact path='/about' element={<Aboutus/>} />
       <Route exact path='/services' element={<Services/>} />
       <Route exact path='/project' element={<Project/>} />
       <Route exact path='/team' element={<Team/>} />
       <Route exact path='/career' element={<Career/>} />
       <Route exact path='/contactus' element={<Contactus/>} />
       
     </Routes>
     <Footer />
     </>
   )
 };
 export default App;