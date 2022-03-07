import styled from "styled-components";

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: #E5E5E5;
`

export const NotFoundText = styled.h1`
    color: #C12D18;
    font-family: 'MarkProBold';
    font-size: 40px;
    text-decoration: none;
    @media (max-width: 500px) {
        font-size: 25px;
    }
`

export const NotFoundTextSmall = styled(NotFoundText)`
    font-size: 30px;
    text-decoration: none;
    margin-top: 10px;
    @media (max-width: 500px) {
        font-size: 20px;
    }
`