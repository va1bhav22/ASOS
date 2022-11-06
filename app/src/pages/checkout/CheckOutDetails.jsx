import React, { useContext, useState } from 'react'
import { CrtContext } from '../../Context'
import FooterPage from '../Footer/Footer'
import Visit from '../Visit/Visit'
import './CheckADD.css'

const CheckOutDetails = () => {
  const {crtdata,setCrtdata} = useContext(CrtContext);
  const [showText, setShowText] = useState(false);
  const [showotp, setShowotp] = useState(false);
  return (
    <div style={{background:"#F2F5F8"}}>
        <div className='MainDiv' style={{display:"flex"}}>
               <div className='FirstRow'>
                   <div className='CountryDiv'>
                     <div className='countryName'>Select Country *</div>
                       <div>  
                          <select id="country" name="country" className='DEVinput' >
                            <option value="">SELECT COUNTRY</option>
                            <option value="American Samoa">American Samoa</option>                
                            <option value="Australia">Australia</option>                
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                            <option value="Cook Islands">Cook Islands</option>                            
                            <option value="Falkland Islands (Malvinas)">Falkland Islands</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="France">France</option>
                            <option value="Finland">Finland</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>                            
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-bissau">Guinea-bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            
                          </select>
                    </div>
                 </div>

                      <div className='ADDDetails'>
                            <div>
                              <div  className='CheckName' >FIRST NAME *</div>
                              <div><input className='DEVinput' type="text" /></div>
                            </div>
              
                            <div>
                              <div  className='CheckName' >SURNAME *</div>
                              <div><input className='DEVinput' type="text" /></div>
                            </div>
              
                            <div  className='CheckName' >
                              <div>MOBILE PHONE NUMBER * </div>
                              <div><input className='DEVinput' type="text" /></div>
                            </div>
              
                            <div  className='CheckName' >
                              <div>E-Mail ADDRESS</div>
                              <div><input className='DEVinput' type="text" /></div>
                            </div>

                                 <div >
                                    <div className='CheckName'>STATES *</div>
                                      <div>
                                          <select name="state" id="state" class="DEVinput">
                                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                                          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                          <option value="Assam">Assam</option>
                                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                                          <option value="Maharashtra">Maharashtra</option>
                                          <option value="Manipur">Manipur</option>
                                          <option value="Meghalaya">Meghalaya</option>
                                          <option value="Mizoram">Mizoram</option>
                                          <option value="Nagaland">Nagaland</option>
                                          <option value="Odisha">Odisha</option>
                                          <option value="Punjab">Punjab</option>
                                          <option value="Rajasthan">Rajasthan</option>
                                          <option value="Sikkim">Sikkim</option>
                                          <option value="Tamil Nadu">Tamil Nadu</option>
                                          <option value="Telangana">Telangana</option>
                                          <option value="Tripura">Tripura</option>
                                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                                          <option value="Uttarakhand">Uttarakhand</option>
                                          <option value="West Bengal">West Bengal</option>
                                          </select>
                                        </div>
                                  </div>

                                  <div>
                                      <div className='CheckName'>ADDRESS</div>
                                      <div><input className='DEVinput' type="text" /></div>
                                      
                                    </div>
                                    
                                    <div>
                                      <div className='CheckName'>PLACE * </div>
                                      <div><input className='DEVinput' type="text" /></div>
                                    </div>
                      
                                    <div >
                                      <div className='CheckName'>CIRCLE</div>
                                      <div><input className='DEVinput' type="text" /></div>
                                    </div>
                      
                                    <div>
                                      <div className='CheckName'>ZIP CODE * </div>
                                      <div><input className='DEVinput' type="text" /></div>
                                    </div>
                                    <hr />
                                    <div>
                                          <div className='PAyment'>PAYMENT TYPE</div>
                                          <div style={{marginTop:"20px"}}>
                                              <div className='ADDCART' onClick={() => setShowText(!showText)}>
                                                <div><i class="fa-solid fa-credit-card"></i></div>
                                                <div style={{width:"140px"}}>ADD CREDIT/DEBIT CARD</div>
                                              </div>
                                              <div className='or'>OR</div>
                                              <div className='PAYPAL'>
                                                <div><i class="fa-brands fa-cc-paypal"></i></div>
                                                <div style={{width:"140px"}}>PAYPAL</div>
                                              </div>
                                          </div>
                                    </div>

                                
                                    <div style={{marginTop:"40px"}} >
                                    {
                                      
                                    
                                    showText && <div className='cardToggleDiv'>
                                          <div className='headADDDebit'>ADD CREDIT/DEBIT CARD</div>

                                            <div>
                                              <div className='CheckName'>CARD NUMBER </div>

                                              <div>
                                              <i class="cardnumbericon fa-solid fa-credit-card"></i>
                                                <input className='DEVinput' type="text" /></div>
                                            </div>

                                            <div>
                                            <div className='CheckName'>EXPIRY DATE </div>
                                                  <div>
                                                        <span><select name="" id="month">
                                                          <option value="">Month</option>
                                                          <option value="">01</option>
                                                          <option value="">02</option>
                                                          <option value="">03</option>
                                                          <option value="">04</option>
                                                          <option value="">05</option>
                                                          <option value="">06</option>
                                                          <option value="">07</option>
                                                          <option value="">08</option>
                                                          <option value="">09</option>
                                                          <option value="">10</option>
                                                          <option value="">11</option>
                                                          <option value="">12</option>
                                                          </select></span> &nbsp; &nbsp;
                                                        <span><select name="" id="year">
                                                            <option value="">Year</option>
                                                            <option value="">2022</option>
                                                            <option value="">2023</option>
                                                            <option value="">2024</option>
                                                            <option value="">2025</option>
                                                            <option value="">2026</option>
                                                            <option value="">2027</option>
                                                            <option value="">2028</option>
                                                            <option value="">2029</option>
                                                            <option value="">2030</option>
                                                            <option value="">2031</option>
                                                            <option value="">2032</option>
                                                          </select></span>
                                                  </div>
                                            </div>

                                            <div>
                                              <div className='CheckName'> NAME OF CARD </div>
                                              <div><input className='DEVinput' type="text" /></div>
                                            </div>

                                            <div>
                                              <div className='CheckName'> CCV </div>

                                              <div>
                                              <i class="iconinput fa-regular fa-credit-card"></i>
                                                <input className='DEVinputccv' type="text" /></div>
                                            </div>

                                            <div style={{display:"flex",alignItems:"center"}}>
                                              
                                              <div><input type="checkbox" className='chek' />&nbsp; &nbsp;    </div><div style={{fontSize:"17px"}}>Save card details for next time</div>
                                            </div>

                                            <div>
                                              <button className='btn useCRD' >USE THIS CARD</button>
                                            </div>


                                      </div>
                                      
                                      }


                                      
                                    </div>

                      </div>
                      <div style={{marginTop:"15px"}} >
                            <div style={{width:"600px"}}>By placing your order, you accept our Terms and Conditions , our Privacy Policy and our Returns Policy . You also agree that some of your data will be stored by ASOS. These can be used to make your shopping experience even better in the future.</div>
                            <div className='btn LastBtn' onClick={""}>PLACE ORDER</div><br />
                            {/* <button   className='btn LastBtn pbtn'>ONLINE PAYMENT</button> */}
                       </div>
             </div>
             <div className='secondRow'>
              <h1>ITEM {crtdata.length}</h1>
                    {crtdata.map((ele)=>{
                          return  <div>
                            
                            <hr />
                            <div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                        })}
             </div>
             <br />
        </div>

        <div>
        <hr />
            <Visit/>
            <FooterPage/>
        </div>
    </div>
  )
}

export default CheckOutDetails