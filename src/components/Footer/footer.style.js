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
    justify-content: center;
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

        
        ${this}:nth-child(3) {
            flex: 0.454166;
        }
    }

`;
