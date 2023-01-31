import React from 'react'
import"./DetailsPop.css"
import { useNavigate } from 'react-router-dom';
const DetailsPopup = () => {

    const details = JSON.parse(localStorage.getItem("detailspass"));
    // console.log(details);
const navigatetoOtp=()=>{
    navigate('/otp')
}
    const navigate = useNavigate();
  return (
    <div className='detailsDiv'>
        <div><h1 className='CountryDiv2'>{details.country}</h1></div>
        <div className='nameDiv'><span>{details.name}</span> <span>{details.surname}</span></div>
        <div><span>ADDRESS : {details.address}</span></div>
        <div>{details.email}</div>
        <div>{details.num}</div>
        <button onClick={navigatetoOtp} className='btn detailsDivbtn'>Next</button>
    </div>
  )
}

export default DetailsPopup