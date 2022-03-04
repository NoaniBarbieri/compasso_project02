import styled from "styled-components";
import BallLogoImg from '../../../assets/images/bola-LogoCompasso1.png'
import CompassLogoWhiteFile from "../../../assets/images/Logo-Compasso-Branco-hor 1.png"

const BallLogoContainer = styled.div`
    flex: 1;
    background: url(${BallLogoImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left -20px bottom -15px;
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

export const BallLogo = () => {
    return (
        <BallLogoContainer src={BallLogoImg} />
    )
}