import styled from "styled-components";
import BallLogoImg from '../../../assets/images/bola-LogoCompasso1.png'
import CompassLogoWhiteFile from "../../../assets/images/Logo-Compasso-Branco-hor 1.png"

const Img = styled.img`
    position: relative;
    top: 7vh;
    max-width: 100%;
    height: 100%;
    flex-shrink: 1;
    display: block;
`;

const CompassLogoWhiteContainer = styled.img`
    width: clamp(100px,65vw,306px);
    max-height: 69px;
    height: auto;
`;

export const CompassLogoWhite = () => {
    return (
        <CompassLogoWhiteContainer src={CompassLogoWhiteFile} />
    )
}

const BallLogo = () => {
    return (
        <Img src={BallLogoImg} />
    )
}

export { BallLogo };