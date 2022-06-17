import React from 'react'
// import { Link } from 'react-router-dom'
import  './Mininav.css';

const MiniNav = () => {
  return (
    <div className='nav  '>
     <div className='Mininav'>
     <div className='LineNav'>|</div>
      <div >Marketplace</div>
      <div  className='LineNav'>|</div>
      <div>Help &#38; FAQ's</div>
      <div  className='LineNav'>|</div>
      <div><img style={{width:"15px"}} src="https://assets.asosservices.com/storesa/images/flags/gb.png" alt="" /></div>     
      <div  className='LineNav'>|</div>
     </div>
    </div>
  )
}

export default MiniNav