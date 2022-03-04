import styled from "styled-components";

/* TimerLogout */
export const TimerLogoutContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 40px;

    span {
        flex: 1;
        font-size: 14px;
        text-align: right;
        padding-left: 24px;
    }
    
    div {
        flex: 1;
        text-align: center;
        margin-left: 14%;

        p {
            font-family: 'Roboto';
            font-size: 48px;
        }
    }

    @media (max-width: 1023px) {
        display: none;
    }
`;

