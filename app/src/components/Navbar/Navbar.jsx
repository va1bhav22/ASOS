import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import MiniNav from './MiniNav';
import  './Navbar.css';
import NextNav from './NextNav';
import { useNavigate } from "react-router-dom";
import { CrtContext } from '../../Context';


const Navbar = () => {
  const {crtdata} = useContext(CrtContext)
  const navigate = useNavigate();
  const handleNavigate=()=>{
    navigate("/")
  }
  return (
   <div>
     <MiniNav/>
      <div  className='nav mainNav navbar-expand-sm ' >
     <div>
     <Link to='/'></Link>
      {/* <div><img src="" alt="" /></div> */}
      <img onClick={handleNavigate} style={{height:"90px",marginRight:"30px"}} src="https://image.pitchbook.com/uOcUSgJVnsjM1HbMQlkK59pDzkf1605376695731_200x200" alt="" />
      <Link style={{color:"white",marginRight:"30px",textDecoration:"none",fontSize:"20px"}} to='/Womens'>WOMEN</Link>
      <Link  style={{color:"white",marginRight:"30px",textDecoration:"none",fontSize:"20px"}} to='/Mens'>MEN</Link>
     </div>
      
      <div className="inputicon">
        <input className='NavInput' type="text" placeholder='Search for items and brands' /><i  className="fa-solid fa-magnifying-glass"></i>
        </div>
      
      <div style={{marginLeft:"-30px"}}>
      {/* <Link  to='/Sign'><i  style={{color:"white",fontSize:"25px",marginLeft:"50px"}} className="fa-solid fa-user"></i></Link> */}
      <Link  to='/Signup'><i  style={{color:"white",fontSize:"25px",marginLeft:"50px"}} className="fa-solid fa-user"></i></Link>
      <Link to='/Save'><i  style={{color:"white",fontSize:"25px",marginLeft:"50px"}} className="fa-solid fa-heart"></i></Link>
      <Link to='/Bag'><i  style={{color:"white",fontSize:"25px",marginLeft:"50px"}} className="fa-solid fa-bag-shopping"></i><span style={{color:"white",fontSize:"25px",textDecoration:"none"}}>{crtdata.length}</span></Link> 
      </div>
    </div>
    <NextNav/>
   </div>
  )
}

export default Navbar