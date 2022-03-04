import React from "react";
import { useState } from "react";
import {Time} from "./ClockDate.style";

export const Clock = () =>{

    var day = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta","sábado");
    var month = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");

    var date = new Date();
    var fullDate = ((day[date.getDay()]) + '-feira' + ', ' + date.getDate() + ' de ' + month[date.getMonth()] + ' de ' + date.getFullYear()); 

    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime, 1000)

    return(
        <Time>
            <h1>{ctime.replace(/:\d\d([ ap]|$)/,'$1')}</h1>
            <p>{fullDate}</p>
        </Time>
    )
}

