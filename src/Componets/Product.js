import React, { useContext, useState } from "react";
import { productscontext } from "../Context/contextprovider";
import './Allproducts.css';
import LowtoHighPriceProduct from "./LowtoHigtPrice";
import Allproducts from "./AllProducts";
import SerachProduct from "./Serachproduct";
import Hightilowproductprice from "./Hightolowproducts";
import AtoZsort from "./AtoZsort";
import { BsSearchHeartFill } from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import Admingetproduct from "./Admingetproduct";
import ZtoAsort from "./ZtoAsort";
import Headercom from "./Header";
import Footer from "./Footer";
import { Providers } from "./Usersignin";

const Product = () => {

  // const {email} = useContext(Providers)

  const { allproducts, mobileproduct } = useContext(productscontext);
  const [showmobileproduct, setshowmobileproduct] = useState(false);
  const [lowtohighshowproduct, setlowtohighshowproduct] = useState(false);
  const [hihgtolowshowproduct, sethightolowshowproduct] = useState(false);
  const [AtoZshowproduct, setAtoZshowproduct] = useState(false)
  const [ZtoAshowproduct, setZtoAshowproduct] = useState(false)

  const [showallproducts, setshowallproducts] = useState(true);
  const [searchproducts, setsearchproducts] = useState(false)

  const showallproductfunction = () => {
    setshowmobileproduct(false);
    setshowallproducts(true);
    setlowtohighshowproduct(false);
    sethightolowshowproduct(false)
    setAtoZshowproduct(false)
    setsearchproducts(false)
    setZtoAshowproduct(false)
  }

  const showAtoZproductfunction = () => {
    setshowmobileproduct(false);
    setshowallproducts(false);
    setlowtohighshowproduct(false);
    sethightolowshowproduct(false)
    setAtoZshowproduct(true);
    setsearchproducts(false)
    setZtoAshowproduct(false)
  }

  const showZtoAproductfunction = () => {
    setshowmobileproduct(false);
    setshowallproducts(false);
    setlowtohighshowproduct(false);
    sethightolowshowproduct(false)
    setAtoZshowproduct(false);
    setsearchproducts(false)
    setZtoAshowproduct(true)
  }

  const showmobileproductfunction = () => {
    setshowmobileproduct(true);
    setshowallproducts(false);
    setlowtohighshowproduct(false);
    sethightolowshowproduct(false)
    setAtoZshowproduct(false)
    setsearchproducts(false)
    setZtoAshowproduct(false)
  }

  const lowtohighshowproductfunction = () => {
    setshowmobileproduct(false);
    setshowallproducts(false);
    setlowtohighshowproduct(true);
    sethightolowshowproduct(false)
    setAtoZshowproduct(false)
    setsearchproducts(false)
    setZtoAshowproduct(false)
  }

  const hightolowshowproductfunction = () => {
    setshowmobileproduct(false);
    setshowallproducts(false);
    setlowtohighshowproduct(false);
    sethightolowshowproduct(true)
    setAtoZshowproduct(false);
    setsearchproducts(false);
    setZtoAshowproduct(false)

  }

  const Searchproductfunction = () => {
    setsearchproducts(true);
    setshowmobileproduct(false);
    setshowallproducts(false);
    setlowtohighshowproduct(false);
    sethightolowshowproduct(false)
    setAtoZshowproduct(false);
    setZtoAshowproduct(false)
  }

  const [selectedValue, setSelectedValue] = useState('');

  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedValue(selectedOption);


    switch (selectedOption) {
      case 'Allproduct':
        showallproductfunction();
      case 'option1':
        showAtoZproductfunction();
        break;
      case 'option2':
        showZtoAproductfunction();
        break;
      case 'option3':
        lowtohighshowproductfunction();
        break;
      case 'option4':
        hightolowshowproductfunction()
      default:
        // Do nothing or handle a default case if needed
        break;
    }
  };


  return (
    <div>

      <div>
   <Headercom/>
      </div>

    <div className="container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', flexWrap: 'wrap', gap: "20px", padding: "30px" }} >
      <div className="" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

        <div>
          <h4>Sort  </h4>
          <select value={selectedValue} onChange={handleOptionChange}>
            <option value="Allproduct">All </option>
            <option value="option1">A to Z</option>
            <option value="option2">Z to A</option>
            <option value="option3">Low to high</option>
            <option value="option4">High to low</option>
          </select>
        </div>
        <div>
          <Button variant="dark" onClick={Searchproductfunction}> SerachProduct 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp;	&nbsp;  	&nbsp;	&nbsp;	&nbsp; <BsSearchHeartFill size={30} /></Button>
          {searchproducts && <SerachProduct />}
        </div>

      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', gap: '12px' }}>

        {showallproducts && <Admingetproduct />}
        {lowtohighshowproduct && <LowtoHighPriceProduct />}
        {hihgtolowshowproduct && <Hightilowproductprice />}
        {AtoZshowproduct && <AtoZsort />}
        {ZtoAshowproduct && <ZtoAsort />}

      </div>

    </div>

    <div>
  <Footer/>
    </div>

    </div>
  )
}

export default Product
