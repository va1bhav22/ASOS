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
      <div style={{display:"flex",background:"#0770cf",color:"white"}}>
        <div style={{width:"50%",borderRight:"1px solid white",fontSize:"14px",marginTop:"12px",textAlign:"center",lineHeight:"0px",wordSpacing:"3px",fontWeight:"bold"}}>
          <p>UP TO 30% OFF FACE + BODY STUFF!* </p>
          <p>SURPRISE DISCOUNT REVEALEDNAT CHECKOUT </p>
           <p>With code : LUCKY</p>
        </div>
        <div style={{width:"50%",fontSize:"14px",marginTop:"12px",textAlign:"center",lineHeight:"0px",wordSpacing:"3px",fontWeight:"bold"}}  >
          <p>30% OFF SUMMER SHOES!*</p>
          <p> FROM SNEKS TO SMART STYLES</p>
          <p>With code : DRIP</p>
        </div>
      </div>

      <div className='LandigBackImg'>
          {/* <img  src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/archive/oct-2021/microsoftteams-image-(10).png" alt="" /> */}
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
          <div style={{display:"flex",gap: "10px",width:"50%"}}>
            <div><img style={{marginTop:"10px"}} src='https://content.asos-media.com/-/media/images/components/generic-splash/icons/premier.svg'/></div>
            <div style={{width:"300px",}}><p>PREMIER DELIVERY</p>
            <p  style={{marginTop:"-16px",fontSize:"12px"}}>For €15, unlimited free next-day delivery for a whole year</p></div>
          </div>
          <div>
          <p  style={{width:"200px",}}>FREE SHIPPING AND RETURNS</p>
          </div>
      </div>
      
     

    <Visit/>
    <FooterPage/>
    </div>
  )
}

export default LandingPage;


