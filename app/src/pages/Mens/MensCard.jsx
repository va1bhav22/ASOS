import React from 'react'
import './Mens.css'
import { useNavigate } from "react-router-dom";
const MensCard = (props) => {

  // console.log(props)
  const navigate=useNavigate()
  const handClick=()=>{
    navigate("/MensProduct")
  }
  return (
    <div style={{}}>
      <div >
        <img onClick={handClick} className='MAinCartImage' src={props.image} alt="" />
        <div style={{marginTop:"20px",lineHeight:"14px"}}>
      <p style={{fontWeight:"bold"}}>{props.category}</p>
        <p>{props.title}</p>
      </div>
      </div>
     
    </div>
  )
}

export const MensCardBig=(props)=>{
  return(
    <div>
       <div >
        <img className='MAinBigCartImage' src={props.image} alt="" />
        <div style={{marginTop:"20px",lineHeight:"14px"}}>
      <p style={{fontWeight:"bold",fontSize:"30px"}}>{props.category}</p>
        <p style={{fontSize:"18px",marginTop:"28px"}}>{props.title}</p>
        <div><button className='btn MAinBigCartImageButton'>{props.but}</button></div>
      </div>
      </div>
    </div>
  )
}

export default MensCard