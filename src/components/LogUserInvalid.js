import React, { useEffect, useState } from 'react'
import { LogInvalid } from '../styles';

const LogUserInvalid = (props) => {

  const { errors } = props;
  console.log(errors);

  const [feedbackErrors, setFeedbackErrors] = useState("")

  const allRequireds = "Usuário e senha são campos obrigatórios. "
  const userAllInvalid = "Usuário deve ter exatamente um ponto (separado por letras), não pode conter números e/ou caracteres especiais. "


  const messages = [
    'Nao é permitido numeros e/ou caracteres especiais alem de pronto (.).',
    'Nome de usuário não permite caracteres especiais alem do ponto. ',
    'Ponto deve estar entre nome e sobrenome. ',
    'Usuário deve ter exatamente um ponto (entre nome e sobrenome). '
  ]

  const passwordInvalidMinAndNumber = "Senha deve ter apenas números e pelo menos 6 dígitos."
  const passwordInvalidMaxAndNumber = "Senha deve ter apenas números e no máximo 8 dígitos."

  const getErrorsUser = (errors) => {
    let errorsUser = "";

    if (errors.type == "required") errorsUser = errors.message
    else if(typeof(errors.types.matches) == "string") errorsUser = messages[1]
    else if (Array.isArray(errors.types.matches) && errors.types.matches.length == 4) errorsUser = userAllInvalid
    else if (Array.isArray(errors.types.matches) && errors.types.matches.length == 2) {
      errorsUser = messages[+errors.types.matches.find(message => message != '1')]
    }
    else if (Array.isArray(errors.types.matches) && errors.types.matches.length == 3 && !errors.types.matches.find(message => message == '0')) errorsUser = messages[3] 
    else errorsUser = userAllInvalid
    return errorsUser;
  }

  const getErrorsPassword = (errors) => {
    let errorsPassword = "";
    switch (errors.type) {
      case "required":
        errorsPassword = errors.message
        break
      case "min":
        errorsPassword = errors.types.matches ? passwordInvalidMinAndNumber : errors.message
        break
      case "max":
        errorsPassword = errors.types.matches ? passwordInvalidMaxAndNumber : errors.message
        break
      default:
        errorsPassword = errors.message
        break
    }
    return errorsPassword;
  }


  const adaptFeedbackErros = () => {
    if (errors.password?.type == "required"
      && errors.user?.type == "required") {
      setFeedbackErrors(allRequireds);
      return;
    }

    const errorsPassword = errors.password ? getErrorsPassword(errors.password) : "";
    const errorsUser = errors.user ? getErrorsUser(errors.user) : "";

    setFeedbackErrors(errorsUser + '\n' + errorsPassword)
  }

  useEffect(() => {
    adaptFeedbackErros()
  })

  return (
    <LogInvalid>
      <p>{feedbackErrors}</p>
    </LogInvalid>
  )
}

export default LogUserInvalid