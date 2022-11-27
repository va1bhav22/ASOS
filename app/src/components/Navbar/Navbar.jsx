import  './Navbar.css';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import MiniNav from './MiniNav';
import NextNav from './NextNav';
import {GiHamburgerMenu} from "react-icons/gi"
import {HiOutlineUser} from "react-icons/hi"
import {BsHeart,BsBag} from "react-icons/bs"
import {FiSearch} from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import { CrtContext } from '../../Context';


const Navbar = () => {
  const {crtdata} = useContext(CrtContext)
  const navigate = useNavigate();
  const handleNavigate=()=>{
    navigate("/")
  }
  return (
   <>
   <MiniNav/>
      <div className='mainNav'>
      <div className='hammThreeLines'>
          <GiHamburgerMenu className='Hamburger'/>
          </div>
        {/* {logo part} */}
          <div onClick={handleNavigate} className='Logo'>ASSOS</div>


          <div className='MenButtons'>
              <div className='MenBtnclass'><Link style={{color:"white",textDecoration:"none"}} to='/Womens' >Women</Link></div>
              <div ><Link style={{color:"white",textDecoration:"none"}} to="/Mens">Men</Link></div>
          </div>

          {/* menupart */}
          <div className='MenuLink'>
             <input type="text" className='NavInput' />
             <FiSearch className='FiSearch'/>
          </div>

          {/* Icons */}

          <div className='Icons'>
            <div className='NavSearch'><FiSearch className='UnicSearch'/></div>
            <div><Link to='/Signup'><HiOutlineUser className='IconEdit'/></Link></div>
            <div><Link  to='/Save'><BsHeart className='IconEdit'/></Link></div>
            <div><Link to='/Bag'><BsBag className='IconEdit'/><span style={{color:"white"}}>{crtdata.length}</span></Link></div>              
          </div>
         
      </div>
      <div>
        <NextNav/>
      </div>
      
     
      
   </>
  )
}


export default Navbar




{/* <MiniNav/>
      <div  className='nav mainNav navbar-expand-sm ' >
     <div>
     <Link to='/'></Link>

      <img onClick={handleNavigate} style={{height:"90px",marginRight:"30px"}} src="https://image.pitchbook.com/uOcUSgJVnsjM1HbMQlkK59pDzkf1605376695731_200x200" alt="" />
      <Link style={{color:"white",marginRight:"30px",textDecoration:"none",fontSize:"20px"}} to='/Womens'>WOMEN</Link>
      <Link  style={{color:"white",marginRight:"30px",textDecoration:"none",fontSize:"20px"}} to='/Mens'>MEN</Link>
     </div>
      
      <div className="inputicon">
        <input className='NavInput' type="text" placeholder='Search for items and brands' /><i  className="fa-solid fa-magnifying-glass"></i>
        </div>
      
      <div style={{marginLeft:"-30px"}}>
      <Link  ><i  style={{color:"white",fontSize:"25px",marginLeft:"50px"}} className="fa-solid fa-user"></i></Link>
      <Link ><i  style={{color:"white",fontSize:"25px",marginLeft:"50px"}} className="fa-solid fa-heart"></i></Link>
      <Link ><i  style={{color:"white",fontSize:"25px",marginLeft:"50px"}} className="fa-solid fa-bag-shopping"></i><span style={{color:"white",fontSize:"25px",textDecoration:"none"}}></span></Link> 
      </div>
    </div>
    <NextNav/> */}