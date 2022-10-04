import React from 'react'
import './DesFooterCards.css'
const DesFooterCards = ({ele}) => {
  return (
        <>        
             <div>
                <img style={{width:"200px"}} src={ele.imgu} alt="" />
               <div style={{ width:"200px",fontSize:"14px",marginTop:"10px"}}>
                 <p >{ele.title} </p>
               <div>
                <div>
                  <p style={{fontWeight:"bold" , color:"brown"}}>{ele.price} €</p>
                </div>
             </div>
             </div>
             </div>           
          </>    
  )
}

export default DesFooterCards