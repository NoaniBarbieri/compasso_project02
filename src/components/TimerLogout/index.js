import React, { useState, useRef, useEffect } from "react";
import { TimerLogoutContainer } from './style';
import { ButtonFooterContainer, ButtonResetTimer, ButtonLogout } from "../partials/Buttons/style";
import { useNavigate } from "react-router-dom";

export const TimerToLogout = () => {
    const [timer, setTimer] = useState(180);
    const id = useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
    }

    const resetTimer = () => {
        setTimer(180);
    }

    const navigate = useNavigate();

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1)
        }, 1000)
        return () => clear();
    }, [])

    useEffect(() => {
        if (timer === 0) {
            window.location.href = "/";
        }

    }, [timer]);

    return (
        <>
            <TimerLogoutContainer>
                <span>Application <br /> refresh in</span>
                <div>
                    <p>{timer}</p>
                    <span>seconds</span>
                </div>
            </TimerLogoutContainer>

            <ButtonFooterContainer>
                <ButtonResetTimer onClick={resetTimer}>Continuar<br />Navegando</ButtonResetTimer>
                <ButtonLogout onClick={() => navigate('/')}>Logout</ButtonLogout>
            </ButtonFooterContainer>
        </>
    )
};
