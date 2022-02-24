import React from "react";

const LogText = () => {
    const textTitle = "Olá,";
    const textDescription = "Para continuar navegando de forma segura, efetue o login na rede.";
    const textLogin = "Login";

    return (
        <section>
            <h1>{textTitle}</h1> 
            <p>{textDescription}</p>
            <h2>{textLogin}</h2>
        </section>
    );
};

export default LogText;