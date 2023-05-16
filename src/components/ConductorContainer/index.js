import React, { Fragment } from 'react'
import { PuntuacionContainer } from '../PuntuacionContainer'

export const ConductorContainer = ({
    datosConductor
}) => {
    const conductor = {
        username:`${datosConductor?.username}`,
        puntuacion:`${datosConductor?.puntuacion}`,
    }

    return (
        <Fragment>
            <div>{ `Maneja: ${conductor?.username}`}</div> {/* Imagen y nombre */}
            <PuntuacionContainer />
        </Fragment>
    )
}