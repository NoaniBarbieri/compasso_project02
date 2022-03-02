import React,{useState, useEffect} from "react"
import axios from "axios"
import { ClimateStyle } from "../Header/Header.style";
import Nuvem from "../../assets/images/Nuvem.png"

export const Climate = () => {

    const [database, setDatabase] = useState({
        city: "",
        temp: "",
    });

    function getClimate (){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=-28.2628&lon=-52.4067&units=metric&APPID=52f592c34ccda232d98128280512d784`)
        .then(response => {
            setDatabase({
                city: "Passo Fundo - RS",
                temp: `${response.data.main.temp.toFixed(0)}°`,
            });
        })
        .catch(error => console.log(error))
    };
    useEffect(() => {
        getClimate();
    }, []);
    return (
        <ClimateStyle>
           <p>{database ? database.city : ""}</p>
            <div>
                <img src={Nuvem}/>
                <span>{database ? database.temp : "" }</span>
            </div>        
        </ClimateStyle>
    )
}
   