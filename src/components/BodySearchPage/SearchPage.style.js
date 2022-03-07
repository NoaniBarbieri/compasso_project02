import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    padding-top: 20px ;
    min-height: 60px;
    max-width: 516px ;
    width: 100%;
    flex: 2;

    @media (max-width: 1023px) {
        input {
            width: 90%;
            height: 50px;
            background-size: 12px;
            font-size: 20px;
            margin-bottom: 8px;
        }

        button {
            font-size: 20px;
            height: 50px;
            width: 60%;
            text-align: center ;
            display:flex;
            justify-content: center;
            align-items: center ;
            margin-bottom: 5px;
        }

    }

`  

export const APIContainer = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: center ;
    flex-direction: column ;
    margin-top: 20px ;
    max-height: 560px;
    max-width:  611px ;
    height: 200px;

    p{
        width: 100%;
        height: 65%;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
    }

    @media (max-width: 1023px) {

        p{
            width: 80%;
            height:  280px;
            font-size: 20px;
            margin-bottom: 10px;
        }
    }

    
    
`