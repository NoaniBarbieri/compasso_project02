import styled from "styled-components";

export const InputSearch = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
height: 100%;

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
        background: url(${require('../../../assets/images/Vector.png')});
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
    input {
        width: 80%;
        background-size: 15px;
        padding: 0 15px 0 40px;
        background-position: 15px 50%;
    }
}

@media (max-width: 320px) {
    input {
        background-size: 12px;
        padding: 0 20px 0 35px;
        font-size: 10px;
    }
}

`

export const InputLarge = styled(InputSearch)`
    height: 40%;
    input{
        width: 516px;
        height: 60px;
    }
`