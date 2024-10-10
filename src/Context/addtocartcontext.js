import React, { createContext, useState } from "react";

const Addtocartcontext = createContext();

const Addtocartprovider = ({children})=>
{
 
    const [addtocartarray , setaddtocartarray]= useState([]); 
    // const [quantity, setquantity] = useState(1)
  
    // const addtocartitems =(objcart)=>
    // {
    //     setaddtocartarray((prevCart) => [...prevCart, objcart]);
    // }

    // const quantitydunction =()=>
    // {
    //     setquantity(quantity+1)
    // }

    const addtocartitems = (objcart) => 
    {
        setaddtocartarray((prevCart) => [...prevCart, { ...objcart, quantity: 1 }]);
    };
    
      // const updateQuantity = (productId, newQuantity) => 
      // {
      //   setaddtocartarray((prevCart) =>
      //     prevCart.map((item) =>
      //       item.id === productId ? { ...item , quantity: newQuantity } : item
      //     )
      //   )
      // }
  
                     
    return(

        <Addtocartcontext.Provider value={{addtocartitems , addtocartarray }}> {children} </Addtocartcontext.Provider>
    )
}

export {Addtocartprovider , Addtocartcontext};

