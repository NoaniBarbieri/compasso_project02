import styled from "styled-components";
import MarkPro from "../../assets/fonts/MarkPro.ttf";
import MarkProBold from "../../assets/fonts/MarkProBold.ttf";

export const Time = styled.div `
    display: flex;
    flex-direction: column;

    @font-face{
        font-family: MarkPro;
        src: url(${MarkPro});
    }
    @font-face{
        font-family: MarkProBold;
        src: url(${MarkProBold});
    }
    
    h1{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 !important;
        padding: 0 !important;
        line-height: 100px;
        font-family: MarkProBold;
        font-style: normal;
        font-size: 144px;
        color: #222222;
    }

    p{
        font-family: MarkPro;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #222222;
    }
`;


