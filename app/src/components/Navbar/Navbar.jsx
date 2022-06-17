import React from 'react'
import { Link } from 'react-router-dom';
import MiniNav from './MiniNav';
import  './Navbar.css';
import NextNav from './NextNav';


const Navbar = () => {
  return (
   <div>
     <MiniNav/>
      <div  className='nav mainNav navbar-expand-sm ' >
     <div>
     <Link to='/'></Link>
      {/* <div><img src="" alt="" /></div> */}
      <img style={{height:"90px",marginRight:"30px"}} src="https://image.pitchbook.com/uOcUSgJVnsjM1HbMQlkK59pDzkf1605376695731_200x200" alt="" />
      <Link style={{color:"white",marginRight:"30px",textDecoration:"none",fontSize:"20px"}} to='/Womens'>WOMEN</Link>
      <Link  style={{color:"white",marginRight:"30px",textDecoration:"none",fontSize:"20px"}} to='/Mens'>MEN</Link>
     </div>
      
      <div className="inputicon">
        <input className='NavInput' type="text" placeholder='Search for items and brands' /><i  class="fa-solid fa-magnifying-glass"></i>
        </div>
      
      <div style={{marginLeft:"-30px"}}>
      {/* <Link  to='/Sign'><i  style={{color:"white",fontSize:"25px",marginLeft:"50px"}} class="fa-solid fa-user"></i></Link> */}
      <Link  to='/Signup'><i  style={{color:"white",fontSize:"25px",marginLeft:"50px"}} class="fa-solid fa-user"></i></Link>
      <Link to='/Save'><i  style={{color:"white",fontSize:"25px",marginLeft:"50px"}} class="fa-solid fa-heart"></i></Link>
      <Link to='/Bag'><i  style={{color:"white",fontSize:"25px",marginLeft:"50px"}} class="fa-solid fa-bag-shopping"></i></Link> 
      </div>
    </div>
    <NextNav/>
   </div>
  )
}

export default Navbar