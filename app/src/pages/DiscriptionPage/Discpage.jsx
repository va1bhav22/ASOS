import React from 'react'
import Disccard from './Disccard'
import { useParams } from 'react-router';
import { useState } from 'react';
// import axios from "axios";
import { useEffect } from 'react';
const Discpage = () => {
    // const DescData =JSON.parse(localStorage.getItem("DataCard")) || [];
    // console.log(DescData)
    const[desc,setDesc]=useState([]);
    const {id} = useParams();
    console.log(id)

    useEffect(()=>{
      fetch(`https://assosapi.herokuapp.com/mensData/${id}`)
      .then((r)=>r.json())
      .then((d)=>{
        // console.log(d)
        setDesc(d);
      })
    },[])

  return (
    <>
     
         <Disccard data={desc} />
       
       </>
    
  )
}

export default Discpage