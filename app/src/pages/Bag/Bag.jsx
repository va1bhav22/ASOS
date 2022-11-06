import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { CrtContext } from '../../Context';
import FooterPage from '../Footer/Footer'
import Visit from '../Visit/Visit'
import './Bag.css'
const Bag = () => {
  const {crtdata,setCrtdata} = useContext(CrtContext)
  const navigate=useNavigate()
// const  [backData,setBackData]=useState([])
  // const cardGet=JSON.parse(localStorage.getItem("DataCard"))
  const [total, setTotal] = useState(0);
 

  useEffect((item)=>{
    setTotal(crtdata.reduce((acc,curr)=>acc+Number(curr.price),0));
  },[crtdata])
  console.log(crtdata)
// useEffect(()=>{
//   setBackData(cardGet)
// },[])

const maincheck=()=>{
  navigate('/CheckOutDetails')
}

  // const handleDelete=(id)=>{
    // console.log(id)
      // event.preventDefault()
    // const Data=cardGet.filter(el=>el.id!==id)
    // localStorage.setItem("DataCard",JSON.stringify(Data))
    // setBackData(cardGet)
  // }
  //  var arr =JSON.parse(localStorage.getItem("cheeckoutpage")) || [] ;
    const Pocket=(Payload)=>{
      
      console.log(Payload)
      // arr.push(Payload)
      localStorage.setItem("cheeckoutpage" ,JSON.stringify(Payload)) 
      navigate('/MainCheckOut')
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
   



        <div className='MainDivCart' style={{background:"#F2F5F8 "}}>

        <div className='CatPageItem'>
              {crtdata.map((todo)=>(
                <div className='CardDiv' key={todo.id}>
                  <div><img className='cardDivimg' src={todo.imgu} alt="" /></div>  
                  <div>
                       <div><h5 style={{color:"#d01345"}}>£{todo.price}</h5></div>
                       <div><p className='CartTitle'>{todo.title}</p></div>
                       <div>
                          | <span>
                            <select name="" id="size">
                              <option value="">Size</option>
                              <option value="">M</option>
                              <option value="">L</option>
                              <option value="">XL</option>
                              <option value="">2XL</option>
                             
                            </select> |
                          </span> &nbsp; &nbsp;
                          <span> 
                          <select name="" id="qty">
                              <option value="">Qty</option>
                              <option value="">1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                              <option value="">4</option>
                              <option value="">5</option>
                              <option value="">6</option>
                              <option value="">7</option>
                              <option value="">8</option>
                              <option value="">9</option>
                            </select> |
                          </span>
                       </div>
                         
                        <div className='savebtn'>
                          <span><i class="fa-regular fa-heart king"></i></span> &nbsp;
                          <span>Save for later</span>
                        </div>
                  </div>  

                  <div>
                  <i class="fa-solid fa-xmark" onClick={()=>{setCrtdata(crtdata.filter((c)=>c.id!==todo.id))}}></i>
                  </div>                
                </div>        
              ))}
        <div className='total' ><h3>SUB-TOTAL  £{Math.ceil(total)} </h3></div>
       </div>

       <div>
       <div style={{marginTop:"20px"}}>
     <div className='CheckMaindiv' style={{padding:"20px",width:"400px",height:"460px",background:"white"}}>
          <div>
            <div className='TOTAL'>TOTAL</div>
            <hr />
            <div>
              <div style={{display:"flex",justifyContent:"space-between"}}><p>Sub-Total</p><p>£ {Math.ceil(total)}</p></div>
              <div style={{display:"flex",justifyContent:"space-between"}}><p>Delivery</p><div style={{color:"gray"}}><i class="fa-solid fa-circle-info"></i></div></div>
            </div>
            <select name="" id="standDeli">
              
              <option value="">Standerd Delivery (Free)</option>
              <option value="">Expres Delivery (£ 22.50) </option>
            </select>
            <hr />
            <div className='btn REGISTER' onClick={maincheck}>CASH REGISTER</div>
            <div>
              <p style={{fontSize:"14px",marginTop:"20px"}}>WE ACCEPT:</p>
          
              <div>
              <img style={{width:"280px"}} src="https://assets.asosservices.com/asos-finance/images/marketing/fr/single.png" alt="" />
              </div>
              
              <p style={{fontSize:"15px",marginTop:"20px"}}>Do you have a discount code? Add it in the next step</p>
            </div>
          </div>
        </div>
     </div>
       </div>

        </div>





       <div>

        
            <hr />
            <Visit/>
            <FooterPage/>
          </div>


  </div>

  )
}

export default Bag;