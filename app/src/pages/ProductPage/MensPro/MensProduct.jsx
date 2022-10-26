import React from 'react';
import FooterPage from '../../Footer/Footer';
// import { Link } from 'react-router-dom';
import Visit from '../../Visit/Visit';
import Dropdowns, { Dropdown2, Dropdown3, Dropdown4 } from '../WomensPro/Dropdowns';
import '../WomensPro/DropDown.css'
import{ useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
// import { nanoid } from 'nanoid';
import './MensProduct.css'
const MensProduct = () => {

  const navigate=useNavigate()
  
    
    let cardData=JSON.parse(localStorage.getItem("DataCard")) || [];

    const [todos,setTodos]=useState([]);
    const[search,setSearch]=useState("")
    useEffect(()=>{
      fetch("https://6325f6a94cd1a2834c47f804.mockapi.io/ASSOSAPIMALE")
      .then((r)=>r.json())
      .then((d)=>{
        // console.log(d)
          setTodos(d);
      })
    },[])


    // const AddTocart=(Payload)=>{
    //   cardData.push(Payload)
    //   localStorage.setItem("DataCard" ,JSON.stringify(cardData))
    // }
    const AddDesc=(Payload)=>{
      console.log(Payload)
      cardData=[];
      cardData.push(Payload)
      localStorage.setItem("DataCard" ,JSON.stringify(cardData)) 
      navigate("/DescPage")
    }

    const handleSort=(s)=>{
      return setTodos([  
        ...todos.sort((a, b) => {
           if (s === "H2l") {
             return b.price - a.price;
           } 
           else if (s === "L2h") {
             return a.price - b.price;
           }
            else return todos;
         }),
       ]);

    }

    // const HndleSerch=(e)=>{
    //   // console.log(e)
    //   return setTodos([
        
    //   ])
     
    
    return (
    // }
      <div>
       <div>
       <Dropdowns/>
       <Dropdown2/>
       <Dropdown3/>
       <Dropdown4/>
       <div className='DropIsStart'>
      <div >
        <select name="" id="DropDownStart" onClick={(e)=>handleSort(e.target.value)} >
          <option value="">Sort By</option>
          <option value="H2l">High To Low</option>
          <option value="L2h">Low To High</option>
        </select>
      </div>
      <div>
        <select name="" id="DropDownStart">
          <option value="">Category</option>
          <option value="">Accessoires(845)</option>
          <option value="">Anzüge  Co.(1.572)</option>
          <option value="">Bademode(226)  </option>
          <option value="">Einteiler(111)</option>
        </select>
      </div>
      <div>
        {/* <select name="" id="DropDownStart">
          <option value="">Brand</option>
          <option value="">ASOS DESIGN(5.063)</option>
          <option value="">ASOS 4505(73)</option>
          <option value="">ASOS EDITION(2)</option>
          <option value="">ASOS MADE IN(4)</option>
        </select> */}
        <input type="text" id='searchpro' onChange={(e)=>setSearch(e.target.value)} placeholder="Search Product" />
      </div>
      <div>
        <select name="" id="DropDownStart">
          <option value="">ProductKart</option>
          <option value="">Anstecknadeln(8)</option>
          <option value="">Armbänder(32)</option>
          <option value="">Bauchketten(2)</option>
          <option value="">Broschen(4)</option>
        </select>
      </div>
    </div>
       </div>
       <div className='ProductData'>
       {todos
       .filter((value)=>
       {
        if(search==="")
        {
          return value 
           
        }
        else if(value.title.toLowerCase().includes(search.toLowerCase()))
        {
          return value
        }
       })
       .map((todo)=>(
         
         <div  onClick={()=>AddDesc(todo)}>
            <div key={todos.id}>{todo.value}</div>
           
             <div>
             <div><img style={{width:"300px"}} src={todo.imgu} alt="" />
             <div style={{height:"150px",fontSize:"14px",marginTop:"10px"}}><p >{todo.title} </p>
             <div>
             <div style={{display:"flex"}}><p style={{fontWeight:"bold" , color:"brown"}}>{todo.price} €</p></div>
             {/* <div className='btn ADDTOCART'onClick={()=>AddTocart(todo)}>ADD TO CART</div>              */}
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