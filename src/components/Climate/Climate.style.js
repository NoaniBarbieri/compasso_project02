import styled from "styled-components";

export const ClimateStyle = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p{
        font-size: 14px;
        text-align: center;
        color: #222222;
        font-family: MarkPro;
        
    }

    div{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        
    }
        img {
            width: 31px;
            height: 20px;
            margin-right: 20px;
        }

        h1{
            font-family: MarkProBold;
            font-size: 38px;
            text-align: center;
            color: #222222;
        }

        @media (max-width: 400px) {
            p {
                font-size: 12px;
            }

            h1 {
                font-size: 30px;
            }
        }
`;