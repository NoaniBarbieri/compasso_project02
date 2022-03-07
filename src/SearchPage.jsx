import React from "react";
import { LogBackground, Cont  } from "./styles"
import { CompassLogoWhite } from "./components/partials/Images/styles"
import { InputLarge } from './components/partials/Inputs/search.style'
import { InputAPI } from './components/BodySearchPage/InputAPI';
import { SearchButtonStyle, OutButtonStyle, DivButtons } from './components/partials/Buttons/style'
import { getDevs } from './helpers/devsAPI'
import { SearchContainer}  from './components/BodySearchPage/SearchPage.style'



import {useState} from "react";



const SearchPage = () => {



    const [InputData,setInputData] = useState(null);
    const [SearchData, setSearchData] = useState(false);
    function getInputData(val)
    {
        setInputData(val.target.value)
        setSearchData(false)
    }


    return (
        <LogBackground style={{ flexDirection: "column" }}>
            <Cont>
                <CompassLogoWhite />

                {SearchData? <h1>{InputData}</h1> : null}{/* api feedback area */}

                <div>
                
                </div>

                {/* input area and buttons */}
                <SearchContainer>
                    <InputLarge type = "text" onChange = {getInputData}>{InputAPI()}</InputLarge>
                    <DivButtons>
                        {/* <SearchButtonStyle type="submit" onClick={getDevs}>Buscar</SearchButtonStyle> */}
                        <SearchButtonStyle type="submit" onClick={()=>setSearchData(true)}>Buscar</SearchButtonStyle>
                        <OutButtonStyle type="button">Sair</OutButtonStyle>
                    </DivButtons>
                </SearchContainer>
            </Cont>
        </LogBackground>
    )
}

export default SearchPage;