import React, { Component, ReactDOM } from 'react';
import Button from 'react-bootstrap/Button';
import  { ResendOTP } from "otp-input-react";
import './Otp.css'
import Visit from '../Visit/Visit';
import FooterPage from '../Footer/Footer';
import { Link ,} from "react-router-dom";
class Otpinput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", disable: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(value1, event) {

    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event) {

    const data = new FormData(event.target);
    console.log(this.state);
    event.preventDefault();
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {

        elmnt.target.form.elements[next].focus()
      }
    }
    else {
      console.log("next");
     
        const next = elmnt.target.tabIndex;
        if (next < 5) {
          elmnt.target.form.elements[next].focus()
        }
    }

  }

  render() {
    return (
      <div>
             <div className='mainOtpContainer'>
                <div className='firsdivotp'>
                    <div><img src="https://cdn.xxl.thumbs.canstockphoto.com/one-time-password-message-with-code-on-the-smartphone-for-entering-on-the-site-or-application-clip-art-vector_csp103041641.jpg" alt="" /></div>
                    <h5 style={{marginTop:"10px"}}>ENTER OTP</h5> 
               </div>
                      <div>
                            <form onSubmit={this.handleSubmit}>
                            <div className="otpContainer">

                            <input
                            name="otp1"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp1}
                            onKeyPress={this.keyPressed}
                            onChange={e => this.handleChange("otp1", e)}
                            tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                            />
                            <input
                            name="otp2"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp2}
                            onChange={e => this.handleChange("otp2", e)}
                            tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                            />
                            <input
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp3}
                            onChange={e => this.handleChange("otp3", e)}
                            tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                            name="otp3"

                            />
                            <input
                            name="otp4"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp4}
                            onChange={e => this.handleChange("otp4", e)}
                            tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                            />

                            <input
                            name="otp5"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp5}
                            onChange={e => this.handleChange("otp5", e)}
                            tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                            />
                            </div>

                            <div className='resendOtpp'>
                                   <ResendOTP handelResendClick={() => console.log("Resend clicked")} />
                             </div>
                          <Link  style={{textDecoration:"none",paddingTop:"10px"}} to={"/order"}  className="btnotp" type="submit">
                            VERIFY OTP
                            </Link>
                            </form>

                        </div>
             </div>

             <div>
            <hr />
            <Visit/>
            <FooterPage/>
          </div>
      </div>
         );
  }
}


export default Otpinput;
