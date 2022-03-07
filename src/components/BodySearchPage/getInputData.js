import React from 'react'
import {useState} from "react";

const getInputData = () => {

    const [InputData,setInputData] = useState(null);
    const [SearchData, setSearchData] = useState(false);
    
    return (

        function getInputData(val)
        {
            setInputData(val.target.value)
            setSearchData(false)
        }
  )
}

export default getInputData