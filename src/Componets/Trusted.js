import React from "react";
import './Trusted.css';
import brand1 from './brand11.png'
import brand2 from './brand222.png'
import brand3 from './logo4.png'
import brand4 from './brand44.png'

const Trusted =()=>
{
    return(
        <div className="trustedmaindiv">
          <div><h2>Trusted by 10000+ Companies</h2></div>
          <div className="brandsname">
          <div className="brand1">
           <img src={brand1}/>
          </div>

          <div className="brand1">
           <img src={brand2}/>
          </div>

          <div className="brand1">
           <img src={brand3}/>
          </div>

          <div className="brand1">
           <img src={brand4}/>
          </div>
          </div>
        </div>
    )
}

export default Trusted;