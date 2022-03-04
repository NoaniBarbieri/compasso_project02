import styled from "styled-components";

export const Time = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-end;
    
    h1{
        line-height: 70px;
        font-family: MarkProBold;
        font-size: clamp(48px, 48px + 3vw,144px);
        color: #222222;
        font-weight: 100;
        text-align: center;
    }

    p{
        font-family: MarkPro;
        font-size: 14px;
        line-height:18px;
        text-align: center;
        color: #222222;
    }

    @media (max-width: 980px) {
        display: none;
    }
`;


