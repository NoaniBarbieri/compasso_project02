import React from "react";
import { useState } from "react";

const Clock = () =>{

    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime, 1000)

    return(
        <>
            {ctime.replace(/:\d\d([ ap]|$)/,'$1')}
        </>
    )
}

export default Clock