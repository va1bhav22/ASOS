import React from 'react'
import Visit from "../Visit/Visit";
import FooterPage from "../Footer/Footer";
import { useState } from "react";
// import { useNavigate } from "react-router";
import "./signup.css"
import { useNavigate } from "react-router-dom";
export let identity = ""
export const Signin = ()=>{

   const [flag ,setFlag] = useState(false)


    const navigate = useNavigate();
    const [formdata,setFormdata] = useState({})
    console.log(formdata)
    

    const handlechange = (e)=>{
        const {name,value} = e.target;
    
        setFormdata({
          ...formdata,
          [name]:value
        })
        
    
      }

    const check = async ()=>{
        const data = await fetch("https://login-backend1.herokuapp.com/users").then((d)=>d.json());
        console.log(data)
        data.map((e)=>{
            
            if(e.email === formdata.email && e.password === formdata.pass){
                identity = e.first_name
                alert("LOGIN SUCCESS")
                navigate("/")
                // navigate("/Sign")
            }
            else{
                setFlag(!flag)
                
            }
            
            

        })
    }    
           
        
    
        
    return (
        <div  style={{background:"#F2F5F8",height:"800px"}}>
            <div><img className = "logoSIGN" src = "https://my.asos.com/Content/images/asos-logo-2022-93x28.png"/></div> 
        <div className = "MainSignUp" style={{width:"500px",height:"600px",background:"white",}}>
            
            <div style={{width:"400px",height:"500px",marginLeft:"80px",paddingTop:"30px",marginTop:"20px"}}>

           <div>
           <div className = "adjustREGName">E-MAIL-ADDRESS</div>
            <input className = "RegInput" name = "email" type = "text" onChange ={handlechange} />
            <div style={{fontSize:"12px",color:"red"}}>{flag?<p> username or password incorrect. Wanna try again?</p>:null}</div>
           </div>

           <div> 
            <div className = "adjustREGName">PASSWORD</div>
            <input className = "RegInput" name = "pass"type = "password"  onChange = {handlechange} />
            </div>

            <button className = " btn joinASSOS" onClick = {check}>Sign in</button>
            <div id = "ForGotPASS">Forgot Password ?</div>

            <div className='SIGNINHED'>OR LOG IN WITH...</div>



            <div style={{display:"flex",gap:"10px",marginTop:"30px",justifyContent:"center"}}>
                    <div className="btn RegBtn" style={{display:"flex",gap:"10px"}}>
                        <div><img style={{width:"24px"}} src="https://my.asos.com/Content/dist/images/d860112c552f4380997e32b29c5a0432.svg" alt="" /></div>
                        <div style={{fontSize:"18px"}}>Google</div>
                    </div>
                    <div className="btn RegBtn" style={{display:"flex",gap:"10px"}}>
                        <div><img style={{width:"24px"}} src="https://my.asos.com/Content/dist/images/6ec595bf7f84e4933b4c1ab32c21c49a.svg" alt="" /></div>
                        <div style={{fontSize:"18px"}}>Apple</div>
                    </div>
                    
                </div>

                <div style={{display:"flex",gap:"10px",marginTop:"10px",justifyContent:"center"}}>
                    
                   
                    <div className="btn RegBtn" style={{display:"flex",gap:"10px"}}>
                        <div><img style={{width:"24px"}} src="https://my.asos.com/Content/dist/images/f73c71a378f0f63f4386ccdef8241fda.png" alt="" /></div>
                        <div style={{fontSize:"18px"}}>Facebook</div>
                    </div>

                    <div className="btn RegBtn" style={{display:"flex",gap:"10px"}}>
                        <div><img style={{width:"24px"}} src="https://my.asos.com/Content/dist/images/d4582d89db7a2b498d817e18041f6541.svg" alt="" /></div>
                        <div style={{fontSize:"18px"}}>TWITTER</div>
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