import styled from "styled-components";

const TextBlackMission = styled.span`
    color: #222222;
    font-size: 24px;  
    line-height: 30px;
    text-align: right;
    font-family: MarkPro;
`;

const TextRedMediumMission = styled.span`
    color: #C12D18;
    font-size: 36px;
    line-height: 46px;
    text-align: right;
    font-family: MarkProBold;
`;

const TextRedGreatMission = styled.span`
    color: #C12D18;
    font-size: 64px;
    line-height: 81px;
    text-align: right;
    padding-left: 50px;
    font-family: MarkProBold;
`;

const TextsMissionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    @media (max-width: 1024px) {
        display: none;
    }
`;