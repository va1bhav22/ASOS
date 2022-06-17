import React from 'react';
import FooterPage from '../../Footer/Footer';
import Visit from '../../Visit/Visit';
import Dropdowns, { Dropdown2, Dropdown3, Dropdown4, Dropdown5 } from '../WomensPro/Dropdowns';
import{ useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './MensProduct.css'
const MensProduct = () => {
    const cardData=JSON.parse(localStorage.getItem("DataCard")) || [];
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
      fetch("http://localhost:8000/mensData")
      .then((r)=>r.json())
      .then((d)=>{
          console.log(d)
          setTodos(d);
      })
    },[])


    const AddTocart=(Payload)=>{
      cardData.push(Payload)
      localStorage.setItem("DataCard" ,JSON.stringify(cardData))
    }
  
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
             <div style={{height:"150px",fontSize:"14px",marginTop:"10px"}}><p >{todo.title} </p>
             <div>
             <div style={{display:"flex"}}><p style={{fontWeight:"bold" , color:"brown"}}>{todo.price} €</p></div>
             <div className='btn ADDTOCART'onClick={()=>AddTocart(todo)}>ADD TO CART</div>             
             </div>
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

export default MensProduct