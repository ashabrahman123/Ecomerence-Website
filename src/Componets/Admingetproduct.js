import React, { useContext, useState, useEffect } from "react";
import Allproducts from "./AllProducts";
import { Firebasecontextceom } from "./FirebaseEcom";
import CardGroup from 'react-bootstrap/CardGroup';
import { productscontext } from "../Context/contextprovider";
import './Allproducts.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import Headercom from "./Header";
import Footer from "./Footer";

const Admingetproduct = () => {

  const firebaseusecontext = useContext(Firebasecontextceom);
  const [databseitems, setdatabaseitems] = useState([]);
  const { allproducts } = useContext(productscontext);

  // useEffect(() => {

  //     firebaseusecontext.getlistingofitems().then((item) => setdatabaseitems(item.docs));

  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use async/await to wait for the promise to resolve
        const itemsSnapshot = await firebaseusecontext.getlistingofitems();
        // Extract the data from the snapshot
        const itemsData = itemsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Set the state with the retrieved data
        setdatabaseitems(itemsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [firebaseusecontext]);


  return (
    <div>
      {/* <div>
        <Headercom />
      </div> */}


      <div>
        <Row xs={1} md={4} className="g-8" style={{}}>
          {allproducts.map((index, idx) => (
            <Col key={idx}>
              <Card style={{ width: "100%", marginTop: '30px' }}>
                <Card.Img variant="top" src={index.image} style={{ width: "100%", height: '300px' }} />
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center' }}>
                  <Card.Title>{index.name}</Card.Title>
                  <Card.Title>Rs. {index.price}</Card.Title>
                  <Card.Title>{index.category}</Card.Title>
                </Card.Body>
                <Card.Footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center' }}>
                  <Button variant="dark" > <NavLink style={{ color: "white", textDecoration: 'none' }} to={`/singleproduct/${index.id}`}> Buy Now </NavLink></Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>



        <Row xs={1} md={4} className="g-8" style={{}}>

          {databseitems.map(indexx =>
            <Col key={indexx}>
              <div key={indexx.id}>
                <Allproducts id={indexx.id}  {...indexx} />
              </div>
            </Col>
          )}

        </Row>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  )
}

export default Admingetproduct;