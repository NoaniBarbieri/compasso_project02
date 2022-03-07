import React from "react"
import { ContainerFeedbackUserSearch } from "./style"

export const FeedBackSearchUser = (props) => {

    const { userData } = props

    return (
        <ContainerFeedbackUserSearch>
            {
                !userData ?
                    <p>{
                        `O usuário buscado não existe,${'\n'} por favor tente novamente!`
                    }
                    </p>
                    :
                    <p>{`            
                        Nome: ${userData.name} ${'\n'}
                        DC: ${userData.dc} ${'\n'}
                        Inovatioon Istudio: ${userData.istudio} ${'\n'}
                        Idade: ${userData.age} ${'\n'}
                        Cargo: ${userData.position}
                    `}
                    </p>
            }
        </ContainerFeedbackUserSearch>
    )
}