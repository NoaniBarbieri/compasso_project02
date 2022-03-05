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
            width: 100% ;
            margin-left: 4px;
            margin-right: 4px;
            background-size: 12px;
            font-size: 20px;
        }
    }

`  