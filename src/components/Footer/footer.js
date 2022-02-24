import { FooterContainer, FooterArea } from './footer.style';
import { getDevs } from '../../helpers/devsAPI'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterArea>
                <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
                <span></span>
            </FooterArea>

            <FooterArea>
                <input type={'text'} placeholder={'Buscar usuários'} onKeyPress={event => {
                    if (event.key === 'Enter') {
                        getDevs();
                    }
                }}></input>
                <span></span>
            </FooterArea>

            <FooterArea>3</FooterArea>
        </FooterContainer>
    );
};

export default Footer;