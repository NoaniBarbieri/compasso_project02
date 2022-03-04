import styled from "styled-components";

export const ContainerHeader = styled.div`
    background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
    display: flex;
    width: 100%;
    height: 15%;
    position: fixed;
    top: 0;
    padding: 0 3%;
    background-color: pink;

    @media (max-width: 1023px) {

        align-items: center;

        nav {
            height: fit-content;
        }
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: auto;
    padding-top: 10px;

    @media (max-width: 400px) {
        p {
            font-size: 12px;
        }

        h1 {
            font-size: 30px;
        }

        .logo {
            width: 130px;
            height: auto;
        }
    }

`;


