import styled,{createGlobalStyle} from 'styled-components';
import MarkPro from './assets/fonts/MarkPro.ttf'
import MarkProBold from './assets/fonts/MarkProBold.ttf'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
`;

export const LogBackground = styled.div`
    display: flex;
    max-width: 1920;
`;

export const Boxlog = styled.div`
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    display: flex;
    flex-direction: column;
    height: 1080px;
    width: 960px;
    align-self: center;
    align-items: center;
`;

export const BoxImage = styled(Boxlog)`
    width: 960px;
    height: 1080px;
    object-fit: cover;
`;

export const Cont = styled(Boxlog)`
    display: flex;
    justify-content: center;
    width: 380px;
`;

export const LogSection = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

export const Title = styled.nav` //se concertado a fonte troque para styled.h1
    align-self: flex-start;
    width: 100%;

    @font-face{
        font-family: MarkPro;
        src: url(${MarkPro})
    }
    color: white;
    font-family: MarkPro, sans-serif;
    font-size: 60px;
`;

export const Desc = styled.p`
    display: flex;
    width: 300px;
    padding-bottom: 100px;

    @font-face{
        font-family: MarkPro;
        src: url(${MarkPro})
    }
    color: white;
    font-family: MarkPro, sans-serif;
    font-size: 16px;
`;

export const Log = styled(Title)`
    font-size: 30px;
`;
export const LogInp = styled.input`
    display: flex;
    margin: 32px 0px 32px 0px;
    padding: 20px 205px 20px 20px;
    max-width: 150px;
    max-height: 20px;
    background: none;

    border: 1px;
    border-style: solid;
    border-color: #fff;
    border-radius: 50px;
`;

export const LogIcon = styled.img`
   padding: 17px 20px 17px 336px;
`;

export const LogBut = styled.button`
    width: 379px;
    border-color: #c13216;
    max-height: 67px;
    padding: 20px 150px;
    border: solid;
    border-radius: 50px;
    font-size: 18px;
    color: #fff;
    border-color: #c13216;
    box-shadow: inset 5px 5px 15px #c13216;
    background-image: linear-gradient(to right, #FF2D04, #c13216);
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
    width: 960px;
    height: 1080px;
    object-fit: cover;
`;
