import React, { useContext, useState, useEffect } from 'react'
import { Addtocartcontext } from "../Context/addtocartcontext";
import { Firebasecontextceom } from './FirebaseEcom';
import { productscontext } from "../Context/contextprovider";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cart.css'
import Button from 'react-bootstrap/Button';
import Headercom from './Header';
import Footer from './Footer';

const Cart = () => {

  const { singleaddtocart, addtocartarray, quantity } = useContext(Addtocartcontext);

  const [Showheadingbar, setshowheadingbar] = useState(false);
  const firebaseusecontextecom = useContext(Firebasecontextceom);
  const [showadressboard, setshowaddressboard] = useState(false);

  const [customername, setcustomername] = useState('');
  const [customeremail, setcustomeremail] = useState('');
  const [customeraddress, setcustomeraddress] = useState('')
  const [customercountry, setcustomercountry] = useState('')
  const [customercity, setcustomercity] = useState('')
  const [customerpincode, setcustomerpincode] = useState('')

  const changecustomername = (e) => {
    setcustomername(e.target.value)
  }

  const changecustomeremail = (e) => {
    setcustomeremail(e.target.value)
  }

  const changecustomeraddress = (e) => {
    setcustomeraddress(e.target.value)
  }

  const changecustomercountry = (e) => {
    setcustomercountry(e.target.value)
  }

  const changecustomercity = (e) => {
    setcustomercity(e.target.value)
  }

  const changecustomerpincode = (e) => {
    setcustomerpincode(e.target.value)
  }


  const totalPrice = addtocartarray.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  useEffect(() => {
    addtocartarray.length > 0 ? setshowheadingbar(true) : setshowheadingbar(false);
  }, []);



  const orderfunction = async (e) => {
    try {
      for (let i = 0; i < addtocartarray.length; i++) {
        e.preventDefault();

        await firebaseusecontextecom.Placeorder(
          addtocartarray[i]?.id,
          addtocartarray[i]?.title,
          addtocartarray[i]?.price,
          addtocartarray[i]?.category,
          customername,
          customeremail,
          customeraddress,
          customercountry,
          customercity,
          customerpincode
        )

      }

      setcustomername('');
      setcustomeremail('');
      setcustomeraddress('');
      setcustomercountry('');
      setcustomercity('');
      setcustomerpincode('');
      alert("Listing added successfully");

    }
    catch {
      console.log('Error adding orders:')
    }
  };


  const showaddressboardfunction = () => {
    setshowaddressboard(true)
  }


  const shippingfee = 2000;
  const tax = 1000;
  const total = shippingfee + tax + totalPrice;
  console.log(addtocartarray);



  return (

    <div>

      <div>
        <Headercom/>
      </div>


    <div className='container' style={{ marginTop: '40px' }}>

   
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {Showheadingbar && <Container >
          <Row style={{ display: 'flex', flexDirection: 'row', gap: '10px', paddingBottom: "20px", paddingTop: '20px', border: "2px solid black" }}>
            <Col><b>Img</b> </Col>
            <Col><b>Name</b></Col>
            <Col><b>Category</b> </Col>
            <Col><b>Price</b> </Col>
          </Row>
        </Container>}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {addtocartarray?.map((ele) => {
            return (

              // <div>
              <Container key={ele?.id} style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: "18px", border: "2px solid black" }}>

                <Row>
                  <Col><img className='cartimg' src={ele?.image} /> </Col>
                  <Col><b>{ele.title}</b></Col>
                  <Col>{ele.category} </Col>
                  <Col><b>{ele.price}</b> </Col>
                </Row>
              </Container>

              // </div>

            )
          })}

        </div>
      </div>
      {Showheadingbar && <hr style={{ height: '3px', width: '100%', color: 'black', backgroundColor: "black" }}></hr>}


      {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center" , flexWrap: "wrap" , flex:'1' , gap:'40px'}}> */}
      {/* <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}> */}

      {Showheadingbar && <div className='billtotal' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', }}>
          <Container style={{}}>
            <Row style={{ display: 'flex', flexDirection: 'row', gap: '90px' }}>
              <Col>Subtotal </Col>
              <Col><b>{totalPrice}</b></Col>
            </Row>
          </Container>

          <Container style={{}}>
            <Row style={{ display: 'flex', flexDirection: 'row', gap: '90px' }}>
              <Col>Shipping Fee </Col>
              <Col><b>{shippingfee}</b> </Col>
            </Row>
          </Container>

          <Container style={{}}>
            <Row style={{ display: 'flex', flexDirection: 'row', gap: '90px' }}>
              <Col>Tax </Col>
              <Col><b>{tax}</b> </Col>
            </Row>
          </Container>

          <Container style={{}}>
            <Row style={{ display: 'flex', flexDirection: 'row', gap: '90px' }}>
              <Col>Total </Col>
              <Col><b>{total}</b> </Col>
            </Row>
          </Container>

          <div>
            <Row style={{ display: 'flex', flexDirection: 'row', gap: '90px' }}>
              <Col></Col>
              <Col><Button onClick={showaddressboardfunction} style={{ width: "130px" }} variant="dark" > Ordr Now.</Button> </Col>
            </Row>
          </div>
        </div>
      </div>}
      {/* </div> */}

      {/* </div> */}
      {showadressboard && <hr style={{ height: '3px', width: '100%', color: 'black', backgroundColor: "black" }}></hr>}

      {showadressboard && <div className='adreess' >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", marginTop: '50px' }}>
          <h2>Address Details</h2>
          {/* <input style={{ width: '100%', height: "50px" }} type='text' placeholder='Enter name' /> */}
          <form>

            <div className="group" style={{ marginTop: '30px' }}>
              <input type="text" onChange={changecustomername} value={customername} />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Name</label>
            </div>

            <div className="group">
              <input type="text" onChange={changecustomeremail} value={customeremail} />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email</label>
            </div>

            <div class="group">
              <input type="text" onChange={changecustomeraddress} value={customeraddress} />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Adress</label>
            </div>

            <div class="group">
              <input type="text" onChange={changecustomercountry} value={customercountry} />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Country</label>
            </div>

            <div class="group">
              <input type="text" onChange={changecustomercity} value={customercity} />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>City</label>
            </div>

            <div class="group">
              <input type="text" onChange={changecustomerpincode} value={customerpincode} />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>PinCode</label>
            </div>
            <Button onClick={orderfunction} style={{ width: "280px" }} variant="dark" > Confirm your Order Now.</Button>
          </form>
        </div>
      </div>}


    </div>
    <div>
      <Footer/>
    </div>
    </div>

  )
}

export default Cart;