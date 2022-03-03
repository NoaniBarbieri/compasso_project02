import styled from "styled-components";

const TextBlackMission = styled.span`
    color: #222222;
    font-size: clamp(12px,1.5vw,24px);
    text-align: right;
    font-family: MarkPro;
`;

const TextRedMediumMission = styled.span`
    color: #C12D18;
    font-size: clamp(16px,2vw,36px);
    text-align: right;
    font-family: MarkProBold;
`;

const TextRedGreatMission = styled.span`
    color: #C12D18;
    font-size: clamp(20px,3.5vw,64px);
    text-align: right;
    font-family: MarkProBold;
`;

const TextsMissionContainer = styled.div`
    flex: 1.3;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    @media (max-width: 90vh) {
        display: none;
    }
`;

const TextsMission = () => {
    return (
        <TextsMissionContainer>
            <TextRedMediumMission>Our mission is</TextRedMediumMission>
            <TextBlackMission>Nossa missão é</TextBlackMission>

            <TextRedGreatMission>to transform the world</TextRedGreatMission>
            <TextBlackMission>transformar o mundo</TextBlackMission>

            <TextRedGreatMission>building digital experiences</TextRedGreatMission>
            <TextBlackMission>construindo experiências digitais</TextBlackMission>

            <TextRedGreatMission>that enable our client’s growth</TextRedGreatMission>
            <TextBlackMission>que permitam o crescimento dos nossos clientes</TextBlackMission>
        </TextsMissionContainer>
    )
}

export { TextsMission }