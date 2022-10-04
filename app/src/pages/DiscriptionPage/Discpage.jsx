import React from 'react'
import Disccard from './Disccard'

const Discpage = () => {
    const DescData =JSON.parse(localStorage.getItem("DataCard")) || [];
    console.log(DescData)
  return (
    <>
       {DescData.map((item)=>(
        // console.log(item)
         <Disccard data={item} />
        ))}
       </>
    
  )
}

export default Discpage