import { useState } from "react";

import "./signup.css";
import { useNavigate } from "react-router-dom";
import Visit from "../Visit/Visit";
import FooterPage from "../Footer/Footer";
export const Signup = ()=>{
  const navigate=useNavigate()
    const [data,setData] = useState({});
    
    console.log(data)
    const handlechange = (e)=>{

        const {name,value} = e.target;
        
        setData({
            ...data,
            [name]:value
        })

        if(data.first_name===""){
                alert("ksldlka")
        }
        

    }

    return (
        <div style={{background:"#F2F5F8"}}>
            <div style={{textAlign:"center",paddingTop:"30px",}} >  <img className = "logo" src = "https://my.asos.com/Content/images/asos-logo-2022-93x28.png"/></div>
       <div style={{width:"600px",background:"white",marginLeft:"400px",padding:"30px",marginTop:"30px"}}>
        
        <div className = "signup">
            
           
            <div>
                <div style={{textAlign:"center"}}><h5>LOGIN WITH...</h5></div>

                <div style={{display:"flex",gap:"10px",marginTop:"30px",justifyContent:"center"}}>
                    <div className="btn RegBtn" style={{display:"flex",gap:"10px"}}>
                        <div><img style={{width:"24px"}} src="https://my.asos.com/Content/dist/images/d860112c552f4380997e32b29c5a0432.svg" alt="" /></div>
                        <div style={{fontSize:"18px"}}>Google</div>
                    </div>
                    <div className="btn RegBtn" style={{display:"flex",gap:"10px"}}>
                        <div><img style={{width:"24px"}} src="https://my.asos.com/Content/dist/images/6ec595bf7f84e4933b4c1ab32c21c49a.svg" alt="" /></div>
                        <div style={{fontSize:"18px"}}>Apple</div>
                    </div>
                    <div className="btn RegBtn" style={{display:"flex",gap:"10px"}}>
                        <div><img style={{width:"24px"}} src="https://my.asos.com/Content/dist/images/f73c71a378f0f63f4386ccdef8241fda.png" alt="" /></div>
                        <div style={{fontSize:"18px"}}>Facebook</div>
                    </div>
                </div>

                <div style={{textAlign:"center",marginTop:"10px"}}>
                    <p>Signing up with a social profile is quick. No additional passwords - no memory leaks. Don't worry, we would never share any of your information or post #notevil on your behalf</p>
                </div>
                <div style={{textAlign:"center",fontWeight:"bold"}}>
                    <p>OR REGISTER WITH AN EMAIL ADDRESS</p>
                </div>
            </div>
          <div style={{marginLeft:"85px"}}>
          <div >
                <div className = "adjustREGName">EMAIL ADDRESS:</div>
                <input className = "RegInput"  name = "email" type = "text" required    onChange = {handlechange} />
            </div>
            
            <div>
                <div className = "adjustREGName">FIRST NAME:</div>
                <input className = "RegInput" name = "first_name" type = "text" required  onChange = {handlechange}/>
            </div>

           <div>
           <div className = "adjustREGName">LAST NAME:</div>
            <input className = "RegInput" name = "last_name"type = "text" required onChange = {handlechange}/>
           </div>

           <div>
           <div className = "adjustREGName">PASSWORD:</div>
            <input className = "RegInput" name = "password" type = "text"  onChange = {handlechange}/>
           </div>
{/* clinquant-dasik-d418a1 */}
            <div>
            <div className = "adjustREGName">DATE OF BIRTH:</div>
            <input className = "RegInput" name = "date_of_birth" type = "date" onChange = {handlechange} />
            </div>
            <button className = " btn joinASSOS" onClick = {()=>{
                fetch('https://determined-gaiters-deer.cyclic.app/user/register', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  })
                  alert("REGISTRATION SUCCESSFULL");
                  navigate("/Sign")
            }}>REGISTER WITH ASOS</button>
            {/* https://login-backend1.herokuapp.com/users */}
          </div>

          <div onClick={()=>{
             navigate("/sign")
          }} >...</div>
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