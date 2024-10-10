import React, { useContext, useEffect, useState, createContext } from "react";
import { productscontext } from "../Context/contextprovider";
import { useParams } from "react-router-dom";
import './singleproduct.css';
import { FaSteam } from "react-icons/fa";
import { ImImages } from "react-icons/im";
import { SiFsecure } from "react-icons/si";
import { SiPowerapps } from "react-icons/si";
import SingleproductImage from "./singleproductimages";
import Button from 'react-bootstrap/Button';
import { Addtocartcontext } from "../Context/addtocartcontext";
import { Firebasecontextceom } from './FirebaseEcom';
import Headercom from "./Header";
import Footer from "./Footer";

const api = "https://fakestoreapi.com/products/";

// const Addtocartcontext = createContext();

const SingleProduct = () => {

   const { id } = useParams();
   const { getsingleproduct, singleproductstate } = useContext(productscontext)
   const {addtocartitems,   addtocartarray, quantity, quantitydunction} = useContext(Addtocartcontext);
   const firebaseusecontextecom  = useContext(Firebasecontextceom);

   
   // `${api}?id=${id}`
   useEffect(() => {
      getsingleproduct(`https://fakestoreapi.com/products/${id}`);

   }, [])


   const addtocartfunction= ()=>
   { 
      addtocartitems(singleproductstate);
      alert('Item Add To Successfully')
   }


                      
   return (
      <div>

<div>
   <Headercom/>
   </div>
      <div className="" style={{ marginTop: "0px" , display: 'flex' , flexDirection: 'column' , gap: '40px', flexWrap: 'wrap' }}>

         <div className="">
            <SingleproductImage />
         </div>

         <div className="" style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            <div className="" style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
               <img src={singleproductstate.image} width={'30%'}/>
               <h2>{singleproductstate.title}</h2>
               <p>{singleproductstate.stars}</p>
               <h4>{singleproductstate.reviews}45 reviews</h4>
               <del>MRP 6000</del>
               <p>Deal of the Day Rs {singleproductstate.price}</p>
               <p className="container">{singleproductstate.description}</p>
            </div>

            <div className="singleproducticons" style={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }} >
               <div className="singleproducticons1" style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', backgroundColor: "black", padding: '17px', color: 'white', borderRadius: '20px' }}>
                  <p><FaSteam size={30} /></p>
                  <p>Fast Delevery</p>
               </div>
               <div className="singleproducticons2" style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', backgroundColor: "black", padding: '17px', color: 'white', borderRadius: '20px' }}>
                  <p><SiFsecure size={30} /></p>
                  <p>Secure Service</p>
               </div>

               <div className="singleproducticons3" style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', backgroundColor: "black", padding: '17px', color: 'white', borderRadius: '20px' }}>
                  <p><ImImages size={30} /></p>
                  <p>3D-Images</p>
               </div>

               <div className="singleproducticons4" style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', backgroundColor: "black", padding: '17px', color: 'white', borderRadius: '20px' }}>
                  <p><SiPowerapps size={30} /></p>
                  <p>PowerFul Company</p>
               </div>

            </div>

            <div style={{ marginTop: '40px' }}>

               {/* <input onChange={changequantity} type="number" value={singleproductquantity}  placeholder="enter quanttiy" /> */}

               <Button onClick={addtocartfunction} variant="dark" style={{ backgroundColor: 'black', width: "160px", height: '50px' }}>  Add To Cart </Button>

               {/* <h1>{singleaddtocart?.price}</h1> */}
               {/* <Button onClick={changequantityfun}> qunatity</Button>
               <p>Quantity: {singleproductstate.quantity}</p> */}
               {/* <button  onClick={orderfunction}>order now</button> */}

            </div> 
         </div>

      </div>
      <div>
         <Footer/>
      </div>
      </div>
   )


}

export default SingleProduct;

// ciseco