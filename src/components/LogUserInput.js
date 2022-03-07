import React from 'react';
import {UserInputStyle} from '../styles';

const LogUserInput = React.forwardRef((props, ref) => {
    return (
        <UserInputStyle type="text" ref={ref} {...props} placeholder="Usuário" />
    );
})

export default LogUserInput;