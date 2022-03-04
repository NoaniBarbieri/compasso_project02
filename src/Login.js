import React from "react";
import LogText from './components/LogText';
import LogButton from './components/LogButton';
import LogUserInvalid from './components/LogUserInvalid';
import LogUserInput from './components/LogUserInput';
import LogPassInput from './components/LogPassInput';
import { Cont, Boxlog, BoxImage, LogBackground, Log, ContainerLogin } from './styles';
import { CompassLogoWhite } from "./components/partials/Images/styles";

function Login() {
    return (
        <LogBackground>
            <Boxlog>
                <Cont>
                    <CompassLogoWhite />
                    <LogText />
                    <ContainerLogin>
                        <Log>Login</Log>
                        <LogUserInput />
                        <LogPassInput />
                        <LogUserInvalid />
                        <LogButton />
                    </ContainerLogin>
                </Cont>
            </Boxlog>
            <BoxImage>
                <CompassLogoWhite />
            </BoxImage>
        </LogBackground>
    );
}

export default Login;