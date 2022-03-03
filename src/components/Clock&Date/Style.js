import styled from "styled-components";

export const Time = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-end;
    
    h1{
        line-height: 70px;
        font-family: MarkProBold;
        font-size: clamp(40px,12vh,144px);
        color: #222222;
        font-weight: 100;
        text-align: center;
    }

    p{
        font-family: MarkPro;
        font-size: clamp(12px,6vh,14px);
        line-height: 18px;
        text-align: center;
        color: #222222;
    }

    @media (max-width: 1023px) {
        display: none;
    }
`;


