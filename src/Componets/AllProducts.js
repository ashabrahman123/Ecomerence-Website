import React, { useContext, useState, useEffect } from "react";
import { productscontext } from "../Context/contextprovider";
import './Allproducts.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { Firebasecontextceom } from "./FirebaseEcom";

const Allproducts = (props) => {

  const { allproducts } = useContext(productscontext);
  const firebaseusecontext = useContext(Firebasecontextceom);
  const [imagesett, setimagesett] = useState(null);


  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageUrl = await firebaseusecontext.getimagurladmin(props.imageurl);
        setimagesett(imageUrl);
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };

    fetchImage();
  }, [firebaseusecontext, props.imageurl]);



  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px' }}>

      <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px', width: "100%", marginTop: '30px', marginBottom: '30px' }}>
        <Card.Img variant="top" src={imagesett} style={{ width: "100%", height: '300px' }} />
        <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center' }}>
          <Card.Title>{props.name}</Card.Title>
          <Card.Title>{props.price}</Card.Title>
          <Card.Title>{props.category}</Card.Title>
        </Card.Body>
        <Card.Footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center' }}>
          <Button variant="dark" > <NavLink style={{ color: "white", textDecoration: 'none' }} to={`/singleproduct/${props.id}`}> Buy Now </NavLink></Button>
        </Card.Footer>
      </Card>

    </div>




  )
}

export default Allproducts;