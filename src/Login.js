import React from "react";
import LogText from './components/LogText';
import LogInput from './components/LogInput';
import LogButton from './components/LogButton';

function Login() {
    return (
        <div>
            <LogText />
            <LogInput />
            <LogButton />
        </div>
    );
}

export default Login;