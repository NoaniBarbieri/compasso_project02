import React from "react";
import {Title, Desc, Log, LogSection} from '../styles';

const LogText = () => {
    const textTitle = "Olá,";
    const textDescription = "Para continuar navegando de forma segura, efetue o login na rede.";
    const textLogin = "Login";

    return (
        <LogSection>
            <Title>{textTitle}</Title> 
            <Desc>{textDescription}</Desc>
            <Log>{textLogin}</Log>
        </LogSection>
    );
};

export default LogText;