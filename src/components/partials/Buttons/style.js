import styled from "styled-components";

/* Buttons Logout and Refresh */
export const ButtonFooterContainer = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    font-size: 12px;
`;

export const ButtonSquareFooter = styled.button`
    flex: 1;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-family: 'MarkPro';
    border: 0;
    cursor: pointer;

    @media (max-width: 320px) {
        font-size: 10px;
    }
`;

export const ButtonResetTimer = styled(ButtonSquareFooter)`
    background-color: #FFFFFF;
    color: #C13216;
`;

export const ButtonLogout = styled(ButtonSquareFooter)`
    font-family: 'Roboto';
    font-weight: bold;
    background-color: transparent;
    color: #FFF;
`;