import React from 'react';
import {LogInp, LogIcon} from '../styles';

const LogInput = () => {
    const User = (<LogInp type="text" placeholder="Usuário"></LogInp>);
    const Pass = (<LogInp type="password" placeholder="Senha"></LogInp>);
  return (
    <div>
        {User}
        {Pass}
    </div>
  );
}

export default LogInput;