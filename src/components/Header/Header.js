import React from "react";
import logo from "../../assets/images/LogoCompasso.png"
import { Nav, ContainerHeader } from "./Header.style";
import { Clock } from "../Clock&Date/ClockDate";
import { Climate } from "../Climate/GetClimate";

function Header() {
    return (
        <ContainerHeader>
            <Nav>
                <img className="logo" src={logo} alt="projectHome" />
                <Clock />
                <Climate />
            </Nav>
        </ContainerHeader>
    )
}

export default Header