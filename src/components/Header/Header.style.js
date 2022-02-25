import styled from "styled-components";
import MarkProBold from "../../assets/fonts/MarkProBold.ttf";
import MarkPro from "../../assets/fonts/MarkPro.ttf";

export const Div = styled.div `
    background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
    margin: 0px;
    width: 100%;
`

export const Nav = styled.div`
    width: 150px;
    height: 40px;
    padding-left: 40px;
    padding-top: 25px;
`;


export const Time = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 327px;
    height: 146px;
    margin-top: -65px;
    margin-left: 875px;
    @font-face{
        font-family: MarkProBold;
        src: url(${MarkProBold});
    }
        
    font-family:  MarkProBold, sans-serif;
    font-style: normal;
    font-size: 5.8em;
    line-height: 10px;
    text-align: center;
    color: #222222;
`;



export const Days = styled.p `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 90px;
    margin-left: 849px;
    margin-top: 20px;
    @font-face{
        font-family: Mark-Pro;
        src: url(${MarkPro});
    }
        
    font-family:  Mark-Pro, sans-serif;
    font-style: normal;
    font-size: 8px;
    line-height: 7px;
    text-align: center;
    color: #222222;
`;




export const ClimateStyle = styled.p `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 119px;
    height: 18px;
    margin-left: 1760px;
    margin-top: -100px;
    
    @font-face{
        font-family: MarkPro;
        src: url(${MarkPro});
    }
    font-family: MarkPro, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #222222;
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 61px;
        margin-left: 44px;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 61px;
        color: #222222;
    }
`;