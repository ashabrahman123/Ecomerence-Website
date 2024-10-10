import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import './Header.css'
import logopic from './logo4.png'

const Headercom = () => {
    return (
        <div className="headerdiv">
            <div>
                <NavLink to="/">
                    <div className="headerimg"><img src={logopic} /> </div>
                </NavLink>
            </div>
            <div><NavBar /></div>
        </div>
    )
}

export default Headercom;