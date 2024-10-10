import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";

const api = "https://api.pujakaitem.com/api/products";

const FeaturedProductsProps =(props)=>
{
    return(
        <div>
      
<Card style={{boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px', borderRadius: '30px' , marginTop:"40px"}}>
  <Card.Img variant="top" src={props.image} style ={{width:'100%' , height:'200px'}}/>
  <Card.Body style={{display:'flex' , flexDirection:'column' , alignItems:'center' , alignContent:'center'}}>
    <Card.Title>{props.name}</Card.Title>
    <Card.Title> Rs. {props.price}</Card.Title>
    <Card.Title>{props.category}</Card.Title>
  </Card.Body>
  <Card.Footer style={{display:'flex' , flexDirection:'column' , alignItems:'center' , alignContent:'center'}}>

    <Button  variant="dark" > <NavLink style={{color:"white" , textDecoration:'none'}} to= {`/singleproduct/${props.id}`}> Buy Now </NavLink></Button>

  </Card.Footer>
</Card>
</div>
        
    )
}

export default FeaturedProductsProps;