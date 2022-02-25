import { FooterContainer, FooterArea } from './footer.style';
import { getDevs } from '../../helpers/devsAPI'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterArea>
                <p className={'leftText'}>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
                <span className={'bar'}></span>
            </FooterArea>

            <FooterArea>
                  
                <input type={'text'} placeholder={'Buscar usuários'} onKeyPress={event => {
                    if (event.key === 'Enter') {
                        getDevs();
                    }
                }}></input>
                <span className={'bar'}></span>

            </FooterArea>

            <FooterArea>
                <div className={'logoutArea'}>

                    <div className={'timerArea'}>
                        <p className={'refresh'}>Application <br /> refresh in</p>
                        <div className={'timer'}><span>180</span> <br />seconds</div>
                    </div>

                    <div className={'footerButtons'}>
                        <div className={'continue'}>Continuar<br /> Navegando</div>
                        <div className={'logout'}>Logout</div>
                    </div>

                </div>

            </FooterArea>
        </FooterContainer>
    );
};

export default Footer;