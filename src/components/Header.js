import React from "react";
import logo from "../assets/images/LogoCompasso.png"
import { Nav } from "./Header.style";
import { Time } from "./Header.style";
import Clock from "./ClockTime";

function Header(){
    return (
        <div>
            <Nav>
                <img src={logo} alt="projectHome"/>
                <Time><Clock/></Time>
            </Nav>
        </div>
    )
}

export default Header