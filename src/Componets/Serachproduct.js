import React, { useContext, useState } from "react";
import { productscontext } from "../Context/contextprovider";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";

const SerachProduct = () => {
    const { allproducts } = useContext(productscontext);
    const [enterproductname, setenterproductname] = useState("");

    const changenterproductname = (e) => 
    {
        setenterproductname(e.target.value);     
    }

    return (

        <div style={{ marginTop: '25px'}}>

            <input onChange={changenterproductname} type="text" placeholder="Enter Product name" />

            <Row xs={1} md={4} className="g-8" style={{}}>
                {allproducts?.filter((currelem) => currelem?.category === enterproductname || currelem?.name === enterproductname)?.map((index, idx) => (
                    <Col key={idx}>
                        <Card style={{ width: "100%", marginTop: '30px' }}>
                            <Card.Img variant="top" src={index.image} style={{ width: "100%" , height:"300px"}} />
                            <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center' }}>
                                <Card.Title>{index.name}</Card.Title>
                                <Card.Title>{index.price}</Card.Title>
                                <Card.Title>{index.category}</Card.Title>
                            </Card.Body>
                            <Card.Footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center' }}>
                                <Button variant="dark" > <NavLink style={{ color: "white", textDecoration: 'none' }} to={`/singleproduct/${index.id}`}> Buy Now </NavLink></Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default SerachProduct;