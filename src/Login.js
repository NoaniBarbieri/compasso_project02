import React from "react";
import LogPicture from './components/LogPicture';
import LogText from './components/LogText';
import LogInput from './components/LogInput';
import LogButton from './components/LogButton';
import LogUserInvalid from './components/LogUserInvalid';
import {Cont, Boxlog, BoxImage, LogBackground} from './styles';

function Login () {
    return (  
        <LogBackground>
            <Boxlog>
                <Cont>
                    <LogText />
                    <LogInput />
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