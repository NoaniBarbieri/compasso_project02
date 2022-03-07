import styled, { createGlobalStyle } from 'styled-components';
import MarkPro from "./assets/fonts/MarkPro.ttf";
import MarkProBold from "./assets/fonts/MarkProBold.ttf";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: MarkPro;
        src: url(${MarkPro});
    }

    @font-face {
        font-family: MarkProBold;
        src: url(${MarkProBold});
    }
`;

export const LogBackground = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0%;
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
`;

export const Boxlog = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        display: none;
    }

    @media (max-width: 1024px) {
        img {
            display: block;
        }
    }
`;

export const BoxImage = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    padding-top: 2%;
    background: url(${require('./assets/images/background.png')});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const Cont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 90%;
`;

export const LogSection = styled.section`
    width: clamp(100px,80vw,379px);
`;

export const Title = styled.p`
    font-size: clamp(30px,(6vh+6vw),60px);
    font-family: MarkPro, sans-serif;
    color: #E0E0E0;
`;

export const Desc = styled.span`
    font-size: clamp(14px,(.8vh+.8vw),16px);
    font-family: MarkPro, sans-serif;
    color: #E0E0E0;
`;

export const Log = styled(Title)`
    font-size: clamp(20px,(5vh+5vw),30px);
    width: clamp(100px,80vw,379px);
`;

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputStyle = styled.input`
    display: flex;
    font-family: MarkPro, sans-serif;
    font-size: 16px;
    color: #E0E0E0;

    ::placeholder {
        color: #E0E0E0;
   }

    width: clamp(100px,80vw,379px);
    padding: clamp(7px,3vw,20px) 20px;
    margin: 15px 0;
    border: 1px;
    border-style: solid;
    border-color: #E0E0E0;
    border-radius: 50px;
`;

export const UserInputStyle = styled(InputStyle)`
    background: url(${require('./assets/images/UserIcon.png')});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: right 20px top 50%;
`;

export const PassInputStyle = styled(InputStyle)`
    background: url(${require('./assets/images/PassIcon.png')});
    background-size: 20px 25.1px;
    background-repeat: no-repeat;
    background-position: right 20px top 50%;
`;

export const LogIcon = styled.img`
   padding: 17px 20px 17px 336px;
`;

export const LogButtonStyle = styled.button`
    width: clamp(100px,80vw,379px);
    padding: clamp(7px,3vw,20px) 20px;
    margin-top: 15px;
    border: 2px solid;
    border-radius: 50px;
    border-color: #c13216;
    cursor: pointer;
    background-image: linear-gradient(to right, #FF2D04, #c13216);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    font-family: MarkProBold, sans-serif;
    font-size: 18px;
    color: #FFF;
`;

export const LogInvalid = styled.div`
    width: clamp(100px,80vw,379px);
    white-space: pre-line;
    height: 70px;
    padding: 0 25px;
    margin-top: 15px;
    p {
        font-family: 'MarkPro';
        font-size: clamp(11px,3.5vw,16px);
        text-align: center;
        color: #E9B425;
    }
`;
