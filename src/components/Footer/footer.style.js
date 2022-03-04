import styled from "styled-components";
import '../../index.css';

export const FooterContainer = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    max-width: 100%;
    width: 100%;
    height: 15%;
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
    height: 100%;
    
    ${this}:nth-child(2) {
        border-left: 3px solid #FFF;
        border-right: 3px solid #FFF;
        height: 70%;
    }
    
    .leftText {
        font-family: 'MarkPro';
        font-size: 12px;
        text-align: right;
        margin: 0 14px;
        padding-right: 10px;
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
        font-size: 14px;
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
            border: 0;
            height: 100%;
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
            font-size: 10px;
        }
    }
`;

