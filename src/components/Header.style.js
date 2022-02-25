import styled from "styled-components";
import MarkProBold from "../assets/fonts/MarkProBold.ttf";
import MarkPro from "../assets/fonts/MarkPro.ttf";

export const Nav = styled.div`
    margin: 20px 0 20px 40px;
    width: 150px;
    height: 40px;
`;


export const Time = styled.h1`
display: flex;
justify-content: center;
align-items: center;
width: 327px;
height: 146px;
margin-top: -65px;
margin-left: 460px;

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
