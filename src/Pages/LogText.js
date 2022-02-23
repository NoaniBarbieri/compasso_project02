import React from "react";

const Text = () => {
    const textTitle = "Olá,";
    const textDescription = "Para continuar navegando de forma segura, efetue o login na rede.";

    return (
        <section>
            <h1>{textTitle}</h1> 
            <p>{textDescription}</p>
        </section>
    );
};

export default Text;