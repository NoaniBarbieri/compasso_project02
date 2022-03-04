import { FooterContainer, FooterArea } from './footer.style';
import { TimerToLogout } from '../TimerLogout';
import { ButtonsAuth } from '../partials/Buttons/style';
import { getDevs } from '../../helpers/devsAPI';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterArea>
                <p className={'leftText'}>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
            </FooterArea>

            <FooterArea>
                <input type={'text'} placeholder={'Buscar usuários'} onKeyPress={event => {
                    if (event.key === 'Enter') {
                        getDevs();
                    }
                }}></input>
            </FooterArea>

            <FooterArea>
                    <TimerToLogout />
            </FooterArea>
        </FooterContainer>
    );
};

export default Footer;