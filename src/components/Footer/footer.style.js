import styled from "styled-components";
import '../../index.css';

export const FooterContainer = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    max-width: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    font-family: 'MarkPro';
    color: #FFFFFF;
`;

export const FooterArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .leftText {
        font-family: 'MarkPro';
        font-size: 12px;
        text-align: right;
        margin: 0 14px;
    }

    input {
        margin: 0 auto;
        width: 70%;
        height: 45px;
        background: #26292C;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 50px;
        font-family: 'Roboto';
        font-size: 60%;
        line-height: 16px;
        outline: 0;
        text-align: center;
        justify-content: space-between;
        color: #FFFFFF;
        background: url(${require('../../assets/images/Vector.png')});
        background-repeat: no-repeat;
        background-position: 20px 50%;
        padding: 0 20px 0 50px;

        &:focus {
            border: 1px solid #E9B425;
        }

        &::placeholder {
            color: #FFFFFF;
            font-family: 'Roboto';
        }
    }

    @media (max-width: 1023px) {
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;

        .timerArea {
            display: none;
        }

        .footerButtons {
            margin-left: 0;
        }

        ${this}:nth-child(1) {
            display: none;
        } 

        ${this}:nth-child(2) {
            flex: 0.545833;
        }

        input {
            width: 80%;
            background-size: 15px;
            padding: 0 15px 0 40px;
            background-position: 15px 50%;
        }

        ${this}:nth-child(3) {
            flex: 0.454166;
        }
    }

    @media (max-width: 320px) {
        input {
            background-size: 12px;
            padding: 0 20px 0 35px;
            font-size: 7px;
        }
    }
`;

/* Buttons Logout and Refresh */
const ButtonFooterContainer = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    font-size: 12px;
`;

const ButtonSquareFooter = styled.button`
    flex: 1;
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 15px;
    font-family: 'MarkPro';
    border: 0;
    cursor: pointer;
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

export const ButtonsAuth = () => {
    return (
        <ButtonFooterContainer>
            <ButtonResetTimer>Continuar<br />Navegando</ButtonResetTimer>
            <ButtonLogout>Logout</ButtonLogout>
        </ButtonFooterContainer>
    )
}

/* TimerLogout */
const TimerLogoutContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 40px;
    border-left: 3px solid #FFF;

    span {
        flex: 1;
        font-size: 14px;
        text-align: right;
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

export const TimerToLogout = () => {
    return (
        <TimerLogoutContainer>
            <span>Application <br /> refresh in</span>
            <div>
                <p>180</p>
                <span>seconds</span>
            </div>
        </TimerLogoutContainer>
    )
};