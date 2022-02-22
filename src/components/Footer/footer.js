import { FooterContainer, FooterArea } from './footer.style';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterArea>
                <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
                <span></span>
            </FooterArea>
            <FooterArea>2</FooterArea>
            <FooterArea>3</FooterArea>
        </FooterContainer>
    );
};

export default Footer;