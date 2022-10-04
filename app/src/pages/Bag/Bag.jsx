import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import FooterPage from '../Footer/Footer'
import Visit from '../Visit/Visit'
import './Bag.css'
const Bag = () => {
  const navigate=useNavigate()
const  [backData,setBackData]=useState([])
  const cardGet=JSON.parse(localStorage.getItem("DataCard"))
  const [total, setTotal] = useState(0);
 
useEffect(()=>{
  setBackData(cardGet)
},[])


  const handleDelete=(id)=>{
    // console.log(id)
      // event.preventDefault()
    const Data=cardGet.filter(el=>el.id!==id)
    localStorage.setItem("DataCard",JSON.stringify(Data))
    setBackData(cardGet)
  }

    const Pocket=(e)=>{
      // navigate('/MainCheckOut')
            
    }

  return (
  <div>
    <div>
    <div style={{display:"flex",justifyContent:"space-around",background:"black",alignItems:"center"}}>
        <div>
          <button className='btn' style={{background:"black",color:"white",width:"100px",borderColor:"white",fontWeight:"bold"}} >LEDIES</button>
        </div>
        <div style={{fontSize:"13px",fontWeight:"bold",color:"white",textAlign:"center"}}>
          <p >NEW HERE?</p>
          <p style={{marginTop:"-18px"}}>Get 15% Discount* With Code : Hi</p>
          <p  style={{marginTop:"-18px"}}>Or Doenload the app for 20% discount With code : Hiya</p>
          </div>
          <div>
           <button className='btn' style={{background:"black",color:"white",width:"100px",borderColor:"white",fontWeight:"bold"}}>MEN'S</button>
          </div>
      </div>
    </div>
     <div className='CatPageItem'>
{backData.map((todo)=>(
          <div className='CardDiv'>
            <div>{todo.value}</div>
           
            <div  className='card' style={{marginLeft:"20px",width:"220px",marginTop:"30px",textAlign:"center",padding:"10px"}}>
      <div>
        <img style={{width:"200px",marginLeft:"0px"}} src={todo.imgu} alt="" />
      </div>
      <div>
        <p style={{fontSize:"13px",marginTop:"10px"}}>{todo.title}</p>
        <p>{todo.price} €</p>
        <div style={{width:"140px"}} onClick={()=>handleDelete(todo.id)} className='btn GreebBTN'>DELETE</div>
         
        {/* <div style={{marginTop:"10px"}} onClick={Pocket} className='btn GreebBTN'>IN THE POCKET</div> */}
      </div>
    </div>
           
          </div>        
        ))}

       </div>
       <div>

        <div>{total}</div>
            <hr />
            <Visit/>
            <FooterPage/>
          </div>


  </div>

  )
}

export default Bag;