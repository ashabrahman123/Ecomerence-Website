import React from "react";
import {FaShippingFast} from "react-icons/fa"
import {MdContactPhone} from "react-icons/md"
import {GiReceiveMoney} from "react-icons/gi"
import {SiFsecure} from "react-icons/si"
import './Services.css';
const Services =()=>
{
    return(
        <div className="servicemaindiv">
            {/* <h1>Our services</h1> */}

            <div className="firstcol">
                <div className="serviceicon"><FaShippingFast/></div>
                <div><p>Super fast and free Deleviery</p></div>
            </div>

            <div className="secondcol">

                <div className="sec1">
                <div className="serviceicon"><MdContactPhone/></div>
                <div><p>Non-Contact Shipping</p></div>
                </div>

                <div className="sec2">
                <div className="serviceicon"><GiReceiveMoney/></div>
                <div><p>Money-back Gurranted</p></div>
                </div>

            </div>


            <div className="thirdcol">
                
                <div className="serviceicon"><SiFsecure/></div>
                <div><p>Super ecure Payment System</p></div>

            </div>


        </div>
    )
}

export default Services;