import { React , createContext, useContext, useEffect, useState} from "react";

const productscontext = createContext();
const api = "https://fakestoreapi.com/products/";


const AppProvider =({children})=>
{
   const [featuredproducts, setfeaturedproducts] = useState([]);
   const [allproducts, setallproducts] = useState([]);
   const [singleproductstate , setsingleproductstate] = useState({});
   const [mobileproduct, setmobileproducts] = useState([]);
   const [laptopproduct, setlaptopproducts] = useState([]);
   

   const getproducts= async(url)=>
    {
      
      const res  = await fetch(url);
      const jsonly = await res.json();
      setallproducts(jsonly);
      console.log(jsonly);

      let tempArr = [];
      let filtermobile = [];
      let filterlaptop = [];

      for(let i=0;i < 20; i++)
      {
        if(jsonly[i]?.category === "jewelery")
        {
            tempArr.push(jsonly[i]);
        }
      }

      for(let i=0; i<20; i++)
      {
      
       if(jsonly[i]?.category === "men's clothing")
        {
             filtermobile.push(jsonly[i]);
        }
      }

      for(let i=0; i<20; i++)
      {
      
       if(jsonly[i]?.category === "jewelary")
        {
             filterlaptop.push(jsonly[i]);
        }
      }

      setfeaturedproducts(tempArr);
      setmobileproducts(filtermobile);
      setlaptopproducts(filterlaptop)

    }


    const getsingleproduct = async (url)=>
    {
        const res = await fetch(url);
        const jsonly = await res.json();
        setsingleproductstate(jsonly);
    }

   useEffect(()=>
   {
      getproducts(api);
  
   }, [])


    return (
    <productscontext.Provider value={{featuredproducts,getsingleproduct,singleproductstate, allproducts,mobileproduct, laptopproduct}}>
          {children}
    </productscontext.Provider>
    )
};


// const UseproductsContext =()=>
// {
//    return useContext(productscontext)
// }

export {AppProvider,productscontext};




