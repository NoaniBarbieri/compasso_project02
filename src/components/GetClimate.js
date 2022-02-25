import React,{useState, useEffect} from "react"
import axios from "axios"

export default function GetClimate(){

    const [database, setDatabase] = useState({
        city: "",
        temp: "",
    });

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=-28.2628&lon=-52.4067&units=metric&APPID=911036015a1002a362301b560e7c61c0`)
        .then(response => {
            setDatabase({
                city: "Passo Fundo - RS",
                temp: `${response.data.main.temp.toFixed(0)}°`,
            });
        })
        .catch(error => console.log(error))
    });
    return (
        <>
            <div>
                <p>{database ? database.city : ""}</p>
                <span>{database ? database.temp : "" }</span>
            </div>        
        </>
    )
}
   