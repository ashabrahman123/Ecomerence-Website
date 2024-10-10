import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css'
import {AiFillYoutube} from 'react-icons/ai'
import {BsFacebook} from "react-icons/bs"
import {FaChrome} from "react-icons/fa";
const Footer =()=>
{
    return(
        <div className="footermaindiv">
           <div className="footerrow1">
             <div><p>Already to get started?<br></br> Talk to us today</p></div>
             <div className="footerrow1button"> <NavLink to="/contact"><button>GET STARTED</button></NavLink> </div>
           </div>
            
            <div className="footerrow2">
                <div className="footerrow2part1">
                    <p>ASHAB RAHMAN</p>
                    <p>Already to get started?<br></br>Talk to us today!!!!!</p>
                </div>

                <div className="footerrow2part2">
                      <p>Subscribe to get more details</p>
                      <NavLink to="/contact"><button> Subscribe</button></NavLink>
                    
                </div>

                <div  className="footerrow2part3">
                    <p>Follow us</p>
                    <div className="footericons">
                         <AiFillYoutube/>
                         <BsFacebook/>
                         <FaChrome/>
                    </div>
                </div>

                <div  className="footerrow2part4">
                    <p>Call us</p>
                    <h5>0347-8253731</h5>
                </div>
            </div>

        </div>
    )
}

export default Footer;