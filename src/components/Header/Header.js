import React from "react";
import logo from "../../assets/images/LogoCompasso.png"
import { Nav } from "./Header.style";
import { Div } from "./Header.style";
import { Time } from "./Header.style";
import { Days } from "./Header.style";
import { ClimateStyle } from "./Header.style";
import Clock from "./ClockTime";
import CalendarDate from "./CalendarDate";
import GetClimate from "./GetClimate";

function Header(){
    return (
        <Div>
            <Nav>
                <img src={logo} alt="projectHome"/>
                <Time><Clock/></Time>
            </Nav>
            <Days><CalendarDate/></Days>
            <ClimateStyle><GetClimate/></ClimateStyle>
        </Div>
    )
}

export default Header