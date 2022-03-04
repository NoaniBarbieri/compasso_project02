import React from "react";
import {Title, Desc, LogSection} from '../styles';

const LogText = () => {
    const textTitle = "Olá,";

    return (
        <LogSection>
            <Title>{textTitle}</Title> 
            <Desc>Para continuar navegando de forma<br />segura, efetue o login na rede.</Desc>
        </LogSection>
    );
};

export default LogText;