import React from "react";
import { NavLink } from "react-router-dom";
import familypic from './familypic3.jpg'
import './sharehomeabout.css'
import Carousel from 'react-bootstrap/Carousel';
import carsoul1img from './carasoul11.jpg'
import carasoul2img from './carasou222.jpg'
import carasuol3 from './carasoul333.webp'


const ShareHomeAbout =(props)=>
{
    return(
        <div className="sharemaindiv">
             <div className="TextShare">
                 <h1>{props.data}</h1>
                  <p> What does do shopping mean? : to visit a <br></br>
                      place or places where goods are sold in order<br></br>
                      to buy the things (such as groceries) that someone needs to buy.</p>
                   <NavLink><button>Buy Now</button></NavLink>
             </div>
             <div>
                 {/* <div className="shareimg"><img src={familypic}/></div> */}

   <div style={{ marginTop: "0px" }} className="">
      {/* <div className="">
         <div className=""> */}
          <Carousel>
           <Carousel.Item >
               <img
                style={{ width: "100%", backgroundColor: "black" , height:"300px"}}
                className="d-block w-100"
                src={carsoul1img}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img
                style={{ width: "100%", backgroundColor: "black", height:"300px"}}
                className="d-block w-100"
                src={carasoul2img}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ width: "100%", backgroundColor: "black",height:"300px" }}
                className="d-block w-100"
                src={carasuol3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

       
      </div>
    </div>

    // </div>
// </div>

    )
}

export default ShareHomeAbout;