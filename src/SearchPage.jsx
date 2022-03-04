import React from "react";
import { LogBackground, Cont  } from "./styles"
import { CompassLogoWhite } from "./components/partials/Images/styles"
import { InputSearch } from './components/partials/Inputs/search.style'
import { getDevs } from './helpers/devsAPI';
import { SearchButtonStyle, OutButtonStyle, DivButtons } from './components/partials/Buttons/style'


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
                    <InputSearch>
                        <input type={'text'} onKeyPress={event => {
                            if (event.key === 'Enter') {
                                getDevs();
                            }
                        }}></input>
                    </InputSearch>
                    <DivButtons>
                        <SearchButtonStyle type="submit">Buscar</SearchButtonStyle>
                        <OutButtonStyle type="button">Sair</OutButtonStyle>
                    </DivButtons>
                </div>
            </Cont>
        </LogBackground>
    )
}

export default SearchPage;