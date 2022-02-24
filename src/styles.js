import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 60px;
`;

export const Desc = styled.p`
    font-size: 16px;
`;

export const Log = styled(Title)`
    font-size: 30px;
`;

export const LogBack = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Box = styled.div`
    flex-direction: column;
`;

export const Cont = styled(Box)`
    display: flex;
`;



// div{
//     display: flex;
//     flex-flow: wrap;
// }

// input{
//     max-width: 150px;
//     max-height: 20px;
//     display: flex;
//     padding: 20px 109px;
//     border-radius: 50px;
// }


// button{
//     font-size: 18px;
//     color: #fff;
//     border-color: #c13216;
//     border-radius: 50px;
//     box-shadow: inset 5px 5px 15px #c13216;
//     padding: 20px 150px;
//     background-image: linear-gradient(to right, #FF2D04, #c13216);
//     text-decoration: none;
// }