import React from 'react'
import FooterPage from '../Footer/Footer';
import { useNavigate } from "react-router-dom";
import Visit from '../Visit/Visit'
import './mainCheck.css'
const MainCheckOut = () => {
  const navigate=useNavigate()

  const maincheck=()=>{
    navigate('/CheckOutDetails')
  }
  return (
    <div>
     <div style={{background:"#F2F5F8 ",height:"570px"}}>
     <div className='CheckMaindiv' style={{marginLeft:"500px",padding:"20px",width:"400px",height:"470px",background:"white",marginTop:"30px",position:"absolute"}}>
          <div>
            <div className='TOTAL'>TOTAL</div>
            <hr />
            <div>
              <div style={{display:"flex",justifyContent:"space-between"}}><p>Subtotal</p><p>16.99 €</p></div>
              <div><p>Product</p><p style={{textDecoration:"underline",color:"gray"}}>ASOS DESIGN heart pendant necklace with...</p></div>
            </div>
            <hr />
            <div className='btn REGISTER' onClick={maincheck}>CASH REGISTER</div>
            <div>
              <p style={{fontSize:"14px",marginTop:"20px"}}>WE ACCEPT:</p>
          
              <div>
              <img style={{width:"280px"}} src="https://assets.asosservices.com/asos-finance/images/marketing/fr/single.png" alt="" />
              </div>
              
              <p style={{fontSize:"16px",marginTop:"20px"}}>Do you have a discount code? Add it in the next step</p>
            </div>
          </div>
        </div>
     </div>
          <div>
            <hr />
            <Visit/>
            <FooterPage/>
          </div>
    </div>
  )
}

export default MainCheckOut