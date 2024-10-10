import React from "react";
import ShareHomeAbout from "./ShareAboutHome";
import Services from "./Services";
import Trusted from "./Trusted";
import FeaturedProducts from "./Featuredproducts";
import Headercom from "./Header";
import Footer from "./Footer";

const Home = ()=>
{
    const name = "ASHAB STORE";

    // const api = "https://api.pujakaitem.com/api/products";
  
    // const res  = axios.get(api);
    // const pro = res.data
    // console.log(pro)
   
    
    return(
        <div>
            <div>
                <Headercom/>
            </div>
        <div>
            <ShareHomeAbout data = {name}/>
            <FeaturedProducts/>
            <Services/>
            <Trusted/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    )
}

export default Home;