import styled from "styled-components";
import BallLogoImg from '../../../assets/images/bola-LogoCompasso1.png'

const Img = styled.img`
    position: relative;
    top: 7vh;
    max-width: 100%;
    height: 100%;
    flex-shrink: 1;
    display: block;
`;

const BallLogo = () => {
    return (
        <Img src={BallLogoImg} />
    )
}

export { BallLogo };