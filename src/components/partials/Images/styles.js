import styled from "styled-components";
import BallLogoImg from '../../../assets/images/bola-LogoCompasso1.png'

const BallLogo = styled.div`
    flex: 1;
    background: url(${BallLogoImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left -20px bottom -15px;
`;

export { BallLogo };