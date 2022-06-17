import React from 'react'
import Dropdowns, { Dropdown3, Dropdown4, Dropdown5 } from './Dropdowns'
import { Dropdown2 } from './Dropdowns';
import{ useEffect, useState } from 'react';
import './WomensProduct.css'
import Visit from '../../Visit/Visit';
import FooterPage from '../../Footer/Footer';
import {nanoid} from 'nanoid'
const WomensProduct = () => {

  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/womenData")
    .then((r)=>r.json())
    .then((d)=>{
        console.log(d)
        setTodos(d);
    })
  },[])

  return (
    <div>
     <div>
     <Dropdowns/>
     <Dropdown2/>
     <Dropdown3/>
     <Dropdown4/>
     <Dropdown5/>
     </div>
     <div className='ProductData'>
     {todos.map((todo)=>(
        <div>
          <div key={nanoid()}>{todo.value}</div>
         
           <div>
           <div><img style={{width:"300px"}} src={todo.imgu} alt="" />
           <div style={{height:"100px",fontSize:"14px",marginTop:"10px"}}><p >{todo.title} </p>
           <p style={{fontWeight:"bold" , color:"brown"}}>{todo.price} €</p>
           </div>
           </div>
           
           </div>

         
        </div>        
      ))}
     </div>
    <div>
      <hr />
      <Visit/>
      <FooterPage/>
    </div>
    </div>
  )
}

export default WomensProduct