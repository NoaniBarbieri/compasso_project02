import React from "react";
import logo from "../../assets/images/LogoCompasso.png"
import { Nav } from "./Header.style";
import { Clock } from "../Clock&Date/ClockDate";
import { GetClimate } from "../Climate/GetClimate";

function Header(){
    return (
        <Nav>
            <img src={logo} alt="projectHome"/>
            <Clock/>
            <GetClimate/>
        </Nav>
    )
}

export default Header