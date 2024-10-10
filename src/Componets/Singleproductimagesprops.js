import React from "react";
import Card from 'react-bootstrap/Card';
import {useContext} from "react";
import { productscontext } from "../Context/contextprovider";

const Singleproductimagesprops =(props)=>
{

  const {singleproductstate} = useContext(productscontext);

    return(

      <div>
           
<Card style={{boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px', borderRadius: '30px'}}>
    
  <Card.Img variant="top" src={props.url} style ={{width:'100%' , height:'200px'}}/>

  </Card>

    
{/* 
       <img src={singleproductstate.image.url[0]} />
       <h1> {singleproductstate.price} </h1> */}

      </div>

    )
}

export default Singleproductimagesprops;