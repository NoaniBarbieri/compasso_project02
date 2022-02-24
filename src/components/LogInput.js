import React from 'react';

const LogInput = () => {
    const User = (<input type="text" placeholder="Usuário"></input>);
    const Pass = (<input type="text" placeholder="Senha"></input>);
  return (
    <div>
        {User}
        {Pass}
    </div>
  );
}

export default LogInput;