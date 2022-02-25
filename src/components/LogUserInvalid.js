import React from 'react'
import {LogInvalid} from '../styles';

const LogUserInvalid = () => {
  const userInvalid = "Ops, usuário inválido. Tente novamente!"
  const emailInvalid = "Ops, email inválido. Tente novamente!"
  const AllInvalid = "Ops, usuário ou senha inválidos. Tente novamente!"

  return (
    <LogInvalid>{AllInvalid}</LogInvalid>
  )
}

export default LogUserInvalid