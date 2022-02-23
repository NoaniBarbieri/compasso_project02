import styled from "styled-components";
import '../../index.css';


export const FooterContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    position: absolute;
    width: 100vw;
    height: 100px;
    left: 0px;
    bottom: 0px;
    color: #FFFFFF;
`;

export const FooterArea = styled.div`


    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-family: 'Mark Pro';
        font-size: 12px;
        text-align: right;
        margin: 0 14px;
    }

    span {
        width: 61px;
        overflow: hidden;
        height: 0px;
        border: 1px solid #FFFFFF;
        transform: rotate(90deg);
        background: #FFFFFF;
    }

    input {
        width: 453px;
        height: 45px;
        background: #26292C;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 50px;
        margin: 0 135px;
        font-family: 'Roboto';
        font-size: 14px;
        line-height: 16px;
        outline: 0;
        text-align: center;
        color: #FFFFFF;
        background: url(${require('../../assets/images/Vector.png')});
        background-repeat: no-repeat;
        background-position: 5% 50%;

        &:focus {
            border: 1px solid #E9B425;
        }

        &::placeholder {
            color: #FFFFFF;
            font-family: 'Roboto';
        }
    }
`;