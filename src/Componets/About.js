import React, { useContext } from "react";
import ShareHomeAbout from "./ShareAboutHome";
import { UseproductsContext ,productscontext } from "../Context/contextprovider";
import Headercom from "./Header";
import Footer from "./Footer";
const About =()=>
{
    const name2 = "ASHAB ECOMERENCE";
    
    return (
        <div>
            <div>
                <Headercom/>
            </div>
        <div>
            <ShareHomeAbout data ={name2}/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    )
}

export default About;