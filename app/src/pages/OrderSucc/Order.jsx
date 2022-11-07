import React from 'react'
import "./order.css"
import {useNavigate} from "react-router-dom"
const Order = () => {
  const navigate =useNavigate()
  const handlenav=()=>{
    
    navigate("/")
    window.location.reload(false);  
  }
  return (
    <div>
      <div className='orderMainDiv'>
          <div className='orderMainDivunder' >
              <div>
                 <div><img className='Cirfill' src="data:image/png;base64,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" alt="" /></div>
              </div>
              <div>
                <p className='orhead'>You're all set!</p>
              </div>
              <div  style={{marginTop:"-15px"}}>
              ORDER NO = {Math.round(Math.random() * 100000 + 1000)}
              <p className='orderp'>Thanks for being awesome,</p>
              <p className='orderp' style={{marginTop:"-16px"}}>we hope you enjoy your purchase!</p>
              </div>
              <div><button onClick={handlenav} className='btn orderBtn'><i class="fa-solid fa-house-chimney"></i> Home</button></div>
          </div>
      </div>
    </div>
  )
}

export default Order