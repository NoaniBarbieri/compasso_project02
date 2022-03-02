import React from "react";
import logo from "../../assets/images/LogoCompasso.png"
import { Nav } from "./Header.style";
import { Days } from "./Header.style";
import { ClimateStyle } from "./Header.style";
import { Clock } from "../Clock&Date/ClockDate";
import CalendarDate from "./CalendarDate";
import GetClimate from "./GetClimate";

function Header(){
    return (
        <Nav>
            <img src={logo} alt="projectHome"/>
            <Clock/>
            <Days><CalendarDate/></Days>
            <ClimateStyle><GetClimate/></ClimateStyle>
        </Nav>
    )
}

export default Header