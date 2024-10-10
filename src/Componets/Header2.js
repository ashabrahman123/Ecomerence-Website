import React from "react";
import { NavLink } from "react-router-dom";
import NavBar2 from "./Navbar2";
import './Header2.css'
import logopic from './logo4.png'

const Headercom2 = () => {
    return (
        <div className="headerdiv">
            <div>
                <NavLink to="">
                    <div className="headerimg"><img src={logopic} /> </div>
                </NavLink>
            </div>
            <div><NavBar2 /></div>
        </div>
    )
}

export default Headercom2;