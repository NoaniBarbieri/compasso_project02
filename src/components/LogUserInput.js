import React from 'react';
import {UserInputStyle} from '../styles';

const LogUserInput = () => {
    const User = (<UserInputStyle type="text" placeholder="Usuário"></UserInputStyle>);
  return (
    <div>
        {User}
    </div>
  );
}

export default LogUserInput;