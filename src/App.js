import Home from "./Componets/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Componets/contact";
import Product from "./Componets/Product";
import Cart from "./Componets/cart";
import SingleProduct from "./Componets/singleproduct";
import Headercom from "./Componets/Header";
import About from "./Componets/About";
import Footer from "./Componets/Footer";
import AddDataForm from "./Componets/Adminaddproduct";
import Admingetproduct from "./Componets/Admingetproduct";
import Usersignup from "./Componets/Usersignup";
import {Usersignin} from "./Componets/Usersignin";

function App() {



  return (
    <div>

      <BrowserRouter>
        {/* <Headercom /> */}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/adminaddproduct" element={<AddDataForm />} />
          <Route path="/admingetproduct" element={<Admingetproduct />} />
          <Route path="/" element={<Usersignup />} />
          <Route path="/usersignin" element={<Usersignin/>} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>

      

    </div>
  );
}

export default App;
