import styled from "styled-components";
import MarkPro from "../../assets/fonts/MarkPro.ttf";
import MarkProBold from "../../assets/fonts/MarkProBold.ttf";

export const ClimateStyle = styled.div `

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    @font-face{
        font-family: MarkPro;
        src: url(${MarkPro});
    }
    @font-face{
        font-family: MarkProBold;
        src: url(${MarkProBold});
    }

    p{
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #222222;
        font-family: MarkPro;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
        img {
            width: 31px;
            height: 20px;
        }

        h1{
            font-family: MarkProBold;
            font-size: 48px;
            line-height: 61px;
            text-align: center;
            color: #222222;
        }

`;