import React from 'react'
import './DropDown.css'
const Dropdowns = () => {
  return (
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
  )
}

export const Dropdown2=()=>{
  return(
      <div className='nav DropNav'>
          <div><a href="">Home page</a></div>
          <div><a href="">Men's</a></div>
          <div><a href="">Sale</a></div>
      </div>
  )
  
}

export const Dropdown3=()=>{
  return(
    <div className='DropText'>
     <p style={{fontSize:"25px",fontWeight:"bold"}}>Sale men</p>
     <p style={{width:"90%",margin:"auto"}}>The ASOS menswear sale offers you the most beautiful models at unbeatable prices. 
      From shoes to shirts, we offer you current trends and timeless elegance, 
      with which you can always put yourself in the limelight. No matter what style you love
       right now or what  and again, the ASOS sale is sure
        to have something for you. Then complete the look with the matching shoes from our sale,
         featuring brands like Nike and Adidas Originals. What do you prefer to wear? Sneakers, 
         Chelsea boots, flip-flops, loafers... </p>
          <div style={{marginTop:"20px"}} ><a style={{textDecoration:"none",color:"black",fontWeight:"bold"}} href="">Show more</a></div>
    </div>
  )
  
}

export const Dropdown4=()=>{
  return(
    <div className='DropButtons'>
       <div className='DropButtonsData'>
       <div>SPORT</div>
        <div>SWEART-SHIRTS AND TANK</div>
        <div>TOPS</div>
        <div>JEANS</div>
        <div>SHOES AND SNEAKERS</div>
        <div>JACKETS AND COATS</div>
        <div>SWEATERS AND CARDIGANS</div>
        <div>SHOW MORE ...</div>
       </div>
    </div>
  )
  
}

export const Dropdown5=()=>{
  return(
    <div className='DropIsStart'>
      <div >
        <select name="" id="DropDownStart">
          <option value="">Sort By</option>
          <option value="">High To Low</option>
          <option value="">Low To High</option>
          {/* <option value=""></option>
          <option value=""></option> */}
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
        <select name="" id="DropDownStart">
          <option value="">Brand</option>
          <option value="">ASOS DESIGN(5.063)</option>
          <option value="">ASOS 4505(73)</option>
          <option value="">ASOS EDITION(2)</option>
          <option value="">ASOS MADE IN(4)</option>
        </select>
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
  )
  
}

export default Dropdowns