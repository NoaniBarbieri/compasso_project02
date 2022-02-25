import React from "react";
import logo from "../assets/images/LogoCompasso.png"
import { Nav } from "./Header.style";
import { Time } from "./Header.style";
import { Days } from "./Header.style";
import Clock from "./ClockTime";
import CalendarDate from "./CalendarDate";

function Header(){
    return (
        <div>
            <Nav>
                <img src={logo} alt="projectHome"/>
                <Time><Clock/></Time>
            </Nav>
            <Days><CalendarDate/></Days>
        </div>
    )
}

export default Header