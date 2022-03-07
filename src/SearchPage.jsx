import React, { useState } from "react";
import { LogBackground, Cont } from "./styles"
import { CompassLogoWhite } from "./components/partials/Images/styles"
import { InputLarge } from './components/partials/Inputs/search.style'
import { InputAPI } from './components/BodySearchPage/InputAPI';
import { SearchButtonStyle, OutButtonStyle, DivButtons } from './components/partials/Buttons/style'
import { getDevs } from './helpers/devsAPI'
import { SearchContainer, APIContainer } from './components/BodySearchPage/SearchPage.style'
import { FeedBackSearchUser } from "./components/FeedBackSearchUser";
import { useNavigate } from 'react-router-dom';


const SearchPage = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [firstAcess, setFirstAcess] = useState(false)
    const [userData, setUserData] = useState(null)

    const getUser = () => {
        if (!user) return

        getDevs().then(res => {
            let userSearch = res.data.developers.filter(element =>
                element.name.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "").startsWith(user.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, ""))
            );
            setUserData(userSearch[0])
            if(!firstAcess) setFirstAcess(true)
        })
    }

    return (
        <LogBackground style={{ flexDirection: "column" }}>
            <Cont>
                <CompassLogoWhite />
                <APIContainer>
                    {
                        firstAcess ? <FeedBackSearchUser userData={userData} /> : null
                    }
                </APIContainer>
                <SearchContainer>
                    <InputLarge type="text" onChange={text => setUser(text.target.value)} onKeyPress={event => {
                        if (event.key === 'Enter') {
                            getUser()
                        }
                    }}>{InputAPI()}</InputLarge>
                    <DivButtons>
                        <SearchButtonStyle type="submit" onClick={getUser}>Buscar</SearchButtonStyle>
                        <OutButtonStyle type="button" onClick={() => Navigate ('/')}>Sair</OutButtonStyle>
                    </DivButtons>
                </SearchContainer>
            </Cont>
        </LogBackground>
    )
}

export default SearchPage;