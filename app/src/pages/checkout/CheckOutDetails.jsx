import React, { useContext } from 'react'
import FooterPage from '../Footer/Footer';
import Visit from '../Visit/Visit';
import { useNavigate } from "react-router-dom";
import './CheckADD.css'
import { CrtContext } from '../../Context';
const CheckOutDetails = () => {
  const {crtdata,setCrtdata} = useContext(CrtContext)
  const navigate=useNavigate()
  const cashD=()=>{
    alert("Order Is Confirmed")
   navigate('/')

  }
  return (
    <div >
          

       <div className='checkoutCards'>
           <div>
       
            <div style={{background:"#F2F5F8",height:"1600px"}}>
                        <h1 style={{textAlign:"center",color:"gray"}}>CHECKOUT</h1>
              <div style={{width:"600px",height:"1250px",padding:"20px"}}>
                <div className='SelectCountry' >
                  <div className='CheckName' >SELECT COUNTRY</div>
                <select id="country" name="country" className='DEVinput' >
                <option value="">SELECT COUNTRY</option>
                      <option value="Afghanistan">Afghanistan</option>
                 <option value="Åland Islands">Åland Islands</option>
                 <option value="Albania">Albania</option>
                 <option value="Algeria">Algeria</option>
                 <option value="American Samoa">American Samoa</option>
                 <option value="Andorra">Andorra</option>
                 <option value="Angola">Angola</option>
                 <option value="Anguilla">Anguilla</option>
                 <option value="Antarctica">Antarctica</option>
                 <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                 <option value="Argentina">Argentina</option>
                 <option value="Armenia">Armenia</option>
                 <option value="Aruba">Aruba</option>
                 <option value="Australia">Australia</option>
                 <option value="Austria">Austria</option>
                 <option value="Azerbaijan">Azerbaijan</option>
                 <option value="Bahamas">Bahamas</option>
                 <option value="Bahrain">Bahrain</option>
                 <option value="Bangladesh">Bangladesh</option>
                 <option value="Barbados">Barbados</option>
                 <option value="Belarus">Belarus</option>
                 <option value="Belgium">Belgium</option>
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
                 <option value="Costa Rica">Costa Rica</option>
                 <option value="Cote D'ivoire">Cote D'ivoire</option>
                 <option value="Croatia">Croatia</option>
                 <option value="Cuba">Cuba</option>
                 <option value="Cyprus">Cyprus</option>
                 <option value="Czech Republic">Czech Republic</option>
                 <option value="Denmark">Denmark</option>
                 <option value="Djibouti">Djibouti</option>
                 <option value="Dominica">Dominica</option>
                 <option value="Dominican Republic">Dominican Republic</option>
                 <option value="Ecuador">Ecuador</option>
                 <option value="Egypt">Egypt</option>
                 <option value="El Salvador">El Salvador</option>
                 <option value="Equatorial Guinea">Equatorial Guinea</option>
                 <option value="Eritrea">Eritrea</option>
                 <option value="Estonia">Estonia</option>
                 <option value="Ethiopia">Ethiopia</option>
                 <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
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
                 <option value="Ghana">Ghana</option>
                 <option value="Gibraltar">Gibraltar</option>
                 <option value="Greece">Greece</option>
                 <option value="Greenland">Greenland</option>
                 <option value="Grenada">Grenada</option>
                 <option value="Guadeloupe">Guadeloupe</option>
                 <option value="Guam">Guam</option>
                 <option value="Guatemala">Guatemala</option>
                 <option value="Guernsey">Guernsey</option>
                 <option value="Guinea">Guinea</option>
                 <option value="Guinea-bissau">Guinea-bissau</option>
                 <option value="Guyana">Guyana</option>
                 <option value="Haiti">Haiti</option>
                 <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                 <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                 <option value="Honduras">Honduras</option>
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
                 <option value="Jersey">Jersey</option>
                 </select>
             </div>
 
             <div className="AddressDEl">
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
 
               <div>
                 <div  className='CheckName' >STATES *</div>
                 <div><select name="state" id="state" class="DEVinput">
                     <option value="Andhra Pradesh">Andhra Pradesh</option>
                     <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                     <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                     <option value="Assam">Assam</option>
                     <option value="Bihar">Bihar</option>
                     <option value="Chandigarh">Chandigarh</option>
                     <option value="Chhattisgarh">Chhattisgarh</option>
                     <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                     <option value="Daman and Diu">Daman and Diu</option>
                     <option value="Delhi">Delhi</option>
                     <option value="Lakshadweep">Lakshadweep</option>
                     <option value="Puducherry">Puducherry</option>
                     <option value="Goa">Goa</option>
                     <option value="Gujarat">Gujarat</option>
                     <option value="Haryana">Haryana</option>
                     <option value="Himachal Pradesh">Himachal Pradesh</option>
                     <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                     <option value="Jharkhand">Jharkhand</option>
                     <option value="Karnataka">Karnataka</option>
                     <option value="Kerala">Kerala</option>
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
                     </select></div>
               </div>
 
               <div   >
                 <div className='CheckName'>ADDRESS</div>
                 <div><input className='DEVinput' type="text" /></div>
                 <div><input className='DEVinput' type="text" placeholder='(OPTIONAL)' /></div>
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
             </div>
        </div>
 
        <div style={{marginLeft:"20px"}}>
               <div style={{width:"450px"}}>By placing your order, you accept our Terms and Conditions , our Privacy Policy and our Returns Policy . You also agree that some of your data will be stored by ASOS. These can be used to make your shopping experience even better in the future.</div>
               <div className='btn LastBtn' onClick={cashD}>CASH ON DELIVERY</div><br />
               <button   className='btn LastBtn'>ONLINE PAYMENT</button>
             </div>
       </div>
     </div>
         
          <div>
                {crtdata.map((ele)=>{
                  return  <div>
                    <div><img src={ele.imgu} alt="" /></div>
                  </div>
                })}
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

export default CheckOutDetails;