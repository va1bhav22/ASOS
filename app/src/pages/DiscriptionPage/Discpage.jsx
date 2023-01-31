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
      fetch(`https://good-red-crocodile-shoe.cyclic.app/assos/get/${id}`)
      .then((r)=>r.json())
      .then((d)=>{
        // console.log(d)
        setDesc(d);
      })
    },[])

    console.log(desc);
    // clinquant-dasik-d418a1

  return (
    <>
     
         <Disccard data={desc} />
       
       </>
    
  )
}

export default Discpage