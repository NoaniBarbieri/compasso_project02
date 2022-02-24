import React from "react";
import {Title, Desc, Log} from '../styles';

const LogText = () => {
    const textTitle = "Olá,";
    const textDescription = "Para continuar navegando de forma segura, efetue o login na rede.";
    const textLogin = "Login";

    return (
        <section>
            <Title>{textTitle}</Title> 
            <Desc>{textDescription}</Desc>
            <Log>{textLogin}</Log>
        </section>
    );
};

export default LogText;