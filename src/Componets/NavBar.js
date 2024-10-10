import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar2.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'

const NavBar = () => {

  const obj =
  {
    display: "none"
  }

  const [showmenulist, setshowmenulist] = useState(obj);

  const obj2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "20px"
  }

  const funshowmenulist = () => 
   {
    setshowmenulist(obj2);

    if (showmenulist.display === "flex") 
    {
      setshowmenulist
        ({
          display: "none"
        })
    }

   }

  return (
    <div className="navbardiv">

      <div className="menulist1">
        <div><NavLink to="/home" className="link"> Home  </NavLink> </div>
        <div><NavLink to="/about"  className="link">About</NavLink> </div>
        <div><NavLink to="/products"  className="link">Products</NavLink> </div>
        <div><NavLink to="/contact"  className="link">Contact</NavLink> </div>
        <div><NavLink to="/cart"  className="link"> <BsFillCartFill /> </NavLink> </div>
        <div><NavLink to="/"  className="link"> LogOut </NavLink> </div>

        {/* <div><NavLink to="/adminaddproduct"  className="link"> Admin </NavLink> </div> */}

      </div>


      <div className="menuicon" onClick={funshowmenulist}>
        <AiOutlineMenu />
      </div>

      <div className="menulist2" style={showmenulist}>
        <div onClick={funshowmenulist}><NavLink to="/" className="link">Home</NavLink></div>
        <div onClick={funshowmenulist}><NavLink to="/about" className="link"> About </NavLink> </div>
        <div onClick={funshowmenulist}><NavLink to="/products" className="link">Products</NavLink></div>
        <div onClick={funshowmenulist}><NavLink to="/contact" className="link">Contact</NavLink></div>
        <div onClick={funshowmenulist}><NavLink to="/cart" className="link"> <BsFillCartFill /> </NavLink></div>
        <div onClick={funshowmenulist}><NavLink to="/" className="link"> LogOut </NavLink></div>
      </div>
    </div>
  )
}

export default NavBar;