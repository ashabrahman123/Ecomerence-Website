import React, { useContext } from "react";
import { productscontext } from "../Context/contextprovider";
import './Allproducts.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";

const ZtoAsort = () => {
    const { allproducts } = useContext(productscontext);

    allproducts.sort(function (a, b) {
        var nameA = a.category ? a.category.toLowerCase() : ''; // Check if name is defined
        var nameB = b.category ? b.category.toLowerCase() : ''; // Check if name is defined

        if (nameA > nameB) return -1; // Reverse the order of comparison
        if (nameA < nameB) return 1;  // Reverse the order of comparison
        return 0;
    })

    return (
        <div>
            <Row xs={1} md={4} className="g-8" style={{}}>
                {allproducts.map((index, idx) => (
                    <Col key={idx}>
                        <Card style={{ width: "100%", marginTop: '30px' }}>
                            <Card.Img variant="top" src={index.image} style={{ width: "100%" , height:'300px'}} />
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

export default ZtoAsort;
