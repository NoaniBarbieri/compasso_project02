import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    padding-top: 20px ;
    min-height: 60px;
    max-width: 516px ;
    width: 100%;

    @media (max-width: 1023px) {
        input {
            width: 90%;
            height: 50px;
            background-size: 12px;
            font-size: 20px;
            margin-bottom: 10px;
        }

        button {
            font-size: 20px;
            height: 50px;
            width: 60%;
            text-align: center ;
            display:flex;
            justify-content: center;
            align-items: center ;
        }

    }

`  