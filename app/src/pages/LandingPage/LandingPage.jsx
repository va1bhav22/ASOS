import React from 'react'
import FooterPage from '../Footer/Footer';
import Visit from '../Visit/Visit';
import'./LandingPage.css';
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
const navigate=useNavigate()

  
  const HandleClickWomen=()=>{
    // console.log("h1");
    navigate("/Womens")
  }

  const HandleClickMen=()=>{
    navigate("/Mens")
  }
  return (
    <div>
      <div className='LandinPageBlueBackData' >
        <div className='LandinPageBlueBackDataUndrText'>
          <p>UP TO 30% OFF FACE + BODY STUFF!* </p>
          <p>SURPRISE DISCOUNT REVEALEDNAT CHECKOUT </p>
           <p>With code : LUCKY</p>
        </div>
        <div  className='LandinPageBlueBackDataUndrTextsec'  >
          <p>30% OFF SUMMER SHOES!*</p>
          <p> FROM SNEKS TO SMART STYLES</p>
          <p>With code : DRIP</p>
        </div>
      </div>

      <div className='LandigBackImg'>
          <div className='LandigBackImgUnderData '  >
            <p className='welHead'>Welcome to ASOS</p>
            <p className='welHeadbrand'>ASOS DESIGN and 850+ brands</p>
            <div className='LandigBackImgUnderDataButton'>
              <button className='btn landingBTN' onClick={HandleClickWomen}>SHOP WOMEN</button>
              <button className='btn landingBTN' onClick={HandleClickMen}>SHOP MEN'S</button>
            </div>
          </div>

          
      </div >


      <div className='PrimiumDelivery'>
          <div className='PreDeleUndrDiv'>
            <div><img style={{marginTop:"10px"}} src='https://content.asos-media.com/-/media/images/components/generic-splash/icons/premier.svg' alt='backImg'/></div>
            <div style={{width:"300px",}}><p className='PremeumParaHed'>PREMIER DELIVERY</p>
            <p className='PremeumPara'>For €15, unlimited free next-day delivery for a whole year</p></div>
          </div>
          <div> 
          <p className='PremeumParaHed' style={{width:"200px",}}>FREE SHIPPING AND RETURNS</p>
          </div>
      </div>
      
     

    <Visit/>
    <FooterPage/>
    </div>
  )
}

export default LandingPage;


