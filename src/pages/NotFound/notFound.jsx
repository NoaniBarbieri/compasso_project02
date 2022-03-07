import React from "react";
import { NotFoundContainer, NotFoundText, NotFoundTextSmall } from "./notFound.style";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <NotFoundContainer>
                <NotFoundText>Página não encontrada!</NotFoundText>
                <Link to="/" style={{ textDecoration: 'none' }}><NotFoundTextSmall>Voltar para o Login</NotFoundTextSmall></Link>
            </NotFoundContainer>
        </div >
    );
}

export default NotFound;