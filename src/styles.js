import { useInRouterContext } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import MarkPro from "./assets/fonts/MarkPro.ttf";
import MarkProBold from "./assets/fonts/MarkProBold.ttf";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *{
        max-width: 100%;
        height: 100%;
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
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    @media (max-height: 667px) {
        height: auto;
  }
`;

export const Boxlog = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 50vw;

    img {
        max-width: 306px;
        max-height: 69px;
    }

    @media (max-height: 667px) {
        height: auto;
  }
`;

export const BoxImage = styled(Boxlog)`
    background: url(${require('./assets/images/background.png')});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 1024px) {
    display: none;
  }
`;

export const Cont = styled(Boxlog)`
    display: flex;
    justify-content: center;
    max-width: 380px;
    min-width: 380px;
    max-height: 685px;

    

    @media (max-width: 420px) {
        max-width: 260px;
        min-width: 260px;
  }
`;

export const LogSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    justify-content: space-between;
`;

export const Title = styled.nav`
    height: 76px;
    margin-bottom: 15px;

    @font-face{
        font-family: MarkPro;
        src: url(${MarkPro})
    }
    color: #E0E0E0;
    font-family: MarkPro, sans-serif;
    font-size: 60px;
`;

export const Desc = styled.p`
    height: 90px;
    display: flex;
    width: 80%;
    margin-bottom: 100px;

    @font-face{
        font-family: MarkPro;
        src: url(${MarkPro});
    }
    color: #E0E0E0;
    font-family: MarkPro, sans-serif;
    font-size: 16px;
`;

export const Log = styled(Title)`
    height: 38px;
    font-size: 30px;
`;

export const InputStyle = styled.input`
    display: flex;

    @font-face{
        font-family: MarkPro;
        src: url(${MarkPro})
    }
    font-family: MarkPro, sans-serif;
    font-size: 16px;
    color: #E0E0E0;

    ::placeholder {
        color: #E0E0E0;
   }

    margin: 32px 0px 32px 0px;
    width: 379px;
    box-sizing: border-box;
    padding: 30px 20px;
    max-height: 20px;

    border: 1px;
    border-style: solid;
    border-color: #E0E0E0;
    border-radius: 50px;

    
`;

export const UserInputStyle = styled(InputStyle)`

    background: url(${require('./assets/images/UserIcon.png')});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: right 20px top 20px;
    margin-top: 20px;
    `;

export const PassInputStyle = styled(InputStyle)`
    background: url(${require('./assets/images/PassIcon.png')});
    background-size: 20px 25.1px;
    background-repeat: no-repeat;
    background-position: right 20px top 17px;
    margin-top: 0;
    `;


export const LogIcon = styled.img`
   padding: 17px 20px 17px 336px;
`;

export const LogButtonStyle = styled.button`
    width: 100%;
    min-height: 67px;
    box-sizing: border-box;
    border: 2px solid;
    border-radius: 50px;
    border-color: #c13216;
    cursor: pointer;

    background-image: linear-gradient(to right, #FF2D04, #c13216);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);

    @font-face{
        font-family: MarkProBold;
        src: url(${MarkProBold})
    }
    font-family: MarkProBold, sans-serif;
    font-size: 18px;
    color: #FFF;

`;

export const LogInvalid = styled.nav`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    visibility: hidden;

    @font-face{
        font-family: MarkProBold;
        src: url(${MarkProBold})
    }

    font-family: MarkProBold, sans-serif;
    font-size: 16px;
    color: #E9B425;
    align-self: center;
    text-align: center;
`;
