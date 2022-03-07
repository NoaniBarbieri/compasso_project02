import React from "react";

/* libs from validate form */
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

/* components */
import LogText from './components/LogText';
import LogButton from './components/LogButton';
import LogUserInvalid from './components/LogUserInvalid';
import LogUserInput from './components/LogUserInput';
import LogPassInput from './components/LogPassInput';
import { Cont, Boxlog, BoxImage, LogBackground, Log, ContainerLogin, LogButtonStyle } from './styles';
import { CompassLogoWhite } from "./components/partials/Images/styles";

function Login() {

    const geral = /^([a-z]+[.])[a-z]+$/i;
    const numeros = /^([^0-9]*)$/;
    const umPonto = /^([^.]*[.][^.]*)$/;
    const pontoEntryChar = /^([^.]+[.][^.]+)$/;

    const passwordReg = /^[0-9]+$/;

    const schema = yup.object({
        user: yup.string()
            .required('Usuário é um campo obrigatório.')
            .lowercase()
            .matches(numeros, '0')
            .matches(geral, '1')
            .matches(pontoEntryChar, '2')
            .matches(umPonto, '3'),

        password: yup.string()
            .required('Senha é um campo obrigatório.')
            .min(6, 'Senha deve ter pelo menos 6 dígitos.')
            .max(8, 'Senha deve ter no máximo 8 dígitos.')
            .matches(passwordReg, 'Senha deve ter apenas números.')
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: "all",
        reValidateMode: "all",
        mode: "all",
        resolver: yupResolver(schema, { abortEarly: false })
    });

    const onSubmit = data => {
        alert("Tudo certo!")
    }

    return (
        <LogBackground>
            <Boxlog>
                <Cont>
                    <CompassLogoWhite />
                    <LogText />
                    <ContainerLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Log>Login</Log>
                            <LogUserInput {...register("user")} />
                            <LogPassInput {...register("password")} />
                            <LogUserInvalid errors={errors} />
                            <LogButtonStyle>Continuar</LogButtonStyle>
                        </form>
                    </ContainerLogin>
                </Cont>
            </Boxlog>
            <BoxImage>
                <CompassLogoWhite />
            </BoxImage>
        </LogBackground>
    );
}

export default Login;