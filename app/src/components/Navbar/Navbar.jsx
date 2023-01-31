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
            <div className='bagLenghDiv'><Link style={{textDecoration:"none"}} to='/Bag'><BsBag className='IconEdit'/><span className='NavBarItemLength'>{crtdata.length}</span></Link></div>              
          </div>
         
      </div>
      <div>
        <NextNav/>
      </div>
      
     
      
   </>
  )
}


export default Navbar




