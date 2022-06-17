import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import { Button, Collapse } from 'mdbreact';
import './Footer.css'
const FooterPage = () => {
  return (
    <MDBFooter  className="font-small pt-2 mt-2">
      <MDBContainer fluid className="FooterMaiDiv">
        <MDBRow>
          <MDBCol md="3">
          
            <ul className="footerItem">
              <li className="list-unstyled"><h6 className="title">HELP &#38; INFORMATION</h6></li>
              <li className="list-unstyled">
                <a href="#!">Help</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">shipment tracking</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Delivery &#38; Returns</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Premier delivery</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">10% student discount</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
         
            <ul className="footerItem">
              <li  className="list-unstyled"> <h6 className="title">MORE ABOUT ASOS</h6></li>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Career at ASSOS</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">corporate responsibility</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">investors</a>
              </li>
             
            </ul>
          </MDBCol>
          <MDBCol md="3">
          
            <ul className="footerItem">
              <li  className="list-unstyled"><h6 className="title">MORE ASOS SITES</h6></li>
              <li className="list-unstyled">
                <a href="#!">Mobile site &#38; ASOS apps</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">ASOS Marketplace</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">gift vouchers</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Black Friday</a>
              </li>
             
            </ul>
          </MDBCol>
          <MDBCol md="3">
            
            <ul className="footerItem">
              <li  className="list-unstyled"><h6 className="title">SHOPPING OUT</h6></li>
              <li className="list-unstyled">
                <a href="#!">You are in  &nbsp;  <img style={{width:"16px"}} src="https://assets.asosservices.com/storesa/images/flags/gb.png" alt="" />  &nbsp;  <span>|</span>  &nbsp;  <span>CHANGE</span></a>
              </li>
            
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
     <div className="Footercopyright" style={{display:"flex",}}>
     <div  className="footer-copyright  ">
        <MDBContainer  fluid>
          &copy; {new Date().getFullYear()}  ASOS
        </MDBContainer>
      </div>
      <div >
        <span> imprint</span>&nbsp;
        <span>|</span>&nbsp;
        <span>Privacy and Cookies</span>&nbsp;
        <span>|</span>&nbsp;
        <span>Conditions</span>&nbsp;
        <span>|</span>&nbsp;
        <span>Accessibility</span>&nbsp;
        <span>|</span>
      </div>
     </div>
    
    </MDBFooter>
  );
}

export default FooterPage;