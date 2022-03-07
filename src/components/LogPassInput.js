import React from 'react';
import {PassInputStyle} from '../styles';

const LogPassInput = React.forwardRef((props, ref) => {
    return (
        <PassInputStyle type="password" ref={ref} {...props} placeholder="Senha"></PassInputStyle>
    );
})

export default LogPassInput;