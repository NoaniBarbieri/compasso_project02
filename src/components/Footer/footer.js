import { FooterContainer, FooterArea } from './footer.style';
import { TimerToLogout } from '../TimerLogout';
import { InputSearch } from '../partials/Inputs/search.style'
import { getDevs } from '../../helpers/devsAPI';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {

    const [user, setUser] = useState('');
    const navigate = useNavigate();
    return (
        <FooterContainer>
            <FooterArea>
                <p className={'leftText'}>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
            </FooterArea>

            <FooterArea>
                <InputSearch>
                    <input type={'text'} onChange={e => setUser(e.target.value)} placeholder={'Buscar usuários'} onKeyPress={event => {
                        if (event.key === 'Enter') {
                            if (user) {
                                navigate(('/search'), {userData:user});
                            }
                        }
                    }}></input>
                </InputSearch>
            </FooterArea>

            <FooterArea>
                <TimerToLogout />
            </FooterArea>
        </FooterContainer>
    );
};

export default Footer;