import React from "react";
import { LogBackground, Cont  } from "./styles"
import { CompassLogoWhite } from "./components/partials/Images/styles"
import { InputLarge } from './components/partials/Inputs/search.style'
import { InputAPI } from './components/BodySearchPage/InputAPI';
import { SearchButtonStyle, OutButtonStyle, DivButtons } from './components/partials/Buttons/style'
import { getDevs } from './helpers/devsAPI'


const SearchPage = () => {

    return (
        <LogBackground style={{ flexDirection: "column" }}>
            <Cont>
                <CompassLogoWhite />

                {/* api feedback area */}
                <div>
                
                </div>

                {/* input area and buttons */}
                <div>
                    <InputLarge>{InputAPI()}</InputLarge>
                    <DivButtons>
                        <SearchButtonStyle type="submit" onClick={getDevs}>Buscar</SearchButtonStyle>
                        <OutButtonStyle type="button">Sair</OutButtonStyle>
                    </DivButtons>
                </div>
            </Cont>
        </LogBackground>
    )
}

export default SearchPage;