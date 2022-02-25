import React from "react";
import logo from "../assets/images/LogoCompasso.png"
import { Nav } from "./Header.style";


function Header(){
    return (
        <div>
            <Nav>
                <img src={logo} alt="projectHome"/>
            </Nav>
        </div>
    )
}

export default Header