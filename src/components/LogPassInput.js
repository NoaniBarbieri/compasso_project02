import React from 'react';
import {PassInputStyle} from '../styles';

const LogPassInput = () => {
    const Pass = (<PassInputStyle type="password" placeholder="Senha"></PassInputStyle>);
  return (
    <div>
        {Pass}
    </div>
  );
}

export default LogPassInput;