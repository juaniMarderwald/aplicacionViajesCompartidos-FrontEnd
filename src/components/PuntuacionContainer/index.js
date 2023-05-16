import React, { Fragment } from 'react'
import { RiStarFill } from "react-icons/ri";
import { PuntContainer } from './style';

export const PuntuacionContainer = () => {
    return (
        <PuntContainer>
            <RiStarFill color='#FCED30'/>
            <p> 5.0 </p>
        </PuntContainer>
    )
}