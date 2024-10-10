import React from "react";
import { useContext } from "react";
import { productscontext } from "../Context/contextprovider";
import './singleproduct.css';
import Singleproductimagesprops from "./Singleproductimagesprops";
import CardGroup from 'react-bootstrap/CardGroup';


const SingleproductImage = () => {
  const { singleproductstate } = useContext(productscontext);

  return (


    <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

      {/* <CardGroup style={{ marginTop: "50px", borderRadius: '30px', justifyContent: 'center', gap: '20px', boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px', padding: "30px" }} >


        {singleproductstate.image?.map(currele =>
          <div key={currele.id}>
            <Singleproductimagesprops id={currele.id} {...currele} />
          </div>
        )}

      </CardGroup> */}
      
    </div>

  )
}

export default SingleproductImage;
