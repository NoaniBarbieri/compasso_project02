import { useInRouterContext } from 'react-router-dom';
import styled,{createGlobalStyle} from 'styled-components';
import MarkPro from './assets/fonts/MarkPro.ttf'
import MarkProBold from './assets/fonts/MarkProBold.ttf'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        height: 100%;
        justify-content:center;
    }
`;

export const LogBackground = styled.div`
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    display: flex;
    width: 100%;
    height: 100%;
`;

export const Boxlog = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    align-self: center;
    align-items: center;
`;

export const BoxImage = styled(Boxlog)`
    
    //object-fit: cover;
`;

export const Cont = styled(Boxlog)`
    //display: flex;
    justify-content: center;
    width: 379px;
    height: 685px;
`;

export const LogSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    height: 320px;
    justify-content: flex-start;
    justify-content: space-between;
`;

export const Title = styled.nav` //se concertado a fonte troque para styled.h1
    height: 76px;
    width: 100%;
    padding-bottom: 17px;

    @font-face{
        font-family: MarkPro;
        src: url(${MarkPro})
    }
    color: white;
    font-family: MarkPro, sans-serif;
    font-size: 60px;
`;

export const Desc = styled.p`
    height: 50px;
    display: flex;
    width: 80%;
    padding-bottom: 135px;

    @font-face{
        font-family: MarkPro;
        src: url(${MarkPro})
    }
    color: white;
    font-family: MarkPro, sans-serif;
    font-size: 16px;
`;

export const Log = styled(Title)`
    width: 100%;
    height: 40px;
    font-size: 30px;
`;

export const InputStyle = styled.input`
    display: flex;
    background: none;

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

    margin: 17px 0px 32px 0px;
    padding: 18px 205px 18px 20px;
    max-width: 150px;
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
    background-position: 95% 50%;
    `;

export const PassInputStyle = styled(InputStyle)`
    background: url(${require('./assets/images/PassIcon.png')});
    background-size: 20px 25.1px;
    background-repeat: no-repeat;
    background-position: 95% 50%;
    `;


export const LogIcon = styled.img`
   padding: 17px 20px 17px 336px;
`;

export const LogBut = styled.button`
    display: flex;
    width: 379px;
    max-height: 67px;
    padding: 20px 143px;

    border: 2px solid;
    border-radius: 50px;
    border-color: #c13216;

    box-shadow: inset 5px 5px 15px #c13216;
    background-image: linear-gradient(to right, #FF2D04, #c13216);

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
    margin-bottom: 47px;
    width: 250px;
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


export const LogImg = styled.img`
    max-width: 960px;
    max-height: 1080px;
    //object-fit: cover;
`;
