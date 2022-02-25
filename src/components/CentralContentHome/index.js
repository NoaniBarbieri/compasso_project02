import React from 'react'
import { TextsMission } from '../partials/Texts/styles'
import { CentralContent } from './styles'
import { BallLogo } from '../partials/Images/styles'

const CentralContentHome = () => {
    return (
        <CentralContent>
            <BallLogo />
            <TextsMission />
        </CentralContent>
    )
}

export default CentralContentHome;