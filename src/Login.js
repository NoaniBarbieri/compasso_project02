import React from "react";
import LogPicture from './components/LogPicture';
import LogText from './components/LogText';
import LogButton from './components/LogButton';
import LogUserInvalid from './components/LogUserInvalid';
import LogUserInput from './components/LogUserInput';
import LogPassInput from './components/LogPassInput';
import {Cont, Boxlog, BoxImage, LogBackground} from './styles';

function Login () {
    return (  
        <LogBackground>
            <Boxlog>
                <Cont>
                    <LogText />
                    <LogUserInput/>
                    <LogPassInput/>
                    <LogUserInvalid />
                    <LogButton />
                </Cont>
            </Boxlog>
            <BoxImage>
                <LogPicture/>
            </BoxImage>
        </LogBackground>
    );
}

export default Login ;