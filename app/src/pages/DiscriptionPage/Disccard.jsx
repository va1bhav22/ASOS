import React, { useContext } from 'react'
import { descDarta } from './menddesData';
import './DesFooterCards.css'
import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom'; 

import './desc.css'
import DesFooterCards from './DesFooterCards';
import Visit from '../Visit/Visit';
import FooterPage from '../Footer/Footer';
import { CrtContext } from '../../Context';
const Disccard = ({data}) => {
    const {crtdata,setCrtdata} = useContext(CrtContext)
    // let cardData=JSON.parse(localStorage.getItem("DataCard")) || [];


    // const AddTocart=(payload)=>{
       
    //   cardData.push(payload)
    //   localStorage.setItem("DataCard" ,JSON.stringify(cardData))
    
    // }
  return (
    <>
    <div className='MainContainerDesc'>
            <div className='DescContaierDiv'>
                <div className='DescImgDiv'>
                    <img src={data.imgu} alt="" />
                </div>
                <div className='DescDetailsDiv'>
                    <div  className='DescDetailsMainDiv'>
                            <div>
                                <p>{data.title}</p>
                            </div>
                            <div style={{fontWeight:"bold"}}>
                                <p>${data.price}</p>
                            </div>
                            <div className='ReferCode'>
                                <div><i class="fa-solid fa-arrow-right"></i></div>
                                <div class="referYtext">20% OFF EVERYTHING! With code: <span style={{fontWeight:"bold"}}>TAKE20</span></div>
                            </div>
                            <div style={{
                                marginTop:"20px",fontWeight:"bold"
                            }}>
                               <p> Size :</p>
                            </div>
                            <div>
                            <Form.Select aria-label="" style={{borderColor:"black",borderRadius:"0px"} }>
                                <option>Please Select</option>
                                <option value="">XS - Chest 34</option>
                                <option value="">S - Chest 36-38</option>
                                <option value="">M - Chest 40</option>
                                <option value="">L - Chest 42</option>
                                <option value="">2XL - Chest 44-46</option>
                                <option value=""> XL - Chest 46-50</option>
                                </Form.Select>
                            </div>

                            <div className='deltruck'>
                                <div><i class="fa-solid fa-truck"></i>  </div>
                                <div class="delText"> <p>Free Delivery.Ts&Cs apply. Learn more <span><i class="fa-solid fa-link"></i></span> </p>
                               </div>
                            </div>

                            <div className='btnheartDiv'>
                               <div className='btn ADDTOCART'  onClick={()=>{  setCrtdata([...crtdata,data])}}>ADD TO CART</div>  
                               <div  className='HeartIcon'><i class="fa-regular fa-heart"></i></div>
                            </div> 
                            

                            <div className='ProductCode'>
                                <span>PRODUCT CODE : </span> <span>  {Math.floor(Math.random() * (3123156 -  + 1234)) + 1234} </span>
                            </div>
                    </div>
                </div>
            </div>

            <div className='SecMainDiv'>
                <div>
                    <p style={{
                        letterSpacing:"6px",
                        fontWeight:"bold",
                        color:"gray"
                    }}>PRODUCT DETAILS</p>
                    <p>Shirts by <span style={{textDecoration:"underline" ,fontSize:"17px" ,padding:"2px"}}>ASOS DESIGN</span></p>
                    <ul>
                        <li>Do the smart thing</li>
                        <li>Spread collar</li>
                        <li>Button placket</li>
                        <li>Long sleeves</li>
                        <li>Buttoned cuffs</li>
                        <li>Regular fit</li>
                    </ul>
                </div>

                <div>

                    <p style={{
                        letterSpacing:"6px",
                        fontWeight:"bold",
                        color:"gray"
                    }}>BRAND</p>
                    <p style={{
                        width:"300px"
                    }}>This is ASOS DESIGN – your go-to for all the latest trends,
                         no matter who you are, where you’re from and what you’re
                         up to. Exclusive to ASOS, our universal brand is here for you,
                          and comes in Plus and Tall. Created by us, styled by you.</p>
                </div>
                <div>
                    <p style={{
                        letterSpacing:"6px",
                        fontWeight:"bold",
                        color:"gray"
                    }}>LOOK AFTER ME</p>

                    <p style={{width:"300px"
                    }}>Just here for the care instructions?
                    Thought you might be</p>
                    <p>Wipe clean only</p>
                    
                    <p style={{
                        letterSpacing:"6px",
                        fontWeight:"bold",
                        color:"gray"
                    }}>ABOUT ME</p>
                    <p style={{width:"300px"
                    }}>Lyocell: super-soft, drapey and wrinkle-resistant</p>
                    <p>Main: 100% Lyocell</p>

                </div>
            </div>
              
    </div>
    <div><hr/></div>
            <div className='ProductDataDessc'>
            {descDarta.map((ele)=>(
                // console.log(e);
           
              <DesFooterCards key={ele.id}  ele={ele} />
            ))}
            </div>

            <div>
        <hr />
        <Visit/>
        <FooterPage/>
      </div>
    </>
  )
}

export default Disccard;