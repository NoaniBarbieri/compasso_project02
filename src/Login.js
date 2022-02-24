import React from "react";
import LogPicture from './components/LogPicture';
import LogText from './components/LogText';
import LogInput from './components/LogInput';
import LogButton from './components/LogButton';
import {Cont, Box, LogBack} from './styles';

function Login() {
    return (       
        <LogBack>
            <Box>
                <LogText />
                <LogInput />
                <LogButton />
            </Box>
            <Box>
                <LogPicture/>
            </Box>
        </LogBack>
    );
}

export default Login;