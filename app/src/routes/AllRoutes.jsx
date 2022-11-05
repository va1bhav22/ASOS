import React from 'react'
import {Routes,Route} from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Bag from '../pages/Bag/Bag';
import CheckOutDetails from '../pages/checkout/CheckOutDetails';
import MainCheckOut from '../pages/checkout/MainCheckOut';
import Discpage from '../pages/DiscriptionPage/Discpage';
import LandingPage from '../pages/LandingPage/LandingPage';
import Mens from '../pages/Mens/Mens';
import MensProduct from '../pages/ProductPage/MensPro/MensProduct';
import WomensProduct from '../pages/ProductPage/WomensPro/WomensProduct';
import Save from '../pages/saved/Save';
import { Signin} from '../pages/sign/Sign';
import { Signup } from '../pages/sign/Signup';
import Womens from '../pages/Womens/Womens';


const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/Womens' element={<Womens/>} />
        <Route path='/Mens' element={<Mens/>} />
        <Route  path='/Sign' element={<Signin/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Save' element={<Save/>} />
        <Route path='/Bag' element={<Bag/>} />
        <Route path='/MensProduct' element={<MensProduct/>} />
        <Route path='/WomensProduct' element={<WomensProduct/>} />
        <Route path='/CheckOutDetails'element={<CheckOutDetails/>} />
        <Route path='/MainCheckOut' element={<MainCheckOut/>}/>
        <Route path='/DescPage/:id' element={<Discpage/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes