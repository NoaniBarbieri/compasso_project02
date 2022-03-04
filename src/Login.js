import React from "react";
import LogText from './components/Login/LogText';
import LogButton from './components/Login/LogButton';
import LogUserInvalid from './components/Login/LogUserInvalid';
import LogUserInput from './components/Login/LogUserInput';
import LogPassInput from './components/Login/LogPassInput';
import {Cont, Boxlog, BoxImage, LogBackground} from './components/Login/styles';

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
            <BoxImage />
        </LogBackground>
    );
}

export default Login ;